import './scss/styles.scss';

import { hamburger } from './js/hamburger.js';

document.addEventListener('DOMContentLoaded', () => {
  hamburger('.hamburger', '.nav', '.navbar__list__link');
});
