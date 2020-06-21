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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/FavoriteItem.js":
/*!***********************************!*\
  !*** ./component/FavoriteItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FavoriteItem.module.css */ "./component/FavoriteItem.module.css");
/* harmony import */ var _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Demo App\\demo-app\\component\\FavoriteItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const deleteFavItem = async (detail, onRemoveItem) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(detail)
  };
  const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:9000/favorite/remove", requestOptions);

  if (typeof onRemoveItem === "function") {
    onRemoveItem(detail);
  }
};

const FavoriteItem = ({
  detail,
  onRemoveItem
}) => {
  if (detail && detail.isLiked) {
    return __jsx("div", {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardPosition,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageSize,
      src: detail.src,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textPosition,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, detail.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, "You Liked this picture"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "danger",
      onClick: () => deleteFavItem(detail, onRemoveItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, "Remove"))));
  } else {
    return __jsx("div", {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardPosition,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, "You don't have any liked item")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FavoriteItem);

/***/ }),

/***/ "./component/FavoriteItem.module.css":
/*!*******************************************!*\
  !*** ./component/FavoriteItem.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardPosition": "FavoriteItem_cardPosition__3ptt5",
	"imageSize": "FavoriteItem_imageSize__3X8ea",
	"textPosition": "FavoriteItem_textPosition__1TO3Z"
};

/***/ }),

/***/ "./component/Layout.js":
/*!*****************************!*\
  !*** ./component/Layout.js ***!
  \*****************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./component/Navbar.js");
/* harmony import */ var _NewsFeedItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsFeedItem */ "./component/NewsFeedItem.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ "./component/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FavoriteItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FavoriteItem */ "./component/FavoriteItem.js");
var _jsxFileName = "D:\\Demo App\\demo-app\\component\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const siteTitle = "Demo App";
class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }), children);
  }

}

/***/ }),

/***/ "./component/Layout.module.css":
/*!*************************************!*\
  !*** ./component/Layout.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"topClearance": "Layout_topClearance__1GgV9"
};

/***/ }),

/***/ "./component/Navbar.js":
/*!*****************************!*\
  !*** ./component/Navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Demo App\\demo-app\\component\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavbarComp = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
  bg: "dark",
  className: "fixed-top",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx("img", {
  src: "/home.png",
  width: "40",
  height: "40",
  alt: "Home logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
  href: "/favorite",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, __jsx("img", {
  src: "/heart.png",
  width: "40",
  height: "40",
  alt: "Favorite logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (NavbarComp);

/***/ }),

/***/ "./component/NewsFeedItem.js":
/*!***********************************!*\
  !*** ./component/NewsFeedItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsFeedItem.module.css */ "./component/NewsFeedItem.module.css");
/* harmony import */ var _NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Demo App\\demo-app\\component\\NewsFeedItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class NewsFeedItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "heartClickHandler", () => {
      this.setState({
        isLike: !this.state.isLike
      }, this.updateHeart);
    });

    _defineProperty(this, "updateHeart", () => {
      const {
        index,
        id
      } = this.props.detail;
      const heart = document.getElementById(id);
      const addClass = this.state.isLike ? "fa-heart" : "fa-heart-o";
      const removeClass = this.state.isLike ? "fa-heart-o" : "fa-heart";
      heart.classList.remove(removeClass);
      heart.classList.add(addClass);
      this.sendDataToBackend();

      if (typeof this.props.clickOnHeart === "function") {
        this.props.clickOnHeart(index);
      }
    });

    this.state = {
      isLike: props.detail.isLiked
    };
  }

  async sendDataToBackend() {
    const {
      detail
    } = this.props;
    detail.isLiked = this.state.isLike;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(detail)
    };
    const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:9000/favorite/update", requestOptions);
  }

  render() {
    const {
      detail
    } = this.props;
    return __jsx("div", {
      className: "jsx-3228929806" + " " + (_NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardPosition || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
      className: _NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imageSize,
      variant: "top",
      src: detail.src,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, __jsx("span", {
      onClick: this.heartClickHandler,
      className: "jsx-3228929806",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx("i", {
      id: detail.id,
      "aria-hidden": "true",
      className: "jsx-3228929806" + " " + "fa fa-heart-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, detail.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, "Animals are a diverse group of organisms that make up the kingdom known as Animalia. ... The general description of an animal is a multicellular, heterotrophic organism")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Footer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }, __jsx("small", {
      className: "jsx-3228929806" + " " + "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, "#wildLife"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3228929806",
      __self: this
    }, ".fa-heart-o.jsx-3228929806{color:red;cursor:pointer;}.fa-heart.jsx-3228929806{color:red;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZW1vIEFwcFxcZGVtby1hcHBcXGNvbXBvbmVudFxcTmV3c0ZlZWRJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Gb0IsQUFHdUIsQUFLQSxVQUpLLEFBS0EsZUFKakIsQUFLQSIsImZpbGUiOiJEOlxcRGVtbyBBcHBcXGRlbW8tYXBwXFxjb21wb25lbnRcXE5ld3NGZWVkSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmV3c0ZlZWRJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG5jbGFzcyBOZXdzRmVlZEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0xpa2U6IHByb3BzLmRldGFpbC5pc0xpa2VkLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmREYXRhVG9CYWNrZW5kKCkge1xyXG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgZGV0YWlsLmlzTGlrZWQgPSB0aGlzLnN0YXRlLmlzTGlrZTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkZXRhaWwpLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9mYXZvcml0ZS91cGRhdGVcIixcclxuICAgICAgcmVxdWVzdE9wdGlvbnNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoZWFydENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBpc0xpa2U6ICF0aGlzLnN0YXRlLmlzTGlrZSxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy51cGRhdGVIZWFydFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVIZWFydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW5kZXgsIGlkIH0gPSB0aGlzLnByb3BzLmRldGFpbDtcclxuXHJcbiAgICBjb25zdCBoZWFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGNvbnN0IGFkZENsYXNzID0gdGhpcy5zdGF0ZS5pc0xpa2UgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIjtcclxuICAgIGNvbnN0IHJlbW92ZUNsYXNzID0gdGhpcy5zdGF0ZS5pc0xpa2UgPyBcImZhLWhlYXJ0LW9cIiA6IFwiZmEtaGVhcnRcIjtcclxuXHJcbiAgICBoZWFydC5jbGFzc0xpc3QucmVtb3ZlKHJlbW92ZUNsYXNzKTtcclxuICAgIGhlYXJ0LmNsYXNzTGlzdC5hZGQoYWRkQ2xhc3MpO1xyXG4gICAgdGhpcy5zZW5kRGF0YVRvQmFja2VuZCgpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jbGlja09uSGVhcnQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICB0aGlzLnByb3BzLmNsaWNrT25IZWFydChpbmRleCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkUG9zaXRpb259PlxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPENhcmQuSW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlU2l6ZX1cclxuICAgICAgICAgICAgdmFyaWFudD1cInRvcFwiXHJcbiAgICAgICAgICAgIHNyYz17ZGV0YWlsLnNyY31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmhlYXJ0Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgaWQ9e2RldGFpbC5pZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW9cIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxDYXJkLlRpdGxlPntkZXRhaWwudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgIEFuaW1hbHMgYXJlIGEgZGl2ZXJzZSBncm91cCBvZiBvcmdhbmlzbXMgdGhhdCBtYWtlIHVwIHRoZSBraW5nZG9tXHJcbiAgICAgICAgICAgICAga25vd24gYXMgQW5pbWFsaWEuIC4uLiBUaGUgZ2VuZXJhbCBkZXNjcmlwdGlvbiBvZiBhbiBhbmltYWwgaXMgYVxyXG4gICAgICAgICAgICAgIG11bHRpY2VsbHVsYXIsIGhldGVyb3Ryb3BoaWMgb3JnYW5pc21cclxuICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4jd2lsZExpZmU8L3NtYWxsPlxyXG4gICAgICAgICAgPC9DYXJkLkZvb3Rlcj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmZhLWhlYXJ0LW8ge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmZhLWhlYXJ0IHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0ZlZWRJdGVtO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Demo App\\\\demo-app\\\\component\\\\NewsFeedItem.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NewsFeedItem);

/***/ }),

/***/ "./component/NewsFeedItem.module.css":
/*!*******************************************!*\
  !*** ./component/NewsFeedItem.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardPosition": "NewsFeedItem_cardPosition__Yew7G",
	"imageSize": "NewsFeedItem_imageSize__4wBBT"
};

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
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_NewsFeedItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/NewsFeedItem */ "./component/NewsFeedItem.js");
/* harmony import */ var _public_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/utils.module.css */ "./public/utils.module.css");
/* harmony import */ var _public_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Demo App\\demo-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super();

    _defineProperty(this, "handleNewsFeedItemList", index => {
      const newsFeedItemList = [...this.state.newsFeedItemList];
      newsFeedItemList[index].isLiked = true;
      this.setState({
        newsFeedItemList
      });
    });

    this.state = {
      newsFeedItemList: [{
        index: 0,
        src: "./tiger.jpg",
        title: "Tiger",
        id: "1_tiger",
        isLiked: false
      }, {
        index: 1,
        src: "./turtle.jpg",
        title: "Turtle",
        id: "2_turtle",
        isLiked: false
      }, {
        index: 2,
        src: "./sambar-deer.jpg",
        title: "Samber Deer",
        id: "3_deer",
        isLiked: false
      }, {
        index: 3,
        src: "./squirrel.jpg",
        title: "Squrrel",
        id: "4_squirrel",
        isLiked: false
      }, {
        index: 4,
        src: "./pupy.jpg",
        title: "Pupy",
        id: "5_pupy",
        isLiked: false
      }]
    };
  }

  render() {
    const {
      newsFeedItemList
    } = this.state;
    return __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, _component_Layout__WEBPACK_IMPORTED_MODULE_2__["siteTitle"]), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: _public_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.topClearance,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, newsFeedItemList.map((item, key) => {
      return __jsx(_component_NewsFeedItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: key,
        detail: item,
        clickOnHeart: this.handleNewsFeedItemList,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      });
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./public/utils.module.css":
/*!*********************************!*\
  !*** ./public/utils.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"topClearance": "utils_topClearance__1t9SC",
	"cardPosition": "utils_cardPosition__384Mz"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Demo App\demo-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

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

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map