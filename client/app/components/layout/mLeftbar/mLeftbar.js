import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mLeftbarComponent from './mLeftbar.component';

let mLeftbarModule = angular.module('mLeftbar', [
  uiRouter
])

.component('mLeftbar', mLeftbarComponent);

export default mLeftbarModule;
