import {createBoard} from './addboard.js'
import {createItem, setItem} from './addtask.js'
import {openDropdownMenu} from './dropdown.js'
import {openMoreButton} from './more.js'
import {updateCounter} from './counter.js'
import {dataMock} from './datamock.js'
import {getTasksFromPrevious} from './previoustask.js'

export function bindClicks() {
  let firstAddCard = document.getElementsByClassName('add-new-item-btn')[0];
  if (firstAddCard) {
    firstAddCard.removeEventListener('click', createItem);
    firstAddCard.addEventListener('click', createItem);
  }

  let addCardButtons = document.getElementsByClassName('add-new-item-btn');
  for (let i = 1; i < addCardButtons.length; i++) {
    addCardButtons[i].removeEventListener('click', createItem);
    addCardButtons[i].removeEventListener('click', getTasksFromPrevious, true);
    addCardButtons[i].addEventListener('click', getTasksFromPrevious);
  }

  let moreBtn = document.querySelectorAll('.more-btn');

  for (let i = 0; i < moreBtn.length; i++) {
    moreBtn[i].removeEventListener('click', openMoreButton)
    moreBtn[i].addEventListener('click', openMoreButton)
  }
}

function loadPage() {
  data.forEach((item, i) => {
    let board = createBoard(item.title);
    item.issues.forEach((issue) => {
      setItem(issue, board)
    })
  });
  let addBoard = document.querySelector('.newlist-create-btn');
  addBoard.addEventListener('click', () => createBoard());

  bindClicks();
  updateCounter();
}

if (!localStorage.getItem('data') || localStorage.getItem('data') === '[]') {
  localStorage.setItem('data', JSON.stringify(dataMock));
}

let data = JSON.parse(localStorage.getItem('data'));

export let isAddCardOppen = {
  state : false,
  update: function (val) {
    this.state = val;
  },
};
export let isMoreOpen = {
  state : false,
  update: function (val) {
    this.state = val;
  },
};

document.addEventListener('click', (event) => {
  let selectWindow = document.getElementsByClassName('select')[0];
  let moreWindow = document.getElementsByClassName('more-dropdown')[0];

  if (isMoreOpen.state && moreWindow && event.target.className !== 'more-btn') {
    moreWindow.remove();
    isMoreOpen.state = false;
  }

  if (isAddCardOppen.state && selectWindow && event.target.id !== 'cardadd') {
    selectWindow.remove();
    isAddCardOppen.state = false;
  }
});

document.getElementsByClassName('arrow-dropdown-btn')[0].addEventListener('click', () => {
  let arrowIcon = document.getElementsByClassName('arrow-dropdown-btn')[0];
  let arrowDropdown = document.getElementsByClassName('arrow-dropdown-btn-menu')[0];
  if (arrowDropdown) {
    arrowDropdown.remove();
    arrowIcon.className = 'arrow-dropdown-btn';
  } else {
    openDropdownMenu();
    arrowIcon.className = 'arrow-dropdown-btn open';
  }
});

window.onload = loadPage;
