const dataMock = [{
    title: 'Backlog',
    issues: [{
        id: 'task1-Backlog',
        name: 'Login page – performance issues'
      },
      {
        id: 'task2-Backlog',
        name: 'Spring bugfix'
      }
    ]
  },
  {
    title: 'Ready',
    issues: [{
        id: 'task1-Ready',
        name: 'Checkout bugfix'
      },
      {
        id: 'task2-Ready',
        name: 'Shop bug1'
      }
    ]
  },
  {
    title: 'In progress',
    issues: [{
        id: 'task1-in-progress',
        name: 'User page – performance issues'
      },
      {
        id: 'task2-in-progress',
        name: 'Auth bugfix'
      }
    ]
  },
  {
    title: 'Finished',
    issues: [{
        id: 'task1-Finished',
        name: 'Main page – performance issues'
      },
      {
        id: 'task2-Finished',
        name: 'Main page bugfix'
      }
    ]
  }
];

function setNextId(blockList) {
  let x = 0;
  data.forEach((item, i) => {
    if (blockList.toLowerCase() === item.title.toLowerCase()) {
      item.issues.forEach((item, i) => {
        x = +item.id[4] + 1;
      });
    }
  });
  return x;
}


function setItem(issue, board) {
  let node = document.createTextNode(issue.name);
  let newItem = document.createElement('div');
  newItem.className = 'todoList-item'
  let point = document.createElement('div');
  point.appendChild(node)
  point.setAttribute('id', issue.id);
  point.className = 'todoList-point'
  newItem.append(point);
  board.getElementsByClassName('todoList-items-container')[0].append(newItem);
}

function bindClicks() {
  let firstAddCard = document.getElementsByClassName('add-new-item-btn')[0];
  firstAddCard.removeEventListener('click', createItem);
  firstAddCard.addEventListener('click', createItem);

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

function displayMockData() {
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

if (!localStorage.getItem('data')) {
  localStorage.setItem('data', JSON.stringify(dataMock));
}

let data = JSON.parse(localStorage.getItem('data'));

let isAddCardOppen = false;
let isMoreOpen = false;

window.onload = displayMockData;

document.addEventListener('click', (event) => {
  let selectWindow = document.getElementsByClassName('select')[0];
  let moreWindow = document.getElementsByClassName('more-dropdown')[0];

  if (isMoreOpen && moreWindow && event.target.className !== 'more-btn') {
    moreWindow.remove();
    isMoreOpen = false;
  }

  if (isAddCardOppen && selectWindow && event.target.id !== 'cardadd') {
    selectWindow.remove();
    isAddCardOppen = false;
  }
});
