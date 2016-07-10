import $ from './common/jqueryModule';
import bootstrap from 'bootstrap';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import UserService from './common/Userservice';
import interceptorService from './app.service';
import properties from './common/properties';
import theme from '../../vendor/theme/app';

angular.module('app', [
    uiRouter,
    //Common.name,
    Components.name
])

    .service('myInterceptorService', interceptorService)

    .config(($locationProvider, $httpProvider, $compileProvider) => {
        "ngInject";
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
        //pass cross origin cookie
        $httpProvider.defaults.withCredentials = true;
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|blob|ftp|mailto|c‌​hrome-extension|data):/);

        $httpProvider.interceptors.push('myInterceptorService');
    })

    .constant('config', properties)

    .service('userService', UserService)

    .run(($rootScope, userService, $state) => {
        "ngInject";
        $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => {
            $rootScope.$broadcast('stateChanged', toState.name);
        })
    })

    .component('app', AppComponent)
