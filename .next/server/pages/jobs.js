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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/jobs/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Layout/Footer.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\components\\Layout\\Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("script", {
    type: "text/javascript",
    src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-show-password/1.0.3/bootstrap-show-password.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/Header.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\components\\Layout\\Header.tsx";

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
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    integrity: "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",
    crossOrigin: "anonymous",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\components\\Layout\\Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const navFontSize = {
  fontSize: "18px"
};

const Navbar = props => {
  return __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, props.headerTitle ? props.headerTitle : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      textDecoration: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/Logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "d-md-flex d-block flex-row mx-md-auto mx-0",
    style: navFontSize,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "collapse navbar-collapse mr-auto",
    id: "navbarNavAltMarkup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/marketplace",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav-item nav-link active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Market ", __jsx("span", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 24
    }
  }, "(current)"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/jobs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav-item nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Jobs")), __jsx("a", {
    className: "nav-item nav-link",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Partnership"), __jsx("a", {
    className: "nav-item nav-link",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Forum"), __jsx("a", {
    className: "nav-item nav-link",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Blog")))), __jsx("div", {
    className: "nav navbar-nav ml-auto",
    id: "navbarNavDropdown",
    style: navFontSize,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav-item active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Login ", __jsx("span", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, "(current)")))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Sign Up"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Layout/Header.tsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Layout/Footer.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\components\\Layout\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const verifyLogin = router => {
  let lStorage = window.localStorage.getItem("cp-a");
  lStorage = JSON.parse(lStorage);

  if (lStorage == null || lStorage == undefined) {
    if (router.pathname.includes("/jobs")) {
      return {
        verified: false,
        path: ""
      };
    }

    if (router.pathname.includes("/marketplace")) {
      return {
        verified: false,
        path: ""
      };
    } // if (router.pathname.includes("/auth/verificationcode")) {
    // }
    // if (router.pathname.includes("/auth/verificationcode")) {
    // }

  }

  return {
    verified: true,
    path: ""
  };
};

const Layout = ({
  children,
  title = "Community Project",
  pageTitle = ""
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const rs = verifyLogin(router);
    console.log(rs);

    if (!rs.verified) {
      router.push("/auth/login");
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "parent",
    style: {
      paddingBottom: 40
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container",
    style: {
      marginTop: 40
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/blog/BlogContent.tsx":
/*!*****************************************!*\
  !*** ./components/blog/BlogContent.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const BlogContent = [{
  name: 'first-article',
  title: 'The Best Way to Write',
  date: '10.10.2020',
  likes: "18 likes",
  votes: "53231 votes",
  img_url: "https://picsum.photos/450/280",
  content: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`]
}, {
  name: 'first-article',
  title: 'The Best Way to Write',
  date: '12.12.2020',
  likes: "3 likes",
  votes: "53231 votes",
  img_url: "https://picsum.photos/450/280",
  content: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`]
}, {
  name: 'first-article',
  title: 'The Best Way to Write',
  date: '12.12.2020',
  likes: "19 likes",
  votes: "53231 votes",
  img_url: "https://picsum.photos/450/280",
  content: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`]
}, {
  name: 'first-article',
  title: 'The Best Way to Write',
  date: '12.12.2020',
  likes: "5 likes",
  votes: "53231 votes",
  img_url: "https://picsum.photos/450/280",
  content: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`]
}, {
  name: 'first-article',
  title: 'The Best Way to Write',
  date: '12.12.2020',
  likes: "16 likes",
  votes: "53231 votes",
  img_url: "https://picsum.photos/450/280",
  content: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`]
}, {
  name: 'first-article',
  title: 'The Best Way to Write',
  date: '12.12.2020',
  likes: "40 likes",
  votes: "53231 votes",
  img_url: "https://picsum.photos/450/280",
  content: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`]
}, {
  name: 'first-article',
  title: 'The Best Way to Write',
  date: '12.12.2020',
  likes: "7 likes",
  votes: "53231 votes",
  img_url: "https://picsum.photos/450/280",
  content: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`]
}, {
  name: 'first-article',
  title: 'The Best Way to Write',
  date: '12.12.2020',
  likes: "4 likes",
  votes: "53231 votes",
  img_url: "https://picsum.photos/450/280",
  content: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum consequatur explicabo 
            repudiandae officia nihil recusandae, doloremque corporis, nemo qui neque rem vero labore 
            numquam velit ipsum quis ducimus officiis.`]
}];
/* harmony default export */ __webpack_exports__["default"] = (BlogContent);

/***/ }),

/***/ "./components/blog/BlogPost.tsx":
/*!**************************************!*\
  !*** ./components/blog/BlogPost.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogContent */ "./components/blog/BlogContent.tsx");
/* harmony import */ var _LoadData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadData */ "./components/blog/LoadData.tsx");
var _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\components\\blog\\BlogPost.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function BlogPost() {
  const article = _BlogContent__WEBPACK_IMPORTED_MODULE_1__["default"].find(article => article.name);
  if (!article) return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 24
    }
  }, "Article does not exist!");
  return __jsx("section", {
    style: {
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, _BlogContent__WEBPACK_IMPORTED_MODULE_1__["default"].map(blog => __jsx("div", {
    className: "content-margin",
    style: {
      marginBottom: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "image-content lazy-load float-left",
    style: {
      marginRight: 90
    },
    src: blog.img_url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "card-body text-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("p", {
    style: {
      marginBottom: 35
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, " ", blog.date, " | ", blog.likes, " | ", blog.votes), __jsx("h1", {
    className: "card-title text-uppercase font-weight-bolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, blog.title), __jsx("p", {
    className: "card-text",
    style: {
      marginBottom: 32
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, blog.content[0].substring(0, 230), "..."), __jsx(_LoadData__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./components/blog/LoadData.tsx":
/*!**************************************!*\
  !*** ./components/blog/LoadData.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\components\\blog\\LoadData.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function LoadData() {
  // const { data, loading, more, load } = useContext(MyContext);
  const loading = false;
  const more = false;
  const data = [];
  return __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, data.map(row => __jsx("p", {
    key: row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, row)), loading && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }
  }, "Loading..."), !loading && more && __jsx(LoadMore, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 28
    }
  }));

  function LoadMore() {
    // const { load } = useContext(MyContext);
    return __jsx("p", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx("button", {
      type: "button",
      className: "btn btn-primary rounded-pill" // onClick={load}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, "Load More"));
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      setTimeout(() => {
        throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
      }, 0);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/jobs/index.tsx":
/*!******************************!*\
  !*** ./pages/jobs/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_blog_BlogPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/blog/BlogPost */ "./components/blog/BlogPost.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.tsx");
var _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\pages\\jobs\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import BreadCrumb from "../../components/blog/BreadCrumb";
// import Pagination from "../../components/blog/Pagination";

function Blog({
  allPostsData
}) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: "Blog | Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_components_blog_BlogPost__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9nL0Jsb2dDb250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2cvQmxvZ1Bvc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmxvZy9Mb2FkRGF0YS50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2pvYnMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiSGVhZGVyIiwidGl0bGUiLCJuYXZGb250U2l6ZSIsImZvbnRTaXplIiwiTmF2YmFyIiwicHJvcHMiLCJoZWFkZXJUaXRsZSIsInRleHREZWNvcmF0aW9uIiwidmVyaWZ5TG9naW4iLCJyb3V0ZXIiLCJsU3RvcmFnZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidmVyaWZpZWQiLCJwYXRoIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwYWdlVGl0bGUiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJycyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIkJsb2dDb250ZW50IiwibmFtZSIsImRhdGUiLCJsaWtlcyIsInZvdGVzIiwiaW1nX3VybCIsImNvbnRlbnQiLCJCbG9nUG9zdCIsImFydGljbGUiLCJmaW5kIiwibWFwIiwiYmxvZyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0Iiwic3Vic3RyaW5nIiwiTG9hZERhdGEiLCJsb2FkaW5nIiwibW9yZSIsImRhdGEiLCJyb3ciLCJMb2FkTW9yZSIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwidmFsdWUiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwic2V0VGltZW91dCIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwic3RhdGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXJyb3IiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInNlYXJjaFBhcmFtcyIsIkFycmF5IiwicmVzdWx0IiwiaXRlbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJrZXkiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJCbG9nIiwiYWxsUG9zdHNEYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFBLFNBQU8sMEJBQVAsR0FBTyxDQUFQO0FBR0s7O0FBQUEsTUFBTWdMLEVBQUUsR0FBRyx1QkFBWDs7QUFDQSxNQUFNekcsRUFBRSxHQUNieUcsRUFBRSxJQUNGLE9BQU94RyxXQUFXLENBQWxCLFNBREF3RyxjQUVBLE9BQU94RyxXQUFXLENBQWxCLFlBSEs7Ozs7Ozs7Ozs7OztBQzdYUCxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBN0M7Q0FFQTtBQUNBOztBQUVlLFNBQVN5RyxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQWdDO0FBQzdDLFNBQ0UsTUFBQywwREFBRDtBQUFRLGFBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU9ELEM7Ozs7Ozs7Ozs7O0FDYkQsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvam9icy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvam9icy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2NyaXB0XHJcbiAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYm9vdHN0cmFwLXNob3ctcGFzc3dvcmQvMS4wLjMvYm9vdHN0cmFwLXNob3ctcGFzc3dvcmQubWluLmpzXCJcclxuICAgICAgPjwvc2NyaXB0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgdGl0bGUgPSBcIkNvbW11bml0eSBQcm9qZWN0XCIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1KY0tiOHEzaXFKNjFnTlY5S0diOHRoU3NOanBTTDBuOFBBUm45SHVaT25JeE4waG9QK1ZtbURHTU41dDlVSjBaXCJcclxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmRhdGF0YWJsZXMubmV0LzEuMTAuMjEvY3NzL2RhdGFUYWJsZXMuYm9vdHN0cmFwNC5taW4uY3NzXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdHlsZXMuY3NzXCIgLz4gKi99XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5jb25zdCBuYXZGb250U2l6ZSA9IHtcclxuICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbn07XHJcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICA8aDE+XHJcbiAgICAgICAge3Byb3BzLmhlYWRlclRpdGxlID8gKFxyXG4gICAgICAgICAgcHJvcHMuaGVhZGVyVGl0bGVcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvTG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImQtbWQtZmxleCBkLWJsb2NrIGZsZXgtcm93IG14LW1kLWF1dG8gbXgtMFwiXHJcbiAgICAgICAgc3R5bGU9e25hdkZvbnRTaXplfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIG1yLWF1dG9cIlxyXG4gICAgICAgICAgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL21hcmtldHBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmsgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICBNYXJrZXQgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9qb2JzXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIj5Kb2JzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICBQYXJ0bmVyc2hpcFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICBGb3J1bVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG1sLWF1dG9cIlxyXG4gICAgICAgIGlkPVwibmF2YmFyTmF2RHJvcGRvd25cIlxyXG4gICAgICAgIHN0eWxlPXtuYXZGb250U2l6ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpblwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICBMb2dpbiA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaWduIFVwPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdmVyaWZ5TG9naW4gPSAoXHJcbiAgcm91dGVyOiBOZXh0Um91dGVyXHJcbik6IHsgdmVyaWZpZWQ6IGJvb2xlYW47IHBhdGg6IHN0cmluZyB9ID0+IHtcclxuICBsZXQgbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjcC1hXCIpO1xyXG4gIGxTdG9yYWdlID0gSlNPTi5wYXJzZShsU3RvcmFnZSk7XHJcbiAgaWYgKGxTdG9yYWdlID09IG51bGwgfHwgbFN0b3JhZ2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2pvYnNcIikpIHtcclxuICAgICAgcmV0dXJuIHsgdmVyaWZpZWQ6IGZhbHNlLCBwYXRoOiBcIlwiIH07XHJcbiAgICB9XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL21hcmtldHBsYWNlXCIpKSB7XHJcbiAgICAgIHJldHVybiB7IHZlcmlmaWVkOiBmYWxzZSwgcGF0aDogXCJcIiB9O1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9hdXRoL3ZlcmlmaWNhdGlvbmNvZGVcIikpIHtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvYXV0aC92ZXJpZmljYXRpb25jb2RlXCIpKSB7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIHJldHVybiB7IHZlcmlmaWVkOiB0cnVlLCBwYXRoOiBcIlwiIH07XHJcbn07XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSBcIkNvbW11bml0eSBQcm9qZWN0XCIsIHBhZ2VUaXRsZSA9IFwiXCIgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBycyA9IHZlcmlmeUxvZ2luKHJvdXRlcik7XHJcbiAgICBjb25zb2xlLmxvZyhycyk7XHJcbiAgICBpZiAoIXJzLnZlcmlmaWVkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvbG9naW5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA0MCB9fT5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDQwIH19PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImNvbnN0IEJsb2dDb250ZW50ID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmaXJzdC1hcnRpY2xlJyxcclxuICAgICAgICB0aXRsZTogJ1RoZSBCZXN0IFdheSB0byBXcml0ZScsXHJcbiAgICAgICAgZGF0ZTogJzEwLjEwLjIwMjAnLFxyXG4gICAgICAgIGxpa2VzOiBcIjE4IGxpa2VzXCIsXHJcbiAgICAgICAgdm90ZXM6IFwiNTMyMzEgdm90ZXNcIixcclxuICAgICAgICBpbWdfdXJsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy80NTAvMjgwXCIsXHJcbiAgICAgICAgY29udGVudDogW1xyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZpcnN0LWFydGljbGUnLFxyXG4gICAgICAgIHRpdGxlOiAnVGhlIEJlc3QgV2F5IHRvIFdyaXRlJyxcclxuICAgICAgICBkYXRlOiAnMTIuMTIuMjAyMCcsXHJcbiAgICAgICAgbGlrZXM6IFwiMyBsaWtlc1wiLFxyXG4gICAgICAgIHZvdGVzOiBcIjUzMjMxIHZvdGVzXCIsXHJcbiAgICAgICAgaW1nX3VybDogXCJodHRwczovL3BpY3N1bS5waG90b3MvNDUwLzI4MFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFtcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmaXJzdC1hcnRpY2xlJyxcclxuICAgICAgICB0aXRsZTogJ1RoZSBCZXN0IFdheSB0byBXcml0ZScsXHJcbiAgICAgICAgZGF0ZTogJzEyLjEyLjIwMjAnLFxyXG4gICAgICAgIGxpa2VzOiBcIjE5IGxpa2VzXCIsXHJcbiAgICAgICAgdm90ZXM6IFwiNTMyMzEgdm90ZXNcIixcclxuICAgICAgICBpbWdfdXJsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy80NTAvMjgwXCIsXHJcbiAgICAgICAgY29udGVudDogW1xyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmaXJzdC1hcnRpY2xlJyxcclxuICAgICAgICB0aXRsZTogJ1RoZSBCZXN0IFdheSB0byBXcml0ZScsXHJcbiAgICAgICAgZGF0ZTogJzEyLjEyLjIwMjAnLFxyXG4gICAgICAgIGxpa2VzOiBcIjUgbGlrZXNcIixcclxuICAgICAgICB2b3RlczogXCI1MzIzMSB2b3Rlc1wiLFxyXG4gICAgICAgIGltZ191cmw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQ1MC8yODBcIixcclxuICAgICAgICBjb250ZW50OiBbXHJcbiAgICAgICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZpcnN0LWFydGljbGUnLFxyXG4gICAgICAgIHRpdGxlOiAnVGhlIEJlc3QgV2F5IHRvIFdyaXRlJyxcclxuICAgICAgICBkYXRlOiAnMTIuMTIuMjAyMCcsXHJcbiAgICAgICAgbGlrZXM6IFwiMTYgbGlrZXNcIixcclxuICAgICAgICB2b3RlczogXCI1MzIzMSB2b3Rlc1wiLFxyXG4gICAgICAgIGltZ191cmw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQ1MC8yODBcIixcclxuICAgICAgICBjb250ZW50OiBbXHJcbiAgICAgICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZpcnN0LWFydGljbGUnLFxyXG4gICAgICAgIHRpdGxlOiAnVGhlIEJlc3QgV2F5IHRvIFdyaXRlJyxcclxuICAgICAgICBkYXRlOiAnMTIuMTIuMjAyMCcsXHJcbiAgICAgICAgbGlrZXM6IFwiNDAgbGlrZXNcIixcclxuICAgICAgICB2b3RlczogXCI1MzIzMSB2b3Rlc1wiLFxyXG4gICAgICAgIGltZ191cmw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzQ1MC8yODBcIixcclxuICAgICAgICBjb250ZW50OiBbXHJcbiAgICAgICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gLFxyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5gXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZpcnN0LWFydGljbGUnLFxyXG4gICAgICAgIHRpdGxlOiAnVGhlIEJlc3QgV2F5IHRvIFdyaXRlJyxcclxuICAgICAgICBkYXRlOiAnMTIuMTIuMjAyMCcsXHJcbiAgICAgICAgbGlrZXM6IFwiNyBsaWtlc1wiLFxyXG4gICAgICAgIHZvdGVzOiBcIjUzMjMxIHZvdGVzXCIsXHJcbiAgICAgICAgaW1nX3VybDogXCJodHRwczovL3BpY3N1bS5waG90b3MvNDUwLzI4MFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFtcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLmAsXHJcbiAgICAgICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLmAsXHJcbiAgICAgICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLmAsXHJcbiAgICAgICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLmBcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZmlyc3QtYXJ0aWNsZScsXHJcbiAgICAgICAgdGl0bGU6ICdUaGUgQmVzdCBXYXkgdG8gV3JpdGUnLFxyXG4gICAgICAgIGRhdGU6ICcxMi4xMi4yMDIwJyxcclxuICAgICAgICBsaWtlczogXCI0IGxpa2VzXCIsXHJcbiAgICAgICAgdm90ZXM6IFwiNTMyMzEgdm90ZXNcIixcclxuICAgICAgICBpbWdfdXJsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy80NTAvMjgwXCIsXHJcbiAgICAgICAgY29udGVudDogW1xyXG4gICAgICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2kgbm9zdHJ1bSBjb25zZXF1YXR1ciBleHBsaWNhYm8gXHJcbiAgICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgbmloaWwgcmVjdXNhbmRhZSwgZG9sb3JlbXF1ZSBjb3Jwb3JpcywgbmVtbyBxdWkgbmVxdWUgcmVtIHZlcm8gbGFib3JlIFxyXG4gICAgICAgICAgICBudW1xdWFtIHZlbGl0IGlwc3VtIHF1aXMgZHVjaW11cyBvZmZpY2lpcy5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBub3N0cnVtIGNvbnNlcXVhdHVyIGV4cGxpY2FibyBcclxuICAgICAgICAgICAgcmVwdWRpYW5kYWUgb2ZmaWNpYSBuaWhpbCByZWN1c2FuZGFlLCBkb2xvcmVtcXVlIGNvcnBvcmlzLCBuZW1vIHF1aSBuZXF1ZSByZW0gdmVybyBsYWJvcmUgXHJcbiAgICAgICAgICAgIG51bXF1YW0gdmVsaXQgaXBzdW0gcXVpcyBkdWNpbXVzIG9mZmljaWlzLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYCxcclxuICAgICAgICAgICAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIG5vc3RydW0gY29uc2VxdWF0dXIgZXhwbGljYWJvIFxyXG4gICAgICAgICAgICByZXB1ZGlhbmRhZSBvZmZpY2lhIG5paGlsIHJlY3VzYW5kYWUsIGRvbG9yZW1xdWUgY29ycG9yaXMsIG5lbW8gcXVpIG5lcXVlIHJlbSB2ZXJvIGxhYm9yZSBcclxuICAgICAgICAgICAgbnVtcXVhbSB2ZWxpdCBpcHN1bSBxdWlzIGR1Y2ltdXMgb2ZmaWNpaXMuYFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0NvbnRlbnQ7IiwiaW1wb3J0IEJsb2dDb250ZW50IGZyb20gXCIuL0Jsb2dDb250ZW50XCI7XHJcbmltcG9ydCBMb2FkRGF0YSBmcm9tIFwiLi9Mb2FkRGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3QoKSB7XHJcbiAgY29uc3QgYXJ0aWNsZSA9IEJsb2dDb250ZW50LmZpbmQoKGFydGljbGUpID0+IGFydGljbGUubmFtZSk7XHJcblxyXG4gIGlmICghYXJ0aWNsZSkgcmV0dXJuIDxoMT5BcnRpY2xlIGRvZXMgbm90IGV4aXN0ITwvaDE+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAge0Jsb2dDb250ZW50Lm1hcCgoYmxvZykgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1tYXJnaW5cIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1jb250ZW50IGxhenktbG9hZCBmbG9hdC1sZWZ0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDkwIH19XHJcbiAgICAgICAgICAgIHNyYz17YmxvZy5pbWdfdXJsfVxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGV4dC13cmFwXCI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzUgfX0+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIHtibG9nLmRhdGV9IHwge2Jsb2cubGlrZXN9IHwge2Jsb2cudm90ZXN9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZGVyXCI+XHJcbiAgICAgICAgICAgICAge2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzIgfX0+XHJcbiAgICAgICAgICAgICAge2Jsb2cuY29udGVudFswXS5zdWJzdHJpbmcoMCwgMjMwKX0uLi5cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgey8qIEltcG9ydGVkIExvYWREYXRhIGZyb20gQ29tcG9uZW50cyAgICAgICovfVxyXG4gICAgICAgICAgICA8TG9hZERhdGEgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0U3RvcmUvc2FtcGxlaW5kZXhcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZERhdGEoKSB7XHJcbiAgLy8gY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBtb3JlLCBsb2FkIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dCk7XHJcbiAgY29uc3QgbG9hZGluZyA9IGZhbHNlO1xyXG4gIGNvbnN0IG1vcmUgPSBmYWxzZTtcclxuICBjb25zdCBkYXRhID0gW107XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIHtkYXRhLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgPHAga2V5PXtyb3d9Pntyb3d9PC9wPlxyXG4gICAgICApKX1cclxuXHJcbiAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxyXG5cclxuICAgICAgeyFsb2FkaW5nICYmIG1vcmUgJiYgPExvYWRNb3JlIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gTG9hZE1vcmUoKSB7XHJcbiAgICAvLyBjb25zdCB7IGxvYWQgfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSByb3VuZGVkLXBpbGxcIlxyXG4gICAgICAgICAgLy8gb25DbGljaz17bG9hZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2FkIE1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBQcmVmZXRjaE9wdGlvbnMsXG4gIE5leHRSb3V0ZXIsXG4gIGlzTG9jYWxVUkwsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICApXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBCbG9nUG9zdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ibG9nL0Jsb2dQb3N0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbi8vIGltcG9ydCBCcmVhZENydW1iIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jsb2cvQnJlYWRDcnVtYlwiO1xyXG4vLyBpbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ibG9nL1BhZ2luYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coeyBhbGxQb3N0c0RhdGEgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIkJsb2cgfCBIb21lXCI+XHJcbiAgICAgIHsvKiA8QnJlYWRDcnVtYiAvPiAqL31cclxuICAgICAgPEJsb2dQb3N0IC8+XHJcbiAgICAgIHsvKiA8UGFnaW5hdGlvbiAvPiAqL31cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9