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

/***/ "./src/js/hamburger-animate.js":
/*!*************************************!*\
  !*** ./src/js/hamburger-animate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hamburgerAnimation": () => (/* binding */ hamburgerAnimation)
/* harmony export */ });
function hamburgerAnimation(menu, open) {
  var menu_wrapper = document.querySelector(menu);
  menu_wrapper.addEventListener('click', function () {
    menu_wrapper.classList.toggle(open);
  });
}

/***/ }),

/***/ "./src/js/open_nav.js":
/*!****************************!*\
  !*** ./src/js/open_nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openNav": () => (/* binding */ openNav)
/* harmony export */ });
function openNav(hamburger, nav, menu) {
  document.addEventListener('click', function (e) {
    if (e.target.matches(hamburger) || e.target.matches("".concat(hamburger, " *"))) {
      document.querySelector(nav).classList.toggle('isActiv');
    }

    if (e.target.matches(menu)) {
      document.querySelector(nav).classList.remove('isActiv');
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
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slider */ "./src/js/slider.js");
/* harmony import */ var _js_btn_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/btn-scroll */ "./src/js/btn-scroll.js");
/* harmony import */ var _js_dark_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/dark-theme */ "./src/js/dark-theme.js");
/* harmony import */ var _js_open_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/open_nav */ "./src/js/open_nav.js");
/* harmony import */ var _js_hamburger_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/hamburger-animate */ "./src/js/hamburger-animate.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var btn_right = document.querySelector('#btn--right');
var btn_left = document.querySelector('#btn--left');
var flags = document.querySelector('.flags');
document.addEventListener('DOMContentLoaded', function () {
  (0,_js_open_nav__WEBPACK_IMPORTED_MODULE_4__.openNav)('#menu-toggle', '.nav', '.navbar__list__link');
  (0,_js_btn_scroll__WEBPACK_IMPORTED_MODULE_2__.buttonScroll)('.button-scroll');
  (0,_js_dark_theme__WEBPACK_IMPORTED_MODULE_3__.darkTheme)('.dark-theme-btn', 'dark-mode');
  (0,_js_hamburger_animate__WEBPACK_IMPORTED_MODULE_5__.hamburgerAnimation)('#menu-toggle', 'open');
  btn_right.addEventListener('click', _js_slider__WEBPACK_IMPORTED_MODULE_1__.next);
  btn_left.addEventListener('click', _js_slider__WEBPACK_IMPORTED_MODULE_1__.prev);
  /*cambiar lenguage*/

  flags.addEventListener('click', function (e) {
    var language = e.target.parentElement.dataset.languages;
    changeLanguage(language);
  });

  var changeLanguage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(language) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("./languages/".concat(language, ".json"));

            case 3:
              response = _context.sent;
              console.log(response);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function changeLanguage(_x) {
      return _ref.apply(this, arguments);
    };
  }();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map