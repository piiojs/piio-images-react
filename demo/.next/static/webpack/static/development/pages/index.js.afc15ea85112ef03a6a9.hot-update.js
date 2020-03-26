webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/piio/piio.js":
/*!*********************************!*\
  !*** ./components/piio/piio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Piio =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Piio, _React$Component);

  function Piio(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Piio);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Piio).call(this, props));

    if (typeof document != 'undefined') {
      _this.handleScripts();
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Piio, [{
    key: "handleScripts",
    value: function handleScripts() {
      //Append to head
      var preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = '//pcdn.piiojs.com';
      document.head.appendChild(preconnect);
      var preload = document.createElement('link');
      preload.rel = 'preload';
      preload.as = 'script';
      preload.href = '//pcdn.piiojs.com/' + this.props.domainKey + '/image.min.js';
      document.head.appendChild(preload);
      var piioScript = document.createElement('script');
      piioScript.type = 'text/javascript';
      piioScript.textContent = '(function(i,m,a,g,e) {e = i.getElementsByTagName(m)[0], (g = i.createElement(m)).src = "//pcdn.piiojs.com/"+a+"/image.min.js",g.onerror = function() {(g = i.createElement(m)).src = "https://fs.piio.co/image-failover.min.js",e.parentNode.insertBefore(g, e);}, e.parentNode.insertBefore(g, e);}(document, "script", "' + this.props.domainKey + '"));';
      document.head.appendChild(piioScript);
    }
  }, {
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return Piio;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Piio);

/***/ })

})
//# sourceMappingURL=index.js.afc15ea85112ef03a6a9.hot-update.js.map