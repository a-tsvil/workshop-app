import tpl from './auth.component.html';

class AuthController {
  constructor(AuthService) {
    this.Auth = AuthService;
  }
}

AuthController.$inject = [ 'AuthService' ];

const authComponent = {
  template: tpl,
  controller: AuthController,
  controllerAs: 'vm'
}

export default authComponent;
