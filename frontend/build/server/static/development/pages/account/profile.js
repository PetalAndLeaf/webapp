module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/Account/AccountNav.tsx":
/*!*******************************************!*\
  !*** ./components/Account/AccountNav.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FeatherIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FeatherIcon */ "./components/FeatherIcon.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Account/AccountNav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccountNav__Root",
  componentId: "arhz79-0"
})(["width:100%;max-width:240px;height:auto;background-color:#ffffff;margin:0 auto;padding:8px 0;"]);
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccountNav__NavItem",
  componentId: "arhz79-1"
})(["width:100%;height:48px;display:flex;align-items:center;padding:0 24px;color:", ";cursor:pointer;transition:color 0.2s ease-in-out;&:hover{color:", ";}p{color:", ";}&:hover p{color:", ";font-weight:600;}"], props => props.isSelected ? _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].palette.text.primary : _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].palette.text.secondary, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].palette.primary.main, props => props.isSelected ? _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].palette.text.primary : _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].palette.text.secondary, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].palette.primary.main);
const NavItemText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "AccountNav__NavItemText",
  componentId: "arhz79-2"
})(["font-family:", ";font-size:14px;margin-left:16px;transition:color 0.2s ease-in-out;"], _styles_theme__WEBPACK_IMPORTED_MODULE_5__["styles"].typography.button.fontFamily);
const navItems = [{
  path: 'profile',
  name: 'Account',
  icon: 'user'
}, {
  path: 'address',
  name: 'Shipping info',
  icon: 'location'
}, {
  path: 'payment',
  name: 'Payment info',
  icon: 'card'
}, {
  path: 'orders',
  name: 'Orders',
  icon: 'box'
}];
function AccountNav() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const path = router.asPath;
  return __jsx(Root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, navItems.map((item, i) => {
    const isSelect = path.includes(item.path);
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/account/${item.path}`,
      key: item + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(NavItem, {
      isSelected: isSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(_FeatherIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      icon: item.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), __jsx(NavItemText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, item.name)));
  }));
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

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/components/Card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div).withConfig({
  displayName: "Card__Container",
  componentId: "sc-12jy3y5-0"
})(["background-color:#ffffff;box-shadow:0 15px 46px -10px rgba(29,28,27,0.3);border-radius:8px;padding:32px;"]);
const containerVariants = {
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
function Card({
  children,
  style
}) {
  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variants: containerVariants,
    initial: "hidden",
    animate: "visible",
    exit: "hidden"
  }, style, {
    layoutTransition: {
      duration: 0.3,
      ease: 'easeInOut'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), children);
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

/***/ "./layout/AccountLayout.tsx":
/*!**********************************!*\
  !*** ./layout/AccountLayout.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Account_AccountNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Account/AccountNav */ "./components/Account/AccountNav.tsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./components/Card.tsx");
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/layout/AccountLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccountLayout__Root",
  componentId: "vlci5h-0"
})(["max-width:100%;display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AccountLayout__Main",
  componentId: "vlci5h-1"
})(["width:100%;margin-top:160px;max-width:960px;margin-left:auto;margin-right:auto;flex:1;"]);
function AccountLayout({
  children
}) {
  return __jsx(Root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_Account_AccountNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      maxWidth: 640,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, children)))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fading: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
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

/***/ "./pages/account/profile.tsx":
/*!***********************************!*\
  !*** ./pages/account/profile.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_AccountLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/AccountLayout */ "./layout/AccountLayout.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/InputField */ "./components/InputField.tsx");
/* harmony import */ var _components_Button_RoundedBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Button/RoundedBtn */ "./components/Button/RoundedBtn.tsx");
/* harmony import */ var _components_Button_TextBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Button/TextBtn */ "./components/Button/TextBtn.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/jianruan/Developer/webapp/frontend/pages/account/profile.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Header = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "profile__Header",
  componentId: "sc-1suz3s5-0"
})(["height:64px;min-height:64px;display:flex;align-items:center;margin-bottom:16px;"]);
function Profile() {
  const currentUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user.currentUser);
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: pwd,
    1: setPwd
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentUser) {
      setEmail(currentUser.email);
    }
  }, []);
  return __jsx(_layout_AccountLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Edit your account information")), __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Email",
    type: "email",
    value: email,
    placeholder: "Email",
    onChange: e => setEmail(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Password",
    value: pwd,
    type: "password",
    placeholder: "Password",
    onChange: e => setPwd(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_Button_RoundedBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      marginTop: 8,
      marginRight: 16
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Save"), __jsx(_components_Button_TextBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      marginTop: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Delete account"));
}

Profile.getInitialProps = async function (ctx) {
  const {
    store,
    isServer
  } = ctx; // store.dispatch(closeSidebar())

  const {
    isLoggedin
  } = store.getState().user;

  if (!isLoggedin) {
    if (isServer) {
      ctx.res.writeHead(302, {
        Location: `/`
      });
      ctx.res.end();
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
    }
  }

  return {
    isServer
  };
};

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

/***/ 5:
/*!*****************************************!*\
  !*** multi ./pages/account/profile.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jianruan/Developer/webapp/frontend/pages/account/profile.tsx */"./pages/account/profile.tsx");


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
//# sourceMappingURL=profile.js.map