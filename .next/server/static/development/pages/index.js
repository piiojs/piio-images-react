module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/piioElement.js":
/*!***********************************!*\
  !*** ./components/piioElement.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class PiioElement extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const maxW100 = {
      maxWidth: "100%"
    };
    const backgroundProps = {
      minHeight: "400px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffc107"
    };
    const TagName = this.props.tag.toLowerCase();
    let parsedProps = Object.assign({}, this.props);
    delete parsedProps['path'];

    if (TagName === 'img' || TagName === 'source') {
      parsedProps['data-piio'] = this.props.path;
      parsedProps['style'] = maxW100;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TagName, parsedProps, null);
    } else {
      parsedProps['data-piio-bck'] = this.props.path;
      parsedProps['style'] = backgroundProps;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TagName, parsedProps, this.props.children);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PiioElement);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_piioElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/piioElement */ "./components/piioElement.js");
var _jsxFileName = "/Applications/MAMP/htdocs/piio/components/piio-image-react/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("link", {
  rel: "preconnect",
  href: "//pcdn.piiojs.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("link", {
  rel: "preload",
  as: "script",
  href: "//pcdn.piiojs.com/demo/image.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Piio images for Vue.js"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Image tag example"), __jsx(_components_piioElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg",
  tag: "img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx(_components_piioElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg",
  tag: "IMG",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Background example"), __jsx(_components_piioElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg",
  tag: "div",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Your website faster,your images sharper.")), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Picture tag with multiple sources example"), __jsx("picture", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(_components_piioElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg",
  tag: "source",
  media: "(min-width:969px)",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx(_components_piioElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg",
  tag: "source",
  media: "(max-width:969px)",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx(_components_piioElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
  path: "https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg",
  tag: "img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
})), __jsx("script", {
  src: "/app.min.js",
  async: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/piio/components/piio-image-react/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=index.js.map