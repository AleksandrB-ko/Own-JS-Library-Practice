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

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// (() => {
//     const $ = function (selector) {
//         const elements = document.querySelectorAll(selector);
//         const obj = {};
//         obj.hide = () => {
//             elements.forEach(elem => {
//                 elem.style.display = 'none';
//             });
//             return obj;
//         };
//         obj.show = () => {
//             elements.forEach(elem => {
//                 elem.style.display = '';
//             });
//             return obj;
//         };
//         return obj;
//     };
//     window.$ = $;
// })();
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // если selector не был передан, вернет пустой объект
  }

  if (selector.tagName) {
    // если есть свойство tagName, значит мы передаем не селектор, а html-элемент (узел),
    this[0] = selector; // то этот элемент записываем в объект

    this.length = 1; // длина объекта соответственно = 1, т.к. элемент один

    return this; // возвращаем прототип, прекращаем дальнейшую работу функции
  }

  Object.assign(this, document.querySelectorAll(selector)); // создаем новый объект, копируя свойства исходного объекта

  this.length = document.querySelectorAll(selector).length;
  return this; // вернет прототип
};

$.prototype.init.prototype = $.prototype; // в прототип объекта, который будет возвращен из ф-ции init(), записываем прототип главной ф-ции $(). Таким образом, на объекте, который будет создаваться при помощи ф-ции $(), мы можем использовать любые методы, которые будут внутри прототипа ф-ции init()

window.$ = $; // в глобальный объект window записываем ф-цию $(), чтобы мы могли глобально ее использовать

/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_hadlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hadlers */ "./src/js/lib/modules/hadlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");







/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const child = [...parent.children];

  const findMyIndex = item => {
    return item == this[0];
  };

  return child.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) {
      return this;
    }

    this[i] = this[i].closest(selector);
    counter++;
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (attrName, attrValue) {
  if (!attrName || !attrValue) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attrName, attrValue);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (attrName) {
  if (!attrName) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attrName);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (attrName) {
  if (!attrName) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    return this[i].getAttribute(attrName);
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (attrName, attrValue) {
  if (!attrName || !attrValue) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attrName)) {
      this[i].removeAttribute(attrName);
    } else {
      this[i].setAttribute(attrName, attrValue);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this.classList) {
      this[i].classList.add(...arguments);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this.classList) {
      this[i].classList.remove(...arguments);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function () {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  for (let i = 0; i < this.length; i++) {
    if (this.classList) {
      continue;
    }

    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);
    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/hadlers.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/hadlers.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
 //$('div');
//$('.active').hide().show();
//$('div').hide().show();
//Работа с css-классами и обработчиками событий
//$('.active').toggle().toggle();
//$('.active').addClass('super', 'hello');
//$('div').addClass('super', 'hello');
//$('.active').removeClass('super', 'hello');
//$('.active').toggleClass('super');
//$('.active').addAction('click', sayHello);
//$('.active').removeAction('click', sayHello);
//$('.active').addClick(sayHello);

/*$('button').addAction('click', function() {
    $(this).toggleClass('active');
});*/

/*$('button').addClick(function() {
    $(this).toggleClass('active');
});*/
//$('button').setAttr('disabled', 'true');
//$('button').getAttr('disabled');

/*$('button').addClick(function() {
    $(this).setAttr('disabled', 'true');
});*/

/*$('button').addClick(function() {
    $(this).getAttr();
});*/
//$('div').setAttr('id', 'new');
//console.log($('.active').getAttr('id'));
//$('div').removeAttr('id');
//$('.active').setAttr('id', 'new');
//$('.active').toggleAttr('id', 'new');

/*$('button').addClick(function() {
    $('.active').toggleAttr('id', 'new');
});*/
//Создаем методы для работы с элементами
//console.log($('.active').htmlContent());

/*$('button').addClick(function() {
    $(this).htmlContent('Thanks!');
});*/

/*$('button').addClick(function() {
    $('div').getElem(2).toggleClass('active');
});*/

/*$('button').addClick(function() {
    $('div').getElem(2).htmlContent('Thanks!');
});
$('div').addClick(function() {
    console.log($(this).getElemIndex());
});*/
//console.log($('div').getElem(2).findElem('.more'));
//console.log($('div').getElem(2).findElem('.some'));
//console.log($('.some').closest('.findme'));
//console.log($('.some').closest('.findme5').addClass('kjl'));
//console.log($('.findme').findSiblings());
//console.log($('.more').getElem(0).findSiblings());
// Создаем анимации fadeIn/fadeOut
//$('button').fadeOut(1800);
//$('button').fadeIn(1800);

/*function sayHello() {
    console.log('Hello');
}*/
// Работа со стилями + создаем готовые компоненты кнопок для библиотеки

/*$('#first').addClick(() => {
    $('div').getElem(1).fadeOut(800);
});
$('[data-count="second"]').addClick(() => {
    $('div').getElem(2).fadeOut(800);
});
$('button').getElem(2).addClick(() => {
    $('.w-500').fadeOut(800);
});*/
// Создаем анимацию fadeToggle

/*$('#first').addClick(() => {
    $('div').getElem(1).fadeToggle(800);
});
$('[data-count="second"]').addClick(() => {
    $('div').getElem(2).fadeToggle(800);
});
$('button').getElem(2).addClick(() => {
    $('.w-500').fadeToggle(800);
});*/
//Создаем Dropdown menu динамически
// $('.wrap').htmlContent(
//     `<div class="dropdown">
// 	    <button class="btn btn-primary dropdown-toggle dropdown-toggle-dinamic" id="dropdownMenuButtonDinamic">Dropdown dinamic button</button>
// 	    <div class="dropdown-menu" data-toggle-id="dropdownMenuButtonDinamic">
// 	    	<a href="#" class="dropdown-item">Action #1</a>
// 	    	<a href="#" class="dropdown-item">Action #2</a>
// 	    	<a href="#" class="dropdown-item">Action #3</a>
// 	    </div>
// 	</div>`
// );
// $('.dropdown-toggle-dinamic').dropdown();
//Динамическое создание модальных окон
// $('#trigger').addClick(() => $('#trigger').createModal({
//     text: {
//         title: 'Dinamic Modal title',
//         body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, quam odit, dolor cupiditate velit porro recusandae. Tenetur, eius ullam, amet veritatis neque fuga dolorem sapiente ducimus nisi, inventore ex fugiat?'
//     },
//     btns: {
//         count: 3,
//         settings: [
//             [
//                 'Close',
//                 ['btn-danger', 'mr-10'],
//                 true
//             ],
//             [
//                 'Save canges',
//                 ['btn-success', 'mr-10'],
//                 false,
//                 () => {
//                     alert('Changes are saved');
//                 }
//             ],
//             [
//                 'Exit',
//                 ['btn-warning'],
//                 false,
//                 () => {
//                     alert('Please, save the results!');
//                 }
//             ]
//         ]
//     }
// }));
// //Динамическое создание слайдера
// $('#carouselDinamic').createSlider({
//     width: 500,
//     height: 350,
//     effects: {
//         transition: 'all 0.5s'
//     },
//     slides: [
//         {
//             src: 'https://huntland.ru/wp-content/uploads/2019/01/kavkazskiy_lesnoy_kot_6-e1548746794178-1024x638.jpg',
//             alt: 'photo'
//         },
//         {
//             src: 'https://animalreader.ru/wp-content/uploads/2014/04/lisa-e1397925485832.jpg',
//             alt: 'photo'
//         },
//         {
//             src: 'https://www.b17.ru/foto/uploaded/upl_1609658858_18874_a4z66.jpg',
//             alt: 'photo'
//         },
//         {
//             src: 'https://pbs.twimg.com/media/EZAdCN4XYAIzVl9.jpg',
//             alt: 'photo'
//         }
//     ]
// }).slider(5000);
//Сервисы для работы с сервером
//получение данных

/*$().getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));
$().getData('https://jsonplaceholder.typicode.com/todos/1', 'text')
    .then(res => console.log(res));
$().getData('https://jsonplaceholder.typicode.com/todos/1', 'blob')
    .then(res => console.log(res));*/

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').on('click', function () {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).toggleClass('active');
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').click(function () {
  console.log(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index());
}); // console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.hh'));

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').fadeIn(1800);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map