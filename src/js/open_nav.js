export function openNav(hamburger, nav, menu) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(hamburger) || e.target.matches(`${hamburger} *`)) {
      document.querySelector(nav).classList.toggle('isActiv');
    }

    if (e.target.matches(menu)) {
      document.querySelector(nav).classList.remove('isActiv');
    }
  });
}
