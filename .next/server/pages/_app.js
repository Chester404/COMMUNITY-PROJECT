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
<<<<<<< HEAD
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextWrapper", function() { return ContextWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\wamp64\\www\\cp-fe\\contextStore\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Store = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("");
const gState = {
  tokens: {
    accessToken: "",
    refreshToken: ""
  },
  organization: false,
  userProfile: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ORGANIZATION":
      return _objectSpread(_objectSpread({}, state), {}, {
        organization: action.payload
      });

    case "SET_USERINFO":
      const userprofile = state;
      userprofile.userProfile = action.payload;
      return _objectSpread({}, state);

    case "UPDATE_USERNAME":
      const temp = state.userProfile;
      temp.name = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        userProfile: temp
      });

    case "SET_IMAGE":
      const temps = state.userProfile;
      temps.image = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        userProfile: temps
      });
      return;

    default:
      return state;
  }
};

const ContextWrapper = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, gState);
  return __jsx(Store.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children);
};
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextWrapper\", function() { return ContextWrapper; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/james/Documents/dev/cp-fe/contextStore/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst Store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(\"\");\nconst gState = {\n  tokens: {\n    accessToken: \"\",\n    refreshToken: \"\"\n  },\n  organization: false,\n  userProfile: {}\n};\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"SET_ORGANIZATION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        organization: action.payload\n      });\n\n    case \"SET_USERINFO\":\n      const userprofile = state;\n      userprofile.userProfile = action.payload;\n      return _objectSpread({}, state);\n\n    case \"UPDATE_USERNAME\":\n      const temp = state.userProfile;\n      temp.name = action.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        userProfile: temp\n      });\n\n    case \"UPDATE_ORGANIZATION_TITLE\":\n      const org_temp = state.userProfile;\n      org_temp.title = action.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        userProfile: org_temp\n      });\n\n    case \"SET_IMAGE\":\n      const temps = state.userProfile;\n      temps.image = action.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        userProfile: temps\n      });\n      return;\n\n    default:\n      return state;\n  }\n};\n\nconst ContextWrapper = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, gState);\n  return __jsx(Store.Provider, {\n    value: {\n      state,\n      dispatch\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0U3RvcmUvaW5kZXgudHN4P2UxN2QiXSwibmFtZXMiOlsiU3RvcmUiLCJjcmVhdGVDb250ZXh0IiwiZ1N0YXRlIiwidG9rZW5zIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJvcmdhbml6YXRpb24iLCJ1c2VyUHJvZmlsZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwidXNlcnByb2ZpbGUiLCJ0ZW1wIiwibmFtZSIsIm9yZ190ZW1wIiwidGl0bGUiLCJ0ZW1wcyIsImltYWdlIiwiQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUdDLDJEQUFhLENBQWUsRUFBZixDQUEzQjtBQWFQLE1BQU1DLE1BQWUsR0FBRztBQUN0QkMsUUFBTSxFQUFFO0FBQUVDLGVBQVcsRUFBRSxFQUFmO0FBQW1CQyxnQkFBWSxFQUFFO0FBQWpDLEdBRGM7QUFFdEJDLGNBQVksRUFBRSxLQUZRO0FBR3RCQyxhQUFXLEVBQUU7QUFIUyxDQUF4Qjs7QUFNQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssa0JBQUw7QUFDRSw2Q0FBWUYsS0FBWjtBQUFtQkgsb0JBQVksRUFBRUksTUFBTSxDQUFDRTtBQUF4Qzs7QUFDRixTQUFLLGNBQUw7QUFDRSxZQUFNQyxXQUFXLEdBQUdKLEtBQXBCO0FBQ0FJLGlCQUFXLENBQUNOLFdBQVosR0FBMEJHLE1BQU0sQ0FBQ0UsT0FBakM7QUFDQSwrQkFBWUgsS0FBWjs7QUFDRixTQUFLLGlCQUFMO0FBQ0UsWUFBTUssSUFBSSxHQUFHTCxLQUFLLENBQUNGLFdBQW5CO0FBQ0FPLFVBQUksQ0FBQ0MsSUFBTCxHQUFZTCxNQUFNLENBQUNFLE9BQW5CO0FBQ0EsNkNBQVlILEtBQVo7QUFBbUJGLG1CQUFXLEVBQUVPO0FBQWhDOztBQUNGLFNBQUssMkJBQUw7QUFDRSxZQUFNRSxRQUFRLEdBQUdQLEtBQUssQ0FBQ0YsV0FBdkI7QUFDQVMsY0FBUSxDQUFDQyxLQUFULEdBQWlCUCxNQUFNLENBQUNFLE9BQXhCO0FBQ0EsNkNBQVlILEtBQVo7QUFBbUJGLG1CQUFXLEVBQUVTO0FBQWhDOztBQUNGLFNBQUssV0FBTDtBQUNFLFlBQU1FLEtBQUssR0FBR1QsS0FBSyxDQUFDRixXQUFwQjtBQUNBVyxXQUFLLENBQUNDLEtBQU4sR0FBY1QsTUFBTSxDQUFDRSxPQUFyQjtBQUNBLDZDQUFZSCxLQUFaO0FBQW1CRixtQkFBVyxFQUFFVztBQUFoQztBQUNBOztBQUNGO0FBQ0UsYUFBT1QsS0FBUDtBQXJCSjtBQXVCRCxDQXhCRDs7QUEwQk8sTUFBTVcsY0FBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQzlDLFFBQU07QUFBQSxPQUFDWixLQUFEO0FBQUEsT0FBUWE7QUFBUixNQUFvQkMsd0RBQVUsQ0FBQ2YsT0FBRCxFQUFVTixNQUFWLENBQXBDO0FBQ0EsU0FDRSxNQUFDLEtBQUQsQ0FBTyxRQUFQO0FBQWdCLFNBQUssRUFBRTtBQUFFTyxXQUFGO0FBQVNhO0FBQVQsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Q0QsUUFBN0MsQ0FERjtBQUdELENBTE0iLCJmaWxlIjoiLi9jb250ZXh0U3RvcmUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0PHN0cmluZyB8IGFueT4oXCJcIik7XG5cbnR5cGUgVFRva2VucyA9IHtcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgcmVmcmVzaFRva2VuOiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgSUdTdGF0ZSB7XG4gIHRva2VuczogVFRva2VucztcbiAgb3JnYW5pemF0aW9uOiBib29sZWFuO1xuICB1c2VyUHJvZmlsZTogYW55O1xufVxuXG5jb25zdCBnU3RhdGU6IElHU3RhdGUgPSB7XG4gIHRva2VuczogeyBhY2Nlc3NUb2tlbjogXCJcIiwgcmVmcmVzaFRva2VuOiBcIlwiIH0sXG4gIG9yZ2FuaXphdGlvbjogZmFsc2UsXG4gIHVzZXJQcm9maWxlOiB7fSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVF9PUkdBTklaQVRJT05cIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvcmdhbml6YXRpb246IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSBcIlNFVF9VU0VSSU5GT1wiOlxuICAgICAgY29uc3QgdXNlcnByb2ZpbGUgPSBzdGF0ZTtcbiAgICAgIHVzZXJwcm9maWxlLnVzZXJQcm9maWxlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIGNhc2UgXCJVUERBVEVfVVNFUk5BTUVcIjpcbiAgICAgIGNvbnN0IHRlbXAgPSBzdGF0ZS51c2VyUHJvZmlsZTtcbiAgICAgIHRlbXAubmFtZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJQcm9maWxlOiB0ZW1wIH07XG4gICAgY2FzZSBcIlVQREFURV9PUkdBTklaQVRJT05fVElUTEVcIjpcbiAgICAgIGNvbnN0IG9yZ190ZW1wID0gc3RhdGUudXNlclByb2ZpbGU7XG4gICAgICBvcmdfdGVtcC50aXRsZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJQcm9maWxlOiBvcmdfdGVtcCB9OyAgICAgIFxuICAgIGNhc2UgXCJTRVRfSU1BR0VcIjpcbiAgICAgIGNvbnN0IHRlbXBzID0gc3RhdGUudXNlclByb2ZpbGU7XG4gICAgICB0ZW1wcy5pbWFnZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJQcm9maWxlOiB0ZW1wcyB9O1xuICAgICAgcmV0dXJuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0V3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGdTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9TdG9yZS5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contextStore/index.tsx\n");
>>>>>>> 3ac788b39b98a53683f121b08d6894321855fbc4

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contextStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contextStore */ "./contextStore/index.tsx");
var _jsxFileName = "C:\\wamp64\\www\\cp-fe\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_contextStore__WEBPACK_IMPORTED_MODULE_1__["ContextWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contextStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contextStore */ \"./contextStore/index.tsx\");\nvar _jsxFileName = \"/home/james/Documents/dev/cp-fe/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_contextStore__WEBPACK_IMPORTED_MODULE_1__[\"ContextWrapper\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 3\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 4\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3hDLFNBQ0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURELENBREQ7QUFLQTs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHRXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbnRleHRTdG9yZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8Q29udGV4dFdyYXBwZXI+XG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0PC9Db250ZXh0V3JhcHBlcj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");
>>>>>>> 3ac788b39b98a53683f121b08d6894321855fbc4

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