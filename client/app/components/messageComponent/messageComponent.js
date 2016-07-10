import angular from 'angular';
import uiRouter from 'angular-ui-router';
import messageComponentComponent from './messageComponent.component';

let messageComponentModule = angular.module('messageComponent', [
  uiRouter
])

.component('messageComponent', messageComponentComponent);

export default messageComponentModule;
