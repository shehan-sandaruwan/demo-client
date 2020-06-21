webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/FavoriteItem.js":
/*!***********************************!*\
  !*** ./component/FavoriteItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FavoriteItem.module.css */ "./component/FavoriteItem.module.css");
/* harmony import */ var _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\Demo App\\demo-app\\component\\FavoriteItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var deleteFavItem = function deleteFavItem() {};

var FavoriteItem = function FavoriteItem(_ref) {
  var detail = _ref.detail;

  if (detail.isLiked) {
    return __jsx("div", {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardPosition,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageSize,
      src: detail.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textPosition,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, detail.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, "You Liked this picture on"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "danger",
      onClick: deleteFavItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, "Remove"))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FavoriteItem);

/***/ })

})
//# sourceMappingURL=index.js.87de7bdc90e7a0b1a1c9.hot-update.js.map