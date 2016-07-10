import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mRightbarComponent from './mRightbar.component';

let mRightbarModule = angular.module('mRightbar', [
  uiRouter
])

.component('mRightbar', mRightbarComponent);

export default mRightbarModule;
