function getTasksFromPrevious(e) {
  let newData = JSON.parse(localStorage.getItem('data'));
  let container = this.parentElement.parentNode.getElementsByClassName('todoList-items-container')[0];
  let listN = Array.from(document.getElementsByClassName('todoList-items-container')).indexOf(container);
  let issues = newData[listN - 1].issues;

  if (!issues.length || isAddCardOppen) {
    e.preventDefault()
    return;
  }

  let div = document.createElement('div');
  let span = document.createElement('span');
  let ul = document.createElement('ul');
  div.className = 'todoList-item select';
  span.appendChild(document.createTextNode('Select item:'));
  div.append(span);
  div.append(ul);

  issues.forEach((item, i) => {
    let li = document.createElement('li');
    isAddCardOppen = true;
    li.className = 'todoList-point';
    let name = document.createTextNode(item.name);
    li.appendChild(name);
    ul.append(li);
    li.addEventListener('click', function() {
      let board = document.getElementsByClassName('todoList');
      let prevBoard = Array.from(board[listN - 1].getElementsByClassName('todoList-point'));
      for (let i = 0; i < prevBoard.length; i += 1) {
        if (prevBoard[i].innerHTML === li.innerHTML) {
          prevBoard[i].remove();
          break;
        }
      }
      isAddCardOppen = false;
      ul.parentNode.remove();
      const itemN = newData[listN - 1].issues.indexOf(item);
      let deletedIssue = issues.splice(itemN, 1);
      setItem(deletedIssue[0], board[listN])
      newData[listN].issues.push(deletedIssue[0]);
      localStorage.setItem('data', JSON.stringify(newData));
      updateCounter();
    });
  });
  container.append(div);
}
