function openMoreButton() {
  let data = JSON.parse(localStorage.getItem('data'));
  let moreDropdown = document.createElement('div');

  let oldDropdown = document.querySelector('.more-dropdown');
  if (oldDropdown) {
    oldDropdown.remove();
  }

  isMoreOpen = true;
  moreDropdown.className = 'more-dropdown';
  moreDropdown.innerHTML = `
    <div class="more-dropdown-item">Delete</div>
    <div class="more-dropdown-item">Copy</div>
  `;

  let index;
  let boards = Array.from(document.getElementsByClassName('todoList'));
  for (let i = 0; i < boards.length; i += 1) {
    if (boards[i].querySelector('.more-btn') === this) {
      index = i
    }
  }
  moreDropdown.getElementsByClassName('more-dropdown-item')[0]
    .addEventListener('click', () => {
      document.getElementsByClassName('todoList')[index].remove();
      data.splice(index, 1);
      localStorage.setItem('data', JSON.stringify(data));
      moreDropdown.remove();
      isMoreOpen = false;
      bindClicks();
    });
  this.append(moreDropdown);
};
