webpackHotUpdate_N_E("pages/post/[path]",{

/***/ "./pages/post/[path].js":
/*!******************************!*\
  !*** ./pages/post/[path].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remarkable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remarkable */ \"./node_modules/remarkable/dist/esm/index.browser.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/robert/Documents/loaloa.tech/home/pages/post/[path].js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      query {\\n        markdownPost(\\n          url: \\\"_docs_next_advanced-features_customizing-babel-config.md\\\"\\n        ) {\\n          name\\n          url\\n          content\\n        }\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar md = new remarkable__WEBPACK_IMPORTED_MODULE_6__[\"Remarkable\"](\"full\", {\n  breakes: true,\n  html: true\n});\n\nvar Post = function Post(_ref) {\n  var markdownPost = _ref.markdownPost;\n  var html = md.render(markdownPost);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: \"md.render(markdownPost)\"\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Post;\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var _yield$request, markdownPost;\n\n    return _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(graphql_request__WEBPACK_IMPORTED_MODULE_4__[\"request\"])(\"http://localhost:3001/admin/api\", Object(graphql_request__WEBPACK_IMPORTED_MODULE_4__[\"gql\"])(_templateObject()));\n\n          case 2:\n            _yield$request = _context.sent;\n            markdownPost = _yield$request.markdownPost;\n            return _context.abrupt(\"return\", {\n              markdownPost: markdownPost\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bcGF0aF0uanM/NTRhYiJdLCJuYW1lcyI6WyJtZCIsIlJlbWFya2FibGUiLCJicmVha2VzIiwiaHRtbCIsIlBvc3QiLCJtYXJrZG93blBvc3QiLCJyZW5kZXIiLCJfX2h0bWwiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXF1ZXN0IiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQSxJQUFJQSxFQUFFLEdBQUcsSUFBSUMscURBQUosQ0FBZSxNQUFmLEVBQXVCO0FBQUVDLFNBQU8sRUFBRSxJQUFYO0FBQWlCQyxNQUFJLEVBQUU7QUFBdkIsQ0FBdkIsQ0FBVDs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFzQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDakMsTUFBTUYsSUFBSSxHQUFHSCxFQUFFLENBQUNNLE1BQUgsQ0FBVUQsWUFBVixDQUFiO0FBQ0Esc0JBQ0U7QUFBSywyQkFBdUIsRUFBRTtBQUFFRSxZQUFNLEVBQUU7QUFBVjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQUxEOztLQUFNSCxJOztBQU1OQSxJQUFJLENBQUNJLGVBQUw7QUFBQSx1U0FBdUIsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1VDLCtEQUFPLENBQ3BDLGlDQURvQyxFQUVwQ0MsMkRBRm9DLG9CQURqQjs7QUFBQTtBQUFBO0FBQ2JOLHdCQURhLGtCQUNiQSxZQURhO0FBQUEsNkNBZWQ7QUFBRUEsMEJBQVksRUFBWkE7QUFBRixhQWZjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlCZUQsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1twYXRoXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QsIGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcbmltcG9ydCBSZWFjdCwgeyBsYXp5LCBDb21wb25lbnQsIFN1c3BlbnNlLCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBSZW1hcmthYmxlIH0gZnJvbSBcInJlbWFya2FibGVcIjtcbnZhciBtZCA9IG5ldyBSZW1hcmthYmxlKFwiZnVsbFwiLCB7IGJyZWFrZXM6IHRydWUsIGh0bWw6IHRydWUgfSk7XG5cbmNvbnN0IFBvc3QgPSAoeyBtYXJrZG93blBvc3QgfSkgPT4ge1xuICBjb25zdCBodG1sID0gbWQucmVuZGVyKG1hcmtkb3duUG9zdCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IFwibWQucmVuZGVyKG1hcmtkb3duUG9zdClcIiB9fSAvPlxuICApO1xufTtcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCB7IG1hcmtkb3duUG9zdCB9ID0gYXdhaXQgcmVxdWVzdChcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZG1pbi9hcGlcIixcbiAgICBncWxgXG4gICAgICBxdWVyeSB7XG4gICAgICAgIG1hcmtkb3duUG9zdChcbiAgICAgICAgICB1cmw6IFwiX2RvY3NfbmV4dF9hZHZhbmNlZC1mZWF0dXJlc19jdXN0b21pemluZy1iYWJlbC1jb25maWcubWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgdXJsXG4gICAgICAgICAgY29udGVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICApO1xuICByZXR1cm4geyBtYXJrZG93blBvc3QgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[path].js\n");

/***/ })

})