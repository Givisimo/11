'use strict';
import './styles.css';
import listItems from './menu';
import listTemplate from './utils/ListTemplate.hbs';

const resultA = listItems.map(el => listTemplate(el)).join('');
const mainUl = document.querySelector('.menu');
mainUl.insertAdjacentHTML('beforeend', resultA);
const body = document.querySelector('body');
const themeBtn = document.querySelector('button[data-action="theme-switch"]');

themeBtn.addEventListener('click', handleClick);
checkTheme();

function checkTheme() {
  if (localStorage.theme === 'dark') {
    body.classList.add('theme-dark');
  } else if (localStorage.theme === 'light') {
    body.classList.add('theme-light');
  }
}

function handleClick() {
  if (body.classList.contains('theme-dark')) {
    body.classList.replace('theme-dark', 'theme-light');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
  }
}
