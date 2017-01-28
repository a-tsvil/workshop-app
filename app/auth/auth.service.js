export default class AuthService {

  constructor($q, $timeout) {
    this.$q = $q;
    this.$timeout = $timeout;
    this.isLoggedIn = false;
  }
  doLogin(creds) {
    return this.$q((resolve, reject) => {
      this.$timeout(() => {
        if (creds.login == validCreds.login && creds.password == validCreds.password) {
          this.isLoggedIn = true;
          resolve('Logged in');
        } else {
          this.isLoggedIn = true;
          reject('Failure');
        }
      }, 1000);
    });
  }
}

AuthService.$inject = ['$q', '$timeout'];

const validCreds = {
  login: 'ales',
  password: '123'
};
