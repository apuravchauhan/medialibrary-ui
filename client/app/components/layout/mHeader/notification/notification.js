import angular from 'angular';
import uiRouter from 'angular-ui-router';
import notificationComponent from './notification.component';
import notificationService from './notification.service';

let notificationModule = angular.module('notification', [
    uiRouter
])
    .component('notification', notificationComponent)
    .service('notificationService', notificationService);

export default notificationModule;
