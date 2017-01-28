routes.$inject = ['$routeProvider', '$locationProvider'];

export function routes($routeProvider, $locationProvider) {
  $routeProvider
    .when(
      '/auth', {
        template: '<auth></auth>'
      }
    )
    .when(
      '/todo-list', {
        template: '<todo-list></todo-list>'
      }
    )
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
}
