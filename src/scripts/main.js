'use strict';

const menu = document.querySelector('#menu');
const menu_open = document.getElementById('menu-open');
const overlay = document.querySelector('.overlay');
const close_menu = document.getElementById('close-menu');

menu_open.addEventListener('click', () => {
  menu.classList.add('menu-open');
  overlay.classList.add('active');
});

close_menu.addEventListener('click', () => {
  menu.classList.remove('menu-open');
  overlay.classList.remove('active');
});
