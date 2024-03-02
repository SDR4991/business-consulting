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
        this.nextElementSibling.classList.add('animate__animated', 'animate__fadeInDown');
        this.nextElementSibling.style.display = 'block';
        this.nextElementSibling.style.setProperty('--animate-duration', '2s');
      } else {
        this.classList.remove('active');
        this.nextElementSibling.style.display = 'none';
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/advantages.js":
/*!**************************************!*\
  !*** ./src/js/modules/advantages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const advantages = blockSelector => {
  const blocks = document.querySelectorAll(blockSelector);
  blocks.forEach(block => {
    block.addEventListener('mouseover', function (e) {
      if (e.target === this) {
        this.nextElementSibling.style.display = 'block';
        this.nextElementSibling.classList.add('animate__animated', 'animate__fadeIn');
        this.nextElementSibling.style.setProperty('--animate-duration', '1s');
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (advantages);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/request */ "./src/js/services/request.js");

const form = () => {
  const forms = document.querySelectorAll('.modal__form'),
    inputs = document.querySelectorAll('.modal__input');
  const message = {
    loading: 'Data is processing...',
    complete: 'Thank for your request',
    error: 'Something went wrong. Try Again Pls',
    spinner: 'assets/images/icons/spinner.svg'
  };
  function clearInputs() {
    inputs.forEach(input => {
      input.value = '';
    });
  }
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.appendChild(statusMessage);
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(form);
      let url = 'assets/server.php';
      (0,_services_request__WEBPACK_IMPORTED_MODULE_0__.postData)(url, formData).then(res => {
        console.log(res);
        textMessage.textContent = message.complete;
      }).catch(() => {
        textMessage.textContent = message.error;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          form.style.display = 'block';
          form.classList.add('fadeInOut');
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hamburger = () => {
  const overlay = document.getElementById('overlay');
  const menuBars = document.getElementById('menu-bars');
  const nav1 = document.getElementById('nav-1');
  const nav2 = document.getElementById('nav-2');
  const nav3 = document.getElementById('nav-3');
  const nav4 = document.getElementById('nav-4');
  const navItems = [nav1, nav2, nav3, nav4];
  function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
      nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
  }
  function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
      overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
      navAnimation('out', 'in');
    } else {
      overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
      navAnimation('in', 'out');
    }
  }
  menuBars.addEventListener('click', toggleNav);
  navItems.forEach(nav => {
    nav.addEventListener('click', toggleNav);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/js/modules/inputMask.js":
/*!*************************************!*\
  !*** ./src/js/modules/inputMask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const inputMask = (inputName, inputPhone) => {
  const phone = document.querySelectorAll(inputPhone),
    name = document.querySelectorAll(inputName);
  phone.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
  name.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^A-Za-z]/ig)) {
        e.preventDefault();
      }
    });
  });
  function createMask(event) {
    let matrix = '+_ (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    }
  }
  phone.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputMask);

/***/ }),

/***/ "./src/js/modules/loadMore.js":
/*!************************************!*\
  !*** ./src/js/modules/loadMore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadMore = (triggerSelector, blockSelector) => {
  const btn = document.querySelector(triggerSelector),
    blocks = document.querySelectorAll(blockSelector);
  btn.addEventListener('click', () => {
    btn.classList.add('animate__animated', 'animate__fadeOut');
    btn.style.display = 'none';
    blocks.forEach(block => {
      block.classList.add('animate__animated', 'animate__fadeIn');
      block.style.setProperty('--animate-duration', '2s');
      block.classList.remove('advantages__pic-hidden');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMore);

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
        modal.style.setProperty('--animate-duration', '1s');
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

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scroll = () => {
  const btnUp = document.getElementById('up'),
    scrollBlock = document.getElementById('scroll-up');
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      scrollBlock.classList.add('animate__animated', 'animate__slideInUp');
      scrollBlock.hidden = false;
    } else {
      scrollBlock.hidden = true;
    }
  }
  btnUp.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', scrollFunction);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);

/***/ }),

/***/ "./src/js/services/request.js":
/*!************************************!*\
  !*** ./src/js/services/request.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};


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
/* harmony import */ var _modules_advantages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/advantages */ "./src/js/modules/advantages.js");
/* harmony import */ var _modules_loadMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loadMore */ "./src/js/modules/loadMore.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_inputMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/inputMask */ "./src/js/modules/inputMask.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");








window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion__heading', '.accordion__block');
  (0,_modules_advantages__WEBPACK_IMPORTED_MODULE_2__["default"])('.advantages__pic_img');
  (0,_modules_loadMore__WEBPACK_IMPORTED_MODULE_3__["default"])('.advantages__btn', '.advantages__pic-hidden');
  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_inputMask__WEBPACK_IMPORTED_MODULE_5__["default"])('[name="name"]', '[name="phone"]');
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map