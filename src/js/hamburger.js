export function hamburger(hamburger, nav, menu) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(hamburger) || e.target.matches(`${hamburger} *`)) {
      document.querySelector(nav).classList.toggle('isActiv');
      //   document.querySelector(hamburger).classList.toggle('is-active');
    }

    if (e.target.matches(menu)) {
      document.querySelector(nav).classList.remove('isActiv');
      //   document.querySelector(hamburger).classList.remove('is-active');
    }
  });
}
