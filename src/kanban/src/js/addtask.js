function createItem() {
  let data = JSON.parse(localStorage.getItem('data'));
  let container = document.getElementsByClassName('todoList-items-container')[0];
  let newItem = document.createElement('div');
  let input = document.createElement('input');
  newItem.className = 'todoList-item';
  input.className = 'todoList-input';
  newItem.append(input);
  container.append(newItem);
  input.focus();

  input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      createItem();
      updateCounter();
    }
  })

  input.addEventListener('blur', () => {
    if (!input.value) {
      newItem.remove()
      updateCounter();
    }
  });

  input.addEventListener('change', () => {
    let div = document.createElement('div');
    div.className = 'todoList-point';
    let node = document.createTextNode(input.value);
    div.appendChild(node);
    input.remove();
    newItem.append(div);
    data[0].issues.push({
      id: `task${setNextId('Backlog')}-Backlog`,
      name: input.value
    });
    localStorage.setItem('data', JSON.stringify(data));
    updateCounter();
  })
}
