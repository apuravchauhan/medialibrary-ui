import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mHeaderComponent from './mHeader.component';
import notification from './notification/notification';


let mHeaderModule = angular.module('mHeader', [
    uiRouter,
    notification.name
])

    .component('mHeader', mHeaderComponent);

export default mHeaderModule;