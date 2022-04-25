export function hamburgerAnimation(menu, open) {
  const menu_wrapper = document.querySelector(menu);
  menu_wrapper.addEventListener('click', () => {
    menu_wrapper.classList.toggle(open);
  });
}
