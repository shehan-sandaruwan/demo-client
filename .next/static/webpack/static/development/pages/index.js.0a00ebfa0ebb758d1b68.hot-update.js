webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/NewsFeedItem.js":
/*!***********************************!*\
  !*** ./component/NewsFeedItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NewsFeedItem.module.css */ "./component/NewsFeedItem.module.css");
/* harmony import */ var _NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "D:\\Demo App\\demo-app\\component\\NewsFeedItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var NewsFeedItem = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NewsFeedItem, _React$Component);

  var _super = _createSuper(NewsFeedItem);

  function NewsFeedItem(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsFeedItem);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "heartClickHandler", function () {
      _this.setState({
        isLike: !_this.state.isLike
      }, _this.updateHeart);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateHeart", function () {
      var _this$props$detail = _this.props.detail,
          index = _this$props$detail.index,
          id = _this$props$detail.id;
      var heart = document.getElementById(id);
      var addClass = _this.state.isLike ? "fa-heart" : "fa-heart-o";
      var removeClass = _this.state.isLike ? "fa-heart-o" : "fa-heart";
      heart.classList.remove(removeClass);
      heart.classList.add(addClass);

      _this.sendDataToBackend();

      if (typeof _this.props.clickOnHeart === "function") {
        _this.props.clickOnHeart(index);
      }
    });

    _this.state = {
      isLike: props.detail.isLiked
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NewsFeedItem, [{
    key: "sendDataToBackend",
    value: function sendDataToBackend() {
      var detail, requestOptions, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function sendDataToBackend$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              detail = this.props.detail;
              detail.isLiked = this.state.isLike;
              requestOptions = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(detail)
              };
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default()("http://localhost:9000/favorite/update", requestOptions));

            case 5:
              response = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var detail = this.props.detail;
      return __jsx("div", {
        className: "jsx-3228929806" + " " + (_NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.cardPosition || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Img, {
        className: _NewsFeedItem_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.imageSize,
        variant: "top",
        src: detail.src,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, {
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
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, detail.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Text, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, "Animals are a diverse group of organisms that make up the kingdom known as Animalia. ... The general description of an animal is a multicellular, heterotrophic organism")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Footer, {
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
      }, "Last updated 3 mins ago"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3228929806",
        __self: this
      }, ".fa-heart-o.jsx-3228929806{color:red;cursor:pointer;}.fa-heart.jsx-3228929806{color:red;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZW1vIEFwcFxcZGVtby1hcHBcXGNvbXBvbmVudFxcTmV3c0ZlZWRJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Gb0IsQUFHdUIsQUFLQSxVQUpLLEFBS0EsZUFKakIsQUFLQSIsImZpbGUiOiJEOlxcRGVtbyBBcHBcXGRlbW8tYXBwXFxjb21wb25lbnRcXE5ld3NGZWVkSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmV3c0ZlZWRJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG5jbGFzcyBOZXdzRmVlZEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0xpa2U6IHByb3BzLmRldGFpbC5pc0xpa2VkLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmREYXRhVG9CYWNrZW5kKCkge1xyXG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgZGV0YWlsLmlzTGlrZWQgPSB0aGlzLnN0YXRlLmlzTGlrZTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkZXRhaWwpLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9mYXZvcml0ZS91cGRhdGVcIixcclxuICAgICAgcmVxdWVzdE9wdGlvbnNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoZWFydENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBpc0xpa2U6ICF0aGlzLnN0YXRlLmlzTGlrZSxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy51cGRhdGVIZWFydFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVIZWFydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW5kZXgsIGlkIH0gPSB0aGlzLnByb3BzLmRldGFpbDtcclxuXHJcbiAgICBjb25zdCBoZWFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGNvbnN0IGFkZENsYXNzID0gdGhpcy5zdGF0ZS5pc0xpa2UgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIjtcclxuICAgIGNvbnN0IHJlbW92ZUNsYXNzID0gdGhpcy5zdGF0ZS5pc0xpa2UgPyBcImZhLWhlYXJ0LW9cIiA6IFwiZmEtaGVhcnRcIjtcclxuXHJcbiAgICBoZWFydC5jbGFzc0xpc3QucmVtb3ZlKHJlbW92ZUNsYXNzKTtcclxuICAgIGhlYXJ0LmNsYXNzTGlzdC5hZGQoYWRkQ2xhc3MpO1xyXG4gICAgdGhpcy5zZW5kRGF0YVRvQmFja2VuZCgpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jbGlja09uSGVhcnQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICB0aGlzLnByb3BzLmNsaWNrT25IZWFydChpbmRleCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkUG9zaXRpb259PlxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPENhcmQuSW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlU2l6ZX1cclxuICAgICAgICAgICAgdmFyaWFudD1cInRvcFwiXHJcbiAgICAgICAgICAgIHNyYz17ZGV0YWlsLnNyY31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmhlYXJ0Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgaWQ9e2RldGFpbC5pZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0LW9cIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxDYXJkLlRpdGxlPntkZXRhaWwudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgIEFuaW1hbHMgYXJlIGEgZGl2ZXJzZSBncm91cCBvZiBvcmdhbmlzbXMgdGhhdCBtYWtlIHVwIHRoZSBraW5nZG9tXHJcbiAgICAgICAgICAgICAga25vd24gYXMgQW5pbWFsaWEuIC4uLiBUaGUgZ2VuZXJhbCBkZXNjcmlwdGlvbiBvZiBhbiBhbmltYWwgaXMgYVxyXG4gICAgICAgICAgICAgIG11bHRpY2VsbHVsYXIsIGhldGVyb3Ryb3BoaWMgb3JnYW5pc21cclxuICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5MYXN0IHVwZGF0ZWQgMyBtaW5zIGFnbzwvc21hbGw+XHJcbiAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuZmEtaGVhcnQtbyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZmEtaGVhcnQge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzRmVlZEl0ZW07XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Demo App\\\\demo-app\\\\component\\\\NewsFeedItem.js */"));
    }
  }]);

  return NewsFeedItem;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NewsFeedItem);

/***/ })

})
//# sourceMappingURL=index.js.0a00ebfa0ebb758d1b68.hot-update.js.map