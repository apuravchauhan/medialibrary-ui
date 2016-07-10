import controller from './mNavbar.controller';

let mNavbarComponent = {
  restrict: 'E',
  bindings: {},
  templateUrl:'/public/partials/layout/mNavbar/mNavbar.html',

  controller,
  controllerAs: 'vm'
  
};

export default mNavbarComponent;
