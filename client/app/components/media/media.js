import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mediaComponent from './media.component';
import mediaService from './media.service';

let mediaModule = angular.module('media', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $urlRouterProvider.otherwise('/media');
  $stateProvider
    .state('ADDMEDIA', {
      url: '/media',
      template: '<media></media>'
    });
})
.component('media', mediaComponent)
.service('mediaService',mediaService);

export default mediaModule;
