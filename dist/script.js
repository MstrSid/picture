/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkLangInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkLangInput */ "./src/js/modules/checkLangInput.js");
/* harmony import */ var _modules_simpleLoad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/simpleLoad */ "./src/js/modules/simpleLoad.js");






window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', undefined, undefined, 'vertical');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', '.main-prev-btn', '.main-next-btn');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkLangInput__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkLangInput__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]'); // simpleLoad('.button-styles',
  // 	'.hidden-lg .hidden-md .hidden-sm .hidden-xs .styles-2',
  // 	'.col-sm-3 .col-sm-offset-0 .col-xs-10 .col-xs-offset-1');

  Object(_modules_simpleLoad__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row', '.animated .fadeInUp .col-sm-3 .col-sm-offset-0 .col-xs-10 .col-xs-offset-1');
});

/***/ }),

/***/ "./src/js/modules/checkLangInput.js":
/*!******************************************!*\
  !*** ./src/js/modules/checkLangInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkLangInput = selector => {
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('keypress', event => {
      if (event.key.match(/[^а-яё 0-9]/ig)) {
        event.preventDefault();
      }
    });
    input.addEventListener('input', event => {
      if (event.inputType === 'insertFromPaste') {
        event.target.value = event.target.value.replace(/[^а-яё 0-9]/ig, '');
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkLangInput);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        selects = document.querySelectorAll('select'),
        phoneInputs = document.querySelectorAll('input[name="phone"]'),
        upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо, скоро менеджер свяжется с Вами!',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    okay: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
    noFile: 'Файл не выбран'
  };
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    selects.forEach(item => {
      item.selectedIndex = 0;
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = message.noFile;
    });
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let fileName;
      const lastIndexDot = item.files[0].name.lastIndexOf('.');
      const extension = item.files[0].name.substring(lastIndexDot, item.files[0].name.length);
      console.log(lastIndexDot);
      console.log(extension);

      if (item.files[0].name.substring(0, lastIndexDot).length > 7) {
        fileName = `${item.files[0].name.substring(0, 6)}...${extension}`;
      } else {
        fileName = `${item.files[0].name}`;
      }

      console.group(fileName);
      item.previousElementSibling.textContent = fileName;
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', event => {
      event.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;

      switch (true) {
        case item.closest('.popup-design') !== null || item.classList.contains('form_calc'):
          api = path.designer;
          break;

        case item.closest('.popup-consultation') !== null || item.classList.contains('form_consultation-main'):
          api = path.question;
          break;
      }

      console.log(api);
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.okay);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.addEventListener('click', () => {
      if (elem.setSelectionRange.length > 0) {
        elem.setSelectionRange(pos, pos);
      } else {
        if (elem.createTextRange.length > 0) {
          let range = elem.createTextRange();
          range.collapse(true);
          range.moveStart('character', pos);
          range.moveEnd('character', pos);
          range.select();
        }
      }
    });
  };

  function doMask(event) {
    let matrix = '+375 (__) ___ __ __',
        iterator = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, item => {
      return /[_\d]/.test(item) && iterator < val.length ? val.charAt(iterator++) : iterator >= val.length ? '' : item;
    });

    if (event.type == 'blur') {
      if (this.value.length === 4) {
        this.value = '';
      }
    }

    setCursorPosition(this.value.length, this);
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', doMask);
    input.addEventListener('focus', doMask);
    input.addEventListener('blur', doMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let timerId;
  let btnPressed;
  const scroll = calcScroll();

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          gift = document.querySelector('.fixed-gift');
    gift.classList.add('animated');
    trigger.forEach(item => {
      item.addEventListener('click', event => {
        if (event.target) {
          event.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        btnPressed = true;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        gift.style.marginRight = `${scroll}px`;
        clearTimeout(timerId);

        if (destroy) {
          item.remove();
        }
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      gift.style.marginRight = `0px`;
    });
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        gift.style.marginRight = `0px`;
      }
    });
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
        window.scrollBy(0, -1);
      }
    });
  }

  function showModalByTime(selector, time) {
    timerId = setTimeout(function () {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = "block";
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
      }
    }, time);
    return timerId;
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 60000);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/simpleLoad.js":
/*!**************************************!*\
  !*** ./src/js/modules/simpleLoad.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_spaceRemover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/spaceRemover */ "./src/js/utils/spaceRemover.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");



const simpleLoad = (triggerselector, parentSelector, showSelector
/* hiddenSelector, */
) => {
  const trigger = document.querySelector(triggerselector); // hiddenItems = document.querySelectorAll(spaceRemover(hiddenSelector));
  // trigger.addEventListener('click', event => {
  // 	if (event.target) {
  // 		event.preventDefault();
  // 		hiddenItems.forEach(item => {
  // 			item.classList.add('animated', 'fadeInUp');
  // 			const hiddenSelectors = listSelectorsFormatter(spaceRemover(hiddenSelector));
  // 			const showSelectors = listSelectorsFormatter(spaceRemover(showSelector));
  // 			hiddenSelectors.forEach(selector => {
  // 				item.classList.remove(selector);
  // 			});
  // 			showSelectors.forEach(selector => {
  // 				item.classList.add(selector);
  // 			});
  // 			trigger.remove();
  // 		});
  // 	}
  // });

  trigger.addEventListener('click', function () {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_1__["getData"])('assets/db.json').then(res => createCard(res.styles)).then(this.remove()).catch(error => console.log(error));
  });

  function createCard(response) {
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      const card = document.createElement('div');
      const showSelectors = listSelectorsFormatter(Object(_utils_spaceRemover__WEBPACK_IMPORTED_MODULE_0__["default"])(showSelector));
      showSelectors.forEach(selector => {
        card.classList.add(selector);
      });
      card.innerHTML = `
			<div class="styles-block">
						<img src=${src} alt="">
						<h4>${title}</h4>
						<a href=${link}>Подробнее</a>
					</div>`;
      document.querySelector(parentSelector).appendChild(card);
    });
  }

  function listSelectorsFormatter(selectors) {
    return selectors.substring(1, selectors.length).split('.');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (simpleLoad);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = function (sliderSelector, prev, next) {
  let direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'horizontal';
  let slideIndex = 0,
      paused = false;
  const items = document.querySelectorAll(sliderSelector);

  function showSlides(index) {
    if (index > items.length - 1) {
      index = 0;
    }

    if (index < 0) {
      index = items.length - 1;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[index].style.display = 'block';
    return index;
  }

  slideIndex = showSlides(slideIndex);

  function changeSlide(n) {
    slideIndex = showSlides(slideIndex += n);
  }

  function activateAnimation() {
    if (direction === 'vertical') {
      paused = setInterval(() => {
        changeSlide(1);
        items[slideIndex].classList.add('slideInDown');
      }, 5000);
    } else {
      paused = setInterval(() => {
        changeSlide(1);
        items[slideIndex].classList.remove('slideInLeft');
        items[slideIndex].classList.add('slideInRight');
      }, 5000);
    }
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      changeSlide(-1);
      items[slideIndex].classList.remove('slideInRight');
      items[slideIndex].classList.add('slideInLeft');
    });
    nextBtn.addEventListener('click', () => {
      changeSlide(1);
      items[slideIndex].classList.remove('slideInLeft');
      items[slideIndex].classList.add('slideInRight');
    });
  } catch (e) {}

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearTimeout(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
  activateAnimation();
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};

const getData = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}.`);
  }

  return await res.json();
};



/***/ }),

/***/ "./src/js/utils/spaceRemover.js":
/*!**************************************!*\
  !*** ./src/js/utils/spaceRemover.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const spaceRemover = s => {
  return s.replace(/\s/g, '');
};

/* harmony default export */ __webpack_exports__["default"] = (spaceRemover);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map