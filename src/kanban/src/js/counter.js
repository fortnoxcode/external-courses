export function updateCounter() {
  let activeTasksCount = Array.from(document.getElementsByClassName('todoList-point')).length;
  if (activeTasksCount) {
    let activeTasks = document.getElementById('activeTasks');
    let finishedTasks = document.getElementById('finishedTasks');
    let boards = document.getElementsByClassName('todoList');
    let finishedTasksCount = Array.from(boards[Array.from(boards).length - 1].getElementsByClassName('todoList-point')).length;
    finishedTasks.innerText = finishedTasksCount
    activeTasks.innerText = activeTasksCount - finishedTasksCount;
  }
}
