"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Attribute.jsx":
/*!**********************************!*\
  !*** ./components/Attribute.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Attribute; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ \"./components/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Attribute(attribute) {\n    _s();\n    const [checkboxes, setCheckboxes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //insertData\n        setCheckboxes(attribute.attribute);\n    }, [\n        attribute\n    ]);\n    const handleCheckboxChange = async (arr, index)=>{\n        const updatedCheckboxes = [\n            ...checkboxes\n        ];\n        updatedCheckboxes[index].value = !updatedCheckboxes[index].value;\n        setCheckboxes(updatedCheckboxes);\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"attribute\", arr.id), arr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl  w-60 text-right border-2  mt-14\",\n                children: \"Delux Room\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-7xl mx-auto px-10 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 gap-x-20 lg:grid-cols-2\",\n                            children: checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex md:space-x-44 mt-6 justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"w-36 text-left\",\n                                            children: attribute.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex space-x-4 border-2 border-gray-500 p-2 rounded-md\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"checkbox\",\n                                                            checked: attribute.value,\n                                                            onChange: ()=>handleCheckboxChange(attribute, index),\n                                                            className: \"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                                            lineNumber: 39,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            htmlFor: \"checkbox\",\n                                                            className: \"ml-2 block text-sm text-gray-900\",\n                                                            children: \"Yes\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"checkbox\",\n                                                            checked: !attribute.value,\n                                                            onChange: ()=>handleCheckboxChange(attribute, index),\n                                                            className: \"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            htmlFor: \"checkbox\",\n                                                            className: \"ml-2 block text-sm text-gray-900\",\n                                                            children: \"No\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, attribute.name, true, {\n                                    fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mdari\\\\OneDrive\\\\Documents\\\\company\\\\task\\\\components\\\\Attribute.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Attribute, \"KW/jhA4eJGqLd/cClSthPHho1Tg=\");\n_c = Attribute;\nvar _c;\n$RefreshReg$(_c, \"Attribute\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F0dHJpYnV0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZDtBQUNFO0FBQzRCO0FBQ3hCO0FBRXJCLFNBQVNRLFVBQVVDLFNBQVM7O0lBQ3pDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLFlBQVk7UUFDWlcsY0FBY0YsVUFBVUEsU0FBUztJQUNuQyxHQUFHO1FBQUNBO0tBQVU7SUFFZCxNQUFNRyx1QkFBdUIsT0FBT0MsS0FBS0M7UUFDdkMsTUFBTUMsb0JBQW9CO2VBQUlMO1NBQVc7UUFDekNLLGlCQUFpQixDQUFDRCxNQUFNLENBQUNFLEtBQUssR0FBRyxDQUFDRCxpQkFBaUIsQ0FBQ0QsTUFBTSxDQUFDRSxLQUFLO1FBQ2hFTCxjQUFjSTtRQUVkLE1BQU1ULDZEQUFTQSxDQUFDRix1REFBR0EsQ0FBQ0QseUNBQUVBLEVBQUUsYUFBYVUsSUFBSUksRUFBRSxHQUFHSjtJQUNoRDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1gsK0NBQU1BOzs7OzswQkFDUCw4REFBQ2dCO2dCQUFHQyxXQUFVOzBCQUEyQzs7Ozs7OzBCQUN6RCw4REFBQ0M7Z0JBQUtELFdBQVU7MEJBQ2QsNEVBQUNFOzhCQUNDLDRFQUFDQztrQ0FDQyw0RUFBQ0Q7NEJBQUlGLFdBQVU7c0NBQ1pULHVCQUFBQSxpQ0FBQUEsV0FBWWEsR0FBRyxDQUFDLENBQUNkLFdBQVdLLHNCQUMzQiw4REFBQ087b0NBRUNGLFdBQVU7O3NEQUVWLDhEQUFDRDs0Q0FBR0MsV0FBVTtzREFBa0JWLFVBQVVlLElBQUk7Ozs7OztzREFDOUMsOERBQUNIOzRDQUFJRixXQUFVOzs4REFDYiw4REFBQ0U7b0RBQUlGLFdBQVU7O3NFQUNiLDhEQUFDTTs0REFDQ0MsTUFBSzs0REFDTEMsU0FBU2xCLFVBQVVPLEtBQUs7NERBQ3hCWSxVQUFVLElBQU1oQixxQkFBcUJILFdBQVdLOzREQUNoREssV0FBVTs7Ozs7O3NFQUVaLDhEQUFDVTs0REFDQ0MsU0FBUTs0REFDUlgsV0FBVTtzRUFDWDs7Ozs7Ozs7Ozs7OzhEQUlILDhEQUFDRTtvREFBSUYsV0FBVTs7c0VBQ2IsOERBQUNNOzREQUNDQyxNQUFLOzREQUNMQyxTQUFTLENBQUNsQixVQUFVTyxLQUFLOzREQUN6QlksVUFBVSxJQUFNaEIscUJBQXFCSCxXQUFXSzs0REFDaERLLFdBQVU7Ozs7OztzRUFFWiw4REFBQ1U7NERBQ0NDLFNBQVE7NERBQ1JYLFdBQVU7c0VBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBN0JBVixVQUFVZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ3JDO0dBcEV3QmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXR0cmlidXRlLmpzeD9mYTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBkb2MsIGdldERvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBpbnNlcnREYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXR0cmlidXRlKGF0dHJpYnV0ZSkge1xyXG4gIGNvbnN0IFtjaGVja2JveGVzLCBzZXRDaGVja2JveGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vaW5zZXJ0RGF0YVxyXG4gICAgc2V0Q2hlY2tib3hlcyhhdHRyaWJ1dGUuYXR0cmlidXRlKTtcclxuICB9LCBbYXR0cmlidXRlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gYXN5bmMgKGFyciwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRDaGVja2JveGVzID0gWy4uLmNoZWNrYm94ZXNdO1xyXG4gICAgdXBkYXRlZENoZWNrYm94ZXNbaW5kZXhdLnZhbHVlID0gIXVwZGF0ZWRDaGVja2JveGVzW2luZGV4XS52YWx1ZTtcclxuICAgIHNldENoZWNrYm94ZXModXBkYXRlZENoZWNrYm94ZXMpO1xyXG5cclxuICAgIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwiYXR0cmlidXRlXCIsIGFyci5pZCksIGFycik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgIHctNjAgdGV4dC1yaWdodCBib3JkZXItMiAgbXQtMTRcIj5EZWx1eCBSb29tPC9oMj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtMTAgXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteC0yMCBsZzpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgIHtjaGVja2JveGVzPy5tYXAoKGF0dHJpYnV0ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXthdHRyaWJ1dGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtZDpzcGFjZS14LTQ0IG10LTYganVzdGlmeS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctMzYgdGV4dC1sZWZ0XCI+e2F0dHJpYnV0ZS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHAtMiByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2F0dHJpYnV0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKGF0dHJpYnV0ZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtaW5kaWdvLTYwMCBmb2N1czpyaW5nLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJsb2NrIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IWF0dHJpYnV0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKGF0dHJpYnV0ZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtaW5kaWdvLTYwMCBmb2N1czpyaW5nLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJsb2NrIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsImRiIiwiZG9jIiwiZ2V0RG9jIiwidXBkYXRlRG9jIiwiaW5zZXJ0RGF0YSIsIkF0dHJpYnV0ZSIsImF0dHJpYnV0ZSIsImNoZWNrYm94ZXMiLCJzZXRDaGVja2JveGVzIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJhcnIiLCJpbmRleCIsInVwZGF0ZWRDaGVja2JveGVzIiwidmFsdWUiLCJpZCIsImgyIiwiY2xhc3NOYW1lIiwibWFpbiIsImRpdiIsImNlbnRlciIsIm1hcCIsIm5hbWUiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJsYWJlbCIsImh0bWxGb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Attribute.jsx\n"));

/***/ })

});