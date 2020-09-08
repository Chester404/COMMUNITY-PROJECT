webpackHotUpdate_N_E("pages/auth/confirmaccount",{

/***/ "./pages/auth/confirmaccount.tsx":
/*!***************************************!*\
  !*** ./pages/auth/confirmaccount.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/james/Documents/dev/cp-fe/pages/auth/confirmaccount.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar ConfirmAccount = function ConfirmAccount() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code1 = _useState[0],\n      setCode1 = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code2 = _useState2[0],\n      setCode2 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code3 = _useState3[0],\n      setCode3 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      code4 = _useState4[0],\n      setCode4 = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      show = _useState5[0],\n      setShow = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      prompt_title = _useState6[0],\n      setPromptTitle = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      prompt_body = _useState7[0],\n      setPromptBody = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      link_to = _useState8[0],\n      setLinkTo = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      link_text = _useState9[0],\n      setLinkText = _useState9[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var handleClose = function handleClose() {\n    return setShow(false);\n  }; // const autotab = (current, to) => {\n  //   if (\n  //     current.getAttribute &&\n  //     current.value.length == current.getAttribute(\"maxlength\")\n  //   ) {\n  //     to.focus();\n  //   }\n  // };\n\n\n  var callPrompt = function callPrompt(title, link, link_text, message) {\n    if (show) setShow(false);\n    setShow(true);\n    setPromptTitle(title);\n    setLinkText(link_text);\n    setLinkTo(link);\n    setPromptBody(message);\n  };\n\n  var submitCode = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var rs;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"http://51.116.114.155:8080/auth/keyinput/\", {\n                integer_key: parseInt(\"\".concat(code1).concat(code2).concat(code3).concat(code4))\n              });\n\n            case 3:\n              rs = _context.sent;\n              console.log(rs);\n              callPrompt(\"Verification\", \"/auth/login\", \"Login\", \"Verification successful\");\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n              callPrompt(\"Verification\", \"\", \"close\", \"Verification failed\");\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function submitCode() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }), __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"Account Verification\"), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\",\n    integrity: \"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\",\n    crossOrigin: \"anonymous\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-show-password/1.0.3/bootstrap-show-password.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"/account_verification.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: \"logo\",\n    src: \"/images/Logo.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: \"content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }, \"Enter code for\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 19\n    }\n  }), \"verification\"))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group\",\n    style: {\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    id: \"form\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"codebox\",\n    id: \"code1\",\n    maxLength: 1,\n    size: 1,\n    min: 0,\n    max: 9,\n    pattern: \"[0-9]{1}\",\n    value: code1,\n    onChange: function onChange(e) {\n      return setCode1(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 19\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    className: \"codebox\",\n    id: \"code2\",\n    maxLength: 1,\n    size: 1,\n    min: 0,\n    max: 9,\n    pattern: \"[0-9]{1}\",\n    value: code2,\n    onChange: function onChange(e) {\n      return setCode2(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 19\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    className: \"codebox\",\n    id: \"code3\",\n    maxLength: 1,\n    size: 1,\n    min: 0,\n    max: 9,\n    pattern: \"[0-9]{1}\",\n    value: code3,\n    onChange: function onChange(e) {\n      return setCode3(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 19\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    className: \"codebox\",\n    id: \"code4\",\n    maxLength: 1,\n    size: 1,\n    min: 0,\n    max: 9,\n    pattern: \"[0-9]{1}\",\n    value: code4,\n    onChange: function onChange(e) {\n      return setCode4(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 19\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 17\n    }\n  }), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    id: \"continue\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 19\n    }\n  }, \"Continue\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 17\n    }\n  }), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 17\n    }\n  }, \"If you don't recieve the code within\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 19\n    }\n  }), \"1mins, click below to re-send it.\"), __jsx(\"table\", {\n    className: \"cell\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 17\n    }\n  }, __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 19\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 21\n    }\n  }, __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 23\n    }\n  }, __jsx(\"button\", {\n    className: \"re-sendbtn\",\n    id: \"re-send_code\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 25\n    }\n  }, \"Resend Code\", __jsx(\"i\", {\n    className: \"material-icons\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 38\n    }\n  }, \"refresh\"))), __jsx(\"td\", {\n    id: \"counter\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 23\n    }\n  }))))))))), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"/js/a.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ConfirmAccount, \"X8xmVmuPxHUjnveBGqQt5ugWaI0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = ConfirmAccount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmAccount);\n\nvar _c;\n\n$RefreshReg$(_c, \"ConfirmAccount\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9jb25maXJtYWNjb3VudC50c3g/MzgyNiJdLCJuYW1lcyI6WyJDb25maXJtQWNjb3VudCIsInVzZVN0YXRlIiwiY29kZTEiLCJzZXRDb2RlMSIsImNvZGUyIiwic2V0Q29kZTIiLCJjb2RlMyIsInNldENvZGUzIiwiY29kZTQiLCJzZXRDb2RlNCIsInNob3ciLCJzZXRTaG93IiwicHJvbXB0X3RpdGxlIiwic2V0UHJvbXB0VGl0bGUiLCJwcm9tcHRfYm9keSIsInNldFByb21wdEJvZHkiLCJsaW5rX3RvIiwic2V0TGlua1RvIiwibGlua190ZXh0Iiwic2V0TGlua1RleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDbG9zZSIsImNhbGxQcm9tcHQiLCJ0aXRsZSIsImxpbmsiLCJtZXNzYWdlIiwic3VibWl0Q29kZSIsImF4aW9zIiwicG9zdCIsImludGVnZXJfa2V5IiwicGFyc2VJbnQiLCJycyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QWxpZ24iLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEVBQUQsQ0FEUDtBQUFBLE1BQ3BCQyxLQURvQjtBQUFBLE1BQ2JDLFFBRGE7O0FBQUEsbUJBRURGLHNEQUFRLENBQUMsRUFBRCxDQUZQO0FBQUEsTUFFcEJHLEtBRm9CO0FBQUEsTUFFYkMsUUFGYTs7QUFBQSxtQkFHREosc0RBQVEsQ0FBQyxFQUFELENBSFA7QUFBQSxNQUdwQkssS0FIb0I7QUFBQSxNQUdiQyxRQUhhOztBQUFBLG1CQUlETixzREFBUSxDQUFDLEVBQUQsQ0FKUDtBQUFBLE1BSXBCTyxLQUpvQjtBQUFBLE1BSWJDLFFBSmE7O0FBQUEsbUJBS0hSLHNEQUFRLENBQUMsS0FBRCxD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Q0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsc0NBOURGLEVBc0VFO0FBQU8sYUFBUyxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUErQixNQUFFLEVBQUMsY0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDYTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGIsQ0FERixDQURGLEVBTUU7QUFBSSxNQUFFLEVBQUMsU0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQURGLENBdEVGLENBREYsQ0FERixDQWJGLENBTkYsQ0F6QkYsRUFzSUU7QUFBUSxRQUFJLEVBQUMsaUJBQWI7QUFBK0IsT0FBRyxFQUFDLFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0SUYsQ0FERjtBQTBJRCxDQXJNRDs7R0FBTW5DLGM7VUFXV3FCLHFEOzs7S0FYWHJCLGM7QUF1TVNBLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9jb25maXJtYWNjb3VudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUHJvbXB0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb21wdFwiO1xuaW1wb3J0IEF1dGhIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXV0aC9BdXRoSGVhZGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IENvbmZpcm1BY2NvdW50ID0gKCkgPT4ge1xuICBjb25zdCBbY29kZTEsIHNldENvZGUxXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29kZTIsIHNldENvZGUyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29kZTMsIHNldENvZGUzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29kZTQsIHNldENvZGU0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm9tcHRfdGl0bGUsIHNldFByb21wdFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvbXB0X2JvZHksIHNldFByb21wdEJvZHldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaW5rX3RvLCBzZXRMaW5rVG9dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaW5rX3RleHQsIHNldExpbmtUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XG5cbiAgLy8gY29uc3QgYXV0b3RhYiA9IChjdXJyZW50LCB0bykgPT4ge1xuICAvLyAgIGlmIChcbiAgLy8gICAgIGN1cnJlbnQuZ2V0QXR0cmlidXRlICYmXG4gIC8vICAgICBjdXJyZW50LnZhbHVlLmxlbmd0aCA9PSBjdXJyZW50LmdldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiKVxuICAvLyAgICkge1xuICAvLyAgICAgdG8uZm9jdXMoKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgY29uc3QgY2FsbFByb21wdCA9IChcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGxpbms6IHN0cmluZyxcbiAgICBsaW5rX3RleHQ6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgaWYgKHNob3cpIHNldFNob3coZmFsc2UpO1xuICAgIHNldFNob3codHJ1ZSk7XG4gICAgc2V0UHJvbXB0VGl0bGUodGl0bGUpO1xuICAgIHNldExpbmtUZXh0KGxpbmtfdGV4dCk7XG4gICAgc2V0TGlua1RvKGxpbmspO1xuICAgIHNldFByb21wdEJvZHkobWVzc2FnZSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0Q29kZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcnM6IGFueSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovLzUxLjExNi4xMTQuMTU1OjgwODAvYXV0aC9rZXlpbnB1dC9cIixcbiAgICAgICAge1xuICAgICAgICAgIGludGVnZXJfa2V5OiBwYXJzZUludChgJHtjb2RlMX0ke2NvZGUyfSR7Y29kZTN9JHtjb2RlNH1gKSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKHJzKTtcbiAgICAgIGNhbGxQcm9tcHQoXG4gICAgICAgIFwiVmVyaWZpY2F0aW9uXCIsXG4gICAgICAgIFwiL2F1dGgvbG9naW5cIixcbiAgICAgICAgXCJMb2dpblwiLFxuICAgICAgICBcIlZlcmlmaWNhdGlvbiBzdWNjZXNzZnVsXCJcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBjYWxsUHJvbXB0KFwiVmVyaWZpY2F0aW9uXCIsIFwiXCIsIFwiY2xvc2VcIiwgXCJWZXJpZmljYXRpb24gZmFpbGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPkFjY291bnQgVmVyaWZpY2F0aW9uPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQlZZaWlTSUZlSzFkR21KUkFreWN1SEFIUmczMk9tVWN3dzdvbjNSWWRnNFZhK1BtU1Rzei9LNjh2YmRFamg0dVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuMS4xL2pxdWVyeS5taW4uanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ib290c3RyYXAtc2hvdy1wYXNzd29yZC8xLjAuMy9ib290c3RyYXAtc2hvdy1wYXNzd29yZC5taW4uanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvYWNjb3VudF92ZXJpZmljYXRpb24uY3NzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9pbWFnZXMvTG9nby5zdmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICBFbnRlciBjb2RlIGZvclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25cbiAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2RlYm94XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb2RlMVwiXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezl9XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XXsxfVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2RlMX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2RlMShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29kZWJveFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29kZTJcIlxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezF9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXs5fVxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV17MX1cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZTJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29kZTIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvZGVib3hcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvZGUzXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgICBzaXplPXsxfVxuICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17OX1cbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldezF9XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvZGUzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvZGUzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2RlYm94XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb2RlNFwiXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezl9XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XXsxfVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2RlNH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2RlNChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgIElmIHlvdSBkb24ndCByZWNpZXZlIHRoZSBjb2RlIHdpdGhpblxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAxbWlucywgY2xpY2sgYmVsb3cgdG8gcmUtc2VuZCBpdC5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPHQ+XG4gICAgICAgICAgICAgICAgICA8dD48L3Q+XG4gICAgICAgICAgICAgICAgPC90PiAqL31cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZS1zZW5kYnRuXCIgaWQ9XCJyZS1zZW5kX2NvZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZW5kIENvZGU8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJlZnJlc2g8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD1cImNvdW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL2pzL2EuanNcIj48L3NjcmlwdD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1BY2NvdW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/confirmaccount.tsx\n");

/***/ })

})