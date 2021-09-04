/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_togleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togleMenu */ \"./src/modules/togleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_scrollBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollBtn */ \"./src/modules/scrollBtn.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/command */ \"./src/modules/command.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validators */ \"./src/modules/validators.js\");\n'strict';\n\n\n\n\n\n\n\n\n\n\n // Timer\n// if new client set localStorage timer\n\nif (localStorage.startTimer === undefined) {\n  localStorage.startTimer = (0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.addDays)(new Date(), 1);\n  (0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.countTimer)(localStorage.startTimer);\n} else {\n  (0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.countTimer)(localStorage.startTimer);\n} //Menu\n\n\n(0,_modules_togleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // scroll button\n\n(0,_modules_scrollBtn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // command\n\n(0,_modules_command__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // calculator\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100); // validators\n\n_modules_validators__WEBPACK_IMPORTED_MODULE_9__.validForm1.init();\n_modules_validators__WEBPACK_IMPORTED_MODULE_9__.validForm2.init();\n_modules_validators__WEBPACK_IMPORTED_MODULE_9__.validForm3.init(); // maskPhone('.form-phone');\n// send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://3d-landing/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        dayValue = 1,\n        countValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    var totalRunNumbers = function totalRunNumbers(num) {\n      var n = 0;\n      var interval = setInterval(function () {\n        if (n < num) {\n          n += num / 100;\n\n          if (n > num) {\n            totalValue.textContent = Math.round(num);\n            clearInterval(interval);\n          }\n        }\n\n        if (n === num) {\n          totalValue.textContent = Math.round(num);\n          clearInterval(interval);\n        }\n\n        totalValue.textContent = Math.round(n);\n      }, 1);\n    };\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n      totalRunNumbers(total);\n    }\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3d-landing/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/command.js":
/*!********************************!*\
  !*** ./src/modules/command.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar command = function command() {\n  var comandBlock = document.getElementById('command');\n\n  var photoChenge = function photoChenge(event) {\n    if (!event.target.matches('.command__photo')) return;else {\n      if (event.target.getAttribute('src') === event.target.dataset.img) {\n        event.target.setAttribute('src', event.target.dataset.img.replace(/a\\.jpg/, '.jpg'));\n      } else event.target.src = event.target.dataset.img;\n    }\n  };\n\n  comandBlock.addEventListener(\"mouseover\", photoChenge);\n  comandBlock.addEventListener(\"mouseout\", photoChenge);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (command);\n\n//# sourceURL=webpack://3d-landing/./src/modules/command.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countTimer\": () => (/* binding */ countTimer),\n/* harmony export */   \"addDays\": () => (/* binding */ addDays)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  var getTimeRemaning = function getTimeRemaning() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = ('0' + Math.floor(timeRemaining % 60)).slice(-2),\n        minutes = ('0' + Math.floor(timeRemaining / 60 % 60)).slice(-2),\n        hours = ('0' + Math.floor(timeRemaining / 60 / 60)).slice(-2);\n    timerHours.textContent = hours;\n    timerMinutes.textContent = minutes;\n    timerSeconds.textContent = seconds;\n    return timeRemaining;\n  };\n\n  var updateClock = function updateClock() {\n    var timer = getTimeRemaning();\n    var interval;\n\n    if (timer > 0) {\n      interval = setInterval(getTimeRemaning, 1000);\n    } else {\n      clearInterval(interval);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  };\n\n  updateClock();\n}; // get timer +1 Day\n\n\nvar addDays = function addDays(date, days) {\n  var result = new Date(date);\n  result.setDate(result.getDate() + days);\n  return result;\n};\n\n\n\n//# sourceURL=webpack://3d-landing/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/scrollBtn.js":
/*!**********************************!*\
  !*** ./src/modules/scrollBtn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollBtn = function scrollBtn() {\n  var links = document.querySelectorAll('a');\n  links.forEach(function (element) {\n    var id = element.hash;\n\n    if (element.hash[0] === '#' && element.hash !== '#close') {\n      element.addEventListener('click', function (event) {\n        event.preventDefault();\n        document.querySelector(id).scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollBtn);\n\n//# sourceURL=webpack://3d-landing/./src/modules/scrollBtn.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        //Заголовки в основном используются только для POST запросов\n        'Content-Type': 'aplication/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var forms = document.querySelectorAll('form');\n  forms.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      var statusMessage = document.createElement('div');\n      statusMessage.style.cssText = \"font-size: 2rem;\\n                                          color: #fff !important;\";\n      var errorMessage = 'Что то пошло не так...',\n          successMessage = 'Спасибо! Мы скоро с вами свяжемся!',\n          loader = document.createElement('section');\n      loader.innerHTML = \"<div class='sk-circle-bounce'>\\n                                       <div class='sk-child sk-circle-1'></div>\\n                                       <div class='sk-child sk-circle-2'></div>\\n                                       <div class='sk-child sk-circle-3'></div>\\n                                       <div class='sk-child sk-circle-4'></div>\\n                                       <div class='sk-child sk-circle-5'></div>\\n                                       <div class='sk-child sk-circle-6'></div>\\n                                       <div class='sk-child sk-circle-7'></div>\\n                                       <div class='sk-child sk-circle-8'></div>\\n                                       <div class='sk-child sk-circle-9'></div>\\n                                       <div class='sk-child sk-circle-10'></div>\\n                                       <div class='sk-child sk-circle-11'></div>\\n                                       <div class='sk-child sk-circle-12'></div>\\n                                   </div>\";\n      event.preventDefault();\n      item.append(statusMessage);\n      statusMessage.append(loader);\n      var formData = new FormData(item);\n      var body = {};\n      formData.forEach(function (val, key) {\n        return body[key] = val;\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error(response.status);\n        }\n\n        statusMessage.textContent = successMessage;\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n      });\n      event.target.querySelectorAll('input').forEach(function (elem) {\n        return elem.value = '';\n      });\n      item.querySelectorAll('input').forEach(function (elem) {\n        return elem.classList.remove('success');\n      });\n      setTimeout(function () {\n        return statusMessage.remove();\n      }, 5000);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3d-landing/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content'),\n      dots = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n\n  var addDots = function addDots() {\n    slide.forEach(function () {\n      var newDot = document.createElement('li');\n      newDot.classList.add('dot');\n      dots.append(newDot);\n    });\n  };\n\n  addDots();\n  var dot = document.querySelectorAll('.dot');\n  dot[0].classList.add('dot-active');\n\n  var prevSlide = function prevSlide(el, index, strClass) {\n    el[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(el, index, strClass) {\n    el[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (el, index) {\n        if (el === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn, .dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn, .dot')) {\n      startSlide();\n    }\n  });\n  startSlide(3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3d-landing/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = document.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var togleTabContent = function togleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target.classList.contains('service-header-tab')) {\n      tab.forEach(function (item, index) {\n        if (item === target) {\n          togleTabContent(index);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3d-landing/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupContent = document.querySelector('.popup-content'),\n      popupBtn = document.querySelectorAll('.popup-btn');\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n\n      if (screen.width > 768) {\n        var topStyle = -60,\n            opasityStyle = 0;\n        popupContent.style.opacity = opasityStyle;\n\n        var popupGo = function popupGo() {\n          var popupInterval = requestAnimationFrame(popupGo);\n\n          if (topStyle <= 10) {\n            topStyle += 10;\n            opasityStyle += 0.13;\n            popupContent.style.top = topStyle + '%';\n            popupContent.style.opacity = opasityStyle;\n          } else {\n            cancelAnimationFrame(popupInterval);\n          }\n        };\n\n        popupGo();\n      }\n\n      var closePopup = function closePopup(e) {\n        if (e.target.className === 'popup' || e.target.className === 'popup-close') {\n          popup.style.display = 'none';\n          popup.removeEventListener('click', closePopup);\n        }\n      };\n\n      popup.addEventListener('click', function (e) {\n        return closePopup(e);\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3d-landing/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/togleMenu.js":
/*!**********************************!*\
  !*** ./src/modules/togleMenu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togleMenu = function togleMenu() {\n  var menu = document.querySelector('menu');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (menu.className === 'active-menu' && target.closest('a')) {\n      event.preventDefault();\n      menu.classList.toggle('active-menu');\n    } else if (menu.className !== 'active-menu' && target.closest('.menu')) {\n      menu.classList.toggle('active-menu');\n    } else if (menu.className === 'active-menu' && !target.closest('menu')) {\n      menu.classList.toggle('active-menu');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togleMenu);\n\n//# sourceURL=webpack://3d-landing/./src/modules/togleMenu.js?");

/***/ }),

/***/ "./src/modules/validators.js":
/*!***********************************!*\
  !*** ./src/modules/validators.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validForm1\": () => (/* binding */ validForm1),\n/* harmony export */   \"validForm2\": () => (/* binding */ validForm2),\n/* harmony export */   \"validForm3\": () => (/* binding */ validForm3)\n/* harmony export */ });\n/* harmony import */ var _plugins_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/validator */ \"./src/plugins/validator.js\");\n\nvar validForm1 = new _plugins_validator__WEBPACK_IMPORTED_MODULE_0__.Validator({\n  selector: '#form1',\n  pattern: {\n    name: /[а-я ]/ig,\n    email: /[\\w\\s\\S@]/ig,\n    phone: /[0-9+]/ig\n  },\n  method: {\n    'form1-name': [['notEmpty'], ['pattern', 'name']],\n    'form1-phone': [['notEmpty'], ['pattern', 'phone']],\n    'form1-email': [['notEmpty'], ['pattern', 'email']]\n  },\n  errorMessage: {\n    'form1-name': 'Имя должно быть более 2х символов, Русского алфавита',\n    'form1-phone': 'Телефон может содержать только цифры и знак +',\n    'form1-email': 'Имя должно быть более 2х символов, Русского алфавита'\n  }\n});\nvar validForm2 = new _plugins_validator__WEBPACK_IMPORTED_MODULE_0__.Validator({\n  selector: '#form2',\n  pattern: {\n    name: /[а-я ]/ig,\n    email: /[\\w\\s\\S@]/ig,\n    phone: /[0-9+]/ig,\n    text: /[\\w\\s\\S-.?!)(,:]/ig\n  },\n  method: {\n    'form2-name': [['notEmpty'], ['pattern', 'name']],\n    'form2-phone': [['notEmpty'], ['pattern', 'phone']],\n    'form2-email': [['notEmpty'], ['pattern', 'email']],\n    'form2-message': [['notEmpty'], ['pattern', 'text']]\n  }\n});\nvar validForm3 = new _plugins_validator__WEBPACK_IMPORTED_MODULE_0__.Validator({\n  selector: '#form3',\n  pattern: {\n    name: /[а-я ]/ig,\n    email: /[\\w\\s\\S@]/ig,\n    phone: /[0-9+]/ig\n  },\n  method: {\n    'form3-name': [['notEmpty'], ['pattern', 'name']],\n    'form3-phone': [['notEmpty'], ['pattern', 'phone']],\n    'form3-email': [['notEmpty'], ['pattern', 'email']]\n  }\n});\n\n\n//# sourceURL=webpack://3d-landing/./src/modules/validators.js?");

/***/ }),

/***/ "./src/plugins/validator.js":
/*!**********************************!*\
  !*** ./src/plugins/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Validator\": () => (/* binding */ Validator)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-unused-vars */\nvar Validator = /*#__PURE__*/function () {\n  function Validator(_ref) {\n    var selector = _ref.selector,\n        _ref$pattern = _ref.pattern,\n        pattern = _ref$pattern === void 0 ? {} : _ref$pattern,\n        method = _ref.method,\n        errorMessage = _ref.errorMessage;\n\n    _classCallCheck(this, Validator);\n\n    this.form = document.querySelector(selector);\n    this.pattern = pattern;\n    this.method = method;\n    this.elementsForm = _toConsumableArray(this.form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n    });\n    this.errorMessage = errorMessage;\n  }\n\n  _createClass(Validator, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.applyStyle();\n      this.setPattern();\n      this.elementsForm.forEach(function (elem) {\n        elem.addEventListener('input', _this.checkIt.bind(_this));\n        elem.addEventListener('blur', function () {\n          if (elem.getAttribute('id').includes('name')) {\n            if (elem.value.length === 1) {\n              elem.value = '';\n\n              _this.showError(elem, _this.errorMessage);\n            }\n          }\n        });\n      });\n    }\n  }, {\n    key: \"isValid\",\n    value: function isValid(elem) {\n      var _this2 = this;\n\n      var validatorMethod = {\n        notEmpty: function notEmpty(elem) {\n          if (elem.value.trim() === '') {\n            return false;\n          }\n\n          return true;\n        },\n        pattern: function pattern(elem, _pattern) {\n          return _pattern.test(elem.value);\n        }\n      };\n\n      if (this.method) {\n        var method = this.method[elem.id];\n\n        if (method) {\n          return method.every(function (item) {\n            return validatorMethod[item[0]](elem, _this2.pattern[item[1]]);\n          });\n        }\n      } else {\n        console.warn('Необходимо передать id полей ввода и методы проверки этих полей!');\n      }\n\n      return true;\n    }\n  }, {\n    key: \"checkIt\",\n    value: function checkIt(event) {\n      var target = event.target;\n\n      if (!this.isValid(target)) {\n        target.value = '';\n        this.showError(target, this.errorMessage);\n      } else if (this.isValid(target)) {\n        this.showSuccess(target);\n      }\n    }\n  }, {\n    key: \"showError\",\n    value: function showError(error, message) {\n      var timer;\n      error.classList.remove('success');\n      error.classList.add('error');\n      var errorDiv = document.createElement('div');\n      if (message) errorDiv.textContent = message[error.id];else errorDiv.textContent = 'Ошибка в поле' + error.placeholder.toLowerCase();\n      errorDiv.classList.add('validator-error');\n\n      if (!document.body.querySelector('.validator-error')) {\n        document.body.append(errorDiv);\n        timer = setTimeout(function () {\n          errorDiv.classList.add('active');\n          setTimeout(function () {\n            errorDiv.classList.add('hide');\n            setTimeout(function () {\n              errorDiv.remove();\n            }, 4000);\n          }, 3000);\n        }, 10);\n      } else {\n        document.body.querySelector('.validator-error').remove();\n        clearTimeout(timer);\n        this.showError(error, this.errorMessage);\n      }\n    }\n  }, {\n    key: \"showSuccess\",\n    value: function showSuccess(success) {\n      success.classList.remove('error');\n      success.classList.add('success');\n\n      if (success.nextElementSibling && success.nextElementSibling.classList.contains('validator-error')) {\n        success.nextElementSibling.remove();\n      }\n    }\n  }, {\n    key: \"applyStyle\",\n    value: function applyStyle() {\n      var style = document.createElement('style');\n      style.textContent = \"\\n      input.success{\\n         border: 2px solid #4CAF50 !important;\\n      }\\n      input.error{\\n         border: 2px solid #af4c4c !important;\\n         background: #ffd1d1 !important;\\n      }\\n      .validator-error{\\n        position:fixed !important;\\n        right: 20px !important;\\n        bottom: 20px !important;\\n         background: #fff;\\n         padding:5px 10px;\\n         width: 200px;\\n         min-height: 50px;\\n         margin: 0px auto;\\n         text-align: center; \\n         border-radius: 0 2px 2px 0;\\n         border-left: 3px solid #af4c4c;\\n         font-size:12px;\\n         fontFamily: sans-serif;\\n         color:#af4c4c; \\n         background: #ffd1d1 !important;\\n         opacity: 1 !important;\\n         transform: translateY(150%) !important;\\n         transition: 1s transform, opacity 4s;\\n         z-index:1000;\\n        }\\n        .validator-error.active{\\n          transform: translateY(0) !important;\\n        display:unset;\\n      }\\n      .validator-error.hide{\\n        opacity: 0 !important;\\n      display:unset;\\n    }\";\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"setPattern\",\n    value: function setPattern() {\n      if (!this.pattern.phone) {\n        this.pattern.phone = /^\\+?[78]([-()]*\\d){10}$/;\n      }\n\n      if (!this.pattern.email) {\n        this.pattern.email = /^\\w+@\\w+\\.\\w{2,}$/;\n      }\n    }\n  }]);\n\n  return Validator;\n}();\n\n//# sourceURL=webpack://3d-landing/./src/plugins/validator.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;