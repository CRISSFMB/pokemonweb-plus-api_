export function hamburger(hamburger, nav, menu) {
  let d = document;
  d.addEventListener('click', (e) => {
    if (e.target.matches(hamburger) || e.target.matches(`${hamburger} *`)) {
      d.querySelector(nav).classList.toggle('isActiv');
      //   d.querySelector(hamburger).classList.toggle('is-active');
    }

    if (e.target.matches(menu)) {
      d.querySelector(nav).classList.remove('isActiv');
      //   d.querySelector(hamburger).classList.remove('is-active');
    }
  });
}
