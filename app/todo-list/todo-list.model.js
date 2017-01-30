function TodoList() {
  return function(task) {
    this.task = task;
    this.isComplete = false;

    this.complete = () => {
      this.isComplete = true;
    };
  }
}

export default TodoList;
