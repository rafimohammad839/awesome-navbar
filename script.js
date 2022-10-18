const navBar = document.getElementById('main')
const icon = document.getElementById('icon')
const menuBox = document.getElementsByClassName('menu-box')[0];

icon.onclick = function () {
  navBar.classList.toggle('openmenu');
  menuBox.classList.toggle('openmenu');

  if (navBar.classList.contains('openmenu')) {
    icon.src = "images/close.png";
  } else {
    icon.src = "images/menu.png";
  }

}