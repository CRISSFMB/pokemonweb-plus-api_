/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/btn-scroll.js":
/*!******************************!*\
  !*** ./src/js/btn-scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonScroll": () => (/* binding */ buttonScroll)
/* harmony export */ });
function buttonScroll(btn) {
  var $nodoButton = document.querySelector(btn);
  window.addEventListener('scroll', function (e) {
    var scrollEnd = 865;
    var scrollWindow = window.pageYOffset;

    if (scrollWindow > scrollEnd) {
      $nodoButton.classList.remove('hidden');
    } else {
      $nodoButton.classList.add('hidden');
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.matches(btn)) {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      });
    }
  });
}

/***/ }),

/***/ "./src/js/dark-theme.js":
/*!******************************!*\
  !*** ./src/js/dark-theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkTheme": () => (/* binding */ darkTheme)
/* harmony export */ });
function darkTheme(darkbtn, classDark) {
  // esta liena de codigo referencia al boton
  var $NodoBtn = document.querySelector(darkbtn); // esta linea de codigo me devuelve todos los elementos con el atributo especificado

  var $selectors = document.querySelectorAll('[data-dark]');
  var sun = '☀️';
  var moon = '🌑';

  function darkTheme() {
    $selectors.forEach(function (node) {
      return node.classList.add(classDark);
    });
    $NodoBtn.textContent = sun;
    localStorage.setItem('theme', 'dark');
  }

  function ligthTheme() {
    $selectors.forEach(function (node) {
      return node.classList.remove(classDark);
    });
    $NodoBtn.textContent = moon;
    localStorage.setItem('theme', 'light');
  }

  document.addEventListener('click', function (e) {
    if (e.target.matches(darkbtn)) {
      if ($NodoBtn.textContent === moon) {
        darkTheme();
      } else {
        ligthTheme();
      }
    }
  });
  document.addEventListener('DOMContentLoaded', function (e) {
    if (localStorage.getItem('theme') === null) localStorage.setItem('theme', 'light');
    if (localStorage.getItem('theme') === 'light') ligthTheme();
    if (localStorage.getItem('theme') === 'dark') darkTheme();
  });
}

/***/ }),

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hamburger": () => (/* binding */ hamburger)
/* harmony export */ });
function hamburger(hamburger, nav, menu) {
  document.addEventListener('click', function (e) {
    if (e.target.matches(hamburger) || e.target.matches("".concat(hamburger, " *"))) {
      document.querySelector(nav).classList.toggle('isActiv'); //   document.querySelector(hamburger).classList.toggle('is-active');
    }

    if (e.target.matches(menu)) {
      document.querySelector(nav).classList.remove('isActiv'); //   document.querySelector(hamburger).classList.remove('is-active');
    }
  });
}

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "next": () => (/* binding */ next),
/* harmony export */   "prev": () => (/* binding */ prev),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* 1- select the slider
   2- we select the sections
   3- select the last section
   4- we select the buttons separately
  */
var slider = document.querySelector('#slider');
var section = document.querySelectorAll('.slider__section');
var lastSection = section[section.length - 1];
slider.insertAdjacentElement('afterbegin', lastSection);
/* we change the position of the last section to the first position to be able to focus the second image with the margin left 200%
 */

var next = function next() {
  slider.style.marginLeft = '-200%'; // move the image from -100% default to -200%

  slider.style.transition = 'all 1s'; // 5 seconds transition

  var sectionFirst = document.querySelectorAll('.slider__section')[0]; // select the section to move

  setTimeout(function () {
    slider.style.transition = 'none'; // eliminamos la trancicion

    slider.insertAdjacentElement('beforeend', sectionFirst); // insert the section that we were going to move

    slider.style.marginLeft = '-100%'; // and focus the slider
  }, 1000);
};
var prev = function prev() {
  var section = document.querySelectorAll('.slider__section');
  var lastSection = section[section.length - 1];
  slider.style.marginLeft = '0';
  slider.style.transition = 'all 1s';
  setTimeout(function () {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', lastSection);
    slider.style.marginLeft = '-100%';
  }, 1000);
};
var controls = {
  next: next,
  prev: prev
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controls);

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _js_hamburger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/hamburger.js */ "./src/js/hamburger.js");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slider */ "./src/js/slider.js");
/* harmony import */ var _js_btn_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/btn-scroll */ "./src/js/btn-scroll.js");
/* harmony import */ var _js_dark_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/dark-theme */ "./src/js/dark-theme.js");





var btn_right = document.querySelector('#btn--right');
var btn_left = document.querySelector('#btn--left');
document.addEventListener('DOMContentLoaded', function () {
  (0,_js_hamburger_js__WEBPACK_IMPORTED_MODULE_1__.hamburger)('.hamburger', '.nav', '.navbar__list__link');
  (0,_js_btn_scroll__WEBPACK_IMPORTED_MODULE_3__.buttonScroll)('.button-scroll');
  (0,_js_dark_theme__WEBPACK_IMPORTED_MODULE_4__.darkTheme)('.dark-theme-btn', 'dark-mode');
  btn_right.addEventListener('click', _js_slider__WEBPACK_IMPORTED_MODULE_2__.next);
  btn_left.addEventListener('click', _js_slider__WEBPACK_IMPORTED_MODULE_2__.prev);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map