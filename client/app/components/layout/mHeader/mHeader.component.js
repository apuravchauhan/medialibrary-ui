import controller from './mHeader.controller';


let mHeaderComponent = {
  restrict: 'E',
  bindings: {},
  templateUrl:'/public/partials/layout/mHeader/mHeader.html',

  controller,
  controllerAs: 'header'
};

export default mHeaderComponent;
