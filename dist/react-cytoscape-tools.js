(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!**************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./Cytoscape.jsx":
/*!***********************!*\
  !*** ./Cytoscape.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CytoscapePropTypes */ "./CytoscapePropTypes.js");
/* harmony import */ var _InternalPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InternalPropTypes */ "./InternalPropTypes.js");
/* harmony import */ var _CytoscapeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CytoscapeView */ "./CytoscapeView.jsx");
/* harmony import */ var _CytoscapeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CytoscapeProvider */ "./CytoscapeProvider.jsx");
var _jsxFileName = "/home/wgoldie/Documents/react-cytoscape-tools/src/Cytoscape.jsx";







var Cytoscape = function Cytoscape(_ref) {
  var cytoscape = _ref.cytoscape,
      cyJSON = _ref.cyJSON,
      cyInitJSON = _ref.cyInitJSON,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CytoscapeProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CytoscapeView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cytoscape: cytoscape,
    cyJSON: cyJSON,
    cyInitJSON: cyInitJSON,
    style: style,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children));
};

Cytoscape.defaultProps = {
  cytoscape: __webpack_require__(/*! cytoscape */ "cytoscape"),
  // eslint-disable-line global-require
  cyInitJSON: {},
  cyJSON: {},
  style: {},
  className: '',
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div')
};
Cytoscape.propTypes = {
  cytoscape: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  cyInitJSON: _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_2__["default"].cyJSON,
  cyJSON: _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_2__["default"].cyJSON,
  style: _InternalPropTypes__WEBPACK_IMPORTED_MODULE_3__["default"].style,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Cytoscape);

/***/ }),

/***/ "./CytoscapeContext.js":
/*!*****************************!*\
  !*** ./CytoscapeContext.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CytoscapeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  cy: null,
  setCy: function setCy() {}
});
/* harmony default export */ __webpack_exports__["default"] = (CytoscapeContext);

/***/ }),

/***/ "./CytoscapeController.jsx":
/*!*********************************!*\
  !*** ./CytoscapeController.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/inherits */ "../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CytoscapePropTypes */ "./CytoscapePropTypes.js");
/* harmony import */ var _CytoscapeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CytoscapeContext */ "./CytoscapeContext.js");










var CytoscapeController =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CytoscapeController, _React$Component);

  function CytoscapeController() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CytoscapeController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CytoscapeController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.updateCytoscape = function (oldProps) {
      var cyJSON = _this.props.cyJSON;

      if (oldProps.cyJSON !== cyJSON) {
        _this.context.cy.json(cyJSON);
      }
    };

    return _this;
  }

  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CytoscapeController, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      this.updateCytoscape(oldProps);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateCytoscape({});
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return CytoscapeController;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

CytoscapeController.defaultProps = {
  cyJSON: {},
  children: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div')
};
CytoscapeController.propTypes = {
  cyJSON: _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_7__["default"].cyJSON,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node
};
CytoscapeController.contextType = _CytoscapeContext__WEBPACK_IMPORTED_MODULE_8__["default"];
/* harmony default export */ __webpack_exports__["default"] = (CytoscapeController);

/***/ }),

/***/ "./CytoscapeElement/container.js":
/*!***************************************!*\
  !*** ./CytoscapeElement/container.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/inherits */ "../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/objectSpread */ "../node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CytoscapePropTypes */ "./CytoscapePropTypes.js");
/* harmony import */ var _InternalPropTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InternalPropTypes */ "./InternalPropTypes.js");
/* harmony import */ var _CytoscapeContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../CytoscapeContext */ "./CytoscapeContext.js");
/* harmony import */ var _presentation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./presentation */ "./CytoscapeElement/presentation.jsx");












/*
 * Attaches the given cytoscape library
 * instance to the given element
 */

var attachCytoscape = function attachCytoscape(cytoscape, element, initJSON) {
  return cytoscape(Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({
    container: element
  }, initJSON));
};

var CytoscapeElementContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CytoscapeElementContainer, _React$Component);

  function CytoscapeElementContainer(props) {
    var _this;

    Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CytoscapeElementContainer);

    _this = Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CytoscapeElementContainer).call(this, props));
    _this.cyRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CytoscapeElementContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cyNode = this.cyRef.current;
      var _this$props = this.props,
          cytoscape = _this$props.cytoscape,
          cyInitJSON = _this$props.cyInitJSON;
      var cy = attachCytoscape(cytoscape, cyNode, cyInitJSON);
      this.context.setCy(cy);
    }
  }, {
    key: "render",
    value: function render() {
      var cyRef = this.cyRef;
      var _this$props2 = this.props,
          style = _this$props2.style,
          className = _this$props2.className,
          children = _this$props2.children;
      return Object(_presentation__WEBPACK_IMPORTED_MODULE_11__["default"])({
        cyRef: cyRef,
        style: style,
        className: className,
        children: children
      });
    }
  }]);

  return CytoscapeElementContainer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CytoscapeElementContainer.contextType = _CytoscapeContext__WEBPACK_IMPORTED_MODULE_10__["default"];
CytoscapeElementContainer.defaultProps = {
  cytoscape: __webpack_require__(/*! cytoscape */ "cytoscape"),
  // eslint-disable-line global-require
  cyInitJSON: {},
  style: {},
  className: '',
  children: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('div')
};
CytoscapeElementContainer.propTypes = {
  cytoscape: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  cyInitJSON: _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_8__["default"].cyJSON,
  style: _InternalPropTypes__WEBPACK_IMPORTED_MODULE_9__["default"].style,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (CytoscapeElementContainer);

/***/ }),

/***/ "./CytoscapeElement/index.js":
/*!***********************************!*\
  !*** ./CytoscapeElement/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./CytoscapeElement/container.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./CytoscapeElement/presentation.jsx":
/*!*******************************************!*\
  !*** ./CytoscapeElement/presentation.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InternalPropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InternalPropTypes */ "./InternalPropTypes.js");
var _jsxFileName = "/home/wgoldie/Documents/react-cytoscape-tools/src/CytoscapeElement/presentation.jsx";




var CytoscapeElementPresentation = function CytoscapeElementPresentation(_ref) {
  var cyRef = _ref.cyRef,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    className: className,
    id: "cy",
    ref: cyRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children);
};

CytoscapeElementPresentation.propTypes = {
  cyRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired,
  style: _InternalPropTypes__WEBPACK_IMPORTED_MODULE_2__["default"].style.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CytoscapeElementPresentation);

/***/ }),

/***/ "./CytoscapeGate.js":
/*!**************************!*\
  !*** ./CytoscapeGate.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/inherits */ "../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CytoscapeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CytoscapeContext */ "./CytoscapeContext.js");









var CytoscapeGate =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CytoscapeGate, _React$Component);

  function CytoscapeGate() {
    Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CytoscapeGate);

    return Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CytoscapeGate).apply(this, arguments));
  }

  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CytoscapeGate, [{
    key: "render",
    value: function render() {
      return this.context.cy ? this.props.children : this.props.gateComponent;
    }
  }]);

  return CytoscapeGate;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

CytoscapeGate.defaultProps = {
  gateComponent: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div')
};
CytoscapeGate.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,
  gateComponent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node
};
CytoscapeGate.contextType = _CytoscapeContext__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (CytoscapeGate);

/***/ }),

/***/ "./CytoscapePropTypes.js":
/*!*******************************!*\
  !*** ./CytoscapePropTypes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/objectSpread */ "../node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var xyPos = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
});
var anyElementPropTypes = {
  scratch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  position: xyPos,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  locked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  grabbable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
var cyId = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]);
var cyEdge = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anyElementPropTypes, {
  group: function group(prop) {
    return prop === 'edges';
  },
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: cyId,
    parent: cyId,
    source: cyId.isRequired,
    target: cyId.isRequired
  })
}));
var cyNode = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anyElementPropTypes, {
  group: function group(prop) {
    return prop === 'nodes';
  },
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: cyId,
    parent: cyId
  })
}));
var cyGenericElement = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  group: function group(props, propName, componentName) {
    if (props.group) {
      return new Error("Invalid element json with group '".concat(props.group, "'supplied to ").concat(componentName, ".\n        Group must be 'nodes', 'edges', or undefined,\n        and edges must have source and target properties."));
    }

    return undefined;
  }
});
var cyElement = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([cyEdge, cyNode, cyGenericElement]);
var cyLayout = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});
var cyStyle = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  selector: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
}), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]);
var cyJSON = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  container: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Element),
  elements: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(cyElement),
  layout: cyElement,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(cyStyle),
  zoom: xyPos,
  minZoom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  maxZoom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  zoomingEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  panningEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  userPanningEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  boxSelectionEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  selectionType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['single', 'additive']),
  touchTapThreshold: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  desktopTapThreshold: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  autolock: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoungrabify: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autounselectify: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  headless: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  styleEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideEdgesOnViewport: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideLabelsOnViewport: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  textureOnViewport: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  motionBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  motionBlurOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  wheelSensitivity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  pixelRatio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
});
/* harmony default export */ __webpack_exports__["default"] = ({
  cyId: cyId,
  cyJSON: cyJSON,
  cyNode: cyNode,
  cyEdge: cyEdge,
  cyElement: cyElement,
  cyLayout: cyLayout,
  cyStyle: cyStyle
});

/***/ }),

/***/ "./CytoscapeProvider.jsx":
/*!*******************************!*\
  !*** ./CytoscapeProvider.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/inherits */ "../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CytoscapeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CytoscapeContext */ "./CytoscapeContext.js");





var _jsxFileName = "/home/wgoldie/Documents/react-cytoscape-tools/src/CytoscapeProvider.jsx";




var CytoscapeProvider =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CytoscapeProvider, _React$Component);

  function CytoscapeProvider(props) {
    var _this;

    Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CytoscapeProvider);

    _this = Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CytoscapeProvider).call(this, props));

    _this.handleSetCy = function (cy) {
      return _this.setState({
        cy: cy
      });
    };

    _this.state = {
      cy: null
    };
    return _this;
  }

  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CytoscapeProvider, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var handleSetCy = this.handleSetCy;
      var cy = this.state.cy;
      var value = {
        cy: cy,
        setCy: handleSetCy
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CytoscapeContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, children);
    }
  }]);

  return CytoscapeProvider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

CytoscapeProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CytoscapeProvider);

/***/ }),

/***/ "./CytoscapeView.jsx":
/*!***************************!*\
  !*** ./CytoscapeView.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/inherits */ "../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _InternalPropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InternalPropTypes */ "./InternalPropTypes.js");
/* harmony import */ var _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CytoscapePropTypes */ "./CytoscapePropTypes.js");
/* harmony import */ var _CytoscapeElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CytoscapeElement */ "./CytoscapeElement/index.js");
/* harmony import */ var _CytoscapeContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CytoscapeContext */ "./CytoscapeContext.js");
/* harmony import */ var _CytoscapeController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CytoscapeController */ "./CytoscapeController.jsx");
/* harmony import */ var _CytoscapeGate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CytoscapeGate */ "./CytoscapeGate.js");





var _jsxFileName = "/home/wgoldie/Documents/react-cytoscape-tools/src/CytoscapeView.jsx";









var CytoscapeView =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CytoscapeView, _React$Component);

  function CytoscapeView() {
    Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CytoscapeView);

    return Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CytoscapeView).apply(this, arguments));
  }

  Object(_home_wgoldie_Documents_react_cytoscape_tools_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CytoscapeView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var cyJSON = this.props.cyJSON;

      if (oldProps.cyJSON !== cyJSON) {
        this.context.cy.json(cyJSON);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cytoscape = _this$props.cytoscape,
          cyInitJSON = _this$props.cyInitJSON,
          cyJSON = _this$props.cyJSON,
          style = _this$props.style,
          className = _this$props.className,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CytoscapeElement__WEBPACK_IMPORTED_MODULE_9__["default"], {
        cytoscape: cytoscape,
        cyInitJSON: cyInitJSON || cyJSON,
        style: style,
        className: className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CytoscapeGate__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CytoscapeController__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })));
    }
  }]);

  return CytoscapeView;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

CytoscapeView.defaultProps = {
  cytoscape: __webpack_require__(/*! cytoscape */ "cytoscape"),
  // eslint-disable-line global-require
  cyInitJSON: {},
  cyJSON: {},
  style: {},
  className: '',
  children: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div')
};
CytoscapeView.propTypes = {
  cytoscape: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  cyInitJSON: _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_8__["default"].cyJSON,
  cyJSON: _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_8__["default"].cyJSON,
  style: _InternalPropTypes__WEBPACK_IMPORTED_MODULE_7__["default"].style,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node
};
CytoscapeView.contextType = _CytoscapeContext__WEBPACK_IMPORTED_MODULE_10__["default"];
/* harmony default export */ __webpack_exports__["default"] = (CytoscapeView);

/***/ }),

/***/ "./InternalPropTypes.js":
/*!******************************!*\
  !*** ./InternalPropTypes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({})
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default, CytoscapeProvider, CytoscapeGate, CytoscapeView, CytoscapeElement, CytoscapeController, CytoscapePropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cytoscape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cytoscape */ "./Cytoscape.jsx");
/* harmony import */ var _CytoscapeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CytoscapeProvider */ "./CytoscapeProvider.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CytoscapeProvider", function() { return _CytoscapeProvider__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CytoscapeGate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CytoscapeGate */ "./CytoscapeGate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CytoscapeGate", function() { return _CytoscapeGate__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CytoscapeView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CytoscapeView */ "./CytoscapeView.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CytoscapeView", function() { return _CytoscapeView__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CytoscapeElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CytoscapeElement */ "./CytoscapeElement/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CytoscapeElement", function() { return _CytoscapeElement__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _CytoscapeController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CytoscapeController */ "./CytoscapeController.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CytoscapeController", function() { return _CytoscapeController__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CytoscapePropTypes */ "./CytoscapePropTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CytoscapePropTypes", function() { return _CytoscapePropTypes__WEBPACK_IMPORTED_MODULE_6__["default"]; });


/* harmony default export */ __webpack_exports__["default"] = (_Cytoscape__WEBPACK_IMPORTED_MODULE_0__["default"]);







/***/ }),

/***/ "cytoscape":
/*!****************************!*\
  !*** external "cytoscape" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cytoscape");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
});
//# sourceMappingURL=react-cytoscape-tools.js.map