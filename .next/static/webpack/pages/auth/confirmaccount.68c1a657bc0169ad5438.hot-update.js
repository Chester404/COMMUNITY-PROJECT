webpackHotUpdate_N_E("pages/auth/confirmaccount",{

/***/ "./pages/auth/confirmaccount.tsx":
/*!***************************************!*\
  !*** ./pages/auth/confirmaccount.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_HeaderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HeaderComponent */ "./components/HeaderComponent.tsx");
/* harmony import */ var _components_CenterContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CenterContent */ "./components/CenterContent.jsx");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CardComponent */ "./components/CardComponent.tsx");
/* harmony import */ var _components_ContainerComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContainerComponent */ "./components/ContainerComponent.tsx");
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/style.css */ "./public/style.css");
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\pages\\auth\\confirmaccount.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





 // const ReactCodeInput = dynamic(import("react-code-input"));

// import "react-input-verification-code/dist/index.css";
// Next stuff
 // import dynamic from "next/dynamic";



var ConfirmAaccount = function ConfirmAaccount() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      code = _useState[0],
      setCode = _useState[1]; // console.log("code:", code);


  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://51.116.114.155:8080/auth/keyinput/", {
                integer_key: code
              });

            case 3:
              result = _context.sent;
              console.log("RESULT:", result);
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_components_HeaderComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_components_CenterContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_components_ContainerComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_components_CardComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "27em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Enter code the verfication ")), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }), __jsx("button", {
    id: "login_button",
    className: "btn btn-primary btn-lg btn-block",
    type: "button",
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Continue"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, "If you don't receive the code within 1 minute, tap below to resend it", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "Resend"))))))));
};

_s(ConfirmAaccount, "IyWYJSZmPOQ025EjfLsvo6LmHmg=");

_c = ConfirmAaccount;
/* harmony default export */ __webpack_exports__["default"] = (ConfirmAaccount);

var _c;

$RefreshReg$(_c, "ConfirmAaccount");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9jb25maXJtYWNjb3VudC50c3giXSwibmFtZXMiOlsiQ29uZmlybUFhY2NvdW50IiwidXNlU3RhdGUiLCJjb2RlIiwic2V0Q29kZSIsImhhbmRsZVN1Ym1pdCIsImF4aW9zIiwicG9zdCIsImludGVnZXJfa2V5IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Q0FHQTs7QUFJQTtBQUVBO0NBRUE7O0FBRUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQUMsRUFBRCxDQURKO0FBQUEsTUFDckJDLElBRHFCO0FBQUEsTUFDZkMsT0FEZSxpQkFFNUI7OztBQUNBLE1BQU1DLFlBQVk7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUlDLDRDQUFLLENBQUNDLElBQU4sQ0FDbkIsMkNBRG1CLEVBRW5CO0FBQ0VDLDJCQUFXLEVBQUVMO0FBRGYsZUFGbUIsQ0FGSjs7QUFBQTtBQUVYTSxvQkFGVztBQVNqQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLE1BQXZCO0FBVGlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpKLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBWUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQWUsU0FBSyxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFRRTtBQUNFLE1BQUUsRUFBQyxjQURMO0FBRUUsYUFBUyxFQUFDLGtDQUZaO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxXQUFPLEVBQUVBLFlBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBaUJFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQUpGLENBakJGLENBREYsQ0FERixDQURGLENBRkYsQ0FERjtBQXFDRCxDQXBERDs7R0FBTUosZTs7S0FBQUEsZTtBQXNEU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9jb25maXJtYWNjb3VudC42OGMxYTY1N2JjMDE2OWFkNTQzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgSGVhZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ2VudGVyQ29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DZW50ZXJDb250ZW50XCI7XHJcbmltcG9ydCBDYXJkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRDb21wb25lbnRcIjtcclxuaW1wb3J0IENvbnRhaW5lckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IFwiLi4vLi4vcHVibGljL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGNvbnN0IFJlYWN0Q29kZUlucHV0ID0gZHluYW1pYyhpbXBvcnQoXCJyZWFjdC1jb2RlLWlucHV0XCIpKTtcclxuXHJcbmltcG9ydCBSZWFjdElucHV0VmVyaWZpY2F0aW9uQ29kZSBmcm9tIFwicmVhY3QtaW5wdXQtdmVyaWZpY2F0aW9uLWNvZGVcIjtcclxuXHJcbi8vIGltcG9ydCBcInJlYWN0LWlucHV0LXZlcmlmaWNhdGlvbi1jb2RlL2Rpc3QvaW5kZXguY3NzXCI7XHJcblxyXG4vLyBOZXh0IHN0dWZmXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQ29uZmlybUFhY2NvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiY29kZTpcIiwgY29kZSk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly81MS4xMTYuMTE0LjE1NTo4MDgwL2F1dGgva2V5aW5wdXQvXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW50ZWdlcl9rZXk6IGNvZGUsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJSRVNVTFQ6XCIsIHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlckNvbXBvbmVudCAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICA8Q2VudGVyQ29udGVudD5cclxuICAgICAgICAgIDxDb250YWluZXJDb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDxDYXJkQ29tcG9uZW50IHdpZHRoPVwiMjdlbVwiPlxyXG4gICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5FbnRlciBjb2RlIHRoZSB2ZXJmaWNhdGlvbiA8L2gyPlxyXG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8UmVhY3RJbnB1dFZlcmlmaWNhdGlvbkNvZGUgLz4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGlkPVwibG9naW5fYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSWYgeW91IGRvbid0IHJlY2VpdmUgdGhlIGNvZGUgd2l0aGluIDEgbWludXRlLCB0YXAgYmVsb3cgdG9cclxuICAgICAgICAgICAgICAgIHJlc2VuZCBpdFxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5SZXNlbmQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbXBvbmVudD5cclxuICAgICAgICAgIDwvQ29udGFpbmVyQ29tcG9uZW50PlxyXG4gICAgICAgIDwvQ2VudGVyQ29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybUFhY2NvdW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9