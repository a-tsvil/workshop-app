import {
  module
} from 'angular';
import ngRoute from 'angular-route';

import header from './header/header.component';
import appComponent from './app.component';
import footer from './footer/footer.component';
import todoList from './todo-list/todo-list.component';
import auth from './auth/auth.component';

import AuthService from './auth/auth.service';

import TodoList from './todo-list/todo-list.model';

import { routes, values } from './config';

export default module('todo-app', [ ngRoute ])
  .config(routes).config(values)
  .component('header', header)
  .component('appComponent', appComponent)
  .component('footer', footer)
  .component('todoList', todoList)
  .component('auth', auth)

  .service('AuthService', AuthService)

  .factory('TodoList', TodoList)
  .name;
