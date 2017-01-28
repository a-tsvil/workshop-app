class AppController {
  constructor($location, AuthService) {
    this.location = $location;
    this.auth = AuthService;

    if (!this.auth.isLoggedIn) {
      this.location.url('/auth');
    }
  }
}

AppController.$inject = [ '$location', 'AuthService' ];

const appComponent = {
  controller: AppController,
  template: `
    <div>
      <header></header>
      <div ng-view></div>
      <footer></footer>
    </div>
  `
};

export default appComponent;
