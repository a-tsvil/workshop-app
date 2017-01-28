export default class AuthService {

  constructor($q, $timeout) {
    this.$q = $q;
    this.$timeout = $timeout;
  }
  doLogin(creds) {
    return this.$q(function(resolve, reject) {
      this.$timeout(function() {
        if (creds.login == validCreds.login && creds.password == validCreds.password) {
          resolve('Logged in');
        } else {
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
