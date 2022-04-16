import './scss/styles.scss';

import { hamburger } from './js/hamburger.js';

import { next, prev } from './js/slider';

const btn_right = document.querySelector('#btn--right');
const btn_left = document.querySelector('#btn--left');

document.addEventListener('DOMContentLoaded', () => {
  hamburger('.hamburger', '.nav', '.navbar__list__link');
  btn_right.addEventListener('click', next);
  btn_left.addEventListener('click', prev);
});
