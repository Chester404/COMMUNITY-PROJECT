webpackHotUpdate_N_E("pages/auth/confirmaccount",{

/***/ "./components/Prompt.tsx":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./pages/auth/confirmaccount.tsx":
/*!***************************************!*\
  !*** ./pages/auth/confirmaccount.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/cp-fe/pages/auth/confirmaccount.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar ConfirmAccount = function ConfirmAccount() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code1 = _useState[0],\n      setCode1 = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code2 = _useState2[0],\n      setCode2 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code3 = _useState3[0],\n      setCode3 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code4 = _useState4[0],\n      setCode4 = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      show = _useState5[0],\n      setShow = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      prompt_title = _useState6[0],\n      setPromptTitle = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      prompt_body = _useState7[0],\n      setPromptBody = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      link_to = _useState8[0],\n      setLinkTo = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      link_text = _useState9[0],\n      setLinkText = _useState9[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var handleClose = function handleClose() {\n    return setShow(false);\n  }; // const autotab = (current, to) => {\n  //   if (\n  //     current.getAttribute &&\n  //     current.value.length == current.getAttribute(\"maxlength\")\n  //   ) {\n  //     to.focus();\n  //   }\n  // };\n\n\n  var callPrompt = function callPrompt(title, link, link_text, message) {\n    if (show) setShow(false);\n    setShow(true);\n    setPromptTitle(title);\n    setLinkText(link_text);\n    setLinkTo(link);\n    setPromptBody(message);\n  };\n\n  var submitCode = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var rs;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"http://51.116.114.155:8080/auth/keyinput/\", {\n                integer_key: parseInt(\"\".concat(code1).concat(code2).concat(code3).concat(code4))\n              });\n\n            case 3:\n              rs = _context.sent;\n              console.log(rs);\n              callPrompt(\"Verification\", \"/auth/login\", \"Login\", \"Verification successful\");\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n              callPrompt(\"Verification\", \"\", \"close\", \"Verification failed\");\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function submitCode() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }), __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\",\n    integrity: \"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\",\n    crossOrigin: \"anonymous\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-show-password/1.0.3/bootstrap-show-password.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"/account_verification.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  })), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"/js/a.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ConfirmAccount, \"X8xmVmuPxHUjnveBGqQt5ugWaI0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = ConfirmAccount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmAccount);\n\nvar _c;\n\n$RefreshReg$(_c, \"ConfirmAccount\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9jb25maXJtYWNjb3VudC50c3g/MzgyNiJdLCJuYW1lcyI6WyJDb25maXJtQWNjb3VudCIsInVzZVN0YXRlIiwiY29kZTEiLCJzZXRDb2RlMSIsImNvZGUyIiwic2V0Q29kZTIiLCJjb2RlMyIsInNldENvZGUzIiwiY29kZTQiLCJzZXRDb2RlNCIsInNob3ciLCJzZXRTaG93IiwicHJvbXB0X3RpdGxlIiwic2V0UHJvbXB0VGl0bGUiLCJwcm9tcHRfYm9keSIsInNldFByb21wdEJvZHkiLCJsaW5rX3RvIiwic2V0TGlua1RvIiwibGlua190ZXh0Iiwic2V0TGlua1RleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDbG9zZSIsImNhbGxQcm9tcHQiLCJ0aXRsZSIsImxpbmsiLCJtZXNzYWdlIiwic3VibWl0Q29kZSIsImF4aW9zIiwicG9zdCIsImludGVnZXJfa2V5IiwicGFyc2VJbnQiLCJycyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEVBQUQsQ0FEUDtBQUFBLE1BQ3BCQyxLQURvQjtBQUFBLE1BQ2JDLFFBRGE7O0FBQUEsbUJBRURGLHNEQUFRLENBQUMsRUFBRCxDQUZQO0FBQUEsTUFFcEJHLEtBRm9CO0FBQUEsTUFFYkMsUUFGYTs7QUFBQSxtQkFHREosc0RBQVEsQ0FBQyxFQUFELENBSFA7QUFBQSxNQUdwQkssS0FIb0I7QUFBQSxNQUdiQyxRQUhhOztBQUFBLG1CQUlETixzREFBUSxDQUFDLEVBQUQsQ0FKUDtBQUFBLE1BSXBCTyxLQUpvQjtBQUFBLE1BSWJDLFFBSmE7O0FBQUEsbUJBS0hSLHNEQUFRLENBQUMsS0FBRCxDQUxMO0FBQUEsTUFLcEJTLElBTG9CO0FBQUEsTUFLZEMs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QUFBQSxJQXBCRixFQXlCRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxRQUFJLEVBQUMsMkJBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixDQURGLEVBaUNFO0FBQVEsUUFBSSxFQUFDLGlCQUFiO0FBQStCLE9BQUcsRUFBQyxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLENBREY7QUFxQ0QsQ0FoR0Q7O0dBQU0zQixjO1VBV1dxQixxRDs7O0tBWFhyQixjO0FBa0dTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGgvY29uZmlybWFjY291bnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFByb21wdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9tcHRcIjtcbmltcG9ydCBBdXRoSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2F1dGgvQXV0aEhlYWRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBDb25maXJtQWNjb3VudCA9ICgpID0+IHtcbiAgY29uc3QgW2NvZGUxLCBzZXRDb2RlMV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvZGUyLCBzZXRDb2RlMl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvZGUzLCBzZXRDb2RlM10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvZGU0LCBzZXRDb2RlNF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvbXB0X3RpdGxlLCBzZXRQcm9tcHRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb21wdF9ib2R5LCBzZXRQcm9tcHRCb2R5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlua190bywgc2V0TGlua1RvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlua190ZXh0LCBzZXRMaW5rVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3coZmFsc2UpO1xuXG4gIC8vIGNvbnN0IGF1dG90YWIgPSAoY3VycmVudCwgdG8pID0+IHtcbiAgLy8gICBpZiAoXG4gIC8vICAgICBjdXJyZW50LmdldEF0dHJpYnV0ZSAmJlxuICAvLyAgICAgY3VycmVudC52YWx1ZS5sZW5ndGggPT0gY3VycmVudC5nZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIilcbiAgLy8gICApIHtcbiAgLy8gICAgIHRvLmZvY3VzKCk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIGNvbnN0IGNhbGxQcm9tcHQgPSAoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBsaW5rOiBzdHJpbmcsXG4gICAgbGlua190ZXh0OiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nXG4gICkgPT4ge1xuICAgIGlmIChzaG93KSBzZXRTaG93KGZhbHNlKTtcbiAgICBzZXRTaG93KHRydWUpO1xuICAgIHNldFByb21wdFRpdGxlKHRpdGxlKTtcbiAgICBzZXRMaW5rVGV4dChsaW5rX3RleHQpO1xuICAgIHNldExpbmtUbyhsaW5rKTtcbiAgICBzZXRQcm9tcHRCb2R5KG1lc3NhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdENvZGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJzOiBhbnkgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly81MS4xMTYuMTE0LjE1NTo4MDgwL2F1dGgva2V5aW5wdXQvXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBpbnRlZ2VyX2tleTogcGFyc2VJbnQoYCR7Y29kZTF9JHtjb2RlMn0ke2NvZGUzfSR7Y29kZTR9YCksXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhycyk7XG4gICAgICBjYWxsUHJvbXB0KFxuICAgICAgICBcIlZlcmlmaWNhdGlvblwiLFxuICAgICAgICBcIi9hdXRoL2xvZ2luXCIsXG4gICAgICAgIFwiTG9naW5cIixcbiAgICAgICAgXCJWZXJpZmljYXRpb24gc3VjY2Vzc2Z1bFwiXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgY2FsbFByb21wdChcIlZlcmlmaWNhdGlvblwiLCBcIlwiLCBcImNsb3NlXCIsIFwiVmVyaWZpY2F0aW9uIGZhaWxlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRpdGxlPjwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJWWWlpU0lGZUsxZEdtSlJBa3ljdUhBSFJnMzJPbVVjd3c3b24zUllkZzRWYStQbVNUc3ovSzY4dmJkRWpoNHVcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuMS4xL2pxdWVyeS5taW4uanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2Jvb3RzdHJhcC1zaG93LXBhc3N3b3JkLzEuMC4zL2Jvb3RzdHJhcC1zaG93LXBhc3N3b3JkLm1pbi5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cblxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgaHJlZj1cIi9hY2NvdW50X3ZlcmlmaWNhdGlvbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvanMvYS5qc1wiPjwvc2NyaXB0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybUFjY291bnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/confirmaccount.tsx\n");

/***/ })

})