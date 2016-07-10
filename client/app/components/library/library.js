import angular from 'angular';
import uiRouter from 'angular-ui-router';
import libraryComponent from './library.component';
import libraryService from './library.service'


let libraryModule = angular.module('library', [
  uiRouter
])
    .config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('LIBRARY', {
          url: '/library',
          template: '<library></library>'
        });
    })

    .service('libraryService', libraryService)
.component('library', libraryComponent);

export default libraryModule;
