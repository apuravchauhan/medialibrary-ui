import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mNavbarComponent from './mNavbar.component';

let mNavbarModule = angular.module('mNavbar', [
  uiRouter
])

.component('mNavbar', mNavbarComponent);

export default mNavbarModule;
