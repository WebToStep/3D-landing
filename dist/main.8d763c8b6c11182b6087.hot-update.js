"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3d_landing"]("main",{

/***/ "./src/modules/validators.js":
/*!***********************************!*\
  !*** ./src/modules/validators.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validForm1\": () => (/* binding */ validForm1),\n/* harmony export */   \"validForm2\": () => (/* binding */ validForm2),\n/* harmony export */   \"validForm3\": () => (/* binding */ validForm3)\n/* harmony export */ });\n/* harmony import */ var _plugins_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/validator */ \"./src/plugins/validator.js\");\n\nvar validForm1 = new _plugins_validator__WEBPACK_IMPORTED_MODULE_0__.Validator({\n  selector: '#form1',\n  pattern: {\n    name: /[а-я ]/ig,\n    email: /[\\w\\s\\S@]/ig,\n    phone: /[0-9+]/ig\n  },\n  method: {\n    'form1-name': [['notEmpty'], ['pattern', 'name']],\n    'form1-phone': [['notEmpty'], ['pattern', 'phone']],\n    'form1-email': [['notEmpty'], ['pattern', 'email']]\n  },\n  errorMessage: {\n    'form1-name': 'Имя должно быть более 2х символов, Русского алфавита',\n    'form1-phone': 'Телефон может содержать только цифры и знак +',\n    'form1-email': 'email должен содержать знак @ и название домена(.ru, .) быть более 2х символов, Русского алфавита'\n  }\n});\nvar validForm2 = new _plugins_validator__WEBPACK_IMPORTED_MODULE_0__.Validator({\n  selector: '#form2',\n  pattern: {\n    name: /[а-я ]/ig,\n    email: /[\\w\\s\\S@]/ig,\n    phone: /[0-9+]/ig,\n    text: /[\\w\\s\\S-.?!)(,:]/ig\n  },\n  method: {\n    'form2-name': [['notEmpty'], ['pattern', 'name']],\n    'form2-phone': [['notEmpty'], ['pattern', 'phone']],\n    'form2-email': [['notEmpty'], ['pattern', 'email']],\n    'form2-message': [['notEmpty'], ['pattern', 'text']]\n  }\n});\nvar validForm3 = new _plugins_validator__WEBPACK_IMPORTED_MODULE_0__.Validator({\n  selector: '#form3',\n  pattern: {\n    name: /[а-я ]/ig,\n    email: /[\\w\\s\\S@]/ig,\n    phone: /[0-9+]/ig\n  },\n  method: {\n    'form3-name': [['notEmpty'], ['pattern', 'name']],\n    'form3-phone': [['notEmpty'], ['pattern', 'phone']],\n    'form3-email': [['notEmpty'], ['pattern', 'email']]\n  }\n});\n\n\n//# sourceURL=webpack://3d-landing/./src/modules/validators.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("206fccb40ff21afa0270")
/******/ })();
/******/ 
/******/ }
);