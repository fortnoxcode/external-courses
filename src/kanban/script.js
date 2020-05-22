function openDropdownMenu() {
  let dropdown = document.createElement('div');
  let menu = document.getElementsByClassName('user-menu')[0];
  dropdown.className = 'arrow-dropdown-btn-menu';
  menu.append(dropdown);
  const buttonsName = ['My account', 'Settings', 'Log out'];
  for (let i = 0; i < buttonsName.length; i++) {
    let dropdownEl = document.createElement('div');
    let node = document.createTextNode(buttonsName[i])
    dropdownEl.className = 'dropdown-menu-item';
    dropdownEl.appendChild(node);
    dropdown.append(dropdownEl);
  }
};

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
