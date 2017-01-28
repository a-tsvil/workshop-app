import {
  module
} from 'angular';
import ngRoute from 'angular-route';

import appComponent from './app.component';
import headerComponent from './header/header.component';
import someComponent from './some-component/some.component';

import { config, values } from './config';

export default module('todo-app', [ ngRoute ])
  .config(config).config(values)
  .component('appComponent', appComponent)
  .component('header', headerComponent)
  .component('someComponent', someComponent)
  .name;
