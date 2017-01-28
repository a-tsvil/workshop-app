function TodoList() {
  return function(task) {
    this.task = task;
    this.isCompelete = false;

    this.complete = () => {
      this.isComplete = true;
    };
  }
}

export default TodoList;
