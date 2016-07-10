'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';
import serve    from 'browser-sync';
import webpackDevMiddelware from 'webpack-dev-middleware';
import webpachHotMiddelware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import historyApiFallback   from 'connect-history-api-fallback';
import preprocess from 'gulp-preprocess';

let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
    return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
    return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
    styl: resolveToApp('**/*.styl'), // stylesheets
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    entry: path.join(__dirname, root, 'app/app.js'),
    output: root,
    blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpacki', (cb) => {
    const config = require('./webpack.dist.config');
    let env = gutil.env.env ? gutil.env.env : 'prod';
    let context = {};
    context[env] = true;
    gulp.src(['client/app/common/propertyToProcess.js'])
        .pipe(preprocess({context}))
        .pipe(rename('properties.js'))
        .pipe(gulp.dest('client/app/common/'))
    config.entry.app = paths.entry;

    webpack(config, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            colors: colorsSupported,
            chunks: false,
            errorDetails: true
        }));
        cb();
    });
});

gulp.task('serve', () => {
    const config = require('./webpack.dev.config');
    let env = gutil.env.env ? gutil.env.env : 'dev';
    let context = {};
    context[env] = true;
    gulp.src(['client/app/common/propertyToProcess.js'])
        .pipe(preprocess({context}))
        .pipe(rename('properties.js'))
        .pipe(gulp.dest('client/app/common/'))
    config.entry.app = [
        // this modules required to make HRM working
        // it responsible for all this webpack magic
        'webpack-hot-middleware/client?reload=true',
        // application entry point
        paths.entry
    ];

    var compiler = webpack(config);

    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {baseDir: root},
        middleware: [
            historyApiFallback(),
            webpackDevMiddelware(compiler, {
                stats: {
                    colors: colorsSupported,
                    chunks: false,
                    modules: false
                },
                publicPath: config.output.publicPath
            }),
            webpachHotMiddelware(compiler)
        ]
    });
});

gulp.task('watch', ['serve']);

gulp.task('component', () => {
    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    const name = yargs.argv.name;
    const parentPath = yargs.argv.parent || '';
    const destPath = path.join(resolveToComponents(), parentPath, name);

    return gulp.src(paths.blankTemplates)
        .pipe(template({
            name: name,
            upCaseName: cap(name)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});

var filesToMove = [
    'client/public/**'
];

gulp.task('copy-public', function () {
    gulp.src(filesToMove, {base: 'client/public/'})
        .pipe(gulp.dest('dist/public'));
});

var bundleFilesToMove = [
    'dist/app.bundle.js',
    'dist/app.bundle.js.map',
    'dist/vendor.bundle.js',
    'dist/vendor.bundle.js.map'
];

gulp.task('copy-bundle', function () {
    gulp.src(bundleFilesToMove, {base: 'dist/'})
        .pipe(gulp.dest('dist/public'));
});

gulp.task('webpack', ['webpacki'], ()=> {
    gulp.src(filesToMove, {base: 'client/public/'})
        .pipe(gulp.dest('dist/public'));

    gulp.src(bundleFilesToMove, {base: 'dist/'})
        .pipe(gulp.dest('dist/public'));
});

gulp.task('default', ['serve']);
