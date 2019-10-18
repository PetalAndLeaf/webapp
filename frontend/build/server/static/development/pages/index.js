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

/***/ "./components/Account/AccountBtn.tsx":
/*!*******************************************!*\
  !*** ./components/Account/AccountBtn.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AccountMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountMenu */ "./components/Account/AccountMenu.tsx");
/* harmony import */ var _Button_IconBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/IconBtn */ "./components/Button/IconBtn.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Account/AccountBtn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import { AnimatePresence } from 'framer-motion'

const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccountBtn__Root",
  componentId: "sc-1148ds4-0"
})(["width:40px;height:40px;background:transparent;position:relative;"]);
function AccountBtn() {
  const [isMenuOpen, setIsMenuOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return __jsx(Root, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_Button_IconBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), isMenuOpen && __jsx(_AccountMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Account/AccountMenu.tsx":
/*!********************************************!*\
  !*** ./components/Account/AccountMenu.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_user_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/user/action */ "./store/user/action.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Account/AccountMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "AccountMenu__Root",
  componentId: "sc-7zp6eh-0"
})(["width:200px;height:auto;background-color:#ffffff;box-shadow:0 15px 46px -10px rgba(29,28,27,0.3);position:absolute;right:0;top:32px;z-index:98;border-radius:8px;"]);
const rootVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccountMenu__Header",
  componentId: "sc-7zp6eh-1"
})(["padding:16px;border-bottom:1px solid ", ";margin-right:0;"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["styles"].palette.divider);
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccountMenu__MenuItem",
  componentId: "sc-7zp6eh-2"
})(["display:flex;align-items:center;padding:12px 16px;cursor:pointer;font-family:", ";font-weight:400;color:", ";&:hover{color:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["styles"].typography.button.fontFamily, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["styles"].palette.text.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["styles"].palette.text.secondary);
function AccountMenu() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  return __jsx(Root, {
    variants: rootVariants,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Your account")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/account/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(MenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Account")), __jsx(MenuItem, {
    onClick: () => {
      dispatch(Object(_store_user_action__WEBPACK_IMPORTED_MODULE_6__["SignOutAction"])());
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Log out"));
}

/***/ }),

/***/ "./components/Button/IconBtn.tsx":
/*!***************************************!*\
  !*** ./components/Button/IconBtn.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _FeatherIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FeatherIcon */ "./components/FeatherIcon.tsx");

var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Button/IconBtn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Root = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "IconBtn__Root",
  componentId: "qvstoo-0"
})(["width:40px;height:40px;background:", ";cursor:pointer;border-radius:50%;border:none;outline:none;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease-in-out;&:hover{background:", ";}svg{transition:color 0.2s ease-in-out;}&:hover svg{color:", ";}"], props => props.btype === 'solid' ? _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.primary.main : 'transparent', props => props.btype === 'solid' ? _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.text.primary : 'transparent', _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.primary.main);
const IconBtn = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(({
  onClick,
  icon,
  btype = '',
  style,
  moreProps
}, ref) => {
  return __jsx(Root, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: onClick,
    btype: btype
  }, moreProps, {
    style: style,
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx(_FeatherIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (IconBtn);

/***/ }),

/***/ "./components/Button/LinkBtn.tsx":
/*!***************************************!*\
  !*** ./components/Button/LinkBtn.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Button/LinkBtn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "LinkBtn__StyledLink",
  componentId: "sc-1ysg5q3-0"
})(["font-family:", ";font-weight:", ";text-decoration:underline;color:", ";transition:color 0.2s ease-in-out;cursor:pointer;&:hover{color:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].typography.button.fontFamily, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].typography.button.fontWeight, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.text.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.primary.main);
function LinkBtn({
  href,
  as = '',
  children
}) {
  if (as === '') as = href;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    as: as,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children));
}

/***/ }),

/***/ "./components/Button/RoundedBtn.tsx":
/*!******************************************!*\
  !*** ./components/Button/RoundedBtn.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Button/RoundedBtn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Root = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a).withConfig({
  displayName: "RoundedBtn__Root",
  componentId: "t9k6xd-0"
})(["display:inline-block;height:", ";background:", ";cursor:", ";border-radius:", ";border:none;outline:none;text-align:center;line-height:", ";transition:all 0.2s ease-in-out;padding-left:24px;padding-right:24px;color:", ";"], props => props.btype === 'large' ? '48px' : '36px', props => props.disabled ? _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.grey[400] : _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.primary.main, props => props.disabled ? 'not-allowed' : 'pointer', props => props.btype === 'large' ? '24px' : '18px', props => props.btype === 'large' ? '48px' : '36px', props => props.disabled ? '#fff' : _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.text.primary);
const RoundedBtn = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(({
  onClick,
  btype,
  children,
  className,
  disabled,
  style,
  moreProps
}, ref) => {
  return __jsx(Root, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: onClick,
    btype: btype,
    className: className
  }, moreProps, {
    disabled: disabled,
    style: style,
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "button",
    style: {
      textTransform: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, children));
});
/* harmony default export */ __webpack_exports__["default"] = (RoundedBtn);

/***/ }),

/***/ "./components/Button/TextBtn.tsx":
/*!***************************************!*\
  !*** ./components/Button/TextBtn.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Button/TextBtn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "TextBtn__StyledLink",
  componentId: "nt5rs2-0"
})(["font-family:", ";font-weight:", ";text-decoration:underline;color:", ";transition:color 0.2s ease-in-out;cursor:pointer;&:hover{color:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].typography.button.fontFamily, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].typography.button.fontWeight, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.text.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.primary.main);
function TextBtn({
  onClick,
  children,
  style
}) {
  return __jsx(StyledLink, {
    onClick: onClick,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children);
}

/***/ }),

/***/ "./components/CakesPath.tsx":
/*!**********************************!*\
  !*** ./components/CakesPath.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CakesPath; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/CakesPath.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const strokeVariants = {
  hidden: {
    pathLength: 0
  },
  visible: i => ({
    pathLength: 1,
    transition: {
      duration: 0.5,
      delay: (i + 1) * 0.8,
      ease: 'easeInOut'
    }
  })
};
function CakesPath({
  width = '1440'
}) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].svg, {
    width: width // height={height}
    ,
    viewBox: "0 0 1440 900",
    fill: "none",
    initial: false,
    x: "0px",
    y: "0px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    "stroke-miterlimit": "10",
    strokeWidth: "3",
    stroke: "#ffffff",
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 0,
    d: "M379.8,594.1c-20.4-39.2-24.6-74.9,6.3-120.8c15.1-22.5,35.9-32.4,61.2-43.9c85.6-39.2,130.3-9.1,164.8-43.9\nc32.9-33.2,7.1-75.5,37.7-105.1c36.8-35.7,111.6-12.2,146-1.6c15.8,4.9,232.2,74.8,237,229.1c1.4,44.9-6.6,106.3-37.7,117.7\nc-34.6,12.7-83.2,25.1-133.4-31.4c-11.2-12.6-24.8,10.3-39.2,18.8c-61,36.3-103,41.2-158.8,47.8c-73.1,8.6-118.5,14.5-188.1-2.1\nC428.4,647.5,400.2,633.3,379.8,594.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    "stroke-miterlimit": "10",
    strokeWidth: "3",
    fill: "none",
    stroke: "#ffffff",
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    strokeDasharray: "12,12",
    custom: 1,
    d: "M839.4,620.2c-2.8,2.3-5.7,4.6-8.9,6.4c-63.8,38-108.4,43.2-164.8,49.9l-4.6,0.5c-38.1,4.5-68.3,8.1-99.3,8.1 c-30,0-58.6-3.5-90.1-11c-49.4-11.8-82.6-27.4-106.2-72.7c-26-50-23.8-91,7.2-137.1c18-26.7,43.3-38.3,67.8-49.6 c45.8-21,80.2-23.2,107.8-25.1c26.6-1.8,40-3.2,52.3-15.6c12.6-12.7,13.8-27.7,15.2-44.9c1.6-19.6,3.4-41.7,22.7-60.5 c16.1-15.6,39-23.5,68.1-23.5c34.9,0,71.1,11.2,92.8,17.9l0.9,0.3c6.7,2.1,67.6,21.5,126.7,60.5c34.1,22.5,61.6,47.5,81.5,74.2 c25.3,33.9,38.8,70.6,40,109.3c0.8,26.8-0.2,115.6-48.2,133.2c-15.8,5.8-34.9,11.7-56.4,11.7c-29.9,0-57.7-11.9-82.8-35.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    id: "p1",
    "stroke-miterlimit": "16",
    strokeWidth: "10",
    stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.primary.main,
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 2,
    d: "M359.5,455.4c20.5-30.5,47.9-43,74.4-55.2c48.5-22.2,86-24.7,113.4-26.5c25.2-1.7,34.1-2.9,42-10.9\nc8.1-8.2,9.2-17.1,10.6-34.9c1.6-20.1,3.8-47.7,27.5-70.7c19.2-18.6,45.9-28,79.3-28c37.3,0,75,11.6,97.5,18.6l0.9,0.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    "stroke-miterlimit": "16",
    strokeWidth: "10",
    stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.primary.main,
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 3,
    d: "M1021.4,388.4c27.4,36.6,41.9,76.4,43.2,118.4c1.2,37.8-2.2,128.1-58.6,148.7c-17.1,6.3-37.9,12.7-61.9,12.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    "stroke-miterlimit": "16",
    strokeWidth: "10",
    stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.primary.main,
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 4,
    d: "M838.7,640.4c-66.7,39.7-115.1,45.4-171.1,52L663,693c-38.7,4.6-69.2,8.2-101.2,8.2c-31.3,0-61.1-3.6-93.8-11.4\n",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Cart/CartBtn.tsx":
/*!*************************************!*\
  !*** ./components/Cart/CartBtn.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _FeatherIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FeatherIcon */ "./components/FeatherIcon.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/cart/action */ "./store/cart/action.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Product_ProductFlyout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Product/ProductFlyout */ "./components/Product/ProductFlyout.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Cart/CartBtn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CartBtn__Root",
  componentId: "aj7ir-0"
})(["width:40px;height:40px;background:transparent;position:relative;"]);
const BtnWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "CartBtn__BtnWrap",
  componentId: "aj7ir-1"
})(["width:40px;height:40px;background:transparent;cursor:pointer;border:none;outline:none;svg{transition:color 0.2s ease-in-out;}&:hover svg{color:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.primary.main);
const CartNumber = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CartBtn__CartNumber",
  componentId: "aj7ir-2"
})(["position:absolute;min-width:20px;height:20px;padding-left:4px;padding-right:4px;border-radius:12px;background-color:", ";color:", ";font-size:12px;text-align:center;line-height:20px;right:2px;bottom:2px;font-family:Lato,Helvetica,Arial,sans-serif;font-weight:700;"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.primary.main, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["styles"].palette.text.primary);
function CartBtn() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const items = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cart.items);
  const productFlyout = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cart.productFlyout);
  const {
    0: totalItems,
    1: setTotalItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const totalItems = items.reduce((total, item) => item.quantity + total, 0);
    setTotalItems(totalItems);
  }, [items]);
  return __jsx(Root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(BtnWrap, {
    onClick: () => {
      dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_5__["toggleSidebar"])());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_FeatherIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "shoppingbag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), totalItems !== 0 && __jsx(CartNumber, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, totalItems)), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, productFlyout !== undefined && __jsx(_Product_ProductFlyout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: productFlyout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/Cart/CartItem.tsx":
/*!**************************************!*\
  !*** ./components/Cart/CartItem.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FeatherIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FeatherIcon */ "./components/FeatherIcon.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _Button_IconBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/IconBtn */ "./components/Button/IconBtn.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/cart/action */ "./store/cart/action.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Cart/CartItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].li).withConfig({
  displayName: "CartItem__Root",
  componentId: "jmght8-0"
})(["width:100%;height:96px;padding:16px;display:flex;position:relative;"]);
const RootVariants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};
const ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CartItem__ImageWrap",
  componentId: "jmght8-1"
})(["width:64px;height:64px;overflow:hidden;border-radius:4px;margin-right:16px;text-align:center;img{height:64px;margin-left:50%;transform:translateX(-50%);}"]);
const InfoWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CartItem__InfoWrap",
  componentId: "jmght8-2"
})(["flex:1;"]);
const QuantityWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CartItem__QuantityWrap",
  componentId: "jmght8-3"
})(["display:flex;align-items:center;margin-top:4px;"]);
const Quantity = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "CartItem__Quantity",
  componentId: "jmght8-4"
})(["font-family:", ";font-size:14px;margin:0;"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["styles"].typography.button.fontFamily);
const QuantityControl = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "CartItem__QuantityControl",
  componentId: "jmght8-5"
})(["width:16px;height:16px;display:flex;align-items:center;justify-content:center;padding:0;border:none;outline:none;background:transparent;cursor:pointer;transition:opacity 0.2s ease-in-out;&:hover{opacity:0.6;}svg{width:12px;height:12px;}&:first-child{margin-right:8px;}&:last-child{margin-left:8px;}"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "CartItem__Price",
  componentId: "jmght8-6"
})(["position:absolute;font-family:", ";font-size:14px;margin:0;right:16px;bottom:16px;"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["styles"].typography.button.fontFamily);
function CartItem({
  data,
  editable = true
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  return __jsx(Root, {
    id: data.sku,
    variants: RootVariants,
    initial: "hiddne",
    animate: "visible",
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    positionTransition: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(ImageWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/cover-p26.png",
    alt: "item image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), __jsx(InfoWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, data.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, data.size), __jsx(QuantityWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, editable && __jsx(QuantityControl, {
    onClick: () => dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_7__["decreaseQuantity"])(data.sku)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_FeatherIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), __jsx(Quantity, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, data.quantity), editable && __jsx(QuantityControl, {
    onClick: () => dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_7__["increaseQuantity"])(data.sku)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_FeatherIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })))), __jsx(Price, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, `$${data.price * data.quantity}`), editable && __jsx(_Button_IconBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: "delete",
    style: {
      position: 'absolute',
      top: 8,
      right: 8
    },
    onClick: () => dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_7__["setQuantity"])(data.sku, 0)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Cart/CartSidebar.tsx":
/*!*****************************************!*\
  !*** ./components/Cart/CartSidebar.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_IconBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/IconBtn */ "./components/Button/IconBtn.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/cart/action */ "./store/cart/action.tsx");
/* harmony import */ var _Button_RoundedBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button/RoundedBtn */ "./components/Button/RoundedBtn.tsx");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CartItem */ "./components/Cart/CartItem.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Cart/CartSidebar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import { styles } from '../styles/theme'
// import { Elements } from 'react-stripe-elements'
// import CheckoutForm from './CheckoutForm'





 // import CheckoutForm from "./CheckoutForm";

const Mask = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "CartSidebar__Mask",
  componentId: "sc-62y0qa-0"
})(["width:100%;height:100vh;background-color:rgba(0,0,0,0.4);position:absolute;right:0;top:0;left:0;z-index:98;"]);
const Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "CartSidebar__Sidebar",
  componentId: "sc-62y0qa-1"
})(["width:360px;height:100vh;background-color:#ffffff;position:absolute;right:0;top:0;z-index:99;display:flex;flex-direction:column;justify-content:space-between;"]);
const sidebarVariants = {
  visible: {
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  hidden: {
    x: 320,
    transition: {
      duration: 0.3
    }
  }
};
const maskVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CartSidebar__Header",
  componentId: "sc-62y0qa-2"
})(["height:64px;min-height:64px;padding-left:24px;padding-right:24px;display:flex;align-items:center;"]);
const ItemList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "CartSidebar__ItemList",
  componentId: "sc-62y0qa-3"
})(["overflow-y:scroll;padding-left:0;margin:0;flex:1;"]);
const Bottom = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "CartSidebar__Bottom",
  componentId: "sc-62y0qa-4"
})(["height:auto;padding:16px;display:flex;flex-direction:column;box-shadow:0 -10px 24px -5px rgba(29,28,27,0.12);"]);
const SummaryList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CartSidebar__SummaryList",
  componentId: "sc-62y0qa-5"
})(["margin-bottom:16px;"]);
const SummaryListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CartSidebar__SummaryListItem",
  componentId: "sc-62y0qa-6"
})(["display:flex;justify-content:space-between;align-items:center;height:48px;"]);
function CartSidebar() {
  const {
    0: subtotal,
    1: setSubtotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const items = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.cart.items);
  const isEmpty = items.length === 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const subtotal = items.reduce((value, item) => {
      const itemTotal = item.price * item.quantity;
      return itemTotal + value;
    }, 0);
    setSubtotal(subtotal);
  }, [items]);

  const handelCheckoutClick = () => {
    dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_6__["toggleSidebar"])());
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/checkout');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Mask, {
    variants: maskVariants,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx(Sidebar, {
    variants: sidebarVariants,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    style: {
      justifyContent: `${isEmpty ? 'center' : 'space-between'}`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, isEmpty ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Your bag is empty") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Your bag")), __jsx(ItemList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    initial: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, items.map((item, i) => {
    return __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: item,
      key: item + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    });
  }))), __jsx(Bottom, {
    layoutTransition: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    style: {
      width: '100%',
      textAlign: 'center',
      marginBottom: 16
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "caption",
    style: {
      textAlign: 'center',
      marginBottom: 16
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Free one-day shipping on orders over $45"))), __jsx(SummaryList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(SummaryListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Subtotal"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "button",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, `$${subtotal}`)), __jsx(SummaryListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Shipping"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "button",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, subtotal >= 45 ? '$0' : '$8')), __jsx(SummaryListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Total"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "button",
    style: {
      fontSize: 18
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, `$${subtotal + (subtotal >= 45 ? 0 : 8)}`))), __jsx(_Button_RoundedBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    btype: "large",
    onClick: handelCheckoutClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Check out"))), __jsx(_Button_IconBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: "x",
    onClick: () => dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_6__["toggleSidebar"])()),
    style: {
      position: 'absolute',
      right: 8,
      top: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/FeatherIcon.tsx":
/*!************************************!*\
  !*** ./components/FeatherIcon.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatherIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/FeatherIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FeatherIcon({
  icon,
  style
}) {
  const getIcon = icon => {
    switch (icon) {
      case 'smile':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Smile"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });

      case 'sun':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Sun"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        });

      case 'sunrise':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Sunrise"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        });

      case 'droplet':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Droplet"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        });

      case 'package':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Package"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });

      case 'x':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["X"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });

      case 'instagram':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        });

      case 'facebook':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        });

      case 'shoppingbag':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["ShoppingBag"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });

      case 'plus':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Plus"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });

      case 'minus':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Minus"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });

      case 'delete':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Trash2"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        });

      case 'user':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["User"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        });

      case 'location':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["MapPin"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        });

      case 'card':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["CreditCard"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        });

      case 'edit':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Edit3"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });

      case 'box':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        });

      case 'star':
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Star"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        });

      default:
        return __jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__["Smile"], {
          className: "icon",
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        });
    }
  };

  return getIcon(icon);
}

/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_data_footer_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/data/footer.json */ "./static/data/footer.json");
var _static_data_footer_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/data/footer.json */ "./static/data/footer.json", 1);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "Footer__Container",
  componentId: "lfmo3n-0"
})(["border-top:1px solid ", ";text-align:center;max-width:100%;margin-left:48px;margin-right:48px;margin-top:32px;padding-top:24px;padding-bottom:32px;"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.divider);
const LinkGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__LinkGroup",
  componentId: "lfmo3n-1"
})(["display:flex;justify-content:center;margin-bottom:16px;& a{display:block;margin-left:16px;margin-right:16px;color:", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.text.secondary);
function Footer({
  fading = true
}) {
  const language = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.content.language);
  const links = language ? _static_data_footer_json__WEBPACK_IMPORTED_MODULE_6__['EN'].links : _static_data_footer_json__WEBPACK_IMPORTED_MODULE_6__['EN'].links;
  const date = new Date();
  return __jsx(Container, {
    initial: {
      opacity: fading ? 0 : 1
    },
    animate: {
      opacity: 1
    },
    transition: {
      delay: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(LinkGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, links.map((l, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: `footer-link-${i}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, i !== 0 && '   |', __jsx("a", {
      href: l.url,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "button",
      style: {
        textTransform: 'none',
        fontWeight: 400,
        color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.text.primary
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, l.name)));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "caption",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, `© ${date.getFullYear()} Petal And Leaf LLC. All rights reserved.`));
}

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _Button_IconBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button/IconBtn */ "./components/Button/IconBtn.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Cart_CartSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Cart/CartSidebar */ "./components/Cart/CartSidebar.tsx");
/* harmony import */ var _Cart_CartBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cart/CartBtn */ "./components/Cart/CartBtn.tsx");
/* harmony import */ var _Button_TextBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button/TextBtn */ "./components/Button/TextBtn.tsx");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Login */ "./components/Login.tsx");
/* harmony import */ var _Account_AccountBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Account/AccountBtn */ "./components/Account/AccountBtn.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













 // import { SignOutAction } from '../store/user/action'

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-135o2y4-0"
})(["width:100%;height:96px;display:flex;align-items:center;background-color:rgba(256,256,256,1);padding-left:48px;padding-right:48px;justify-content:space-between;position:fixed;top:0;left:0;right:0;z-index:99;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-135o2y4-1"
})(["height:40px;width:auto;cursor:pointer;"]);
const Controls = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Controls",
  componentId: "sc-135o2y4-2"
})(["display:flex;align-items:center;> *:not(:last-child){margin-right:16px;}"]);
function Header({
  type
}) {
  // const dispatch = useDispatch()
  const isSidebarOpen = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.cart.isSidebarOpen);
  const isLoggedin = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user.isLoggedin);
  const {
    0: isLoginOpen,
    1: setIsLoginOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoggedin && isLoginOpen) {
      setIsLoginOpen(false);
    }
  }, [isLoggedin]);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, type !== 'home' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(Logo, {
    src: "/static/images/logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), __jsx(Controls, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, isLoggedin ? __jsx(_Account_AccountBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }) : __jsx(_Button_TextBtn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => setIsLoginOpen(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Sign up"), __jsx(_Cart_CartBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), type === 'product' && __jsx(_Button_IconBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "x",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_13__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, isSidebarOpen && __jsx(_Cart_CartSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "CartSidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {
    open: isLoginOpen,
    key: "loginDialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_Login__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onSuccess: () => setIsLoginOpen(false),
    initMode: "signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(_Button_IconBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "x",
    onClick: () => setIsLoginOpen(false),
    style: {
      position: 'absolute',
      right: 8,
      top: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ "./components/Logo.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button_IconBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button/IconBtn */ "./components/Button/IconBtn.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Hero.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "Hero__Container",
  componentId: "sc-12x3c5w-0"
})(["width:100%;max-width:400px;margin-left:auto;margin-right:auto;"]);
const Socials = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__Socials",
  componentId: "sc-12x3c5w-1"
})(["display:flex;margin-top:24px;"]);
function Hero() {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body2",
    style: {
      marginTop: 32
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Cupidatat exercitation officia veniam ex commodo culpa incididunt. Et pariatur culpa sint consequat deserunt consequat duis fugiat velit."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    style: {
      marginTop: 24,
      display: 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "#PETALLEAF \xA0 #ROSECAKE"), __jsx(Socials, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.instagram.com/thepetalleaf/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_Button_IconBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: "instagram",
    btype: "solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("a", {
    href: "https://www.facebook.com/thepetalleaf/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_Button_IconBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: "facebook",
    btype: "solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/InputField.tsx":
/*!***********************************!*\
  !*** ./components/InputField.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/InputField.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Root = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "InputField__Root",
  componentId: "sc-4uuvp5-0"
})(["margin-bottom:16px;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "InputField__Input",
  componentId: "sc-4uuvp5-1"
})(["height:48px;background-color:#fff;border-radius:4px;border:1px solid ", ";outline:none;padding-left:16px;padding-right:16px;color:", ";font-family:", ";font-size:14px;display:block;margin-bottom:4px;width:100%;&:focus{border:1px solid ", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.grey[300], _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.text.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].typography.fontFamily, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.primary.main);
const Select = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.select.withConfig({
  displayName: "InputField__Select",
  componentId: "sc-4uuvp5-2"
})(["height:48px;background-color:#fff;border-radius:4px;border:1px solid ", ";outline:none;padding-left:16px;padding-right:16px;color:", ";font-family:", ";font-size:14px;display:block;margin-bottom:4px;width:100%;&:focus{border:1px solid ", ";}"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.grey[300], _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.text.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].typography.fontFamily, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.primary.main);
function InputField({
  onChange,
  value = '',
  placeholder = '',
  style,
  name,
  onBlur,
  label,
  error = '',
  optional,
  type = '',
  options,
  moreProps
}) {
  return __jsx(Root, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: style
  }, moreProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), label && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    style: {
      textTransform: 'uppercase'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, label, optional && __jsx("span", {
    style: {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.grey[400]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\xA0 Optional")), type === 'select' ? __jsx(Select, {
    onChange: onChange,
    value: value,
    onBlur: onBlur,
    name: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, options && __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), options && options.map((option, i) => {
    return __jsx("option", {
      key: option + i,
      value: option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, option);
  })) : __jsx(Input, {
    onChange: onChange,
    value: value,
    placeholder: placeholder,
    onBlur: onBlur,
    name: name,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), error !== '' && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "caption",
    color: "error",
    style: {
      display: 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, error));
}

/***/ }),

/***/ "./components/Login.tsx":
/*!******************************!*\
  !*** ./components/Login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_user_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/user/action */ "./store/user/action.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputField */ "./components/InputField.tsx");
/* harmony import */ var _Button_TextBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button/TextBtn */ "./components/Button/TextBtn.tsx");
/* harmony import */ var _Button_RoundedBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button/RoundedBtn */ "./components/Button/RoundedBtn.tsx");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/types */ "./utils/types.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div).withConfig({
  displayName: "Login__Root",
  componentId: "sc-17prs7x-0"
})(["width:600px;padding:32px 24px;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Login__Header",
  componentId: "sc-17prs7x-1"
})(["height:64px;min-height:64px;padding-left:24px;padding-right:24px;text-align:center;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "Login__Form",
  componentId: "sc-17prs7x-2"
})(["width:320px;display:flex;flex-direction:column;margin:32px auto;"]);
const ErrorBanner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Login__ErrorBanner",
  componentId: "sc-17prs7x-3"
})(["width:320px;text-align:center;margin-bottom:16px;"]);

function Login({
  initMode = 'login',
  onSuccess
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const authError = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user.err);
  const isLoggedin = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user.isLoggedin);
  const {
    0: mode,
    1: setMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initMode);
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: pwd,
    1: setPwd
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: errMsg,
    1: setErrMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoggedin && onSuccess) {
      onSuccess();
    }

    if (authError !== null) {
      console.log('Login dialog : ', authError);
      const newErroMsg = _utils_types__WEBPACK_IMPORTED_MODULE_9__["errorMsgMap"].get(authError) || 'Something went wrong';
      setErrMsg(newErroMsg);
    } else {
      setErrMsg('');
    }
  }, [isLoggedin, authError]);

  const handleModeChange = mode => {
    setErrMsg('');
    setMode(mode);
  };

  const handleSubmitClick = () => {
    setErrMsg('');

    if (mode === 'login') {
      dispatch(Object(_store_user_action__WEBPACK_IMPORTED_MODULE_4__["LogInAction"])(email, pwd));
    } else {
      dispatch(Object(_store_user_action__WEBPACK_IMPORTED_MODULE_4__["SignUpAction"])(email, pwd));
    }
  };

  return __jsx(Root, {
    variants: {
      visible: {
        opacity: 1
      },
      hidden: {
        opacity: 0
      }
    },
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    style: {
      marginBottom: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, mode === 'login' ? 'Welcome back' : 'Welcome'), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, mode === 'login' ? 'Log in with your email and password' : 'Create an account to start shopping')), __jsx(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, errMsg !== '' && __jsx(ErrorBanner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    color: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, errMsg)), __jsx(_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "email",
    label: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "password",
    label: "Password",
    value: pwd,
    onChange: e => setPwd(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx(_Button_RoundedBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginTop: 8
    },
    onClick: handleSubmitClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, mode === 'login' ? 'Log in' : 'Sign up'), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "caption",
    style: {
      textAlign: 'center',
      marginTop: 16
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, mode === 'login' ? "Don't have an account? " : 'Already have an account? ', __jsx(_Button_TextBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleModeChange(mode === 'login' ? 'signup' : 'login'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, mode === 'login' ? 'Sign up' : 'Log in')), mode === 'login' && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "caption",
    style: {
      textAlign: 'center',
      marginTop: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Forgot password? \xA0", __jsx(_Button_TextBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Reset"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/Logo.tsx":
/*!*****************************!*\
  !*** ./components/Logo.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Logo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const logoVariants = {
  hidden: {},
  visible: {
    transition: {// staggerChildren: 1
    }
  }
};
const strokeVariants = {
  hidden: {
    pathLength: 0
  },
  visible: i => ({
    pathLength: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.3,
      ease: 'easeInOut'
    }
  })
};
const tVariants = {
  hidden: {
    pathLength: 0
  },
  visible: i => ({
    pathLength: 1,
    transition: {
      duration: 0.2,
      delay: i * 0.3,
      ease: 'easeInOut'
    }
  })
};
function Logo({
  width = '713'
}) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].svg, {
    width: width // height={height}
    ,
    viewBox: "0 0 713 304",
    fill: "none",
    initial: false,
    variants: logoVariants,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("clipPath", {
    id: "clip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("path", {
    d: "M47.64 301.78C43.55 291.65 39.81 281.04 36.52 270.24C33.23 259.44 30.33 248.54 27.93 237.92C22.9656 216.141 19.6231 194.024 17.93 171.75C17.65 167.9 17.42 164.02 17.26 160.18C13.3716 163.009 9.33597 165.629 5.16997 168.03L3.42996 169.03L0.959961 164.69L2.65996 163.69C7.3173 160.882 11.8081 157.807 16.11 154.48L17.02 153.77C16.5216 137.305 17.4719 120.828 19.86 104.53C21.5444 93.3709 24.0105 82.3438 27.24 71.5301C30.4387 60.6502 34.6192 50.0834 39.73 39.9601C42.3403 34.8424 45.3216 29.9226 48.65 25.2401C52.0301 20.4415 55.9639 16.058 60.37 12.1801C64.929 8.03763 70.3538 4.96313 76.25 3.18006C78.6625 2.50882 81.1558 2.17234 83.66 2.18006C84.41 2.18006 85.16 2.18007 85.89 2.28007C89.2498 2.58031 92.5012 3.622 95.41 5.33009C98.265 7.06054 100.719 9.37849 102.61 12.1301C104.417 14.796 105.753 17.7522 106.56 20.8701C107.335 23.8712 107.714 26.9607 107.69 30.0601C107.677 32.9744 107.5 35.8856 107.16 38.7801C105.91 49.2901 102.57 59.99 96.95 71.51C91.9201 81.6289 85.9327 91.2428 79.07 100.22C72.2874 109.158 64.939 117.652 57.07 125.65C49.2539 133.643 41.0331 141.229 32.44 148.38C30.34 150.13 28.05 151.96 25.44 153.97C25.44 160.03 25.57 165.7 25.83 171.26C26.9401 193.207 29.7249 215.037 34.16 236.56C36.29 247.08 38.9 257.87 41.93 268.62C44.96 279.37 48.39 289.89 52.2 299.96L52.96 301.85L48.35 303.67L47.64 301.78ZM83.89 10.1301C82.0585 10.1382 80.2373 10.4041 78.48 10.9201C73.7475 12.4264 69.4046 14.9563 65.76 18.3301C61.8732 21.8195 58.4095 25.753 55.44 30.0501C52.3926 34.4257 49.6687 39.0179 47.29 43.7901C42.5008 53.4893 38.6048 63.6043 35.65 74.01C32.6243 84.4488 30.3419 95.0888 28.82 105.85C27.2586 116.654 26.2573 127.532 25.82 138.44C25.71 141.11 25.63 143.92 25.58 146.93C26.72 145.99 27.82 145.05 28.9 144.13C37.2154 136.967 45.1559 129.381 52.69 121.4C60.2137 113.455 67.2467 105.06 73.75 96.26C80.2436 87.5503 85.8925 78.2416 90.62 68.4601C95.75 57.6101 98.74 47.6301 99.78 37.9501C100.053 35.3425 100.18 32.7218 100.16 30.1001C100.149 27.6629 99.8127 25.2382 99.16 22.8901C98.5584 20.629 97.5668 18.4903 96.23 16.5701C94.9516 14.7576 93.3059 13.2345 91.4 12.1001C89.5003 11.0104 87.383 10.3547 85.2 10.1801C84.8 10.1401 84.35 10.1301 83.89 10.1301Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("path", {
    d: "M91.0599 261.85C89.8609 261.851 88.6627 261.791 87.4699 261.67C84.1991 261.319 81.0128 260.409 78.0499 258.98C74.961 257.511 72.2305 255.385 70.0499 252.75C67.9124 250.132 66.3057 247.123 65.3199 243.89C65.1799 243.42 65.0399 242.89 64.9199 242.43C62.2511 243.666 59.5054 244.728 56.6999 245.61L54.7899 246.18L53.3799 241.47L55.1999 240.85C57.7839 239.907 60.3056 238.802 62.7499 237.54L63.9499 236.93C63.5659 233.019 63.633 229.076 64.1499 225.18C64.3499 223.55 64.5799 222.06 64.8599 220.64C65.1599 219.06 65.5699 217.56 65.9599 216.15C66.7956 213.245 67.7973 210.39 68.9599 207.6C71.297 202.072 74.1884 196.795 77.5899 191.85C80.9897 186.835 84.9893 182.255 89.4999 178.21C94.1077 174.044 99.4297 170.745 105.21 168.47C108.291 167.24 111.564 166.563 114.88 166.47C116.767 166.428 118.646 166.723 120.43 167.34C122.503 168.072 124.305 169.414 125.6 171.19C126.807 172.919 127.516 174.946 127.65 177.05C127.772 178.83 127.641 180.617 127.26 182.36C126.539 185.458 125.426 188.452 123.95 191.27C121.171 196.553 117.875 201.548 114.11 206.18C112.38 208.36 110.54 210.56 108.47 212.91C106.516 215.189 104.411 217.334 102.17 219.33C97.7117 223.198 92.9608 226.715 87.9599 229.85C83.2399 232.85 78.1499 235.85 72.8299 238.57L72.3799 238.8C72.5386 239.728 72.7489 240.646 73.0099 241.55C73.6363 243.834 74.6843 245.981 76.0999 247.88C77.5367 249.741 79.3407 251.286 81.3999 252.42C83.5589 253.551 85.8963 254.302 88.3099 254.64C89.6358 254.817 90.9722 254.904 92.3099 254.9C93.5661 254.898 94.8212 254.827 96.0699 254.69C101.466 254.026 106.748 252.634 111.77 250.55C114.24 249.55 116.77 248.4 119.35 247.1C121.35 246.1 124.06 244.65 126.61 243.02L128.22 242.02L131.02 246.02L129.44 247.18C124.64 250.643 119.512 253.627 114.13 256.09C108.672 258.703 102.866 260.511 96.8899 261.46C94.9584 261.73 93.0101 261.86 91.0599 261.85ZM115.06 174C112.636 174.132 110.251 174.677 108.01 175.61C103.132 177.62 98.6473 180.474 94.7599 184.04C87.3199 190.78 80.9999 200.04 76.4899 210.73C74.3379 215.622 72.9193 220.804 72.2799 226.11C72.0428 228.279 71.926 230.459 71.9299 232.64C76.3899 230.09 80.6499 227.43 84.6199 224.7C89.2334 221.581 93.6148 218.132 97.7299 214.38C99.7327 212.527 101.613 210.546 103.36 208.45C105.36 206.14 107.06 204.01 108.67 201.91C112.078 197.596 115.059 192.961 117.57 188.07C118.729 185.799 119.592 183.39 120.14 180.9C120.61 178.57 120.42 176.58 119.65 175.55C118.88 174.52 117.35 174 115.37 174H115.06Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("path", {
    d: "M182.15 263.31C179.661 257.418 177.534 251.38 175.78 245.23C174.062 239.05 172.7 232.776 171.7 226.44C170.674 220.093 170.06 213.686 169.86 207.26L169.76 204.9V200.77C169.76 199.77 169.76 198.66 169.76 197.61C169.76 196.87 169.83 196.15 169.86 195.43C169.96 192.99 170.07 190.43 170.33 187.97C170.38 187.52 170.42 187.05 170.46 186.58C170.55 185.46 170.65 184.31 170.82 183.15V182.84L166.56 184.59C162.56 186.25 158.51 187.91 154.46 189.59L145.4 193.21L142.22 194.44C140.22 195.21 138.22 195.99 136.22 196.73L134.42 197.41L132.68 192.85L134.43 192.04C136.37 191.15 138.31 190.29 140.26 189.42L143.35 188.05L152.35 184.15C156.35 182.42 160.35 180.73 164.35 179.04L170.28 176.54L171.9 175.87L172.28 173.65C172.55 171.99 172.9 170.32 173.21 168.9C174.55 162.611 176.283 156.412 178.4 150.34C180.52 144.291 182.985 138.368 185.78 132.6C188.627 126.858 191.827 121.297 195.36 115.95L196.42 114.36L200.55 116.86L199.64 118.53C198.26 121.05 196.86 123.76 195.34 126.8C193.98 129.57 192.69 132.41 191.5 135.21C189.028 140.86 186.878 146.646 185.06 152.54C183.03 159.085 181.384 165.743 180.13 172.48L188.36 169.13L197.42 165.52L200.57 164.29C202.57 163.51 204.57 162.74 206.57 161.99L208.37 161.31L210.24 165.79L208.49 166.6C206.54 167.49 204.59 168.36 202.63 169.23L199.57 170.59L190.57 174.49C186.71 176.15 182.84 177.793 178.96 179.42C178.5 182.59 178.14 185.69 177.89 188.63C177.62 190.99 177.51 193.38 177.4 195.7C177.4 196.42 177.33 197.14 177.29 197.87C177.29 198.87 177.24 199.79 177.23 200.76C177.23 201.33 177.23 201.89 177.23 202.45V204.77L177.28 207.03C177.509 219.355 179.031 231.622 181.82 243.63C182.99 248.91 184.53 254.42 186.82 261.53L187.41 263.34L182.96 265.08L182.15 263.31Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("path", {
    d: "M663.39 301.74C659.581 278.154 657.277 254.349 656.49 230.47C656.27 223.9 656.15 217.3 656.14 210.79C652.673 212.899 649.06 214.76 645.33 216.36C639.664 218.814 633.653 220.382 627.51 221.01C626.85 221.06 626.23 221.09 625.65 221.09C624.568 221.095 623.487 221.004 622.42 220.82C620.569 220.53 618.806 219.83 617.26 218.77C615.671 217.63 614.415 216.087 613.62 214.3C612.906 212.694 612.464 210.981 612.31 209.23C612.155 207.487 612.155 205.733 612.31 203.99L611.31 205.27C607.389 209.929 602.974 214.147 598.14 217.85C593.383 221.847 587.97 224.99 582.14 227.14C580.593 227.694 579 228.112 577.38 228.39C576.336 228.568 575.279 228.662 574.22 228.67C573.46 228.672 572.701 228.612 571.95 228.49C569.687 228.173 567.621 227.03 566.15 225.28C565.327 224.238 564.731 223.036 564.4 221.75C562.99 222.27 561.71 222.75 560.49 223.12C554.782 225.096 548.918 226.588 542.96 227.58C539.922 228.053 536.855 228.31 533.78 228.35H533.48C530.377 228.401 527.281 228.045 524.27 227.29C521.251 226.566 518.437 225.164 516.04 223.19C511.015 225.699 505.798 227.805 500.44 229.49C497.462 230.413 494.406 231.062 491.31 231.43C489.982 231.586 488.647 231.666 487.31 231.67C485.419 231.677 483.533 231.49 481.68 231.11C478.37 230.458 475.254 229.055 472.57 227.01C469.958 224.988 467.756 222.487 466.08 219.64C464.465 216.937 463.157 214.063 462.18 211.07C461.25 208.34 460.41 205.49 459.63 202.36C459.35 201.21 459.09 200.04 458.84 198.84C452.817 206.959 446.315 214.713 439.37 222.06C435.267 226.416 430.928 230.542 426.37 234.42C421.796 238.352 416.902 241.898 411.74 245.02L410.03 246.02L407.47 241.85L409.14 240.85C413.997 237.785 418.59 234.319 422.87 230.49C427.205 226.65 431.327 222.577 435.22 218.29C443.036 209.609 450.297 200.444 456.96 190.85L457.3 190.36C456.97 188.24 456.71 186.36 456.51 184.56C455.8 178.78 455.33 172.77 455.11 166.71C454.7 154.787 455.034 142.851 456.11 130.97C457.226 119.088 459.032 107.282 461.52 95.61C462.16 92.61 462.87 89.71 463.63 86.86C464.22 84.47 464.94 82.06 465.63 79.72L466.07 78.23C468.19 71.63 470.15 66.23 472.24 61.23C474.59 55.59 477.16 50.11 479.86 44.94C482.68 39.6 485.75 34.38 488.98 29.41C492.231 24.3645 495.76 19.5037 499.55 14.85C501.47 12.4439 503.537 10.1595 505.74 8.00998C508.07 5.63906 510.772 3.66622 513.74 2.16998C515.321 1.40871 517.046 0.99603 518.8 0.959961C519.134 0.960399 519.468 0.980461 519.8 1.01999C522.125 1.28539 524.266 2.41292 525.8 4.17996C527.022 5.59072 527.987 7.2053 528.65 8.94998C529.256 10.5016 529.735 12.1003 530.08 13.73C531.208 19.7751 531.687 25.9232 531.51 32.0699C531.51 35.1499 531.41 38.15 531.11 41.2C530.85 43.9799 530.44 46.94 529.86 50.2C528.86 55.88 527.46 61.61 525.7 67.74C524.14 73.09 522.32 78.65 520.15 84.74C518.22 90.05 516.09 95.48 513.64 101.35C509.21 111.96 504.19 122.82 498.72 133.63C488.498 153.965 476.769 173.506 463.63 192.09C464.1 195.26 464.63 198.17 465.25 200.96C465.94 203.96 466.68 206.67 467.49 209.22C468.324 211.816 469.445 214.311 470.83 216.66C472.115 218.907 473.811 220.891 475.83 222.51C477.843 224.04 480.179 225.091 482.66 225.58C484.161 225.887 485.689 226.038 487.22 226.03C488.346 226.029 489.471 225.965 490.59 225.84C493.35 225.506 496.074 224.927 498.73 224.11C503.407 222.687 507.975 220.929 512.4 218.85C511.367 217.095 510.627 215.183 510.21 213.19C509.85 211.546 509.649 209.872 509.61 208.19C509.576 206.578 509.633 204.966 509.78 203.36C510.079 200.116 510.778 196.922 511.86 193.85C514.111 187.797 517.696 182.328 522.35 177.85C526.866 173.509 532.028 169.892 537.65 167.13C540.45 165.705 543.368 164.524 546.37 163.6C549.384 162.631 552.485 161.961 555.63 161.6C556.627 161.493 557.628 161.436 558.63 161.43C559.3 161.43 559.97 161.43 560.63 161.52C562.542 161.638 564.408 162.152 566.11 163.03C567.136 163.581 568.035 164.341 568.75 165.26C569.486 166.199 569.999 167.293 570.25 168.46C570.473 169.484 570.534 170.537 570.43 171.58C570.363 172.474 570.219 173.361 570 174.23C569.115 177.389 567.731 180.387 565.9 183.11C564.213 185.7 562.338 188.164 560.29 190.48C556.281 195 551.917 199.194 547.24 203.02C539.432 209.475 531.023 215.167 522.13 220.02C523.304 220.722 524.56 221.277 525.87 221.67C528.473 222.419 531.162 222.823 533.87 222.87C534.34 222.87 534.81 222.87 535.29 222.87C537.632 222.864 539.97 222.704 542.29 222.39C547.958 221.566 553.533 220.199 558.94 218.31C560.54 217.76 562.25 217.14 564.11 216.41V215.78C564.15 215.273 564.2 214.763 564.26 214.25C564.44 212.6 564.65 211.1 564.91 209.66C565.452 206.582 566.227 203.55 567.23 200.59C569.279 194.595 572.355 189.002 576.32 184.06C580.278 179.147 585.006 174.909 590.32 171.51C592.983 169.744 595.814 168.243 598.77 167.03C601.687 165.829 604.806 165.191 607.96 165.15H608.96C610.973 165.264 612.94 165.803 614.73 166.73C615.679 167.254 616.554 167.903 617.33 168.66C618.118 169.441 618.792 170.33 619.33 171.3C620.288 173.129 620.783 175.165 620.77 177.23C620.774 179.085 620.466 180.927 619.86 182.68C619.247 184.442 618.417 186.122 617.39 187.68H617.66C618.127 187.713 618.578 187.864 618.97 188.119C619.362 188.375 619.682 188.726 619.9 189.14L619.96 189.26V189.4C620.093 189.768 620.144 190.16 620.11 190.55V190.65L619.66 192.23C618.872 194.968 618.244 197.749 617.78 200.56C617.309 203.223 617.204 205.938 617.47 208.63C617.66 210.18 618.28 213 620.28 214.37C621.842 215.321 623.654 215.777 625.48 215.68C625.97 215.68 626.48 215.68 627.02 215.62C632.609 215.07 638.081 213.674 643.25 211.48C647.726 209.588 652.029 207.309 656.11 204.67C656.11 200.86 656.2 197.67 656.28 194.62C656.64 182.42 657.37 170.38 658.46 158.82C660.46 138.9 663.74 112.88 672.16 88.18C674.128 82.2854 676.744 76.6275 679.96 71.31C681.717 68.3767 684.03 65.8152 686.77 63.77C688.502 62.5623 690.541 61.869 692.65 61.77H692.96C695.001 61.7896 696.994 62.3859 698.71 63.49C701.594 65.4578 703.953 68.1014 705.58 71.19C707.124 73.9794 708.365 76.9262 709.28 79.98C711.073 85.88 712.154 91.9733 712.5 98.13L712.63 100.07L707.77 100.52L707.53 98.6C706.903 92.8873 705.652 87.2605 703.8 81.8199C702.901 79.2006 701.735 76.6808 700.32 74.3C699.156 72.122 697.477 70.2614 695.43 68.88C694.733 68.4448 693.932 68.2063 693.11 68.19H692.95C692.079 68.2941 691.254 68.6406 690.57 69.19C688.608 70.7998 686.958 72.7554 685.7 74.96C682.864 79.8969 680.549 85.1148 678.79 90.53C675.141 101.636 672.333 113.002 670.39 124.53C668.39 135.53 666.78 146.97 665.53 159.53C664.4 170.91 663.62 182.8 663.22 194.86C663.16 196.54 663.11 198.22 663.07 199.86C666.07 197.58 669.07 195.12 671.83 192.53C680.322 184.659 687.721 175.686 693.83 165.85L694.83 164.17L698.45 166.35L697.45 168.06C691.362 178.405 683.86 187.849 675.16 196.12C671.303 199.791 667.204 203.199 662.89 206.32C662.74 214.78 662.75 222.63 662.89 230.32C663.411 253.975 665.224 277.583 668.32 301.04L668.58 303.04L663.69 303.76L663.39 301.74ZM570.73 219.26C570.73 219.968 570.931 220.662 571.31 221.26C571.759 221.802 572.393 222.159 573.09 222.26C573.658 222.364 574.233 222.415 574.81 222.41C576.665 222.354 578.503 222.038 580.27 221.47C582.893 220.656 585.429 219.584 587.84 218.27C590.299 216.893 592.662 215.349 594.91 213.65C599.526 210.31 603.749 206.459 607.5 202.17C609.31 200.056 610.911 197.772 612.28 195.35L613.28 193.47C613.44 193.14 613.61 192.74 613.79 192.33C611.973 194.299 610.025 196.143 607.96 197.85C603.288 201.701 598.308 205.163 593.07 208.2C587.91 211.229 582.599 213.996 577.16 216.49C575.01 217.44 572.87 218.37 570.73 219.26ZM559.24 167.77C558.28 167.772 557.321 167.839 556.37 167.97C550.96 168.809 545.755 170.651 541.02 173.4C536.165 176.103 531.678 179.421 527.67 183.27C523.782 186.966 520.733 191.454 518.73 196.43C517.752 198.902 517.08 201.485 516.73 204.12C516.32 206.689 516.3 209.305 516.67 211.88C516.904 213.306 517.377 214.682 518.07 215.95C521.92 213.95 525.82 211.59 529.69 209.04C534.514 205.868 539.143 202.409 543.55 198.68C547.941 194.995 552.03 190.965 555.78 186.63C557.608 184.511 559.279 182.261 560.78 179.9C562.227 177.721 563.314 175.324 564 172.8C564.278 171.846 564.343 170.842 564.19 169.86C564.122 169.568 563.988 169.294 563.799 169.061C563.611 168.827 563.372 168.639 563.1 168.51C562.162 168.063 561.14 167.818 560.1 167.79L559.24 167.77ZM608.24 172.64C605.964 172.719 603.725 173.242 601.65 174.18C599.162 175.229 596.784 176.522 594.55 178.04C589.954 181.049 585.835 184.73 582.33 188.96C578.866 193.205 576.119 197.988 574.2 203.12C573.214 205.723 572.428 208.397 571.85 211.12C571.69 211.87 571.54 212.64 571.4 213.45C577.862 210.57 584.108 207.228 590.09 203.45C594.933 200.406 599.518 196.971 603.8 193.18C605.873 191.342 607.79 189.335 609.53 187.18C611.171 185.272 612.433 183.07 613.25 180.69C613.595 179.747 613.748 178.744 613.698 177.741C613.648 176.737 613.397 175.754 612.96 174.85C612.48 174.137 611.823 173.559 611.054 173.174C610.285 172.789 609.429 172.608 608.57 172.65L608.24 172.64ZM518.84 7.84998C518.076 7.88761 517.327 8.08161 516.64 8.41998C514.375 9.60184 512.318 11.1455 510.55 12.99C508.562 14.9565 506.705 17.051 504.99 19.26C501.395 23.7654 498.057 28.4695 494.99 33.35C492.1 37.99 489.26 43.07 486.56 48.45C484.1 53.45 481.74 58.76 479.56 64.27C477.66 69.09 475.88 74.27 473.97 80.64C472.48 85.64 471.13 91.01 469.73 97.44C467.205 108.801 465.279 120.287 463.96 131.85C462.583 143.385 461.915 154.993 461.96 166.61C461.96 172.3 462.2 177.61 462.63 182.61C467.18 175.77 471.63 168.61 475.88 161.37C481.81 151.21 487.41 140.83 492.52 130.51C503.005 109.656 511.732 87.9645 518.61 65.66C520.61 58.99 521.89 53.82 522.86 48.9C523.46 45.81 523.86 43.05 524.18 40.49C524.51 37.66 524.6 34.74 524.66 31.98C524.73 28.84 524.66 26.04 524.51 23.44C524.391 20.6781 524.057 17.9298 523.51 15.22C523.08 13.22 522.33 10.45 520.83 8.76999C520.437 8.27326 519.868 7.9473 519.24 7.85999C519.108 7.84063 518.973 7.83727 518.84 7.84998Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("path", {
    d: "M210.24 241.04C208.078 241.083 205.943 240.555 204.05 239.51C202.792 238.779 201.701 237.791 200.85 236.61C200.093 235.538 199.509 234.354 199.12 233.1C198.49 230.948 198.2 228.711 198.26 226.47C198.274 224.368 198.484 222.272 198.89 220.21C199.7 216.248 201.024 212.408 202.83 208.79C203.72 206.98 204.69 205.24 205.71 203.58C206.73 201.92 207.81 200.38 209.04 198.72C210.27 197.06 211.47 195.61 212.73 194.15C213.99 192.69 215.4 191.27 216.8 189.91C219.621 187.153 222.698 184.672 225.99 182.5C227.677 181.398 229.442 180.418 231.27 179.57C233.116 178.685 235.037 177.966 237.01 177.42C238.964 176.875 240.982 176.589 243.01 176.57H243.36C245.684 176.581 247.966 177.187 249.99 178.33L251.63 179.33L249.43 183.55L247.72 182.81C246.657 182.378 245.517 182.167 244.37 182.19C244.077 182.19 243.787 182.19 243.5 182.19C241.911 182.345 240.349 182.701 238.85 183.25C235.645 184.466 232.618 186.107 229.85 188.13C224.191 192.364 219.196 197.42 215.03 203.13C210.24 209.76 207.33 215.82 206.15 221.65C205.818 223.249 205.644 224.877 205.63 226.51C205.571 227.982 205.73 229.454 206.1 230.88C206.335 231.827 206.907 232.656 207.71 233.21C208.528 233.63 209.441 233.83 210.36 233.79H211.04C214.292 233.399 217.445 232.412 220.34 230.88C223.493 229.344 226.505 227.534 229.34 225.47C233.434 222.402 237.203 218.924 240.59 215.09C241.492 210.608 242.756 206.207 244.37 201.93C245.09 200.07 245.84 198.26 246.63 196.56L246.73 196.35C247.546 194.525 248.527 192.777 249.66 191.13C250.346 190.199 251.12 189.335 251.97 188.55C252.946 187.63 254.081 186.895 255.32 186.38H255.42C256.059 186.134 256.736 186.002 257.42 185.99C257.939 185.997 258.454 186.078 258.95 186.23C260.002 186.586 260.877 187.335 261.39 188.32C261.716 188.938 261.898 189.622 261.92 190.32C261.949 191.06 261.875 191.8 261.7 192.52V192.64C261.6 193.14 261.46 193.64 261.32 194.18C260.176 198.033 258.557 201.728 256.5 205.18C254.559 208.542 252.394 211.769 250.02 214.84C248.82 216.39 247.53 217.94 246.2 219.46C245.904 221.288 245.71 223.131 245.62 224.98V225.58C245.62 226.24 245.57 226.86 245.62 227.39C245.657 228.015 245.785 228.632 246 229.22C246.16 229.668 246.428 230.07 246.78 230.39C247.119 230.674 247.526 230.867 247.96 230.95C248.367 231.041 248.783 231.084 249.2 231.08C250.169 231.06 251.13 230.912 252.06 230.64C253.65 230.164 255.186 229.52 256.64 228.72C259.728 227.016 262.616 224.974 265.25 222.63C267.966 220.268 270.506 217.711 272.85 214.98C277.565 209.399 281.787 203.42 285.47 197.11C289.2 190.84 292.7 184.27 295.86 177.6C296.2 176.87 296.54 176.14 296.86 175.4V175.35C295.24 169.8 293.86 164.08 292.65 158.35C289.648 143.577 287.852 128.584 287.28 113.52C286.84 101.15 286.66 84.83 289.15 68.3C290.228 60.7467 291.899 53.2902 294.15 46C296.404 38.5828 299.586 31.4799 303.62 24.86C305.691 21.5301 308.032 18.3761 310.62 15.43C311.961 13.8867 313.418 12.4491 314.98 11.13C316.757 9.57478 318.837 8.40664 321.09 7.7C321.918 7.47676 322.772 7.36247 323.63 7.36C324.303 7.35361 324.975 7.42746 325.63 7.58C327.132 7.94342 328.511 8.69521 329.63 9.75999C331.323 11.4503 332.612 13.5014 333.4 15.76C334.709 19.5083 335.569 23.3989 335.96 27.35C336.38 30.8 336.66 34.54 336.8 38.8C336.94 43.06 336.94 46.65 336.8 50.19C336.464 57.7677 335.645 65.3162 334.35 72.79C331.804 87.5925 328.334 102.221 323.96 116.59C321.82 123.68 319.47 130.86 316.96 137.93C314.43 145.2 311.78 152.27 309.07 158.93C307.07 163.93 304.94 168.79 302.82 173.44C305.235 182.132 308.259 190.643 311.87 198.91C314.845 205.583 318.29 212.036 322.18 218.22C326.102 224.381 330.513 230.217 335.37 235.67L336.68 237.14L332.96 240.5L331.6 239.06C326.407 233.517 321.69 227.546 317.5 221.21C313.348 214.859 309.655 208.218 306.45 201.34C303.53 194.997 300.982 188.49 298.82 181.85C295.41 188.85 292.5 194.38 289.5 199.5C285.738 206.088 281.411 212.338 276.57 218.18C272.38 223.07 266.63 229.18 259.22 233.5C257.43 234.541 255.532 235.386 253.56 236.02C252.044 236.509 250.463 236.772 248.87 236.8C248.121 236.798 247.375 236.724 246.64 236.58C245.245 236.317 243.939 235.707 242.843 234.805C241.747 233.903 240.896 232.738 240.37 231.42C239.721 229.782 239.402 228.032 239.43 226.27C237.548 228.009 235.579 229.651 233.53 231.19C230.355 233.529 226.982 235.587 223.45 237.34C219.748 239.293 215.717 240.544 211.56 241.03C211.11 241.02 210.68 241.04 210.24 241.04ZM323.58 14.23C323.346 14.2353 323.114 14.2723 322.89 14.34C321.598 14.7903 320.411 15.4979 319.4 16.42C318.126 17.5085 316.939 18.6955 315.85 19.97C313.535 22.6287 311.454 25.4827 309.63 28.5C305.954 34.6563 303.017 41.2251 300.88 48.07C298.707 54.9948 297.082 62.08 296.02 69.26C294.1 81.73 293.5 95.26 294.08 113.17C294.505 127.878 296.111 142.529 298.88 156.98C299.46 159.98 300.13 162.98 300.88 166.08C302.15 163.14 303.38 160.15 304.58 157.15C307.22 150.51 309.79 143.5 312.23 136.3C314.56 129.3 316.74 122.13 318.7 115.08C322.714 100.881 325.824 86.4424 328.01 71.85C329.088 64.6169 329.756 57.3285 330.01 50.02C330.09 46.45 330.01 42.76 329.92 39.08C329.77 35.03 329.5 31.49 329.09 28.25C328.724 24.8409 327.965 21.4854 326.83 18.25C326.413 16.9873 325.731 15.8282 324.83 14.85C324.679 14.6626 324.489 14.5102 324.273 14.4032C324.057 14.2962 323.821 14.2371 323.58 14.23Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), __jsx("g", {
    clipPath: "url(#clip)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    id: "p",
    d: "M49.25 299.93C27.75 245.43 6.75 145.43 32.25 66.93C57.95 -12.18 102.97 -3.83003 103.25 28.93C103.75 87.43 26.83 151.57 3.25 164.93",
    "stroke-miterlimit": "10",
    strokeWidth: "10",
    stroke: "#201F1E",
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    id: "e",
    d: "M127.25 244.2C123.74 246.66 97.89 263.33 80.09 255.3C66.14 249.01 66.14 233.1 67.81 222.21C69.97 208.14 82.63 181.6 103.81 171.98C122.23 163.61 136.46 174.49 103.81 211.33C90.98 225.81 62.65 240.1 55.25 242.31",
    "stroke-miterlimit": "10",
    strokeWidth: "10",
    stroke: "#201F1E",
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    id: "t1",
    d: "M134.75 193.43C158.75 183.43 182.75 173.43 206.75 163.43",
    "stroke-miterlimit": "10",
    strokeWidth: "10",
    stroke: "#201F1E",
    variants: tVariants,
    initial: "hidden",
    animate: "visible",
    custom: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    id: "t2",
    d: "M196.75 116.43C189.25 128.82 179.02 149.29 174.75 176.43C168.63 215.32 178.11 246.54 183.75 261.43",
    "stroke-miterlimit": "10",
    strokeWidth: "10",
    stroke: "#201F1E",
    variants: tVariants,
    initial: "hidden",
    animate: "visible",
    custom: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    id: "al",
    d: "M248.01 179.57C244.16 177.56 237.88 178.03 229.7 182.8C217.08 190.16 199.75 210.42 201.31 228.01C202.52 241.62 216.96 236.36 227.75 229.42C241.75 220.42 255.5 201.75 257.75 190.42C258.52 186.55 253.75 188.42 250.75 193.42C247.75 198.42 241.75 212.42 241.75 225.42C241.75 238.57 258.75 234.42 275.75 213.42C303.56 179.06 332.75 91.42 332.75 45.42C332.75 5.42 323.19 1.73 308.75 21.42C297.75 36.42 290.33 61.13 289.75 93.42C288.75 149.42 300.87 201.87 332.75 236.42",
    "stroke-miterlimit": "10",
    strokeWidth: "8",
    stroke: "#201F1E",
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    id: "lea",
    d: "M409.75 241.96C464.11 209.14 525.25 82.92 527.25 35.92C528.74 0.890026 519.25 -5.07998 502.71 14.73C489.63 30.4 474.13 56.69 466.16 90.15C455.9 133.23 454.75 181.05 464.11 209.13C470.26 227.59 482.84 231.94 503.09 224.52C533.86 213.24 565.92 185.08 566.68 170.16C567.19 160.16 550.05 163.28 538.99 169.13C525.16 176.45 512.32 188.5 512.32 207.08C512.32 218.36 519.3 225.95 537.96 224.52C564.63 222.47 610.78 197.85 615.91 180.42C618.86 170.39 610.34 162.9 594.37 172.21C582.06 179.39 568.73 192.72 566.68 216.31C565.52 229.59 582.07 224.52 592.32 217.34C602.7 210.07 612.89 200.36 616.4 189.39C616.5 189.07 617.07 189.15 616.98 189.47C609.76 213.24 616.93 218.37 627.19 217.34C652.2 214.84 679.5 191.7 694.89 166.06",
    "stroke-miterlimit": "10",
    strokeWidth: "8",
    stroke: "#201F1E",
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    id: "f",
    d: "M709.25 97.34C707.19 75.02 698.22 61.14 689.76 64.52C669.25 72.73 647.71 182.47 665.14 300.43",
    "stroke-miterlimit": "10",
    strokeWidth: "8",
    stroke: "#201F1E",
    variants: strokeVariants,
    initial: "hidden",
    animate: "visible",
    custom: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/Product/AddToBagBtn.tsx":
/*!********************************************!*\
  !*** ./components/Product/AddToBagBtn.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddToBagBtn; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/cart/action */ "./store/cart/action.tsx");

var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Product/AddToBagBtn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Root = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "AddToBagBtn__Root",
  componentId: "si31ez-0"
})(["display:inline-block;height:36px;width:auto;min-width:160px;background:", ";cursor:pointer;border-radius:18px;border:none;outline:none;text-align:center;line-height:36px;transition:all 0.2s ease-in-out;color:", ";&:hover .btnText{display:none;}&:hover .optionsWrap{display:flex;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.primary.main, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["styles"].palette.text.primary);
const OptionsWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "AddToBagBtn__OptionsWrap",
  componentId: "si31ez-1"
})(["display:none;margin-top:6px;width:100%;justify-content:space-around;transition:all 0.3s ease-in-out;"]);
const Option = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "AddToBagBtn__Option",
  componentId: "si31ez-2"
})(["height:24px;width:64px;background:transparent;cursor:pointer;border-radius:12px;border:none;outline:none;text-align:center;line-height:24px;transition:all 0.2s ease-in-out;&:hover{background:#fff;}"]); // interface propsValue {
//   onClick?: () => {}
//   btype?: any
//   children: any
//   moreProps?: any
// }

const sizes = [{
  size: '30g',
  sku: 'rc30',
  price: 15,
  name: 'Rose Cake'
}, {
  size: '50g',
  sku: 'rc50',
  price: 18,
  name: 'Rose Cake'
}];
function AddToBagBtn() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const flyoutTimeout = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.cart.flyoutTimeout);

  const handleAddItem = sku => {
    if (flyoutTimeout !== undefined) {
      dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_6__["clearFlyoutTimeout"])());
    }

    dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_6__["increaseQuantity"])(sku));
    const item = sizes.filter(s => {
      return s.sku === sku;
    })[0];
    dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_6__["openFlyout"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      size: `${item.size}, 6 counts`,
      quantity: 1
    })));
    const timeout = setTimeout(() => dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_6__["closeFlyout"])()), 2000);
    dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_6__["setFlyoutTimeout"])(timeout));
  };

  return __jsx(Root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(OptionsWrap, {
    className: "optionsWrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, sizes.map((s, i) => {
    return __jsx(Option, {
      key: s.sku + i,
      onClick: () => handleAddItem(s.sku),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "button",
      style: {
        textTransform: 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, s.size));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    className: "btnText",
    variant: "button",
    style: {
      textTransform: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Add to bag"));
}

/***/ }),

/***/ "./components/Product/CardImage.tsx":
/*!******************************************!*\
  !*** ./components/Product/CardImage.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CakesPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CakesPath */ "./components/CakesPath.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Product/CardImage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "CardImage__Container",
  componentId: "sc-1jhb0t7-0"
})(["overflow:hidden;height:400px;width:100%;display:flex;align-items:center;border-radius:16px;position:relative;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].img).withConfig({
  displayName: "CardImage__Image",
  componentId: "sc-1jhb0t7-1"
})(["width:100%;"]);
function CardImage({
  data
}) {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(Image, {
    src: `/static/images/${data[0]}`,
    alt: data[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_CakesPath__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/Product/CardInfo.tsx":
/*!*****************************************!*\
  !*** ./components/Product/CardInfo.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_LinkBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/LinkBtn */ "./components/Button/LinkBtn.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _AddToBagBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddToBagBtn */ "./components/Product/AddToBagBtn.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Product/CardInfo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "CardInfo__Container",
  componentId: "sc-1o9twyb-0"
})(["padding:16px;"]);
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CardInfo__Headline",
  componentId: "sc-1o9twyb-1"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "CardInfo__Price",
  componentId: "sc-1o9twyb-2"
})(["font-family:", ";font-size:14px;font-weight:400;color:", ";"], _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].typography.button.fontFamily, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].palette.text.primary);
function CardInfo({
  data
}) {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(Headline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, data.name), __jsx(Price, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "$15 (30g, 6 counts) | $18 (50g, 6 counts)")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    style: {
      marginTop: 8,
      marginBottom: 24
    },
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    style: {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].palette.text.primary
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, data.tags.map((t, i) => {
    if (i === 0) {
      return t;
    } else {
      return ` | ${t}`;
    }
  })), "\xA0 - ", data.description, ".\xA0", __jsx(_Button_LinkBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/p/[id]",
    as: `/p/${data.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Read more")), __jsx(_AddToBagBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Product/ProductCard.tsx":
/*!********************************************!*\
  !*** ./components/Product/ProductCard.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProuductCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CardImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardImage */ "./components/Product/CardImage.tsx");
/* harmony import */ var _CardInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardInfo */ "./components/Product/CardInfo.tsx");

var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Product/ProductCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div).withConfig({
  displayName: "ProductCard__Container",
  componentId: "sc-1xutkn9-0"
})(["width:100%;background:transparent;overflow:hidden;&:not(:last-child){margin-bottom:72px;}"]);
function ProuductCard({
  data,
  moreProps
}) {
  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0
    },
    transition: {
      duraton: 1,
      delay: 0.5
    }
  }, moreProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_CardImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_CardInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Product/ProductFlyout.tsx":
/*!**********************************************!*\
  !*** ./components/Product/ProductFlyout.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductFlyout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Cart_CartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cart/CartItem */ "./components/Cart/CartItem.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Product/ProductFlyout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({
  displayName: "ProductFlyout__Root",
  componentId: "wfomnb-0"
})(["width:320px;height:auto;max-height:480px;background-color:#ffffff;box-shadow:0 15px 46px -10px rgba(29,28,27,0.3);position:absolute;right:-16px;top:40px;z-index:98;border-radius:8px;display:flex;flex-direction:column;"]);
const rootVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ProductFlyout__Header",
  componentId: "wfomnb-1"
})(["height:48px;padding-top:16px;padding-left:24px;padding-right:24px;display:flex;align-items:center;"]);
function ProductFlyout({
  item
}) {
  return __jsx(Root, {
    variants: rootVariants,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Added to your bag")), __jsx(_Cart_CartItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: item,
    editable: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
}

/***/ }),

/***/ "./layout/SplitLayout.tsx":
/*!********************************!*\
  !*** ./layout/SplitLayout.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/layout/SplitLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "SplitLayout__Main",
  componentId: "n6eexq-0"
})(["max-width:100%;padding-left:40%;"]);
const Aside = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "SplitLayout__Aside",
  componentId: "n6eexq-1"
})(["position:fixed;top:0;left:0;width:40%;height:100%;overflow-y:hidden;padding:160px 72px 0;"]);
function SplitLayout({
  children,
  headerType = 'home',
  hideHeader = false
}) {
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(Aside, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, !hideHeader && __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: headerType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })));
}

/***/ }),

/***/ "./lib/auth.tsx":
/*!**********************!*\
  !*** ./lib/auth.tsx ***!
  \**********************/
/*! exports provided: signUpWithEmailAndPassword, signInWithEmailAndPassword, onAuthStatusChange, signOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpWithEmailAndPassword", function() { return signUpWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithEmailAndPassword", function() { return signInWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAuthStatusChange", function() { return onAuthStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fire */ "./lib/fire.tsx");
/* harmony import */ var _store_user_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/user/type */ "./store/user/type.tsx");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorage */ "./utils/localStorage.tsx");



/*********************************************************************/
// Sign Up

const signUpWithEmailAndPassword = async (email, password) => _fire__WEBPACK_IMPORTED_MODULE_0__["auth"].createUserWithEmailAndPassword(email, password); // Sign In

const signInWithEmailAndPassword = async (email, password) => _fire__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithEmailAndPassword(email, password); // Auth Status Tracking

function onAuthStatusChange(store) {
  _fire__WEBPACK_IMPORTED_MODULE_0__["auth"].onAuthStateChanged(user => {
    if (user !== null) {
      console.log('user signed in');
    } else {
      console.log('user signed out');
    }

    const isLoggedin = user === null ? false : true;
    store.dispatch({
      type: _store_user_type__WEBPACK_IMPORTED_MODULE_1__["AUTH_STATUS_CHANGE"],
      user: user,
      isLoggedin: isLoggedin
    });
  });
}
/*********************************************************************/

/****Behaviors needs to be signed in First****************************/

/*****Current User is Set When Login Action success *****************/
//provide a store-connected var to get currentUser
// const currentUser = useSelector((state: any) => state.user.currentUser)

/*********************************************************************/
// Sign out
// dont define as async or use await,
// otherwise return would be undefined

const signOut = () => {
  Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__["signOutLocalStateClear"])();
  _fire__WEBPACK_IMPORTED_MODULE_0__["auth"].signOut();
}; // if (currentUser != null) {
//   currentUser.providerData.forEach(function(profile) {
//     console.log('Sign-in provider: ' + profile.providerId)
//     console.log('  Provider-specific UID: ' + profile.uid)
//     console.log('  Name: ' + profile.displayName)
//     console.log('  Email: ' + profile.email)
//     console.log('  Photo URL: ' + profile.photoURL)
//   })
// }
// // Password Reset
// export const doPasswordReset = (email: string) =>
//   auth.sendPasswordResetEmail(email)
// // Password Change
// export const doPasswordUpdate = (password: string) =>
//   auth.currentUser && auth.currentUser.updatePassword(password)
// //Send a user a verification email
// var user = firebase.auth().currentUser
// user
//   .sendEmailVerification()
//   .then(function() {
//     // Email sent.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })
// var user = firebase.auth().currentUser
// var newPassword = getASecureRandomPassword()
// //Set a user's password
// user
//   .updatePassword(newPassword)
//   .then(function() {
//     // Update successful.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })
// //Send a password reset email
// var auth = firebase.auth()
// var emailAddress = 'user@example.com'
// auth
//   .sendPasswordResetEmail(emailAddress)
//   .then(function() {
//     // Email sent.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })
// //Delete a user
// var user = firebase.auth().currentUser
// user
//   .delete()
//   .then(function() {
//     // User deleted.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })
// // Prompt the user to re-provide their sign-in credentials
// // Some security-sensitive actions—such as deleting an account
// // setting a primary email address, and changing a password—require
// // that the user has recently signed in.
// user
//   .reauthenticateWithCredential(credential)
//   .then(function() {
//     // User re-authenticated.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })

/***/ }),

/***/ "./lib/db.tsx":
/*!********************!*\
  !*** ./lib/db.tsx ***!
  \********************/
/*! exports provided: fetchProductList, fetchProduct, fetchProductStory, getUserProfile, onUserProfileChange, deleteUserField, createUserProfile, updateUserAddress, deleteUserAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductList", function() { return fetchProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduct", function() { return fetchProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductStory", function() { return fetchProductStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUserProfileChange", function() { return onUserProfileChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserField", function() { return deleteUserField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserProfile", function() { return createUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserAddress", function() { return updateUserAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserAddress", function() { return deleteUserAddress; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fire */ "./lib/fire.tsx");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.tsx");



 // import { toPureObjectArray } from '../utils/helper'

/********* *******    NOTICE ON AUTH ******* *************/

/* ALL  read and write operation assumes that user is signed in
 ** this check is done in 1) action createors at client
 ** and 2) firestore rule in database */

/************************ READ *****************************/

const fetchDoc = async path => {
  const docRef = await _fire__WEBPACK_IMPORTED_MODULE_2__["db"].doc(path).get();
  const doc = docRef.data();
  return doc;
};

const fetchDocs = async (collection, orderBy = '') => {
  const docsQuerySnapshot = await _fire__WEBPACK_IMPORTED_MODULE_2__["db"].collection(collection).orderBy(orderBy).get();
  const docs = [];
  docsQuerySnapshot.forEach(doc => {
    docs.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, doc.data(), {
      id: doc.id
    }));
  });
  return docs;
}; // Home page data


const fetchProductList = async () => {
  return await fetchDocs('products', 'order');
}; // Product detail page data

const fetchProduct = async id => {
  return await fetchDoc(`products/${id}`);
};
const fetchProductStory = async id => {
  return await fetchDoc(`products/${id}/stories/2019EN`);
};
const getUserProfile = async uid => {
  return await fetchDoc(`users/${uid}`);
}; // Listener for User Profile Data
// return unsubscriobe function
// pass as return in useEffect hook to
// unsubscriobe when component unmount
// For Account/Address USE

function onUserProfileChange(uid, onNext, onError) {
  return _fire__WEBPACK_IMPORTED_MODULE_2__["db"].doc(`users/${uid}`).onSnapshot(onNext, onError);
} // const getAddress = (snapshot: any) => {
//   const addressList = snapshot.data().addressList
//   addressList && setAddresses(addressList)
// }
// const getAddrErr = (err: any) => {
//   console.log(err)
// }
// export const userAddressListener = (uid: string, getUserAddr: Function) => {
//   onUserProfileChange(uid, getAddress, getAddrErr)
// }

/*********************** WRITE  BASIC OPERATIONS*******************/

const writeDoc = async (type, col, docID, data) => {
  const path = `${col}/${docID}`;

  try {
    // const docRef = db.doc(`${col}/${docID}`)
    switch (type) {
      case 'set':
        return await _fire__WEBPACK_IMPORTED_MODULE_2__["db"].doc(path).set(data);

      case 'update':
        return await _fire__WEBPACK_IMPORTED_MODULE_2__["db"].doc(path).update(data);

      case 'delete':
        //delete ENTIRE DOC, NOT A FIELD
        return await _fire__WEBPACK_IMPORTED_MODULE_2__["db"].doc(path).delete();

      case 'deleteField':
        //see firebase reference
        const removeSytax = {
          [data]: _fire__WEBPACK_IMPORTED_MODULE_2__["fieldDelete"]
        };
        return await _fire__WEBPACK_IMPORTED_MODULE_2__["db"].doc(path).update(removeSytax);

      default:
        console.log('Incorrect firebase write opertion type');
    }
  } catch (err) {
    console.log('Firebase Write to Doc Err ', err);
  }
};
/******************************************************************/


const deleteUserField = async (uid, fieldToRemove) => {
  try {
    await writeDoc('deleteField', 'users', uid, fieldToRemove);
  } catch (err) {
    console.log('err delete field ', err);
  }
};
const createUserProfile = async userinfo => {
  const {
    uid,
    email
  } = userinfo;
  const profile = new _utils_types__WEBPACK_IMPORTED_MODULE_3__["ProfileStructure"]({
    email: email
  });

  try {
    await writeDoc('set', 'users', uid, profile.toObject());
  } catch (err) {
    console.log('Firebase Create Doc Err ', err);
  }
};

const updateUserProfileField = async (uid, field, data) => {
  // demonstrate how to user var as key of object in ES6
  console.log(`update: {${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(field)} : ${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)} }`);
  const newFieldData = {
    [field]: data
  };

  try {
    await writeDoc('update', 'users', uid, newFieldData);
  } catch (err) {
    console.log(err);
  }
}; //including update already exist and delete from the list.


const updateUserAddress = async (uid, addressList) => {
  try {
    return await updateUserProfileField(uid, 'addressList', addressList);
  } catch (err) {
    console.log('err updateUserAddress', err);
  }
};
const deleteUserAddress = async uid => {
  return uid;
};

/***/ }),

/***/ "./lib/fire.tsx":
/*!**********************!*\
  !*** ./lib/fire.tsx ***!
  \**********************/
/*! exports provided: db, auth, fieldDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldDelete", function() { return fieldDelete; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyA_ZHNg93gYd8usmaanHBbYv3tz0O1BOzc",
  authDomain: "petalleafweb.firebaseapp.com",
  databaseURL: "https://petalleafweb.firebaseio.com",
  projectId: "petalleafweb",
  storageBucket: "petalleafweb.appspot.com",
  messagingSenderId: "361247471331",
  appId: "1:361247471331:web:9abe95b69c7e28df0177d6"
};

try {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fieldDelete = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore.FieldValue.delete();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_SplitLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/SplitLayout */ "./layout/SplitLayout.tsx");
/* harmony import */ var _components_Product_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Product/ProductCard */ "./components/Product/ProductCard.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_content_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/content/action */ "./store/content/action.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ProductList = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div).withConfig({
  displayName: "pages__ProductList",
  componentId: "lrbmwi-0"
})(["max-width:880px;margin-left:auto;margin-right:auto;padding:32px;padding-top:96px;flex:1;"]);
const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
};

function Index() {
  const productList = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.content.productList);
  return __jsx(_layout_SplitLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(ProductList, {
    variants: listVariants,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, productList.map((product, i) => {
    return __jsx(_components_Product_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: product + i,
      data: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
  })));
}

Index.getInitialProps = async function (ctx) {
  const {
    store,
    isServer
  } = ctx;
  const currentState = store.getState();

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(currentState.content.productList)) {
    await store.dispatch(Object(_store_content_action__WEBPACK_IMPORTED_MODULE_6__["getProductList"])());
  }

  return {
    isServer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/data/footer.json":
/*!*********************************!*\
  !*** ./static/data/footer.json ***!
  \*********************************/
/*! exports provided: EN, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"EN\":{\"links\":[{\"name\":\"Terms of Use\",\"url\":\"https://app.termly.io/document/terms-of-use-for-ecommerce/8b04952f-3b78-4d53-92b9-982ad07f5978\"},{\"name\":\"Customer Service\",\"url\":\"https://www.google.com\"},{\"name\":\"FAQs\",\"url\":\"https://www.google.com\"},{\"name\":\"Contact Us\",\"url\":\"https://www.google.com\"}]}}");

/***/ }),

/***/ "./store/cart/action.tsx":
/*!*******************************!*\
  !*** ./store/cart/action.tsx ***!
  \*******************************/
/*! exports provided: toggleSidebar, closeSidebar, toggleFlyout, openFlyout, closeFlyout, setFlyoutTimeout, clearFlyoutTimeout, increaseQuantity, increaseQuantityBy, decreaseQuantity, setQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSidebar", function() { return toggleSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSidebar", function() { return closeSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFlyout", function() { return toggleFlyout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFlyout", function() { return openFlyout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeFlyout", function() { return closeFlyout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFlyoutTimeout", function() { return setFlyoutTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFlyoutTimeout", function() { return clearFlyoutTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseQuantity", function() { return increaseQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseQuantityBy", function() { return increaseQuantityBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseQuantity", function() { return decreaseQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuantity", function() { return setQuantity; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./store/cart/type.tsx");

function toggleSidebar() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_SIDEBAR"]
  };
}
function closeSidebar() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["CLOSE_SIDEBAR"]
  };
}
function toggleFlyout() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_FLYOUT"]
  };
}
function openFlyout(product) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["OPEN_FLYOUT"],
    product: product
  };
}
function closeFlyout() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["CLOSE_FLYOUT"]
  };
}
function setFlyoutTimeout(timeout) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["SET_FLYOUT_TIMEOUT"],
    timeout: timeout
  };
}
function clearFlyoutTimeout() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["CLEAR_FLYOUT_TIMEOUT"]
  };
}
/**************************************************************/

/** Manipulation cart items                                   */

/**************************************************************/
// Add an item to cart
// or increase the quantity of an existing item by 1

function increaseQuantity(itemID) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["UPDATE_QUANTITY"],
    itemID: itemID,
    delta: 1
  };
}
function increaseQuantityBy(itemID, delta) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["UPDATE_QUANTITY"],
    itemID: itemID,
    delta: delta
  };
} // Decrease the quantity of an existing item by 1

function decreaseQuantity(itemID) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["UPDATE_QUANTITY"],
    itemID: itemID,
    delta: -1
  };
} // Set the quantity of an existing item

function setQuantity(itemID, quantity) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["SET_QUANTITY"],
    itemID: itemID,
    quantity: quantity
  };
}

/***/ }),

/***/ "./store/cart/type.tsx":
/*!*****************************!*\
  !*** ./store/cart/type.tsx ***!
  \*****************************/
/*! exports provided: TOGGLE_SIDEBAR, CLOSE_SIDEBAR, TOGGLE_FLYOUT, OPEN_FLYOUT, CLOSE_FLYOUT, SET_FLYOUT_TIMEOUT, CLEAR_FLYOUT_TIMEOUT, REMOVE_ITEM, SET_QUANTITY, UPDATE_QUANTITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_SIDEBAR", function() { return TOGGLE_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SIDEBAR", function() { return CLOSE_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_FLYOUT", function() { return TOGGLE_FLYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_FLYOUT", function() { return OPEN_FLYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_FLYOUT", function() { return CLOSE_FLYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FLYOUT_TIMEOUT", function() { return SET_FLYOUT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_FLYOUT_TIMEOUT", function() { return CLEAR_FLYOUT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_QUANTITY", function() { return SET_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QUANTITY", function() { return UPDATE_QUANTITY; });
/**************************************************************/

/**************************************************************/
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
const TOGGLE_FLYOUT = 'TOGGLE_FLYOUT';
const OPEN_FLYOUT = 'OPEN_FLYOUT';
const CLOSE_FLYOUT = 'CLOSE_FLYOUT';
const SET_FLYOUT_TIMEOUT = 'SET_FLYOUT_TIMEOUT';
const CLEAR_FLYOUT_TIMEOUT = 'CLEAR_FLYOUT_TIMEOUT';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SET_QUANTITY = 'SET_QUANTITY';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

/***/ }),

/***/ "./store/content/action.tsx":
/*!**********************************!*\
  !*** ./store/content/action.tsx ***!
  \**********************************/
/*! exports provided: getProductList, getProduct, getProductStory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductList", function() { return getProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductStory", function() { return getProductStory; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./store/content/type.tsx");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.tsx");


/**************************************************************/

function getProductList() {
  return async dispatch => {
    try {
      return dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTLIST"],
        data: await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__["fetchProductList"])()
      });
    } catch (error) {
      console.error('Error fetch footer' + error);
    }
  };
}
function getProduct(id) {
  return async dispatch => {
    try {
      return dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__["GET_PRODCUT"],
        data: await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__["fetchProduct"])(id)
      });
    } catch (error) {
      console.error('Error fetch footer' + error);
    }
  };
}
function getProductStory(id) {
  return async dispatch => {
    try {
      return dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTSTORY"],
        data: await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__["fetchProductStory"])(id)
      });
    } catch (error) {
      console.error('Error fetch footer' + error);
    }
  };
}

/***/ }),

/***/ "./store/content/type.tsx":
/*!********************************!*\
  !*** ./store/content/type.tsx ***!
  \********************************/
/*! exports provided: GET_PRODUCTLIST, GET_PRODCUT, GET_PRODUCTSTORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTLIST", function() { return GET_PRODUCTLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODCUT", function() { return GET_PRODCUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTSTORY", function() { return GET_PRODUCTSTORY; });
/**************************************************************/

/**************************************************************/
const GET_PRODUCTLIST = 'GET_PRODUCTLIST';
const GET_PRODCUT = 'GET_PRODCUT';
const GET_PRODUCTSTORY = 'GET_PRODUCTSTORY';

/***/ }),

/***/ "./store/user/action.tsx":
/*!*******************************!*\
  !*** ./store/user/action.tsx ***!
  \*******************************/
/*! exports provided: LogInAction, SignOutAction, SignUpAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInAction", function() { return LogInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutAction", function() { return SignOutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpAction", function() { return SignUpAction; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./store/user/type.tsx");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/auth */ "./lib/auth.tsx");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.tsx");



function LogInAction(email, password) {
  return async dispatch => {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]
    });

    try {
      await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__["signInWithEmailAndPassword"])(email, password);
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]
      });
    } catch (err) {
      console.log('login fail: ', err.code);
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"],
        err: err.code
      });
    }
  };
}
function SignOutAction() {
  return async dispatch => {
    try {
      Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__["signOut"])();
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT"]
      });
    } catch (err) {
      console.log('singout fail: ', err.code);
    }
  };
}
function SignUpAction(email, password) {
  return async dispatch => {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_REQUEST"]
    });

    try {
      //sign up with email and password
      const res = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__["signUpWithEmailAndPassword"])(email, password); //extract uid from auth res && also make sure it's success before proceed

      const userInfo = {
        uid: res.user.uid,
        email: email
      };
      await Object(_lib_db__WEBPACK_IMPORTED_MODULE_2__["createUserProfile"])(userInfo);
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_SUCCESS"]
      });
    } catch (err) {
      console.log(err);
      console.log('sign up fail: ', err.code);
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_FAIL"],
        err: err.code
      });
    }
  };
}

/***/ }),

/***/ "./store/user/type.tsx":
/*!*****************************!*\
  !*** ./store/user/type.tsx ***!
  \*****************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_STATUS_CHANGE, SIGN_OUT, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_STATUS_CHANGE", function() { return AUTH_STATUS_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT", function() { return SIGN_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAIL", function() { return SIGN_UP_FAIL; });
// Describing the shape of the chat's slice of state

/********* ********   LOGIN   TYPES ***********************/
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

/***********************AUTH  STATUS ****************************/
const AUTH_STATUS_CHANGE = 'AUTH_STATUS_CHANGE';

/********* ********   SIGN OUT   TYPES ***********************/
const SIGN_OUT = 'SIGN_OUT';

/********* ********   SIGN UP   TYPES ***********************/
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

/***/ }),

/***/ "./styles/theme.tsx":
/*!**************************!*\
  !*** ./styles/theme.tsx ***!
  \**************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
  palette: {
    primary: {
      // main: '#F2673B'
      main: '#FED450'
    },
    secondary: {
      main: '#F4D1C5'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: '#fff'
    },
    divider: '#D6D3C9',
    text: {
      primary: '#201F1E',
      secondary: '#5F5F5F'
    },
    grey: {
      400: '#bdbdbd',
      500: '#9e9e9e',
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0'
    }
  },
  typography: {
    fontFamily: 'Lato, Helvetica, Arial, sans-serif',
    h3: {
      fontFamily: "'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600
    },
    h4: {
      fontFamily: "'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24
    },
    h5: {
      fontFamily: "'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18
    },
    h6: {
      fontFamily: "'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14
    },
    body2: {
      fontWeight: 400
    },
    button: {
      fontFamily: "'Fira Code', 'Quicksand', Helvetica, Arial, sans-serif",
      fontWeight: 600
    }
  }
}; // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])(styles);
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./utils/localStorage.tsx":
/*!********************************!*\
  !*** ./utils/localStorage.tsx ***!
  \********************************/
/*! exports provided: loadState, saveState, syncStoreLocal, unsyncStoreLocal, signOutLocalStateClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadState", function() { return loadState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncStoreLocal", function() { return syncStoreLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsyncStoreLocal", function() { return unsyncStoreLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutLocalStateClear", function() { return signOutLocalStateClear; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

 // loads the state from localStorage

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; //saves the state to localStorage

const saveState = state => {
  try {
    const serializedState = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(state);

    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('save state err ', err);
  }
}; //sync local storage with redux store
//throttle to at most 1 timer per sec

const syncStoreLocal = store => {
  store.subscribe(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["throttle"])(() => {
    saveState({
      state: store.getState()
    });
  }, 1000));
}; //unsycn the app by clear localstorage
//redux store will be reset by refresh or close tab

const unsyncStoreLocal = () => {
  localStorage.clear();
}; //Sign out state clear, only retain state about cart

const signOutLocalStateClear = () => {
  const current = loadState().state;
  const {
    items
  } = current.cart;
  const retainedState = {
    cart: {
      isFlyoutOpen: false,
      isSidebarOpen: false,
      items: items
    }
  };
  localStorage.clear();
  saveState(retainedState);
};

/***/ }),

/***/ "./utils/types.tsx":
/*!*************************!*\
  !*** ./utils/types.tsx ***!
  \*************************/
/*! exports provided: ProfileStructure, AddressFormType, errorMsgMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileStructure", function() { return ProfileStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressFormType", function() { return AddressFormType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMsgMap", function() { return errorMsgMap; });
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);




class ProfileStructure {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "email", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "addressList", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "orders", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "payment", {});

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(this, init);
  }

  toObject() {
    return {
      email: this.email,
      orders: this.orders,
      payment: this.payment,
      addressList: this.addressList
    };
  }

}
class AddressFormType {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "fullname", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "line1", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "line2", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "city", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "state", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "zipcode", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "phone", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "formattedPhone", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "errors", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "isDefault", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "isValid", false);

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(this, init);
  }

  toObject() {
    return {
      fullname: this.fullname,
      line1: this.line1,
      line2: this.line2,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      phone: this.phone,
      isDefault: this.isDefault
    };
  }

}
const errorMsgMap = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a([['auth/user-not-found', 'Your email or password is incorrect. Try again.'], ['auth/invalid-email', 'Invalid email'], ['auth/wrong-password', 'Your email or password is incorrect. Try again.'], ['auth/email-already-in-use', 'Looks like you already have an account. Please log in instead.'], ['auth/weak-password', 'Your password has to be at least 6 characters.']]);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jianruan/Developer/webapp/frontend/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map