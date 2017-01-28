import tpl from './auth.component.html';

class AuthController {
  constructor($location, AuthService, $log) {
    this.location = $location;
    this.auth = AuthService;
    this.$log = $log;

    this.showError = false;
    this.errorMsg = '';

    this.creds = {
      login: '',
      passowrd: ''
    };
  }

  doLogin() {
    this.auth.doLogin(this.creds)
      .then(data => {
        this.$log.log(data);
        this.location.url('/todo-list');
      })
      .catch(msg => {
        this.showError = true;
        this.errorMsg = msg;
      });
  }
}

AuthController.$inject = [ '$location', 'AuthService', '$log' ];

const auth = {
  template: tpl,
  controller: AuthController,
  controllerAs: 'vm'
}

export default auth;
