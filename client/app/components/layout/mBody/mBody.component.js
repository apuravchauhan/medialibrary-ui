import controller from './mBody.controller';


let mBodyComponent = {
  restrict: 'E',
  bindings: {},
  templateUrl:'/public/partials/layout/mBody/mBody.html',

  controller,
  controllerAs: 'vm'
};

export default mBodyComponent;
