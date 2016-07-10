import controller from './notification.controller';
import './notification.styl';

let notificationComponent = {
  restrict: 'E',
  bindings: {},
  templateUrl:'/public/partials/layout/pgmisHeader/notification/notification.html',

  controller,
  controllerAs: 'notification',
  replace: true
};

export default notificationComponent;
