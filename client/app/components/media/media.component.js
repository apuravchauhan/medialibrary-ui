import controller from './media.controller';

let mediaComponent = {
  restrict: 'E',
  bindings: {},
  templateUrl:'/public/partials/media/media.html',

  controller,
  controllerAs: 'vm'
};

export default mediaComponent;
