webpackHotUpdate_N_E("pages/post/[path]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/extract-files/public/ReactNativeFile.js":
false,

/***/ "./node_modules/extract-files/public/extractFiles.js":
false,

/***/ "./node_modules/extract-files/public/index.mjs":
false,

/***/ "./node_modules/extract-files/public/isExtractableFile.js":
false,

/***/ "./node_modules/form-data/lib/browser.js":
false,

/***/ "./node_modules/graphql-request/dist/createRequestBody.js":
false,

/***/ "./node_modules/graphql-request/dist/index.js":
false,

/***/ "./node_modules/graphql-request/dist/types.js":
false,

/***/ "./node_modules/graphql-request/node_modules/cross-fetch/dist/browser-ponyfill.js":
false,

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
false,

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
false,

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
false,

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
false,

/***/ "./node_modules/graphql/language/ast.mjs":
false,

/***/ "./node_modules/graphql/language/blockString.mjs":
false,

/***/ "./node_modules/graphql/language/printer.mjs":
false,

/***/ "./node_modules/graphql/language/visitor.mjs":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/post/[path].js":
/*!******************************!*\
  !*** ./pages/post/[path].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var remarkable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remarkable */ \"./node_modules/remarkable/dist/esm/index.browser.js\");\n\n\nvar _jsxFileName = \"/home/robert/Documents/loaloa.tech/home/pages/post/[path].js\",\n    _this = undefined;\n\n\n\nvar md = new remarkable__WEBPACK_IMPORTED_MODULE_2__[\"Remarkable\"](\"full\", {\n  breakes: true,\n  html: true\n});\n\nvar Post = function Post(_ref) {\n  var markdownPost = _ref.markdownPost;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: md.render(markdownPost.content)\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bcGF0aF0uanM/NTRhYiJdLCJuYW1lcyI6WyJtZCIsIlJlbWFya2FibGUiLCJicmVha2VzIiwiaHRtbCIsIlBvc3QiLCJtYXJrZG93blBvc3QiLCJfX2h0bWwiLCJyZW5kZXIiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0EsSUFBSUEsRUFBRSxHQUFHLElBQUlDLHFEQUFKLENBQWUsTUFBZixFQUF1QjtBQUFFQyxTQUFPLEVBQUUsSUFBWDtBQUFpQkMsTUFBSSxFQUFFO0FBQXZCLENBQXZCLENBQVQ7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBc0I7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ2pDLHNCQUNFO0FBQVMsYUFBUyxFQUFDLFdBQW5CO0FBQUEsMkJBQ0U7QUFDRSw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVOLEVBQUUsQ0FBQ08sTUFBSCxDQUFVRixZQUFZLENBQUNHLE9BQXZCO0FBQVY7QUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O0tBQU1KLEk7O0FBMkJTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3BhdGhdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCwgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuaW1wb3J0IFJlYWN0LCB7IGxhenksIENvbXBvbmVudCwgU3VzcGVuc2UsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJlbWFya2FibGUgfSBmcm9tIFwicmVtYXJrYWJsZVwiO1xudmFyIG1kID0gbmV3IFJlbWFya2FibGUoXCJmdWxsXCIsIHsgYnJlYWtlczogdHJ1ZSwgaHRtbDogdHJ1ZSB9KTtcblxuY29uc3QgUG9zdCA9ICh7IG1hcmtkb3duUG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWQucmVuZGVyKG1hcmtkb3duUG9zdC5jb250ZW50KSB9fVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuICBjb25zdCB7IHBhdGggfSA9IGN0eC5xdWVyeTtcbiAgY29uc3QgeyBtYXJrZG93blBvc3QgfSA9IGF3YWl0IHJlcXVlc3QoXG4gICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRtaW4vYXBpXCIsXG4gICAgZ3FsYFxuICAgICAgcXVlcnkge1xuICAgICAgICBtYXJrZG93blBvc3QoXG4gICAgICAgICAgdXJsOiBcIiR7cGF0aH1cIlxuICAgICAgICApIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgdXJsXG4gICAgICAgICAgY29udGVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICApO1xuICByZXR1cm4geyBwcm9wczogeyBtYXJrZG93blBvc3QgfSB9O1xufVxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[path].js\n");

/***/ })

})