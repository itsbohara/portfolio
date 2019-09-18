webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Cover/Cover.tsx":
/*!************************************!*\
  !*** ./components/Cover/Cover.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Icons/MediaIcons/MediaIcons */ "./components/UI/Icons/MediaIcons/MediaIcons.tsx");
/* harmony import */ var _context_toolbarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/toolbarContext */ "./context/toolbarContext.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");

var _jsxFileName = "/home/joojo/code/portfolio/components/Cover/Cover.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var css = __webpack_require__(/*! ./Cover.css */ "./components/Cover/Cover.css");

var Cover = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function () {
  var toolbarContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_toolbarContext__WEBPACK_IMPORTED_MODULE_3__["ToolbarContext"]);
  var coverRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    window.addEventListener('scroll', scrollHandler, true);
    return function () {
      return window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  var scrollHandler = function scrollHandler() {};

  var scrollToPortfolio = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    if (coverRef && coverRef.current) {
      var posToScrollTo = coverRef.current.clientHeight;
      window.scrollTo({
        top: posToScrollTo,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [coverRef]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      hoverArrow = _React$useState2[0],
      setHoverArrow = _React$useState2[1];

  var arrowTextClasses = [css.ArrowText, hoverArrow ? css["in"] : css.out].join(' ');

  var transitionHandler = function transitionHandler() {
    console.log('transition end');
  };

  return __jsx("div", {
    className: css.Main,
    ref: coverRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: css.Parallax,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: css.MediaIcons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx("div", {
    className: css.TitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("span", {
    className: css.FirstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Joona"), __jsx("span", {
    className: css.Surname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Joenpolvi"), __jsx("span", {
    className: css.Description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Front-End Developer")), __jsx("div", {
    className: css.ArrowContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: css.ArrowIcon,
    onClick: scrollToPortfolio,
    onMouseOver: function onMouseOver() {
      return setHoverArrow(true);
    },
    onMouseOut: function onMouseOut() {
      return setHoverArrow(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_5__["icons"].faChevronDown,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx("p", {
    className: arrowTextClasses,
    onTransitionEnd: transitionHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "to portfolio")));
});
/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ })

})
//# sourceMappingURL=index.js.16e2df2507791aecc2a0.hot-update.js.map