import angular from 'angular';
import Layout from './layout/layout';
import media from './media/media';
import library from './library/library';
import messageComponent from './messageComponent/messageComponent'

let componentModule = angular.module('app.components', [
    Layout.name,
    media.name,
    library.name,
    messageComponent.name
]);

export default componentModule;
