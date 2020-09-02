webpackHotUpdate_N_E("pages/auth/signup",{

/***/ "./pages/auth/signup.tsx":
/*!*******************************!*\
  !*** ./pages/auth/signup.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_emailValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/emailValidation */ "./utils/emailValidation.tsx");
/* harmony import */ var _utils_phoneValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/phoneValidation */ "./utils/phoneValidation.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\user\\Documents\\CommunityProject\\cp-fe\\pages\\auth\\signup.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Signup = function Signup() {
  _s();

  var data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      validated = _useState[0],
      setValidated = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      phoneNumber = _useState3[0],
      setPhoneNumber = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("invalid"),
      emailValidity = _useState4[0],
      setEmailValidity = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("invalid"),
      phoneValidity = _useState5[0],
      setPhoneValidity = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("mismatch"),
      confirmPassword = _useState7[0],
      setConfirmPassword = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("invalid"),
      passwordFieldValidity = _useState8[0],
      setPasswordFieldValidity = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Organization"),
      userType = _useState9[0],
      setUserType = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isSent = _useState10[0],
      setIsSent = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passwordShown = _useState11[0],
      setPasswordShown = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      show = _useState12[0],
      setShow = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      userName = _useState13[0],
      setUserName = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      firstName = _useState14[0],
      setFirstName = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      lastName = _useState15[0],
      setLastName = _useState15[1]; // const [loading, setLoading] = useState(false);
  // const [promptBody, setPromptBody] = useState("");
  // const [linkTo, setLinkTo] = useState(null);
  // const [linkText, setLinkText] = useState(null);


  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("blue"),
      statusColor = _useState16[0],
      setStatusColor = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      status = _useState17[0],
      setStatus = _useState17[1];

  var handleShow = function handleShow() {
    return setShow(true);
  };

  var handleClose = function handleClose() {
    return setShow(false);
  }; // Toggle Password Visibility


  var togglePasswordVisiblity = function togglePasswordVisiblity() {
    setPasswordShown(passwordShown ? false : true);
  };

  var loader = function loader() {
    return __jsx("span", {
      className: "spinner-border spinner-border-sm",
      role: "status",
      "aria-hidden": "true",
      style: {
        width: "1.5rem",
        height: "1.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }
    });
  }; // Email Phone Validation


  var validateEmail = function validateEmail(e) {
    if (Object(_utils_emailValidation__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target.value)) {
      setEmail(e.target.value);
      setEmailValidity("valid");
    } else {
      setEmailValidity("invalid");
    }
  };

  var validatePhone = function validatePhone(e) {
    if (Object(_utils_phoneValidation__WEBPACK_IMPORTED_MODULE_7__["default"])(e.target.value)) {
      setPhoneNumber(e.target.value);
      setPhoneValidity("valid");
    } else {
      setPhoneValidity("invalid");
    }
  }; // Password Validation


  var validatePassword = function validatePassword(e) {
    if (e.target.value.match(/[a-z]/g) && e.target.value.match(/[A-Z]/g) && e.target.value.match(/[0-9]/g) && e.target.value.match(/[^a-zA-Z\d]/g) && e.target.value.length >= 8) {
      // res = "TRUE";
      setPassword(e.target.value);
      setPasswordFieldValidity("valid");
    } // return true
    // set field to invalid
    else {
        // console.log("invalid password")
        setPasswordFieldValidity("invalid");
      }
  };

  var confirmPasswordMatch = function confirmPasswordMatch(e) {
    if (e.target.value === password) {
      setConfirmPassword("match"); // data.first_name = firstName
      // data.last_name = lastName
      // data.email = email
      // data.password = password
      // data.phone_number = phoneNumber
      // data.user_type = userType
    } else {
      setConfirmPassword("mismatch");
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var form, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault(); //   setLoading(true);

              console.log("Status");
              form = event.currentTarget;

              if (form.checkValidity() === false) {
                event.stopPropagation();
              }

              if (!(email && password === confirmPassword)) {
                _context.next = 20;
                break;
              }

              setStatusColor("blue");
              setStatus("Please wait...");
              _context.prev = 7;
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://51.116.114.155:8080/auth/registration/", {
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber
              });

            case 10:
              result = _context.sent;

              if (result) {
                // setLoading(false);
                console.log("RESULT:", result);

                if (result.status === 200 || result.statusText === "Created") {
                  // go to landing page
                  setStatusColor("blue");
                  setStatus("A confirmation has been sent to your email. Please retrieve the code and confirm acount"); //   setPromptBody(
                  //     "A confirmation has been sent to your email. Please retrieve the code and confirm acount"
                  //   );
                  //   setLinkTo("confirmaccount");
                  //   setLinkText("Confirm Account");
                  //   setShow(true);
                  //   setLoading(false);
                }
              }

              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);
              console.log(_context.t0.message);

              if (_context.t0.message === "Request failed with status code 400") {
                // setPromptBody("User with this email already exists");
                // setLinkText(null);
                // setLinkTo(null);
                // setShow(true);
                // setLoading(false);
                setStatusColor("red");
                setStatus("User with this email already exists");
              } else if (_context.t0.message === "Request failed with status code 404") {
                // bad endpoint
                setStatusColor("red");
                setStatus("An error occured");
              } else if (_context.t0.message === "Network Error") {
                setStatusColor("red");
                setStatus("Please check your network connection and try again."); // bad network connection
                // setPromptBody(
                //   "Please check your network connection and try again."
                // );
                // setShow(true);
                // setLoading(false);
              }

            case 18:
              _context.next = 22;
              break;

            case 20:
              setStatusColor("red");
              setStatus("Password mismatch");

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 14]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/auth.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/Logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, "Make the most out of your business")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, "Already on Market Circle?", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/auth/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, "Log in"))))), " ", __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, __jsx("form", {
    style: {
      width: "100%"
    },
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-group col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "Email address / Phone"), __jsx("input", {
    type: "email",
    className: "form-control cinput",
    id: "email",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-group col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "form-control cinput",
    id: "password",
    placeholder: "Password",
    "data-toggle": "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-group col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "confirm_password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, "Confirm Password"), __jsx("input", {
    type: "password",
    className: "form-control cinput",
    id: "confirm_password",
    placeholder: "Password",
    "data-toggle": "password",
    value: confirmPassword,
    onChange: function onChange(e) {
      return setConfirmPassword(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "form-group col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "radio",
    id: "organization",
    name: "account_type",
    value: "organization",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }), " ", __jsx("label", {
    htmlFor: "organization",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }, "Organization"), " ", __jsx("input", {
    type: "radio",
    id: "individual",
    name: "account_type",
    value: "individual",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }), " ", __jsx("label", {
    htmlFor: "individual",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, "Individual")), __jsx("div", {
    className: "form-group col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-primary btn-block submitbutton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, "Sign Up")), __jsx("div", {
    style: {
      textAlign: "center",
      color: statusColor
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, "\xA0", status), __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 11
    }
  }, "By clicking Sing up, you agree to the Market Circle", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }
  }), __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 15
    }
  }, "User Agreement,"), __jsx("a", {
    href: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 15
    }
  }, "Privacy Policy")), " ", "and", " ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, "Cookie Policy"))))));
};

_s(Signup, "6otoUtPQ5x/0LsyN9Fyvlyy2VKg=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWdudXAudHN4Il0sIm5hbWVzIjpbIlNpZ251cCIsImRhdGEiLCJ1c2VTdGF0ZSIsInZhbGlkYXRlZCIsInNldFZhbGlkYXRlZCIsImVtYWlsIiwic2V0RW1haWwiLCJwaG9uZU51bWJlciIsInNldFBob25lTnVtYmVyIiwiZW1haWxWYWxpZGl0eSIsInNldEVtYWlsVmFsaWRpdHkiLCJwaG9uZVZhbGlkaXR5Iiwic2V0UGhvbmVWYWxpZGl0eSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJwYXNzd29yZEZpZWxkVmFsaWRpdHkiLCJzZXRQYXNzd29yZEZpZWxkVmFsaWRpdHkiLCJ1c2VyVHlwZSIsInNldFVzZXJUeXBlIiwiaXNTZW50Iiwic2V0SXNTZW50IiwicGFzc3dvcmRTaG93biIsInNldFBhc3N3b3JkU2hvd24iLCJzaG93Iiwic2V0U2hvdyIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwic3RhdHVzQ29sb3IiLCJzZXRTdGF0dXNDb2xvciIsInN0YXR1cyIsInNldFN0YXR1cyIsImhhbmRsZVNob3ciLCJoYW5kbGVDbG9zZSIsInRvZ2dsZVBhc3N3b3JkVmlzaWJsaXR5IiwibG9hZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ2YWxpZGF0ZUVtYWlsIiwiZSIsImVtYWlsVmFsaWRhdGlvbiIsInRhcmdldCIsInZhbHVlIiwidmFsaWRhdGVQaG9uZSIsInBob25lVmFsaWRhdGlvbiIsInZhbGlkYXRlUGFzc3dvcmQiLCJtYXRjaCIsImxlbmd0aCIsImNvbmZpcm1QYXNzd29yZE1hdGNoIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJheGlvcyIsInBvc3QiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmVfbnVtYmVyIiwicmVzdWx0Iiwic3RhdHVzVGV4dCIsIm1lc3NhZ2UiLCJ0ZXh0QWxpZ24iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBSUMsSUFBSjs7QUFEbUIsa0JBRWVDLHNEQUFRLENBQUMsS0FBRCxDQUZ2QjtBQUFBLE1BRVpDLFNBRlk7QUFBQSxNQUVEQyxZQUZDOztBQUFBLG1CQUdPRixzREFBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BR1pHLEtBSFk7QUFBQSxNQUdMQyxRQUhLOztBQUFBLG1CQUltQkosc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJWkssV0FKWTtBQUFBLE1BSUNDLGNBSkQ7O0FBQUEsbUJBS3VCTixzREFBUSxDQUFDLFNBQUQsQ0FML0I7QUFBQSxNQUtaTyxhQUxZO0FBQUEsTUFLR0MsZ0JBTEg7O0FBQUEsbUJBTXVCUixzREFBUSxDQUFDLFNBQUQsQ0FOL0I7QUFBQSxNQU1aUyxhQU5ZO0FBQUEsTUFNR0MsZ0JBTkg7O0FBQUEsbUJBT2FWLHNEQUFRLENBQUMsRUFBRCxDQVByQjtBQUFBLE1BT1pXLFFBUFk7QUFBQSxNQU9GQyxXQVBFOztBQUFBLG1CQVEyQlosc0RBQVEsQ0FBQyxVQUFELENBUm5DO0FBQUEsTUFRWmEsZUFSWTtBQUFBLE1BUUtDLGtCQVJMOztBQUFBLG1CQVN1Q2Qsc0RBQVEsQ0FBQyxTQUFELENBVC9DO0FBQUEsTUFTWmUscUJBVFk7QUFBQSxNQVNXQyx3QkFUWDs7QUFBQSxtQkFVYWhCLHNEQUFRLENBQUMsY0FBRCxDQVZyQjtBQUFBLE1BVVppQixRQVZZO0FBQUEsTUFVRkMsV0FWRTs7QUFB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QUFBLE07QUE4VFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvc2lnbnVwLjZkMTBkMzZjZTNkNDYzZGIxMTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGVtYWlsVmFsaWRhdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvZW1haWxWYWxpZGF0aW9uXCI7XHJcbmltcG9ydCBwaG9uZVZhbGlkYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL3Bob25lVmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgbGV0IGRhdGE6IGFueTtcclxuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lTnVtYmVyLCBzZXRQaG9uZU51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWxWYWxpZGl0eSwgc2V0RW1haWxWYWxpZGl0eV0gPSB1c2VTdGF0ZShcImludmFsaWRcIik7XHJcbiAgY29uc3QgW3Bob25lVmFsaWRpdHksIHNldFBob25lVmFsaWRpdHldID0gdXNlU3RhdGUoXCJpbnZhbGlkXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwibWlzbWF0Y2hcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRmllbGRWYWxpZGl0eSwgc2V0UGFzc3dvcmRGaWVsZFZhbGlkaXR5XSA9IHVzZVN0YXRlKFwiaW52YWxpZFwiKTtcclxuICBjb25zdCBbdXNlclR5cGUsIHNldFVzZXJUeXBlXSA9IHVzZVN0YXRlKFwiT3JnYW5pemF0aW9uXCIpO1xyXG4gIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkU2hvd24sIHNldFBhc3N3b3JkU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbcHJvbXB0Qm9keSwgc2V0UHJvbXB0Qm9keV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCBbbGlua1RvLCBzZXRMaW5rVG9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gY29uc3QgW2xpbmtUZXh0LCBzZXRMaW5rVGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3RhdHVzQ29sb3IsIHNldFN0YXR1c0NvbG9yXSA9IHVzZVN0YXRlKFwiYmx1ZVwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRTaG93KHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcblxyXG4gIC8vIFRvZ2dsZSBQYXNzd29yZCBWaXNpYmlsaXR5XHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRWaXNpYmxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZFNob3duKHBhc3N3b3JkU2hvd24gPyBmYWxzZSA6IHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvYWRlciA9ICgpID0+IChcclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCJcclxuICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEuNXJlbVwiLCBoZWlnaHQ6IFwiMS41cmVtXCIgfX1cclxuICAgID48L3NwYW4+XHJcbiAgKTtcclxuXHJcbiAgLy8gRW1haWwgUGhvbmUgVmFsaWRhdGlvblxyXG4gIGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGVtYWlsVmFsaWRhdGlvbihlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRFbWFpbFZhbGlkaXR5KFwidmFsaWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFbWFpbFZhbGlkaXR5KFwiaW52YWxpZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZVBob25lID0gKGUpID0+IHtcclxuICAgIGlmIChwaG9uZVZhbGlkYXRpb24oZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgIHNldFBob25lTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0UGhvbmVWYWxpZGl0eShcInZhbGlkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UGhvbmVWYWxpZGl0eShcImludmFsaWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gUGFzc3dvcmQgVmFsaWRhdGlvblxyXG4gIGNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAoZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBlLnRhcmdldC52YWx1ZS5tYXRjaCgvW2Etel0vZykgJiZcclxuICAgICAgZS50YXJnZXQudmFsdWUubWF0Y2goL1tBLVpdL2cpICYmXHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlLm1hdGNoKC9bMC05XS9nKSAmJlxyXG4gICAgICBlLnRhcmdldC52YWx1ZS5tYXRjaCgvW15hLXpBLVpcXGRdL2cpICYmXHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSA4XHJcbiAgICApIHtcclxuICAgICAgLy8gcmVzID0gXCJUUlVFXCI7XHJcbiAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0UGFzc3dvcmRGaWVsZFZhbGlkaXR5KFwidmFsaWRcIik7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gdHJ1ZVxyXG4gICAgLy8gc2V0IGZpZWxkIHRvIGludmFsaWRcclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImludmFsaWQgcGFzc3dvcmRcIilcclxuICAgICAgc2V0UGFzc3dvcmRGaWVsZFZhbGlkaXR5KFwiaW52YWxpZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRNYXRjaCA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IHBhc3N3b3JkKSB7XHJcbiAgICAgIHNldENvbmZpcm1QYXNzd29yZChcIm1hdGNoXCIpO1xyXG4gICAgICAvLyBkYXRhLmZpcnN0X25hbWUgPSBmaXJzdE5hbWVcclxuICAgICAgLy8gZGF0YS5sYXN0X25hbWUgPSBsYXN0TmFtZVxyXG4gICAgICAvLyBkYXRhLmVtYWlsID0gZW1haWxcclxuICAgICAgLy8gZGF0YS5wYXNzd29yZCA9IHBhc3N3b3JkXHJcbiAgICAgIC8vIGRhdGEucGhvbmVfbnVtYmVyID0gcGhvbmVOdW1iZXJcclxuICAgICAgLy8gZGF0YS51c2VyX3R5cGUgPSB1c2VyVHlwZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKFwibWlzbWF0Y2hcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJTdGF0dXNcIik7XHJcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVtYWlsICYmIHBhc3N3b3JkID09PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgc2V0U3RhdHVzQ29sb3IoXCJibHVlXCIpO1xyXG4gICAgICBzZXRTdGF0dXMoXCJQbGVhc2Ugd2FpdC4uLlwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgXCJodHRwOi8vNTEuMTE2LjExNC4xNTU6ODA4MC9hdXRoL3JlZ2lzdHJhdGlvbi9cIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdF9uYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZU51bWJlcixcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTVUxUOlwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDIwMCB8fCByZXN1bHQuc3RhdHVzVGV4dCA9PT0gXCJDcmVhdGVkXCIpIHtcclxuICAgICAgICAgICAgLy8gZ28gdG8gbGFuZGluZyBwYWdlXHJcbiAgICAgICAgICAgIHNldFN0YXR1c0NvbG9yKFwiYmx1ZVwiKTtcclxuICAgICAgICAgICAgc2V0U3RhdHVzKFxyXG4gICAgICAgICAgICAgIFwiQSBjb25maXJtYXRpb24gaGFzIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsLiBQbGVhc2UgcmV0cmlldmUgdGhlIGNvZGUgYW5kIGNvbmZpcm0gYWNvdW50XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gICBzZXRQcm9tcHRCb2R5KFxyXG4gICAgICAgICAgICAvLyAgICAgXCJBIGNvbmZpcm1hdGlvbiBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuIFBsZWFzZSByZXRyaWV2ZSB0aGUgY29kZSBhbmQgY29uZmlybSBhY291bnRcIlxyXG4gICAgICAgICAgICAvLyAgICk7XHJcbiAgICAgICAgICAgIC8vICAgc2V0TGlua1RvKFwiY29uZmlybWFjY291bnRcIik7XHJcbiAgICAgICAgICAgIC8vICAgc2V0TGlua1RleHQoXCJDb25maXJtIEFjY291bnRcIik7XHJcbiAgICAgICAgICAgIC8vICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgICAgICAgLy8gICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDBcIikge1xyXG4gICAgICAgICAgLy8gc2V0UHJvbXB0Qm9keShcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgICAgLy8gc2V0TGlua1RleHQobnVsbCk7XHJcbiAgICAgICAgICAvLyBzZXRMaW5rVG8obnVsbCk7XHJcbiAgICAgICAgICAvLyBzZXRTaG93KHRydWUpO1xyXG4gICAgICAgICAgLy8gc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRTdGF0dXNDb2xvcihcInJlZFwiKTtcclxuICAgICAgICAgIHNldFN0YXR1cyhcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIikge1xyXG4gICAgICAgICAgLy8gYmFkIGVuZHBvaW50XHJcbiAgICAgICAgICBzZXRTdGF0dXNDb2xvcihcInJlZFwiKTtcclxuICAgICAgICAgIHNldFN0YXR1cyhcIkFuIGVycm9yIG9jY3VyZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlcnIubWVzc2FnZSA9PT0gXCJOZXR3b3JrIEVycm9yXCIpIHtcclxuICAgICAgICAgIHNldFN0YXR1c0NvbG9yKFwicmVkXCIpO1xyXG4gICAgICAgICAgc2V0U3RhdHVzKFwiUGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICAgICAgLy8gYmFkIG5ldHdvcmsgY29ubmVjdGlvblxyXG4gICAgICAgICAgLy8gc2V0UHJvbXB0Qm9keShcclxuICAgICAgICAgIC8vICAgXCJQbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGNvbm5lY3Rpb24gYW5kIHRyeSBhZ2Fpbi5cIlxyXG4gICAgICAgICAgLy8gKTtcclxuICAgICAgICAgIC8vIHNldFNob3codHJ1ZSk7XHJcbiAgICAgICAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0YXR1c0NvbG9yKFwicmVkXCIpO1xyXG4gICAgICBzZXRTdGF0dXMoXCJQYXNzd29yZCBtaXNtYXRjaFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvYXV0aC5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0xvZ28ucG5nXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGI+TWFrZSB0aGUgbW9zdCBvdXQgb2YgeW91ciBidXNpbmVzczwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgQWxyZWFkeSBvbiBNYXJrZXQgQ2lyY2xlP3tcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpblwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8Yj5Mb2cgaW48L2I+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxmb3JtIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RuYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY2lucHV0XCJcclxuICAgICAgICAgICAgICBpZD1cImZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RuYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjaW5wdXRcIlxyXG4gICAgICAgICAgICAgIGlkPVwibGFzdG5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZV9udW1iZXJcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNpbnB1dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZV9udW1iZXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaG9uZU51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzIC8gUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjaW5wdXRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjaW5wdXRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1fcGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY2lucHV0XCJcclxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm1fcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb25maXJtUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgaWQ9XCJvcmdhbml6YXRpb25cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50X3R5cGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPVwib3JnYW5pemF0aW9uXCJcclxuICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3JnYW5pemF0aW9uXCI+T3JnYW5pemF0aW9uPC9sYWJlbD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbmRpdmlkdWFsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudF90eXBlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT1cImluZGl2aWR1YWxcIlxyXG4gICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbmRpdmlkdWFsXCI+SW5kaXZpZHVhbDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgc3VibWl0YnV0dG9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IHN0YXR1c0NvbG9yLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAmbmJzcDt7c3RhdHVzfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCeSBjbGlja2luZyBTaW5nIHVwLCB5b3UgYWdyZWUgdG8gdGhlIE1hcmtldCBDaXJjbGVcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Vc2VyIEFncmVlbWVudCw8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlByaXZhY3kgUG9saWN5PC9hPlxyXG4gICAgICAgICAgICA8L2I+e1wiIFwifVxyXG4gICAgICAgICAgICBhbmR7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Db29raWUgUG9saWN5PC9hPlxyXG4gICAgICAgICAgICA8L2I+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==