export function hamburgerAnimation(menu, open) {
  menu.addEventListener('click', () => {
    menu.classList.toggle(open);
  });
}
