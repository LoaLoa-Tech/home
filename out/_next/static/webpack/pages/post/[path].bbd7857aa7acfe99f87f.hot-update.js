webpackHotUpdate_N_E("pages/post/[path]",{

/***/ "./pages/post/[path].js":
/*!******************************!*\
  !*** ./pages/post/[path].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var remarkable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remarkable */ \"./node_modules/remarkable/dist/esm/index.browser.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/robert/Documents/loaloa.tech/home/pages/post/[path].js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      query {\\n        markdownPost(\\n          url: \\\"_docs_next_advanced-features_customizing-babel-config.md\\\"\\n        ) {\\n          name\\n          url\\n          content\\n        }\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar md = new remarkable__WEBPACK_IMPORTED_MODULE_6__[\"Remarkable\"](\"full\", {\n  breakes: true,\n  html: true\n});\n\nvar Post = function Post(_ref) {\n  var markdownPost = _ref.markdownPost;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"section\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: md.render(markdownPost.content)\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Post;\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var _yield$request, markdownPost;\n\n    return _home_robert_Documents_loaloa_tech_home_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(ctx);\n            _context.next = 3;\n            return Object(graphql_request__WEBPACK_IMPORTED_MODULE_4__[\"request\"])(\"http://localhost:3001/admin/api\", Object(graphql_request__WEBPACK_IMPORTED_MODULE_4__[\"gql\"])(_templateObject()));\n\n          case 3:\n            _yield$request = _context.sent;\n            markdownPost = _yield$request.markdownPost;\n            return _context.abrupt(\"return\", {\n              markdownPost: markdownPost\n            });\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bcGF0aF0uanM/NTRhYiJdLCJuYW1lcyI6WyJtZCIsIlJlbWFya2FibGUiLCJicmVha2VzIiwiaHRtbCIsIlBvc3QiLCJtYXJrZG93blBvc3QiLCJfX2h0bWwiLCJyZW5kZXIiLCJjb250ZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJncWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBLElBQUlBLEVBQUUsR0FBRyxJQUFJQyxxREFBSixDQUFlLE1BQWYsRUFBdUI7QUFBRUMsU0FBTyxFQUFFLElBQVg7QUFBaUJDLE1BQUksRUFBRTtBQUF2QixDQUF2QixDQUFUOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXNCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUNqQyxzQkFDRTtBQUFTLGFBQVMsRUFBQyxXQUFuQjtBQUFBLDJCQUNFO0FBQ0UsNkJBQXVCLEVBQUU7QUFBRUMsY0FBTSxFQUFFTixFQUFFLENBQUNPLE1BQUgsQ0FBVUYsWUFBWSxDQUFDRyxPQUF2QjtBQUFWO0FBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVJEOztLQUFNSixJOztBQVNOQSxJQUFJLENBQUNLLGVBQUw7QUFBQSx1U0FBdUIsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBRHFCO0FBQUEsbUJBRVVHLCtEQUFPLENBQ3BDLGlDQURvQyxFQUVwQ0MsMkRBRm9DLG9CQUZqQjs7QUFBQTtBQUFBO0FBRWJULHdCQUZhLGtCQUViQSxZQUZhO0FBQUEsNkNBZ0JkO0FBQUVBLDBCQUFZLEVBQVpBO0FBQUYsYUFoQmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JlRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3BhdGhdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCwgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuaW1wb3J0IFJlYWN0LCB7IGxhenksIENvbXBvbmVudCwgU3VzcGVuc2UsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJlbWFya2FibGUgfSBmcm9tIFwicmVtYXJrYWJsZVwiO1xudmFyIG1kID0gbmV3IFJlbWFya2FibGUoXCJmdWxsXCIsIHsgYnJlYWtlczogdHJ1ZSwgaHRtbDogdHJ1ZSB9KTtcblxuY29uc3QgUG9zdCA9ICh7IG1hcmtkb3duUG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWQucmVuZGVyKG1hcmtkb3duUG9zdC5jb250ZW50KSB9fVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnNvbGUubG9nKGN0eCk7XG4gIGNvbnN0IHsgbWFya2Rvd25Qb3N0IH0gPSBhd2FpdCByZXF1ZXN0KFxuICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FkbWluL2FwaVwiLFxuICAgIGdxbGBcbiAgICAgIHF1ZXJ5IHtcbiAgICAgICAgbWFya2Rvd25Qb3N0KFxuICAgICAgICAgIHVybDogXCJfZG9jc19uZXh0X2FkdmFuY2VkLWZlYXR1cmVzX2N1c3RvbWl6aW5nLWJhYmVsLWNvbmZpZy5tZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB1cmxcbiAgICAgICAgICBjb250ZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gICk7XG4gIHJldHVybiB7IG1hcmtkb3duUG9zdCB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[path].js\n");

/***/ })

})