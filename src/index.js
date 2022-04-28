import './scss/styles.scss';
import { next, prev } from './js/slider';
import { buttonScroll } from './js/btn-scroll';
import { darkTheme } from './js/dark-theme';
import { openNav } from './js/open_nav';
import { hamburgerAnimation } from './js/hamburger-animate';

const btn_right = document.querySelector('#btn--right');
const btn_left = document.querySelector('#btn--left');
const flags = document.querySelector('.flags');

document.addEventListener('DOMContentLoaded', () => {
  openNav('#menu-toggle', '.nav', '.navbar__list__link');
  buttonScroll('.button-scroll');
  darkTheme('.dark-theme-btn', 'dark-mode');
  hamburgerAnimation('#menu-toggle', 'open');
  btn_right.addEventListener('click', next);
  btn_left.addEventListener('click', prev);

  /*cambiar lenguage*/

  flags.addEventListener('click', (e) => {
    const language = e.target.parentElement.dataset.languages;

    changeLanguage(language);
  });
  const changeLanguage = async (language) => {
    try {
      const response = await fetch(`./languages/${language}.json`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
});
