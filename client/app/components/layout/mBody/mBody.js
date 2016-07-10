import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mBodyComponent from './mBody.component';

let mBodyModule = angular.module('mBody', [
  uiRouter
])

.component('mBody', mBodyComponent);

export default mBodyModule;
