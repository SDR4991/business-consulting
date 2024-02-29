/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = (triggerSelector, blockSelector) => {
  const triggers = document.querySelectorAll(triggerSelector),
    blocks = document.querySelectorAll(blockSelector);
  blocks.forEach(modal => {
    modal.classList.add('animate__animated', 'animate__fadeInDown');
  });
  function hideblocks() {
    blocks.forEach(modal => {
      modal.style.display = 'none';
    });
  }
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      if (!this.classList.contains('active')) {
        triggers.forEach(trigger => {
          trigger.classList.remove('active');
        });
        hideblocks();
        this.classList.add('active');
        this.nextElementSibling.style.display = 'block';
      } else {
        this.classList.remove('active');
        this.nextElementSibling.style.display = 'none';
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = () => {
  function openModal(triggerSelector, modalSelector, closeSelector) {
    const btns = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector);
    btns.forEach(btn => {
      btn.addEventListener('click', e => {
        if (e) {
          e.preventDefault();
        }
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        modal.classList.add('animate__animated', 'animate__fadeIn');
      });
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
    close.forEach(close => {
      close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }
  openModal('[data-modal]', '.modal', '[data-close]');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion__heading', '.accordion__block');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map