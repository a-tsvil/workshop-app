config.$inject = ['$routeProvider', '$locationProvider'];

export function config($routeProvider, $locationProvider) {
  $routeProvider
    .when(
      '/some', {
        controller: function() {
          /* eslint-disable */
          console.log('Some View Controller');
          /* eslint-enable */
        },
        controllerAs: 'vm',
        template: '<some-component></some-component>'
      }
    )
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
}
