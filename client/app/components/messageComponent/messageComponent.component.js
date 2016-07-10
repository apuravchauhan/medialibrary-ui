import controller from './messageComponent.controller';
import './messageComponent.styl';

let messageComponentComponent = {
  restrict: 'E',
  bindings: {},
  templateUrl:'/public/partials/messageComponent/messageComponent.html',

  controller,
  controllerAs: 'vm'
};

export default messageComponentComponent;
