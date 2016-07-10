import controller from './library.controller';

let libraryComponent = {
  restrict: 'E',
  bindings: {},
  templateUrl:'/public/partials/library/library.html',
  controller,
  controllerAs: 'vm'
};

export default libraryComponent;
