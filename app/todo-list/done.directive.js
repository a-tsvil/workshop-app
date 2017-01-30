function done() {
  return {
    restrict: "A",
    scope: {
      done: "=done"
    },
    link(scope, element) {
      element.on('click', () => {
        if (scope.done.isComplete) {
          element.css('text-decoration', 'line-through');
        }
      });
    }
  };
}

export default done;
