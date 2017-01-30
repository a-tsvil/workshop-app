class TodoListController {
  constructor(TodoList) {
    this.TodoList = TodoList;
    this.todos = [];
    this.text = '';
  }

  addTodo() {
    if (this.text.length > 0) {
      this.todos.push(new this.TodoList(this.text));
      this.text = '';
    }
  }
}

TodoListController.$inject = [ 'TodoList' ];

const todoList = {
  template: `
    <input type="text" ng-model="vm.text">
    <button ng-click="vm.addTodo()">Add ToDo</button>
    <div ng-repeat="todo in vm.todos">
      <span done="todo"><input type="checkbox" ng-click="todo.complete()">{{ todo.task }}</span>
    </div>
  `,
  controller: TodoListController,
  controllerAs: 'vm'
};

export default todoList;
