export function darkTheme(darkbtn, classDark) {
  // esta liena de codigo referencia al boton
  const $NodoBtn = document.querySelector(darkbtn);
  // esta linea de codigo me devuelve todos los elementos con el atributo especificado
  const $selectors = document.querySelectorAll('[data-dark]');

  const sun = '☀️';
  const moon = '🌑';

  function darkTheme() {
    $selectors.forEach((node) => node.classList.add(classDark));
    $NodoBtn.textContent = sun;
    localStorage.setItem('theme', 'dark');
  }
  function ligthTheme() {
    $selectors.forEach((node) => node.classList.remove(classDark));
    $NodoBtn.textContent = moon;
    localStorage.setItem('theme', 'light');
  }

  document.addEventListener('click', (e) => {
    if (e.target.matches(darkbtn)) {
      if ($NodoBtn.textContent === moon) {
        darkTheme();
      } else {
        ligthTheme();
      }
    }
  });

  document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem('theme') === null)
      localStorage.setItem('theme', 'light');

    if (localStorage.getItem('theme') === 'light') ligthTheme();
    if (localStorage.getItem('theme') === 'dark') darkTheme();
  });
}
