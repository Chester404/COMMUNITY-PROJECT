webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./lib/endpoints/auth.ts":
/*!*******************************!*\
  !*** ./lib/endpoints/auth.ts ***!
  \*******************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Auth\", function() { return Auth; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _ufetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ufetch */ \"./lib/ufetch.js\");\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar Auth = /*#__PURE__*/function () {\n  function Auth() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Auth);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Auth, [{\n    key: \"signup\",\n    value: function () {\n      var _signup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(params) {\n        var query_params;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                query_params = new URLSearchParams(params).toString();\n                _context.next = 3;\n                return Object(_ufetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/register\", {\n                  method: \"POST\",\n                  body: query_params\n                });\n\n              case 3:\n                return _context.abrupt(\"return\", _context.sent);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function signup(_x) {\n        return _signup.apply(this, arguments);\n      }\n\n      return signup;\n    }()\n  }, {\n    key: \"login\",\n    value: function () {\n      var _login = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(authentication_property, password) {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                //authentication_property: email or phone number for login\n                // const rs = await axios.post(\"http://51.116.114.155:8080/auth/token\", {\n                //   authentication_property: authentication_property,\n                //   password: password,\n                //   // authentication_property: \"ogembodennis@gmail.com\",\n                //   // password: \"@Beloved2020\",\n                // });\n                // return rs;\n                data = new URLSearchParams({\n                  authentication_property: authentication_property,\n                  password: password\n                }).toString();\n                _context2.next = 3;\n                return Object(_ufetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/auth/token\", {\n                  method: \"POST\",\n                  body: data\n                });\n\n              case 3:\n                return _context2.abrupt(\"return\", _context2.sent);\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function login(_x2, _x3) {\n        return _login.apply(this, arguments);\n      }\n\n      return login;\n    }()\n  }, {\n    key: \"forgotpassword\",\n    value: function () {\n      var _forgotpassword = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(authentication_property) {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                data = new URLSearchParams(authentication_property).toString();\n                _context3.next = 3;\n                return Object(_ufetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/auth/password-forgotten\", {\n                  method: \"POST\",\n                  body: data\n                });\n\n              case 3:\n                return _context3.abrupt(\"return\", _context3.sent);\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function forgotpassword(_x4) {\n        return _forgotpassword.apply(this, arguments);\n      }\n\n      return forgotpassword;\n    }()\n  }, {\n    key: \"generic_query\",\n    value: function () {\n      var _generic_query = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(ctx) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return Object(_ufetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/\".concat(ctx.endpoint, \"/\").concat(ctx.query_params), _objectSpread({\n                  method: ctx.method\n                }, ctx.options));\n\n              case 2:\n                return _context4.abrupt(\"return\", _context4.sent);\n\n              case 3:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function generic_query(_x5) {\n        return _generic_query.apply(this, arguments);\n      }\n\n      return generic_query;\n    }()\n  }]);\n\n  return Auth;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2VuZHBvaW50cy9hdXRoLnRzP2VkOTIiXSwibmFtZXMiOlsiQXV0aCIsInBhcmFtcyIsInF1ZXJ5X3BhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwidWZldGNoIiwibWV0aG9kIiwiYm9keSIsImF1dGhlbnRpY2F0aW9uX3Byb3BlcnR5IiwicGFzc3dvcmQiLCJkYXRhIiwiY3R4IiwiZW5kcG9pbnQiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNQSxJQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHNOQUNlQyxNQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVVQyw0QkFGVixHQUV5QixJQUFJQyxlQUFKLENBQW9CRixNQUFwQixFQUFtQ0csUUFBbkMsRUFGekI7QUFBQTtBQUFBLHVCQUdpQkMsdURBQU0sQ0FBQyxXQUFELEVBQWM7QUFDL0JDLHdCQUFNLEVBQUUsTUFEdUI7QUFFL0JDLHNCQUFJLEVBQUVMO0FBRnlCLGlCQUFkLENBSHZCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzTkFTY00sdUJBVGQsRUFTK0NDLFFBVC9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDTUMsb0JBbkJWLEdBbUJpQixJQUFJUCxlQUFKLENBQW9CO0FBQy9CSyx5Q0FBdUIsRUFBdkJBLHVCQUQrQjtBQUUvQkMsMEJBQVEsRUFBUkE7QUFGK0IsaUJBQXBCLEVBR1ZMLFFBSFUsRUFuQmpCO0FBQUE7QUFBQSx1QkF1QmlCQyx1REFBTSxDQUFDLGFBQUQsRUFBZ0I7QUFDakNDLHdCQUFNLEVBQUUsTUFEeUI7QUFFakNDLHNCQUFJLEVBQUVHO0FBRjJCLGlCQUFoQixDQXZCdkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtOQTZCdUJGLHVCQTdCdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJVRSxvQkE5QlYsR0E4QmlCLElBQUlQLGVBQUosQ0FBb0JLLHVCQUFwQixFQUE2Q0osUUFBN0MsRUE5QmpCO0FBQUE7QUFBQSx1QkErQmlCQyx1REFBTSxDQUFDLDBCQUFELEVBQTZCO0FBQzlDQyx3QkFBTSxFQUFFLE1BRHNDO0FBRTlDQyxzQkFBSSxFQUFFRztBQUZ3QyxpQkFBN0IsQ0EvQnZCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4TkFxQ2dDQyxHQXJDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBc0NpQk4sdURBQU0sWUFBS00sR0FBRyxDQUFDQyxRQUFULGNBQXFCRCxHQUFHLENBQUNULFlBQXpCO0FBQ2pCSSx3QkFBTSxFQUFFSyxHQUFHLENBQUNMO0FBREssbUJBRWRLLEdBQUcsQ0FBQ0UsT0FGVSxFQXRDdkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9saWIvZW5kcG9pbnRzL2F1dGgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdWZldGNoIGZyb20gXCIuLi91ZmV0Y2hcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGgge1xuICBhc3luYyBzaWdudXAocGFyYW1zOiBhbnkpIHtcbiAgICBjb25zdCBxdWVyeV9wYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyBhcyBhbnkpLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIGF3YWl0IHVmZXRjaChcIi9yZWdpc3RlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogcXVlcnlfcGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW4oYXV0aGVudGljYXRpb25fcHJvcGVydHk6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIC8vYXV0aGVudGljYXRpb25fcHJvcGVydHk6IGVtYWlsIG9yIHBob25lIG51bWJlciBmb3IgbG9naW5cbiAgICAvLyBjb25zdCBycyA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vNTEuMTE2LjExNC4xNTU6ODA4MC9hdXRoL3Rva2VuXCIsIHtcbiAgICAvLyAgIGF1dGhlbnRpY2F0aW9uX3Byb3BlcnR5OiBhdXRoZW50aWNhdGlvbl9wcm9wZXJ0eSxcbiAgICAvLyAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAvLyAgIC8vIGF1dGhlbnRpY2F0aW9uX3Byb3BlcnR5OiBcIm9nZW1ib2Rlbm5pc0BnbWFpbC5jb21cIixcbiAgICAvLyAgIC8vIHBhc3N3b3JkOiBcIkBCZWxvdmVkMjAyMFwiLFxuICAgIC8vIH0pO1xuXG4gICAgLy8gcmV0dXJuIHJzO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgIGF1dGhlbnRpY2F0aW9uX3Byb3BlcnR5LFxuICAgICAgcGFzc3dvcmQsXG4gICAgfSkudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gYXdhaXQgdWZldGNoKFwiL2F1dGgvdG9rZW5cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmb3Jnb3RwYXNzd29yZChhdXRoZW50aWNhdGlvbl9wcm9wZXJ0eTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXV0aGVudGljYXRpb25fcHJvcGVydHkpLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIGF3YWl0IHVmZXRjaChcIi9hdXRoL3Bhc3N3b3JkLWZvcmdvdHRlblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBnZW5lcmljX3F1ZXJ5KGN0eDogYW55KSB7XG4gICAgcmV0dXJuIGF3YWl0IHVmZXRjaChgLyR7Y3R4LmVuZHBvaW50fS8ke2N0eC5xdWVyeV9wYXJhbXN9YCwge1xuICAgICAgbWV0aG9kOiBjdHgubWV0aG9kLFxuICAgICAgLi4uY3R4Lm9wdGlvbnMsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/endpoints/auth.ts\n");

/***/ }),

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false

})