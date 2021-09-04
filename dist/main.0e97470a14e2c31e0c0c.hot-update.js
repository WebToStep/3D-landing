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

/***/ "./src/plugins/validator.js":
/*!**********************************!*\
  !*** ./src/plugins/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Validator\": () => (/* binding */ Validator)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-unused-vars */\nvar Validator = /*#__PURE__*/function () {\n  function Validator(_ref) {\n    var selector = _ref.selector,\n        _ref$pattern = _ref.pattern,\n        pattern = _ref$pattern === void 0 ? {} : _ref$pattern,\n        method = _ref.method,\n        errorMessage = _ref.errorMessage;\n\n    _classCallCheck(this, Validator);\n\n    this.form = document.querySelector(selector);\n    this.pattern = pattern;\n    this.method = method;\n    this.elementsForm = _toConsumableArray(this.form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n    });\n    this.errorMessage = errorMessage;\n  }\n\n  _createClass(Validator, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.applyStyle();\n      this.setPattern();\n      this.elementsForm.forEach(function (elem) {\n        elem.addEventListener('input', _this.checkIt.bind(_this));\n        elem.addEventListener('blur', function () {\n          if (elem.getAttribute('id').includes('name')) {\n            if (elem.value.length === 1) {\n              elem.value = '';\n\n              _this.showError(elem, _this.errorMessage);\n            }\n          }\n\n          удыву;\n\n          if (elem.getAttribute('id').includes('email')) {\n            if (!elem.value.match(/^\\w+@\\w+\\.\\w{2,}$/ig)) {\n              elem.value = '';\n\n              _this.showError(elem, _this.errorMessage);\n            }\n          }\n        });\n      });\n    }\n  }, {\n    key: \"isValid\",\n    value: function isValid(elem) {\n      var _this2 = this;\n\n      var validatorMethod = {\n        notEmpty: function notEmpty(elem) {\n          if (elem.value.trim() === '') {\n            return false;\n          }\n\n          return true;\n        },\n        pattern: function pattern(elem, _pattern) {\n          return _pattern.test(elem.value);\n        }\n      };\n\n      if (this.method) {\n        var method = this.method[elem.id];\n\n        if (method) {\n          return method.every(function (item) {\n            return validatorMethod[item[0]](elem, _this2.pattern[item[1]]);\n          });\n        }\n      } else {\n        console.warn('Необходимо передать id полей ввода и методы проверки этих полей!');\n      }\n\n      return true;\n    }\n  }, {\n    key: \"checkIt\",\n    value: function checkIt(event) {\n      var target = event.target;\n\n      if (!this.isValid(target)) {\n        target.value = '';\n        this.showError(target, this.errorMessage);\n      } else if (this.isValid(target)) {\n        this.showSuccess(target);\n      }\n    }\n  }, {\n    key: \"showError\",\n    value: function showError(error, message) {\n      var timer;\n      error.classList.remove('success');\n      error.classList.add('error');\n      var errorDiv = document.createElement('div');\n      if (message) errorDiv.textContent = message[error.id];else errorDiv.textContent = 'Ошибка в поле' + error.placeholder.toLowerCase();\n      errorDiv.classList.add('validator-error');\n\n      if (!document.body.querySelector('.validator-error')) {\n        document.body.append(errorDiv);\n        timer = setTimeout(function () {\n          errorDiv.classList.add('active');\n          setTimeout(function () {\n            errorDiv.classList.add('hide');\n            setTimeout(function () {\n              errorDiv.remove();\n            }, 4000);\n          }, 3000);\n        }, 10);\n      } else {\n        document.body.querySelector('.validator-error').remove();\n        clearTimeout(timer);\n        this.showError(error, this.errorMessage);\n      }\n    }\n  }, {\n    key: \"showSuccess\",\n    value: function showSuccess(success) {\n      success.classList.remove('error');\n      success.classList.add('success');\n\n      if (success.nextElementSibling && success.nextElementSibling.classList.contains('validator-error')) {\n        success.nextElementSibling.remove();\n      }\n    }\n  }, {\n    key: \"applyStyle\",\n    value: function applyStyle() {\n      var style = document.createElement('style');\n      style.textContent = \"\\n      input.success{\\n         border: 2px solid #4CAF50 !important;\\n      }\\n      input.error{\\n         border: 2px solid #af4c4c !important;\\n         background: #ffd1d1 !important;\\n      }\\n      .validator-error{\\n        position:fixed !important;\\n        right: 20px !important;\\n        bottom: 20px !important;\\n         background: #fff;\\n         padding:5px 10px;\\n         width: 200px;\\n         min-height: 50px;\\n         margin: 0px auto;\\n         text-align: center; \\n         border-radius: 0 2px 2px 0;\\n         border-left: 3px solid #af4c4c;\\n         font-size:12px;\\n         fontFamily: sans-serif;\\n         color:#af4c4c; \\n         background: #ffd1d1 !important;\\n         opacity: 1 !important;\\n         transform: translateY(150%) !important;\\n         transition: 1s transform, opacity 4s;\\n         z-index:1000;\\n        }\\n        .validator-error.active{\\n          transform: translateY(0) !important;\\n        display:unset;\\n      }\\n      .validator-error.hide{\\n        opacity: 0 !important;\\n      display:unset;\\n    }\";\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"setPattern\",\n    value: function setPattern() {\n      if (!this.pattern.phone) {\n        this.pattern.phone = /^\\+?[78]([-()]*\\d){10}$/ig;\n      }\n\n      if (!this.pattern.email) {\n        this.pattern.email = /^\\w+@\\w+\\.\\w{2,}$/ig;\n      }\n    }\n  }]);\n\n  return Validator;\n}();\n\n//# sourceURL=webpack://3d-landing/./src/plugins/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a9c007df92bf298fc33e")
/******/ })();
/******/ 
/******/ }
);