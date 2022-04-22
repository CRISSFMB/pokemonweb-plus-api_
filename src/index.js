import './scss/styles.scss';

import { hamburger } from './js/hamburger.js';
import { next, prev } from './js/slider';
import { buttonScroll } from './js/btn-scroll';
import { darkTheme } from './js/dark-theme';

const btn_right = document.querySelector('#btn--right');
const btn_left = document.querySelector('#btn--left');

document.addEventListener('DOMContentLoaded', () => {
  hamburger('.hamburger', '.nav', '.navbar__list__link');
  buttonScroll('.button-scroll');
  darkTheme('.dark-theme-btn', 'dark-mode');
  btn_right.addEventListener('click', next);
  btn_left.addEventListener('click', prev);
});
