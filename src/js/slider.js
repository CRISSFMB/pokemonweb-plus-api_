/* 1- select the slider
   2- we select the sections
   3- select the last section
   4- we select the buttons separately
  */
const slider = document.querySelector('#slider');
let section = document.querySelectorAll('.slider__section');
let lastSection = section[section.length - 1];

const btn_right = document.querySelector('#btn--right');
const btn_left = document.querySelector('#btn--left');

slider.insertAdjacentElement('afterbegin', lastSection);
/* we change the position of the last section to the first position to be able to focus the second image with the margin left 200%
 */

const next = () => {
  slider.style.marginLeft = '-200%'; // move the image from -100% default to -200%
  slider.style.transition = 'all 1s'; // 5 seconds transition
  let sectionFirst = document.querySelectorAll('.slider__section')[0]; // select the section to move
  setTimeout(() => {
    slider.style.transition = 'none'; // eliminamos la trancicion
    slider.insertAdjacentElement('beforeend', sectionFirst); // insert the section that we were going to move
    slider.style.marginLeft = '-100%'; // and focus the slider
  }, 1000);
};
const prev = () => {
  let section = document.querySelectorAll('.slider__section');
  let lastSection = section[section.length - 1];
  slider.style.marginLeft = '0';
  slider.style.transition = 'all 1s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', lastSection);
    slider.style.marginLeft = '-100%';
  }, 1000);
};

btn_right.addEventListener('click', next);
btn_left.addEventListener('click', prev);
