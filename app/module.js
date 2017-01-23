import {
  module
} from 'angular';

import appComponent from './app.component';
import headerComponent from './header/header.component';

export default module('photogramm', [])
  .component('appComponent', appComponent)
  .component('header', headerComponent)
  .name;
