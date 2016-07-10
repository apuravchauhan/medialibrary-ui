import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mFooterComponent from './mFooter.component';

let mFooterModule = angular.module('mFooter', [
  uiRouter
])

.component('mFooter', mFooterComponent);

export default mFooterModule;
