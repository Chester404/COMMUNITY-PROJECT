module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contextStore/index.tsx":
/*!********************************!*\
  !*** ./contextStore/index.tsx ***!
  \********************************/
/*! exports provided: Store, ContextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextWrapper\", function() { return ContextWrapper; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ericgbekor/Documents/getinnotized/cp-fe/contextStore/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst Store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(\"\");\nconst gState = {\n  username: \"\",\n  emailaddress: \"\",\n  image: \"\",\n  tokens: {\n    accessToken: \"\",\n    refreshToken: \"\"\n  }\n};\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"UPDATE_USERNAME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        username: action.payload\n      });\n\n    case \"SET_EMAIL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        emailaddress: action.payload\n      });\n\n    case \"SET_IMAGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        image: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst ContextWrapper = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, gState);\n  return __jsx(Store.Provider, {\n    value: {\n      state,\n      dispatch\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0U3RvcmUvaW5kZXgudHN4P2UxN2QiXSwibmFtZXMiOlsiU3RvcmUiLCJjcmVhdGVDb250ZXh0IiwiZ1N0YXRlIiwidXNlcm5hbWUiLCJlbWFpbGFkZHJlc3MiLCJpbWFnZSIsInRva2VucyIsImFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJDb250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLEtBQUssR0FBR0MsMkRBQWEsQ0FBZSxFQUFmLENBQTNCO0FBY1AsTUFBTUMsTUFBZSxHQUFHO0FBQ3RCQyxVQUFRLEVBQUUsRUFEWTtBQUV0QkMsY0FBWSxFQUFFLEVBRlE7QUFHdEJDLE9BQUssRUFBRSxFQUhlO0FBSXRCQyxRQUFNLEVBQUU7QUFBRUMsZUFBVyxFQUFFLEVBQWY7QUFBbUJDLGdCQUFZLEVBQUU7QUFBakM7QUFKYyxDQUF4Qjs7QUFPQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssaUJBQUw7QUFDRSw2Q0FBWUYsS0FBWjtBQUFtQlAsZ0JBQVEsRUFBRVEsTUFBTSxDQUFDRTtBQUFwQzs7QUFDRixTQUFLLFdBQUw7QUFDRSw2Q0FBWUgsS0FBWjtBQUFtQk4sb0JBQVksRUFBRU8sTUFBTSxDQUFDRTtBQUF4Qzs7QUFDRixTQUFLLFdBQUw7QUFDRSw2Q0FBWUgsS0FBWjtBQUFtQkwsYUFBSyxFQUFFTSxNQUFNLENBQUNFO0FBQWpDOztBQUNGO0FBQ0UsYUFBT0gsS0FBUDtBQVJKO0FBVUQsQ0FYRDs7QUFhTyxNQUFNSSxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDOUMsUUFBTTtBQUFBLE9BQUNMLEtBQUQ7QUFBQSxPQUFRTTtBQUFSLE1BQW9CQyx3REFBVSxDQUFDUixPQUFELEVBQVVQLE1BQVYsQ0FBcEM7QUFDQSxTQUNFLE1BQUMsS0FBRCxDQUFPLFFBQVA7QUFBZ0IsU0FBSyxFQUFFO0FBQUVRLFdBQUY7QUFBU007QUFBVCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDRCxRQUE3QyxDQURGO0FBR0QsQ0FMTSIsImZpbGUiOiIuL2NvbnRleHRTdG9yZS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQ8c3RyaW5nIHwgYW55PihcIlwiKTtcblxudHlwZSBUVG9rZW5zID0ge1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICByZWZyZXNoVG9rZW46IHN0cmluZztcbn07XG5cbmludGVyZmFjZSBJR1N0YXRlIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgZW1haWxhZGRyZXNzOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHRva2VuczogVFRva2Vucztcbn1cblxuY29uc3QgZ1N0YXRlOiBJR1N0YXRlID0ge1xuICB1c2VybmFtZTogXCJcIixcbiAgZW1haWxhZGRyZXNzOiBcIlwiLFxuICBpbWFnZTogXCJcIixcbiAgdG9rZW5zOiB7IGFjY2Vzc1Rva2VuOiBcIlwiLCByZWZyZXNoVG9rZW46IFwiXCIgfSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlVQREFURV9VU0VSTkFNRVwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJuYW1lOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgXCJTRVRfRU1BSUxcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbWFpbGFkZHJlc3M6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSBcIlNFVF9JTUFHRVwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGltYWdlOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0V3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGdTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9TdG9yZS5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contextStore/index.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contextStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contextStore */ \"./contextStore/index.tsx\");\nvar _jsxFileName = \"/Users/ericgbekor/Documents/getinnotized/cp-fe/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_contextStore__WEBPACK_IMPORTED_MODULE_1__[\"ContextWrapper\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 3\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 4\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3hDLFNBQ0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURELENBREQ7QUFLQTs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHRXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbnRleHRTdG9yZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8Q29udGV4dFdyYXBwZXI+XG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0PC9Db250ZXh0V3JhcHBlcj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });