'use strict';
import './styles.css';
import listItems from './menu';
import listTemplate from './utils/ListTemplate.hbs';

const resultA = listItems.map(el => listTemplate(el)).join('');
const mainUl = document.querySelector('.menu');
mainUl.insertAdjacentHTML('beforeend', resultA);
const body = document.querySelector('body');
const themeBtn = document.querySelector('button[data-action="theme-switch"]');
const btnStyle = document.querySelector('.toolbar__icon');

themeBtn.addEventListener('click', handleClick);
checkTheme();

function checkTheme() {
  if (localStorage.theme === 'dark') {
    setDarkTheme();
  } else if (localStorage.theme === 'light') {
    setLightTheme();
  }
}

function handleClick() {
  if (body.classList.contains('theme-dark')) {
    body.classList.remove('theme-dark');
    localStorage.setItem('theme', 'light');
    setLightTheme();
  } else {
    setDarkTheme();
    localStorage.setItem('theme', 'dark');
  }
}

function setLightTheme() {
  body.classList.add('theme-light');
  btnStyle.textContent = 'wb_sunny';
}

function setDarkTheme() {
  body.classList.add('theme-dark');
  btnStyle.textContent = 'brightness_3';
}
