webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/FavoriteItem.js":
/*!***********************************!*\
  !*** ./component/FavoriteItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FavoriteItem.module.css */ "./component/FavoriteItem.module.css");
/* harmony import */ var _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "D:\\Demo App\\demo-app\\component\\FavoriteItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var deleteFavItem = function deleteFavItem(detail, onRemoveItem) {
  var requestOptions, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteFavItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(detail)
          };
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:9000/favorite/remove", requestOptions));

        case 3:
          response = _context.sent;

          if (typeof onRemoveItem === "function") {
            onRemoveItem(detail);
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var FavoriteItem = function FavoriteItem(_ref) {
  var detail = _ref.detail,
      onRemoveItem = _ref.onRemoveItem;

  if (detail.isLiked) {
    return __jsx("div", {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardPosition,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imageSize,
      src: detail.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      className: _FavoriteItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textPosition,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, detail.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, "You Liked this picture on"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "danger",
      onClick: deleteFavItem(detail, onRemoveItem),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, "Remove"))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FavoriteItem);

/***/ })

})
//# sourceMappingURL=index.js.301cd5c112881921b932.hot-update.js.map