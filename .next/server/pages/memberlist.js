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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/memberlist.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainLayout/Footer.tsx":
/*!******************************************!*\
  !*** ./components/MainLayout/Footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\AMALITECH\\Desktop\\sprint_3\\cp-fe\\components\\MainLayout\\Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("script", {
    src: "/assets/js/jquery-3.4.1.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "/assets/js/popper.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "/assets/js/bootstrap.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "/assets/js/custom.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/MainLayout/Header.tsx":
/*!******************************************!*\
  !*** ./components/MainLayout/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\AMALITECH\\Desktop\\sprint_3\\cp-fe\\components\\MainLayout\\Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = ({
  title = "Community Project"
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, title), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/css/bootstrap.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/css/style.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/css/icons.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/css/custom.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MainLayout/Navbar.tsx":
/*!******************************************!*\
  !*** ./components/MainLayout/Navbar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\AMALITECH\\Desktop\\sprint_3\\cp-fe\\components\\MainLayout\\Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const navFontSize = {
  fontSize: "18px"
};

const Navbar = props => {
  const {
    0: isLoggedIn,
    1: setIsLoggedIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let lStorage = window.localStorage.getItem("cp-a");
    lStorage = JSON.parse(lStorage);
    console.log("lStorage", lStorage);

    if (lStorage) {
      console.log("WHy here");
      setIsLoggedIn(true);
    }
  }, []);
  return __jsx("div", {
    className: "hor-header header d-flex navbar-collapse",
    style: {
      height: "80px !important"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "animated-arrow hor-toggle horizontal-navtoggle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx("a", {
    className: "header-brand",
    href: "index.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "assets/images/Logo.png",
    className: "header-brand-img main-logo",
    alt: "logo",
    style: {
      marginLeft: "-1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "d-none dropdown d-md-flex header-settings ml-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "#",
    id: "market",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "lay-outstyle mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Market")), __jsx("a", {
    className: "nav-link",
    href: "#",
    id: "jobs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "lay-outstyle mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Jobs")), __jsx("a", {
    className: "nav-link",
    href: "#",
    id: "artnership",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "lay-outstyle mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Partnership")), __jsx("a", {
    className: "nav-link",
    href: "#",
    id: "forum",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "lay-outstyle mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Forum")), __jsx("a", {
    className: "nav-link",
    href: "#",
    id: "blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "lay-outstyle mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Blog")), __jsx("a", {
    className: "nav-link",
    href: "#",
    id: "members",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "lay-outstyle mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Members"))), __jsx("div", {
    className: "d-flex order-lg-2 ml-auto header-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "dropdown header-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav-link pr-0 leading-none d-flex pt-1",
    "data-toggle": "dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("span", {
    id: "memberprofile",
    className: "avatar avatar-md brround cover-image",
    "data-image-src": "../../../public/assets/images/Profile_Icon.png" //user image
    ,
    style: {
      background: 'url("assets/images/Profile_Icon.png") center center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("span", {
    style: {
      color: "#000000",
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, "No Name", " ", __jsx("i", {
    className: "fe fe-chevron-down ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "dropdown-menu dropdown-menu-right dropdown-menu-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "dropdown-item",
    href: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "dropdown-icon fe fe-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }), "View Profile"), __jsx("a", {
    className: "dropdown-item",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "dropdown-icon fe fe-edit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }), "Account Setting"), __jsx("a", {
    className: "dropdown-item",
    href: "auth/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "dropdown-icon fe fe-power",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }), " Log Out")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/MainLayout/index.tsx":
/*!*****************************************!*\
  !*** ./components/MainLayout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/MainLayout/Header.tsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/MainLayout/Navbar.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/MainLayout/Footer.tsx");
var _jsxFileName = "C:\\Users\\AMALITECH\\Desktop\\sprint_3\\cp-fe\\components\\MainLayout\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react"; */

const MainLayout = ({
  children,
  title = "Community Project",
  pageTitle = ""
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "page-main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "container content-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, children))), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./pages/memberlist.tsx":
/*!******************************!*\
  !*** ./pages/memberlist.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainLayout */ "./components/MainLayout/index.tsx");
var _jsxFileName = "C:\\Users\\AMALITECH\\Desktop\\sprint_3\\cp-fe\\pages\\memberlist.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_MainLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "page-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "page-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Member List"), __jsx("div", {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, __jsx("input", {
    id: "searchmember",
    className: "form-control border-right-0 form-rounded",
    type: "text",
    placeholder: "Search...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "input-group-append bg-white border-left-0",
    style: {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "input-group-text bg-transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fe fe-search fa-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  })))))), __jsx("div", {
    className: "table-responsive table-lg",
    style: {
      background: "#ffffff",
      marginBottom: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "mt-5 mb-5 ml-5 table-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Market Circle Individuals"), __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("th", {
    scope: "col",
    className: "text-muted ml-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "ml-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Name "), __jsx("i", {
    className: "fe fe-align-left",
    style: {
      fontSize: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx("th", {
    scope: "col",
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "Location"), __jsx("th", {
    scope: "col",
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "Actions"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "assets/images/img.jpg",
    className: "brround ml-3",
    alt: "",
    style: {
      width: "40px",
      height: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }), __jsx("span", {
    id: "memberid",
    className: "ml-5 column-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, "Godsway Hadson"), __jsx("div", {
    className: "dropdown-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "drop-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 27
    }
  }, __jsx("img", {
    src: "assets/images/img.jpg",
    className: "brround",
    alt: "",
    style: {
      width: "40px",
      height: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "Godsway Hadson")), __jsx("div", {
    className: "dropdown-divider m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 27
    }
  }), __jsx("div", {
    className: "ml-3 mr-3 mt-5 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 27
    }
  }, "For more information, please register ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 67
    }
  }), "an ", __jsx("span", {
    style: {
      color: "blue"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 32
    }
  }, " account")))))), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Anaji, Takoradi")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fe fe-alert-octagon",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 23
    }
  }), __jsx("i", {
    className: "fe fe-heart ml-1",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 23
    }
  })))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "assets/images/img.jpg",
    className: "brround ml-3",
    alt: "",
    style: {
      width: "40px",
      height: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "ml-5 column-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, "Godsway Hadson")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, "Anaji, Takoradi")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fe fe-alert-octagon",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 23
    }
  }), __jsx("i", {
    className: "fe fe-heart ml-1",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 23
    }
  })))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "assets/images/img.jpg",
    className: "brround ml-3",
    alt: "",
    style: {
      width: "40px",
      height: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "ml-5 column-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, "Godsway Hadson")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, "Anaji, Takoradi")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fe fe-alert-octagon",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 23
    }
  }), __jsx("i", {
    className: "fe fe-heart ml-1",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 23
    }
  })))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "assets/images/img.jpg",
    className: "brround ml-3",
    alt: "",
    style: {
      width: "40px",
      height: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "ml-5 column-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, "Godsway Hadson")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, "Anaji, Takoradi")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fe fe-alert-octagon",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 23
    }
  }), __jsx("i", {
    className: "fe fe-heart ml-1",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  })))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "assets/images/img.jpg",
    className: "brround ml-3",
    alt: "",
    style: {
      width: "40px",
      height: "40px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "ml-5 column-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, "Godsway Hadson")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  }, "Anaji, Takoradi")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fe fe-alert-octagon",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }), __jsx("i", {
    className: "fe fe-heart ml-1",
    style: {
      fontSize: "large"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 23
    }
  })))))), __jsx("div", {
    className: "row",
    style: {
      margin: "10px",
      background: "#ffffff"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, "Showing", __jsx("select", {
    className: "ml-3",
    style: {
      height: "30px !important",
      borderRadius: "6px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }, "10"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, "25"), __jsx("option", {
    selected: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, "30"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, "50"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, "100")), " ", "entries")), __jsx("div", {
    className: "col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pagination ml-auto",
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }, "\xAB Prev"), __jsx("a", {
    href: "#",
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 19
    }
  }, "1"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, "2"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  }, "3"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 19
    }
  }, "4"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, "5"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 19
    }
  }, "6"), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 19
    }
  }, "Next \xBB"))))))));
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluTGF5b3V0L0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluTGF5b3V0L0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluTGF5b3V0L05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluTGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW1iZXJsaXN0LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiSGVhZGVyIiwidGl0bGUiLCJuYXZGb250U2l6ZSIsImZvbnRTaXplIiwiTmF2YmFyIiwicHJvcHMiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwibFN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiTWFpbkxheW91dCIsImNoaWxkcmVuIiwicGFnZVRpdGxlIiwiSG9tZSIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImZsb2F0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixFQUtFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGLEVBTUU7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTkYsRUFPRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FQRixFQVFFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVJGLEVBU0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVEYsRUFVRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsQ0FERixDQXZCRixDQXJMRixDQTVCRixDQURGLENBREYsQ0FERjtBQStQRCxDOzs7Ozs7Ozs7OztBQ2xRRCxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9tZW1iZXJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tZW1iZXJsaXN0LnRzeFwiKTtcbiIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL2pxdWVyeS0zLjQuMS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL2N1c3RvbS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXHJcblxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyB0aXRsZSA9IFwiQ29tbXVuaXR5IFByb2plY3RcIiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIHsvKiA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1KY0tiOHEzaXFKNjFnTlY5S0diOHRoU3NOanBTTDBuOFBBUm45SHVaT25JeE4waG9QK1ZtbURHTU41dDlVSjBaXCJcclxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgIC8+ICovfVxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5kYXRhdGFibGVzLm5ldC8xLjEwLjIxL2Nzcy9kYXRhVGFibGVzLmJvb3RzdHJhcDQubWluLmNzc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9hc3NldHMvY3NzL3N0eWxlLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Fzc2V0cy9jc3MvaWNvbnMuY3NzXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvYXNzZXRzL2Nzcy9jdXN0b20uY3NzXCIgLz5cclxuXHJcbiAgICAgIHsvKiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cInN0eWxlcy5jc3NcIiAvPiAqL31cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi8uLi9jb250ZXh0U3RvcmVcIjtcclxuY29uc3QgbmF2Rm9udFNpemUgPSB7XHJcbiAgZm9udFNpemU6IFwiMThweFwiLFxyXG59O1xyXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNwLWFcIik7XHJcbiAgICBsU3RvcmFnZSA9IEpTT04ucGFyc2UobFN0b3JhZ2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJsU3RvcmFnZVwiLCBsU3RvcmFnZSk7XHJcbiAgICBpZiAobFN0b3JhZ2UpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJXSHkgaGVyZVwiKTtcclxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImhvci1oZWFkZXIgaGVhZGVyIGQtZmxleCBuYXZiYXItY29sbGFwc2VcIlxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiODBweCAhaW1wb3J0YW50XCIgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5pbWF0ZWQtYXJyb3cgaG9yLXRvZ2dsZSBob3Jpem9udGFsLW5hdnRvZ2dsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLWJyYW5kXCIgaHJlZj1cImluZGV4Lmh0bWxcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvTG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1icmFuZC1pbWcgbWFpbi1sb2dvXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xZW1cIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgey8qIGxvZ28qL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGRyb3Bkb3duIGQtbWQtZmxleCBoZWFkZXItc2V0dGluZ3MgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCIgaWQ9XCJtYXJrZXRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXktb3V0c3R5bGUgbXQtMVwiPk1hcmtldDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCIgaWQ9XCJqb2JzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGF5LW91dHN0eWxlIG10LTFcIj5Kb2JzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIiBpZD1cImFydG5lcnNoaXBcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXktb3V0c3R5bGUgbXQtMVwiPlBhcnRuZXJzaGlwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIiBpZD1cImZvcnVtXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGF5LW91dHN0eWxlIG10LTFcIj5Gb3J1bTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCIgaWQ9XCJibG9nXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGF5LW91dHN0eWxlIG10LTFcIj5CbG9nPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIiBpZD1cIm1lbWJlcnNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXktb3V0c3R5bGUgbXQtMVwiPk1lbWJlcnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggb3JkZXItbGctMiBtbC1hdXRvIGhlYWRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgaWQ9XCJub3RpZmljYXRpb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGljb24gZnVsbC1zY3JlZW4tbGlua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmZSBmZS1iZWxsXCIgLz5cclxuICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgey8qTmF2YmFyICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGhlYWRlci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHByLTAgbGVhZGluZy1ub25lIGQtZmxleCBwdC0xXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWVtYmVycHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItbWQgYnJyb3VuZCBjb3Zlci1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2Utc3JjPVwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvUHJvZmlsZV9JY29uLnBuZ1wiIC8vdXNlciBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd1cmwoXCJhc3NldHMvaW1hZ2VzL1Byb2ZpbGVfSWNvbi5wbmdcIikgY2VudGVyIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDAwMDBcIiwgZm9udFdlaWdodDpcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBObyBOYW1le1wiIFwifSBcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmZSBmZS1jaGV2cm9uLWRvd24gbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCBkcm9wZG93bi1tZW51LWFycm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24taWNvbiBmZSBmZS11c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgVmlldyBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24taWNvbiBmZSBmZS1lZGl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgQWNjb3VudCBTZXR0aW5nXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImF1dGgvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24taWNvbiBmZSBmZS1wb3dlclwiIC8+IExvZyBPdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG4vKmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjsgKi9cclxuXHJcbmNvbnN0IE1haW5MYXlvdXQgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHRpdGxlID0gXCJDb21tdW5pdHkgUHJvamVjdFwiLFxyXG4gIHBhZ2VUaXRsZSA9IFwiXCIsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciB0aXRsZT17dGl0bGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1tYWluXCI+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50LWFyZWFcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dDtcclxuIiwiaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsvKiBwYWdlLWhlYWRlciAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5NZW1iZXIgTGlzdDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaG1lbWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXItcmlnaHQtMCBmb3JtLXJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmQgYmctd2hpdGUgYm9yZGVyLWxlZnQtMFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmZSBmZS1zZWFyY2ggZmEtbGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRW5kIHBhZ2UtaGVhZGVyICovfVxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZSB0YWJsZS1sZ1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLCBtYXJnaW5Cb3R0b206IFwiMzBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC01IG1iLTUgbWwtNSB0YWJsZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIE1hcmtldCBDaXJjbGUgSW5kaXZpZHVhbHNcclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG1sLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0zXCI+TmFtZSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlIGZlLWFsaWduLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL2ltZy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJicnJvdW5kIG1sLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0MHB4XCIsIGhlaWdodDogXCI0MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm1lbWJlcmlkXCIgY2xhc3NOYW1lPVwibWwtNSBjb2x1bW4tY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR29kc3dheSBIYWRzb25cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvaW1nLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJycm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0MHB4XCIsIGhlaWdodDogXCI0MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+R29kc3dheSBIYWRzb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyIG0tMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIG1yLTMgbXQtNSBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHJlZ2lzdGVyIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW4gPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PiBhY2NvdW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMlwiPkFuYWppLCBUYWtvcmFkaTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlIGZlLWFsZXJ0LW9jdGFnb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCJsYXJnZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmUgZmUtaGVhcnQgbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcImxhcmdlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvaW1nLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJicnJvdW5kIG1sLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQwcHhcIiwgaGVpZ2h0OiBcIjQwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtNSBjb2x1bW4tY29sb3JcIj5Hb2Rzd2F5IEhhZHNvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTJcIj5BbmFqaSwgVGFrb3JhZGk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZSBmZS1hbGVydC1vY3RhZ29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwibGFyZ2VcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlIGZlLWhlYXJ0IG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCJsYXJnZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL2ltZy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJyb3VuZCBtbC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0MHB4XCIsIGhlaWdodDogXCI0MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTUgY29sdW1uLWNvbG9yXCI+R29kc3dheSBIYWRzb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yXCI+QW5hamksIFRha29yYWRpPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmUgZmUtYWxlcnQtb2N0YWdvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcImxhcmdlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZSBmZS1oZWFydCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwibGFyZ2VcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9pbWcuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJycm91bmQgbWwtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDBweFwiLCBoZWlnaHQ6IFwiNDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC01IGNvbHVtbi1jb2xvclwiPkdvZHN3YXkgSGFkc29uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMlwiPkFuYWppLCBUYWtvcmFkaTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlIGZlLWFsZXJ0LW9jdGFnb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCJsYXJnZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmUgZmUtaGVhcnQgbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcImxhcmdlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvaW1nLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJicnJvdW5kIG1sLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQwcHhcIiwgaGVpZ2h0OiBcIjQwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtNSBjb2x1bW4tY29sb3JcIj5Hb2Rzd2F5IEhhZHNvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTJcIj5BbmFqaSwgVGFrb3JhZGk8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZSBmZS1hbGVydC1vY3RhZ29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwibGFyZ2VcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlIGZlLWhlYXJ0IG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCJsYXJnZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIFNob3dpbmdcclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGVudHJpZXNcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIG1sLWF1dG9cIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPsKrIFByZXY8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+MjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4zPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+NTwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj42PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk5leHQgwrs8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==