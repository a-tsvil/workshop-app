values.$inject = [ '$provide' ];

export function values($provide) {
  $provide.value('someData', { someField: 'nope' })
}
