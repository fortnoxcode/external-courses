import {bindClicks} from './main.js'

export function createBoard(name = null) {
  let data = JSON.parse(localStorage.getItem('data'));
  let div = document.createElement('div');
  div.className = 'todoList';
  div.innerHTML =
    `
  <div class="todoList-container">
    <div class="todoList-header">
      ${!name ? '<input class="todoList-input" placeholder="Board name">' : `<span>${name}</span>`}
      <div class="more-btn">
        <img src="img/main/dots.svg" alt="more">
      </div>
    </div>
    <div class="todoList-items-container">
    </div>
    <div class="todoList-footer">
      <div class="add-new-item-btn">
        <div class="add-btn">
          <img src="img/main/plus.svg" alt="">
        </div>
        <span id="cardadd">Add card</span>
      </div>
    </div>
  </div>
`


  let boardholder = document.querySelector('.boardholder');
  boardholder[name ? 'append' : 'prepend'](div);
  if (name) {
    return div;
  }
  let input = document.getElementsByClassName('todoList-input')[0];

  input.addEventListener('blur', () => {
    if (!input.value) {
      div.remove()
    }
  });
  input.focus();
  input.addEventListener('change', () => {
    let span = document.createElement('span');
    let header = document.getElementsByClassName('todoList-header')[0];
    let node = document.createTextNode(input.value);
    span.appendChild(node);
    input.remove();
    header.prepend(span);
    data.unshift({
      title: input.value,
      issues: []
    });
    localStorage.setItem('data', JSON.stringify(data));
  });
  bindClicks();
}
