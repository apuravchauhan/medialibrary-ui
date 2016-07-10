import angular from 'angular';
import Header from './mHeader/mHeader';
import Navbar from './mNavbar/mNavbar';
import Leftbar from './mLeftbar/mLeftbar';
import Body from './mBody/mBody';
import Rightbar from './mRightbar/mRightbar';
import Footer from './mFooter/mFooter';



let layoutComponentModule = angular.module('app.components.layout', [
  Header.name,
  Navbar.name,
  Leftbar.name,
  Body.name,
  Rightbar.name,
  Footer.name
]);
export default layoutComponentModule;