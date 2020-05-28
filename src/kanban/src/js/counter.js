function updateCounter() {
  let activeTasks = document.getElementById('activeTasks');
  let finishedTasks = document.getElementById('finishedTasks');
  let boards = document.getElementsByClassName('todoList');
  activeTasks.innerText = Array.from(document.getElementsByClassName('todoList-point')).length;
  finishedTasks.innerText = Array.from(boards[Array.from(boards).length - 1].getElementsByClassName('todoList-point')).length;
}
