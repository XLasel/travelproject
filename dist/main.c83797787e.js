/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.scss */ "./style/main.scss");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./main.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

const constructorForm = document.querySelector('.constructor__form');
const select = document.getElementById('select__type');
const inputDate = constructorForm.querySelectorAll('input[type="date"]');
const dateFromInput = document.getElementById('date-from');
const dateToInput = document.getElementById('date-to');
const resetButton = constructorForm.querySelector('button[type="reset"]');
const headerNavWrapp = document.querySelector('.header__nav-wrapper');
const header = document.querySelector('.header');
const headerNavHeight = headerNavWrapp.offsetHeight;
select.addEventListener('change', () => {
  const value = select.value;
  value === 'none' ? select.classList.add('constructor__form-select--placeholder') : select.classList.remove('constructor__form-select--placeholder');
});
inputDate.forEach(elem => {
  elem.addEventListener('input', event => {
    event.target.value ? event.target.classList.remove('constructor__form-input--date-placeholder') : event.target.classList.add('constructor__form-input--date-placeholder');
  });
});
resetButton.addEventListener('click', makeFromDeafult);
const removeWarning = input => {
  if (input.classList.contains('constructor__form-input--invalid')) {
    input.classList.remove('constructor__form-input--invalid');
  }
};
const addWarning = input => {
  if (!input.classList.contains('constructor__form-input--invalid')) {
    input.classList.add('constructor__form-input--invalid');
  }
};
const verifyFormDate = () => {
  let currentDate;
  let correctDate;
  let dateFrom;
  let dateTo;
  inputDate.forEach(elem => elem.addEventListener('change', valideDates));
  function valideDates(event) {
    currentDate = new Date().toISOString().split('T')[0];
    correctDate = currentDate.split('-').map((elem, index) => index === 0 ? Number(elem) + 5 : elem).join('-');
    dateFrom = dateFromInput.value;
    dateTo = dateToInput.value;
    if (event.target === dateFromInput) {
      dateFrom < currentDate || dateFrom > correctDate ? addWarning(dateFromInput) : removeWarning(dateFromInput);
      if (dateTo != '') {
        dateTo <= dateFrom ? addWarning(dateToInput) : removeWarning(dateToInput);
      }
    }
    if (event.target === dateToInput) {
      dateTo < currentDate || dateTo > correctDate ? addWarning(dateToInput) : removeWarning(dateToInput);
      if (dateFrom != '') {
        dateTo <= dateFrom ? addWarning(dateToInput) : removeWarning(dateToInput);
      }
    }
  }
};
function makeFromDeafult() {
  inputDate.forEach(input => removeWarning(input));
  inputDate.forEach(input => input.classList.add('constructor__form-input--date-placeholder'));
  select.classList.add('constructor__form-select--placeholder');
}
const makeNavToFixed = () => {
  let prevScrollPos = window.pageYOffset;
  let statusFixed = false;
  let statusHidden = false;
  let toUp = 0;
  let toDown = 0;
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;
    const requiredScroll = scrollPos > 450;
    if (requiredScroll) {
      addFixed();
    } else {
      removeFixed();
      removeHidden();
    }
    if (scrollPos > 1240 & scrollPos > prevScrollPos) {
      toDown++;
      toUp = 0;
      if (toDown > 30) {
        addHidden();
      }
    }
    if (requiredScroll && scrollPos < prevScrollPos) {
      toDown = 0;
      toUp++;
      if (toUp > 25) {
        removeHidden();
      }
      if (statusFixed && scrollPos < 600) {
        addHidden();
      }
    }
    prevScrollPos = scrollPos;
  });
  function addFixed() {
    if (!statusFixed) {
      headerNavWrapp.classList.add('header__nav-wrapper--fixed');
      header.style.paddingTop = `${headerNavHeight}px`;
      statusFixed = true;
    }
  }
  function removeFixed() {
    if (statusFixed) {
      headerNavWrapp.classList.remove('header__nav-wrapper--fixed');
      header.style.paddingTop = 0;
      statusFixed = false;
    }
  }
  function addHidden() {
    if (!statusHidden) {
      headerNavWrapp.classList.add('header__nav-wrapper--hidden');
      statusHidden = true;
    }
  }
  function removeHidden() {
    if (statusHidden) {
      headerNavWrapp.classList.remove('header__nav-wrapper--hidden');
      statusHidden = false;
    }
  }
};
document.addEventListener('DOMContentLoaded', makeNavToFixed);
verifyFormDate();

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style/main.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style/main.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath id="Vector" d="M21.7004 7.28331L15.1535 0.796818C14.7541 0.401061 14.1063 0.401061 13.7068 0.796818C13.3073 1.19266 13.3073 1.83433 13.7068 2.23017L18.5074 6.98647H1.02294C0.458032 6.98647 0 7.44029 0 7.99999C0 8.55961 0.458032 9.0135 1.02294 9.0135H18.5074L13.707 13.7698C13.3075 14.1656 13.3075 14.8073 13.707 15.2032C13.9067 15.4009 14.1686 15.5 14.4304 15.5C14.6921 15.5 14.9539 15.4009 15.1537 15.2032L21.7004 8.71667C22.0999 8.32083 22.0999 7.67915 21.7004 7.28331Z" fill="white"/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg width=\"22\" height=\"16\" viewBox=\"0 0 22 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath id=\"Vector\" d=\"M21.7004 7.28331L15.1535 0.796818C14.7541 0.401061 14.1063 0.401061 13.7068 0.796818C13.3073 1.19266 13.3073 1.83433 13.7068 2.23017L18.5074 6.98647H1.02294C0.458032 6.98647 0 7.44029 0 7.99999C0 8.55961 0.458032 9.0135 1.02294 9.0135H18.5074L13.707 13.7698C13.3075 14.1656 13.3075 14.8073 13.707 15.2032C13.9067 15.4009 14.1686 15.5 14.4304 15.5C14.6921 15.5 14.9539 15.4009 15.1537 15.2032L21.7004 8.71667C22.0999 8.32083 22.0999 7.67915 21.7004 7.28331Z\" fill=\"white\"/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/header/header-img.jpg */ "./img/header/header-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/icons/ic-dropdown.svg */ "./img/icons/ic-dropdown.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/icons/check-mark.svg */ "./img/icons/check-mark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/header/header-img-small.jpg */ "./img/header/header-img-small.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n}\n\nbutton {\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n:focus {\n  outline: 0;\n}\n\na,\na:link,\na:visited {\n  color: inherit;\n}\n\nbody {\n  color: #1b1f2b;\n  background: #f9f7f4;\n}\n\n.article-promo__info a, .constructor__form-checkbox-lebel a {\n  color: #1b1f2b;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n\n.container {\n  max-width: 1276px;\n  padding: 0 53px;\n  margin: 0 auto;\n}\n\n.container-fluid {\n  max-width: 100%;\n  padding: 0 30px;\n  margin: 0 auto;\n}\n\n.section__top {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  text-align: center;\n  max-width: 723px;\n  margin: 0 auto;\n  margin-bottom: 100px;\n}\n\n.section-subtitle {\n  color: #a6a6a6;\n  max-width: 418px;\n}\n\n.btn-details {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  padding: 7px 20px;\n  margin: -7px -20px;\n  background-color: transparent;\n  transition: all 0.3s ease;\n}\n.btn-details__text {\n  color: #ffffff;\n}\n.btn-details__icon {\n  display: inline-block;\n  width: 22px;\n  height: 16px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 11px;\n}\n\n.header {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  color: #ffffff;\n}\n.header__nav-wrapper {\n  width: 100%;\n  height: 88px;\n  transition: all 0.3s ease;\n}\n.header__nav-wrapper--fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  transition: all 0.3s ease;\n  background: rgba(243, 239, 232, 0.6);\n  -webkit-backdrop-filter: blur(27px);\n          backdrop-filter: blur(27px);\n  color: #1b1f2b;\n  transition: all 0.3s ease;\n}\n.header__nav-wrapper--fixed svg path {\n  fill: #1b1f2b;\n}\n.header__nav-wrapper--hidden {\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n.header__nav {\n  margin: 0 auto;\n  max-width: 1283px;\n  padding: 0 57px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header__nav a {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n.header__logo-img {\n  display: block;\n  width: 182px;\n  height: 32px;\n}\n.header__list {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  gap: 50px;\n}\n.header__content {\n  padding: 119px 0;\n  max-width: 768px;\n  margin: 0 auto;\n  text-align: center;\n}\n.header__content-flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n}\n.header__title {\n  margin: auto;\n}\n.header__text {\n  max-width: 612px;\n  padding: 0 25px;\n}\n.header__btn {\n  padding: 5px 20px;\n  border-radius: 10px;\n  color: #1b1f2b;\n  background: #ffffff;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.header__btn a {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.choice__top {\n  gap: 35px;\n  margin-bottom: 106px;\n}\n.choice__list {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n}\n.choice__list-item--desktop {\n  color: #efa501;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n  text-underline-offset: 0.45em;\n}\n.choice__list-link {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n.choice__flex {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  gap: 30px;\n}\n.choice__card {\n  flex-basis: calc(33.33% - 20px);\n}\n\n.card {\n  height: 531px;\n  overflow: hidden;\n  background: linear-gradient(360deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.06) 48.44%, rgba(0, 0, 0, 0.5) 100%);\n  position: relative;\n}\n.card img {\n  transition: transform 300ms ease;\n}\n.card__body {\n  width: 100%;\n  height: 100%;\n  padding: 50px;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: space-between;\n  color: #ffffff;\n}\n.card__title {\n  margin-bottom: 16px;\n}\n.card__image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n}\n.constructor__form {\n  width: 100%;\n  padding: 70px;\n  background: #ffffff;\n}\n.constructor__form *::-moz-placeholder {\n  color: #a6a6a6;\n}\n.constructor__form *::placeholder {\n  color: #a6a6a6;\n}\n.constructor__flex {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 33px;\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n}\n.constructor__form-field:nth-child(-n+6) {\n  flex-basis: calc(50% - 15px);\n}\n.constructor__form-field:nth-child(n+7):nth-child(-n+10) {\n  flex-basis: 100%;\n}\n.constructor__form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.constructor__form-label {\n  display: block;\n}\n.constructor__form-input, .constructor__form-textarea, .constructor__form-select, .constructor__form-date {\n  display: block;\n  width: 100%;\n  padding: 19px;\n  border-radius: 10px;\n  background-color: #f9f7f4;\n  border: 1px solid #f9f7f4;\n  transition: all 0.3s ease;\n}\n.constructor__form-select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  color: #1b1f2b;\n  padding-right: 50px;\n}\n.constructor__form-select::-ms-expand {\n  display: none;\n}\n.constructor__form-select option {\n  background-color: #ffffff;\n  color: #1b1f2b;\n}\n.constructor__form-select--placeholder {\n  color: #a6a6a6;\n}\n.constructor__custom-arrow {\n  position: relative;\n}\n.constructor__custom-arrow::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  display: block;\n  width: 26px;\n  height: 26px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  pointer-events: none;\n}\n.constructor__form-date {\n  text-transform: uppercase;\n  height: 68px;\n}\n.constructor__form-date::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.constructor__form-input--date-placeholder {\n  color: #a6a6a6;\n}\n.constructor__form-input--invalid {\n  border: 1px solid #f1c5c8;\n}\n.constructor__form-textarea {\n  height: 152px;\n}\n.constructor__form-fieldset {\n  all: unset;\n}\n.constructor__form-fieldset legend {\n  margin-bottom: 8px;\n}\n.constructor__form-radio-flex {\n  display: flex;\n  align-items: center;\n  gap: 31px;\n}\n.constructor__form-radio-label {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n.constructor__form-radio-label input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.constructor__form-radio-custom {\n  display: inline-block;\n  width: 1.1em;\n  height: 1.1em;\n  border: 0.1em solid #1b1f2b;\n  border-radius: 50%;\n  position: relative;\n}\n.constructor__form-radio-input:checked + .constructor__form-radio-custom::before {\n  content: \"\";\n  display: inline-block;\n  width: 0.6em;\n  height: 0.6em;\n  background-color: #1b1f2b;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.constructor__form-checkbox-lebel {\n  color: #a6a6a6;\n  display: flex;\n  align-items: center;\n  gap: 19px;\n  cursor: pointer;\n}\n.constructor__form-checkbox-lebel input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.constructor__form-checkbox-custom {\n  flex-shrink: 0;\n  width: 1.5em;\n  height: 1.5em;\n  border: 0.12em solid #1b1f2b;\n  border-radius: 20%;\n  position: relative;\n}\n.constructor__form-checkbox-input:checked + .constructor__form-checkbox-custom::before {\n  content: \"\";\n  display: inline-block;\n  width: 0.82em;\n  height: 0.64em;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.constructor__form-buttons {\n  display: flex;\n  justify-content: flex-start;\n  gap: 30px;\n}\n.constructor__form-button {\n  width: 235px;\n  height: 58px;\n  padding: 0.75px;\n  color: #286562;\n  background-color: #e0f0e5;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.constructor__form-button--primery {\n  color: #ffffff;\n  background-color: #286562;\n}\n\n.response__content {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n.response__card {\n  flex-basis: 50%;\n  background-color: #f4f0e9;\n  min-height: 672px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 70px;\n}\n.response__text {\n  line-height: normal;\n}\n.response__text p:not(:last-of-type) {\n  margin-bottom: 28px;\n}\n.response__user {\n  display: flex;\n  justify-content: space-between;\n}\n\n.user__item {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.user__item p {\n  color: #a6a6a6;\n}\n.user__avatar {\n  border-radius: 100px;\n}\n\n.gallery__flexbox {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  max-width: 100%;\n}\n.gallery__row {\n  display: flex;\n  justify-content: space-between;\n  gap: 30px;\n}\n.gallery__item {\n  height: 301px;\n}\n.gallery__item img {\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.story__content {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.ticket {\n  max-width: 1170px;\n  height: 567px;\n  background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.2) 100%);\n  position: relative;\n  overflow: hidden;\n}\n.ticket img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  transition: transform 300ms ease;\n}\n.ticket__body {\n  color: #ffffff;\n  height: 100%;\n  padding: 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.ticket__top {\n  max-width: 554px;\n}\n.ticket__tittle {\n  margin-bottom: 37px;\n}\n.ticket__text > :not(:last-child) {\n  margin-bottom: 1.4em;\n}\n.ticket__list {\n  padding-left: 30px;\n}\n.ticket__list li::marker {\n  font-size: 16px;\n}\n.ticket__bottom {\n  display: flex;\n  justify-content: space-between;\n}\n.ticket__social {\n  display: flex;\n  gap: 36px;\n  padding: 0;\n  list-style: none;\n}\n.ticket__social-link {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\n.article-promo__content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n}\n.article-promo__img {\n  width: 370px;\n  height: 370px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.article-promo__info {\n  width: 371px;\n}\n.article-promo__tittle {\n  margin-bottom: 20px;\n}\n.article-promo__text {\n  color: #a6a6a6;\n}\n\n.footer {\n  background: #f4f0e9;\n}\n.footer__content {\n  display: flex;\n  justify-content: space-between;\n  gap: 25px;\n  align-items: stretch;\n  padding: 30px 1px;\n}\n.footer__text {\n  color: #a6a6a6;\n}\n.footer__social {\n  display: flex;\n  gap: 25px;\n  padding: 0;\n  list-style: none;\n}\n.footer__social-item {\n  display: flex;\n  gap: 10px;\n}\n.footer__social-link {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n@media (min-width: 769px){\n  h1 {\n    font: normal 700 96px/105px \"Roboto\", sans-serif;\n    letter-spacing: 0.02em;\n  }\n  h2 {\n    font: normal 700 59px/73px \"Roboto\", sans-serif;\n  }\n  h3 {\n    font: normal 500 35px/43px \"Roboto\", sans-serif;\n  }\n  .response__text, .choice__list, .btn-details {\n    font: normal 700 23px/28px \"Roboto\", sans-serif;\n  }\n  .constructor__form-button, .constructor__form-input, .constructor__form-textarea, .constructor__form-select, .constructor__form-date, body {\n    font: normal 400 20px/28px \"Roboto\", sans-serif;\n  }\n  .user__item p, .constructor__form-checkbox-lebel, .card__body-promo p, .header__btn {\n    font: normal 400 17px/24px \"Roboto\", sans-serif;\n    letter-spacing: -0.01em;\n  }\n  .article-promo, .story, .gallery, .response, .constructor, .choice, .header {\n    margin-bottom: 135px;\n  }\n  .article-promo__img, .ticket, .gallery__item, .response__card, .constructor__form, .card, .btn-details {\n    border-radius: 50px;\n  }\n}\n@media (max-width: 576px){\n  h1 {\n    font: normal 700 34px/38px \"Roboto\", sans-serif;\n    letter-spacing: 0.02em;\n  }\n  .header__nav {\n    padding: 0 20px;\n  }\n  .header__content {\n    padding: 52px 0;\n  }\n  .header__content-flex {\n    gap: 40px;\n  }\n  .choice__list {\n    gap: 10px;\n  }\n  .card__title {\n    margin-bottom: 13px;\n  }\n  .ticket__tittle {\n    margin-bottom: 20px;\n  }\n  .ticket__social {\n    display: none;\n  }\n  .footer__content {\n    padding: 21px 1px;\n  }\n}\n@media (max-width: 768px){\n  h2 {\n    font: normal 700 34px/38px \"Roboto\", sans-serif;\n    letter-spacing: 0.02em;\n  }\n  h3 {\n    font: normal 700 23px/28px \"Roboto\", sans-serif;\n    letter-spacing: 0.04em;\n  }\n  .response__text, .choice__list, .btn-details {\n    font: normal 700 16px/23px \"Roboto\", sans-serif;\n  }\n  .constructor__form-button, .constructor__form-input, .constructor__form-textarea, .constructor__form-select, .constructor__form-date, body {\n    font: normal 400 16px/23px \"Roboto\", sans-serif;\n  }\n  .user__item p, .constructor__form-checkbox-lebel, .card__body-promo p, .header__btn {\n    font: normal 400 16px/23px \"Roboto\", sans-serif;\n    letter-spacing: -0.01em;\n  }\n  .article-promo, .story, .gallery, .response, .constructor, .choice, .header {\n    margin-bottom: 75px;\n  }\n  .article-promo__img, .ticket, .gallery__item, .response__card, .constructor__form, .card, .btn-details {\n    border-radius: 20px;\n  }\n  .section__top {\n    gap: 20px;\n    margin-bottom: 50px;\n  }\n  .btn-details__icon {\n    margin-left: 13px;\n  }\n  .choice__top {\n    margin-bottom: 50px;\n    gap: 30px;\n  }\n  .card {\n    height: 318px;\n  }\n  .card__body {\n    padding: 25px;\n  }\n  .constructor__top {\n    margin-bottom: 40px;\n  }\n  .constructor__form {\n    padding: 20px 20px 40px;\n    border-radius: 30px;\n  }\n  .constructor__flex {\n    row-gap: 30px;\n  }\n  .constructor__form-input, .constructor__form-textarea {\n    padding: 9px;\n  }\n  .constructor__form-select {\n    padding: 9px 50px 9px 9px;\n  }\n  .constructor__custom-arrow::before {\n    right: 10px;\n  }\n  .constructor__form-date {\n    padding: 9px;\n    height: 43px;\n  }\n  .constructor__form-textarea {\n    height: 132px;\n  }\n  .constructor__form-checkbox-lebel {\n    align-items: flex-start;\n    letter-spacing: normal;\n  }\n  .constructor__form-checkbox-custom {\n    width: 20px;\n    height: 20px;\n  }\n  .constructor__form-buttons {\n    gap: 10px;\n  }\n  .constructor__form-button {\n    width: 134px;\n    height: 47px;\n  }\n  .response__card {\n    padding: 20px;\n    gap: 40px;\n  }\n  .response__text p:not(:last-of-type) {\n    margin-bottom: 23px;\n  }\n  .gallery__flexbox > .gallery__row:nth-child(1) > .gallery__item:nth-child(3) {\n    display: none;\n  }\n  .gallery__flexbox > .gallery__row:nth-child(2) > .gallery__item:nth-child(2) {\n    display: none;\n  }\n  .gallery__flexbox > .gallery__row:nth-child(3) > .gallery__item:nth-child(2) {\n    display: none;\n  }\n  .story__content {\n    gap: 20px;\n  }\n  .ticket {\n    height: 455px;\n  }\n  .ticket__body {\n    padding: 30px;\n  }\n  .footer__content {\n    flex-wrap: wrap;\n    justify-content: center;\n    row-gap: 7px;\n  }\n  .footer__social {\n    gap: 15px;\n  }\n  .footer__social-item {\n    gap: 5px;\n  }\n}\n@media (max-width: 668px){\n  .container {\n    padding: 0 21px;\n  }\n  .choice__card {\n    flex-basis: 100%;\n  }\n  .response__content {\n    flex-wrap: wrap;\n  }\n  .response__card {\n    flex-basis: 100%;\n    min-height: auto;\n  }\n  .article-promo__content {\n    flex-wrap: wrap;\n    text-align: center;\n  }\n  .article-promo__img {\n    width: 130px;\n    height: 133px;\n  }\n  .article-promo__info {\n    flex-basis: 100%;\n  }\n}\n@media (max-width: 1024px){\n  .container-fluid {\n    padding: 0 20px;\n  }\n  .header {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  }\n  .header__list {\n    gap: 30px;\n  }\n  .header__title {\n    max-width: 100%;\n    padding: 0 55px;\n  }\n  .header__text {\n    max-width: 492px;\n  }\n  .choice__flex {\n    gap: 18px;\n  }\n  .constructor__flex {\n    -moz-column-gap: 20px;\n         column-gap: 20px;\n  }\n  .constructor__form-field:nth-child(-n+6) {\n    flex-basis: calc(50% - 10px);\n  }\n  .constructor__form-checkbox-lebel {\n    gap: 12px;\n  }\n  .response__content {\n    gap: 18px;\n  }\n  .gallery__flexbox > .gallery__row:nth-child(1) > .gallery__item:nth-child(2) {\n    display: none;\n  }\n  .gallery__flexbox > .gallery__row:nth-child(2) > .gallery__item:nth-child(3) {\n    display: none;\n  }\n  .gallery__flexbox > .gallery__row:nth-child(3) > .gallery__item:nth-child(4) {\n    display: none;\n  }\n}\n@media (max-width: 769px){\n  .header__logo-img {\n    width: 133px;\n    height: 24px;\n  }\n}\n@media (max-width: 950px){\n  .header__list {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (max-width: 576px){\n  .header__title {\n    max-width: 360px;\n    padding: 0;\n  }\n  .header__text {\n    max-width: 360px;\n  }\n  .constructor__form-field:nth-child(-n+6) {\n    flex-basis: 100%;\n  }\n  .constructor__form-checkbox-lebel {\n    gap: 10px;\n  }\n}\n@media (max-width: 768px) and (max-width: 576px){\n  .constructor__form-select {\n    padding: 10.5px 50px 10.5px 9px;\n  }\n}\n@media (max-width: 500px){\n  .gallery__flexbox {\n    gap: 18px;\n  }\n  .gallery__row {\n    gap: 18px;\n  }\n  .gallery__row--small {\n    -moz-column-gap: 10px;\n         column-gap: 10px;\n  }\n  .gallery__item {\n    height: 150px;\n  }\n}\n@media (max-width: 500px) and (max-width: 380px){\n  .gallery__item {\n    height: 110px;\n  }\n}\n@media (min-width: 576px) and (max-width: 768px){\n  h1 {\n    font: normal 700 59px/73px \"Roboto\", sans-serif;\n    letter-spacing: 0.02em;\n  }\n}\n@media (min-width: 668px) and (max-width: 1024px){\n  .choice__card {\n    flex-basis: calc(50% - 9px);\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px){\n  .constructor__form {\n    padding: 60px;\n  }\n}\n@media (min-width: 500px) and (max-width: 1024px){\n  .gallery__row {\n    gap: 20px;\n  }\n}\n@media (any-hover: hover){\n  .article-promo__info a:hover, .constructor__form-checkbox-lebel a:hover {\n    -webkit-text-decoration: underline;\n    text-decoration: underline;\n  }\n  .article-promo__info a:active, .constructor__form-checkbox-lebel a:active {\n    color: #286562;\n    -webkit-text-decoration: underline;\n    text-decoration: underline;\n  }\n  .btn-details:hover {\n    background-color: #286562;\n  }\n  .btn-details:active {\n    background-color: #efa501;\n  }\n  .header__list a:hover {\n    text-decoration-line: underline;\n    text-underline-offset: 7px;\n    text-decoration-thickness: 1px;\n  }\n  .header__btn:hover {\n    background-color: #efa501;\n    color: #ffffff;\n  }\n  .header__btn:active {\n    background-color: #f8e6be;\n    color: #1b1f2b;\n  }\n  .choice__list-link:hover {\n    -webkit-text-decoration: underline;\n    text-decoration: underline;\n    text-underline-offset: 0.45em;\n  }\n  .card:hover img {\n    transform: scale(1.2);\n  }\n  .constructor__form-input:focus, .constructor__form-textarea:focus, .constructor__form-select:focus, .constructor__form-date:focus {\n    background-color: #f4f0e9;\n    border-color: #a6a6a6;\n  }\n  .constructor__form-input:hover, .constructor__form-textarea:hover, .constructor__form-select:hover, .constructor__form-date:hover {\n    background-color: #f4f0e9;\n  }\n  .constructor__form-input--invalid:focus {\n    border-color: #f1c5c8;\n  }\n  .constructor__form-input--invalid:hover {\n    border-color: #f1c5c8;\n  }\n  .constructor__form-button:hover {\n    background-color: #F1F3F2;\n  }\n  .constructor__form-button:active {\n    background-color: #d9dfdb;\n  }\n  .constructor__form-button--primery:hover {\n    background-color: #3b7e7b;\n  }\n  .constructor__form-button--primery:active {\n    background-color: #627f7e;\n  }\n  .ticket:hover img {\n    transform: scale(1.2);\n  }\n  .ticket__social-link:hover {\n    text-decoration-line: underline;\n    text-underline-offset: 6px;\n    text-decoration-thickness: 1px;\n  }\n  .ticket__social-link:active {\n    text-decoration-line: underline;\n    text-underline-offset: 6px;\n    text-decoration-thickness: 1px;\n    color: #efa501;\n  }\n  .footer__social-link:hover {\n    text-decoration-line: underline;\n    text-underline-offset: 4px;\n  }\n  .footer__social-link:active {\n    text-decoration-line: underline;\n    text-underline-offset: 4px;\n  }\n}", "",{"version":3,"sources":["webpack://./style/_base.scss","webpack://./style/main.scss","webpack://./style/_variables.scss","webpack://./style/_layout.scss","webpack://./style/_btn-link.scss","webpack://./style/_header.scss","webpack://./style/_choice.scss","webpack://./style/_constructor.scss","webpack://./style/_response.scss","webpack://./style/_gallery.scss","webpack://./style/_story.scss","webpack://./style/_article-promo.scss","webpack://./style/_footer.scss","webpack://./../<no source>"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  background: none;\r\n  vertical-align: baseline;\r\n  color: inherit;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n:focus {\r\n  outline: 0;\r\n}\r\n\r\na,\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n}\r\n\r\nh1 {\r\n  @media (max-width: 576px) {\r\n    font: map-get($h1-font, small);\r\n    letter-spacing: $mobile-h1-font-letter-spacing;\r\n  }\r\n\r\n  @media (min-width: 576px) and (max-width: 768px) {\r\n    font: map-get($h1-font, middle);\r\n    letter-spacing: $mobile-h1-font-letter-spacing;\r\n  }\r\n\r\n  @media (min-width: 769px) {\r\n    font: map-get($h1-font, large);\r\n    letter-spacing: $h1-font-letter-spacing;\r\n  }\r\n}\r\n\r\nh2 {\r\n  @media (max-width: 768px) {\r\n    font: map-get($h2-font, small);\r\n    letter-spacing: $mobile-h2-font-letter-spacing;\r\n  }\r\n\r\n  @media (min-width: 769px) {\r\n    font: map-get($h2-font, large);\r\n  }\r\n}\r\n\r\nh3 {\r\n  @media (max-width: 768px) {\r\n    font: map-get($h3-font, small);\r\n    letter-spacing: $mobile-h3-font-letter-spacing;\r\n  }\r\n\r\n  @media (min-width: 769px) {\r\n    font: map-get($h3-font, large);\r\n  }\r\n}\r\n\r\n\r\n%p-big {\r\n  @media (max-width: 768px) {\r\n    font: map-get($p-big, small);\r\n  }\r\n\r\n  @media (min-width: 769px) {\r\n    font: map-get($p-big, large);\r\n  }\r\n}\r\n\r\n%p-normal {\r\n  @media (max-width: 768px) {\r\n    font: map-get($p-normal, small);\r\n  }\r\n\r\n  @media (min-width: 769px) {\r\n    font: map-get($p-normal, large);\r\n  }\r\n}\r\n\r\n%p-small {\r\n  @media (max-width: 768px) {\r\n    font: map-get($p-small, small);\r\n    letter-spacing: $mobile-p-small-letter-spacing;\r\n  }\r\n\r\n  @media (min-width: 769px) {\r\n    font: map-get($p-small, large);\r\n    letter-spacing: $p-small-letter-spacing;\r\n  }\r\n}\r\n\r\nbody {\r\n  @extend %p-normal;\r\n\r\n  color: $black;\r\n  background: $beige100;\r\n}\r\n\r\n%link {\r\n  color: $black;\r\n  text-decoration: none;\r\n  transition: all 0.3s ease;\r\n\r\n  @media(any-hover: hover) {\r\n    &:hover {\r\n      text-decoration: underline;\r\n    }\r\n\r\n    &:active {\r\n      color: $green400;\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n}","@import \"~normalize.css\";\r\n@import 'variables';\r\n@import 'base';\r\n@import 'layout';\r\n@import 'btn-link';\r\n@import 'header';\r\n@import 'choice';\r\n@import 'constructor';\r\n@import 'response';\r\n@import 'gallery';\r\n@import 'story';\r\n@import 'article-promo';\r\n@import 'footer';","$black: #1b1f2b;\r\n$white: #ffffff;\r\n\r\n$orange200: #efa501;\r\n$orange100: #f8e6be;\r\n\r\n$green400: #286562;\r\n$green300: #3b7e7b;\r\n$green200: #627f7e;\r\n$green100: #e0f0e5;\r\n\r\n$gray300: #a6a6a6;\r\n$gray200: #d9dfdb;\r\n$gray100: #F1F3F2;\r\n\r\n$beige200: #f4f0e9;\r\n$beige100: #f9f7f4;\r\n\r\n$h1-font-letter-spacing: 0.02em;\r\n$p-small-letter-spacing: -0.01em;\r\n\r\n$mobile-h1-font-letter-spacing: 0.02em;\r\n$mobile-h2-font-letter-spacing: 0.02em;\r\n$mobile-h3-font-letter-spacing: 0.04em;\r\n$mobile-p-small-letter-spacing: -0.01em;\r\n\r\n$section-mrg-bottom: (\r\n    small: 75px,\r\n    large: 135px\r\n);\r\n\r\n$main-border-radius: (\r\n    small: 20px,\r\n    large: 50px\r\n);\r\n\r\n$h1-font: (\r\n    small: (normal 700 34px / 38px \"Roboto\",\r\n        sans-serif),\r\n    middle: (normal 700 59px / 73px \"Roboto\", sans-serif),\r\n    large: (normal 700 96px / 105px \"Roboto\", sans-serif)\r\n);\r\n\r\n$h2-font: (\r\n    small: (normal 700 34px / 38px \"Roboto\",\r\n        sans-serif),\r\n    large: (normal 700 59px / 73px \"Roboto\", sans-serif)\r\n);\r\n\r\n$h3-font: (\r\n    small: (normal 700 23px / 28px \"Roboto\",\r\n        sans-serif),\r\n    large: (normal 500 35px / 43px \"Roboto\", sans-serif)\r\n);\r\n\r\n$p-big: (\r\n    small: (normal 700 16px / 23px \"Roboto\",\r\n        sans-serif),\r\n    large: (normal 700 23px / 28px \"Roboto\", sans-serif)\r\n);\r\n\r\n$p-normal: (\r\n    small: (normal 400 16px / 23px \"Roboto\",\r\n        sans-serif),\r\n    large: (normal 400 20px / 28px \"Roboto\", sans-serif)\r\n);\r\n\r\n$p-small: (\r\n    small: (normal 400 16px / 23px \"Roboto\",\r\n        sans-serif),\r\n    large: (normal 400 17px / 24px \"Roboto\", sans-serif)\r\n);",".container {\r\n    max-width: 1276px;\r\n    padding: 0 53px;\r\n    margin: 0 auto;\r\n\r\n    @media (max-width: 668px) {\r\n        padding: 0 21px;\r\n    }\r\n}\r\n\r\n.container-fluid {\r\n    max-width: 100%;\r\n    padding: 0 30px;\r\n    margin: 0 auto;\r\n\r\n    @media (max-width: 1024px) {\r\n        padding: 0 20px;\r\n    }\r\n}\r\n\r\n%section-mrg-bottom {\r\n    @media (max-width: 768px) {\r\n        margin-bottom: map-get($section-mrg-bottom, small);\r\n    }\r\n\r\n    @media (min-width: 769px) {\r\n        margin-bottom: map-get($section-mrg-bottom, large);\r\n    }\r\n}\r\n\r\n%main-border-radius {\r\n    @media (max-width: 768px) {\r\n        border-radius: map-get($main-border-radius, small);\r\n    }\r\n\r\n    @media (min-width: 769px) {\r\n        border-radius: map-get($main-border-radius, large);\r\n    }\r\n}\r\n\r\n.section__top {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    gap: 30px;\r\n\r\n    text-align: center;\r\n\r\n    max-width: 723px;\r\n\r\n    margin: 0 auto;\r\n\r\n    margin-bottom: 100px;\r\n\r\n    @media (max-width: 768px) {\r\n        gap: 20px;\r\n        margin-bottom: 50px;\r\n    }\r\n}\r\n\r\n.section-subtitle {\r\n    color: $gray300;\r\n    max-width: 418px;\r\n}",".btn-details {\r\n    @extend %p-big;\r\n\r\n    text-decoration: none;\r\n    padding: 7px 20px;\r\n    margin: -7px -20px;\r\n\r\n    @extend %main-border-radius;\r\n\r\n    background-color: transparent;\r\n    transition: all 0.3s ease;\r\n\r\n    &__text {\r\n        color: $white;\r\n    }\r\n\r\n    &__icon {\r\n        display: inline-block;\r\n        width: 22px;\r\n        height: 16px;\r\n        background-image: url('data:image/svg+xml,%3Csvg width=\"22\" height=\"16\" viewBox=\"0 0 22 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath id=\"Vector\" d=\"M21.7004 7.28331L15.1535 0.796818C14.7541 0.401061 14.1063 0.401061 13.7068 0.796818C13.3073 1.19266 13.3073 1.83433 13.7068 2.23017L18.5074 6.98647H1.02294C0.458032 6.98647 0 7.44029 0 7.99999C0 8.55961 0.458032 9.0135 1.02294 9.0135H18.5074L13.707 13.7698C13.3075 14.1656 13.3075 14.8073 13.707 15.2032C13.9067 15.4009 14.1686 15.5 14.4304 15.5C14.6921 15.5 14.9539 15.4009 15.1537 15.2032L21.7004 8.71667C22.0999 8.32083 22.0999 7.67915 21.7004 7.28331Z\" fill=\"white\"/%3E%3C/svg%3E');\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n\r\n        margin-left: 11px;\r\n\r\n        @media (max-width: 768px) {\r\n            margin-left: 13px;\r\n        }\r\n    }\r\n    \r\n    @media(any-hover: hover) {\r\n        &:hover {\r\n            background-color: $green400;\r\n        }\r\n    \r\n        &:active {\r\n            background-color: $orange200;\r\n        }\r\n      }\r\n    \r\n}",".header {\r\n    background-image: url(/img/header/header-img.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n\r\n    color: $white;\r\n\r\n    @extend %section-mrg-bottom;\r\n\r\n    @media (max-width: 1024px) {\r\n        background-image: url(/img/header/header-img-small.jpg);\r\n    }\r\n\r\n    &__nav-wrapper {\r\n        width: 100%;\r\n        height: 88px;\r\n        transition: all 0.3s ease;\r\n\r\n        &--fixed {\r\n            position: fixed;\r\n            top: 0;\r\n            left: 0;\r\n            z-index: 999;\r\n            transition: all 0.3s ease;\r\n            background: rgba(243, 239, 232, 0.6);\r\n            backdrop-filter: blur(27px);\r\n            color: $black;\r\n            \r\n            transition: all 0.3s ease;\r\n            \r\n            & svg path {\r\n                fill: $black;\r\n            }\r\n        }\r\n\r\n        &--hidden {\r\n            opacity: 0;\r\n            pointer-events: none;\r\n            transition: all 0.3s ease;\r\n\r\n        }\r\n\r\n    }\r\n\r\n    &__nav {\r\n        margin: 0 auto;\r\n        max-width: 1283px;\r\n        padding: 0 57px;\r\n        height: 100%;\r\n\r\n\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n\r\n        @media (max-width: 576px) {\r\n            padding: 0 20px;\r\n        }\r\n\r\n        a {\r\n            text-decoration: none;\r\n        }\r\n\r\n    }\r\n\r\n    &__logo-img {\r\n        display: block;\r\n        width: 182px;\r\n        height: 32px;\r\n\r\n        @media (max-width: 769px) {\r\n            width: 133px;\r\n            height: 24px;\r\n        }\r\n    }\r\n\r\n    &__list {\r\n        list-style: none;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding: 0;\r\n\r\n        gap: 50px;\r\n\r\n        @media (max-width: 1024px) {\r\n            gap: 30px\r\n        }\r\n\r\n        @media (max-width: 950px) {\r\n            display: none;\r\n        }\r\n\r\n        @media(any-hover: hover) {\r\n            & a:hover {\r\n                text-decoration-line: underline;\r\n                text-underline-offset: 7px;\r\n                text-decoration-thickness: 1px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__content {\r\n        padding: 119px 0;\r\n\r\n        max-width: 768px;\r\n        margin: 0 auto;\r\n\r\n        text-align: center;\r\n\r\n        @media (max-width: 576px) {\r\n            padding: 52px 0;\r\n\r\n        }\r\n    }\r\n\r\n    &__content-flex {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 50px;\r\n\r\n        @media (max-width: 576px) {\r\n            gap: 40px;\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        margin: auto;\r\n\r\n        @media (max-width: 1024px) {\r\n            max-width: 100%;\r\n            padding: 0 55px;\r\n\r\n            @media (max-width: 576px) {\r\n                max-width: 360px;\r\n                padding: 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__text {\r\n        max-width: 612px;\r\n        padding: 0 25px;\r\n\r\n        @media (max-width: 1024px) {\r\n            max-width: 492px;\r\n\r\n            @media (max-width: 576px) {\r\n                max-width: 360px;\r\n            }\r\n        }\r\n\r\n        \r\n    }\r\n\r\n    &__btn {\r\n        @extend %p-small;\r\n\r\n        padding: 5px 20px;\r\n        border-radius: 10px;\r\n\r\n        color: $black;\r\n        background: $white;\r\n        transition: all 0.3s ease;\r\n\r\n        cursor: pointer;\r\n\r\n        @media(any-hover: hover) {\r\n            &:hover {\r\n                background-color: $orange200;\r\n                color: $white;\r\n            }\r\n    \r\n            &:active {\r\n                background-color: $orange100;\r\n                color: $black;\r\n            }\r\n        }\r\n\r\n        a {\r\n            text-decoration: none;\r\n        }\r\n    }\r\n\r\n}",".choice {\r\n    @extend %section-mrg-bottom;\r\n\r\n    &__top {\r\n        gap: 35px;\r\n        margin-bottom: 106px;\r\n\r\n        @media (max-width: 768px) {\r\n            margin-bottom: 50px;\r\n            gap: 30px;\r\n        }\r\n\r\n    }\r\n\r\n    &__list {\r\n        @extend %p-big;\r\n\r\n        list-style: none;\r\n        padding: 0;\r\n\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        gap: 30px;\r\n\r\n        @media (max-width: 576px) {\r\n            gap: 10px;\r\n        }\r\n\r\n        &-item {\r\n\r\n            &--desktop {\r\n                color: $orange200;\r\n                text-decoration: underline;\r\n                text-underline-offset: 0.45em;\r\n            }\r\n\r\n        }\r\n\r\n        &-link {\r\n            text-decoration: none;\r\n\r\n            @media(any-hover: hover) {\r\n                &:hover {\r\n                    text-decoration: underline;\r\n                    text-underline-offset: 0.45em;\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    &__flex {\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        justify-content: space-between;\r\n        gap: 30px;\r\n\r\n        @media (max-width: 1024px) {\r\n            gap: 18px;\r\n        }\r\n    }\r\n\r\n    &__card {\r\n        flex-basis: calc(33.33% - 20px);\r\n\r\n        @media (min-width: 668px) and (max-width: 1024px) {\r\n            flex-basis: calc(50% - 9px);\r\n        }\r\n\r\n        @media (max-width: 668px) {\r\n            flex-basis: calc(100%);\r\n        }\r\n    }\r\n\r\n}\r\n\r\n.card {\r\n    height: 531px;\r\n    overflow: hidden;\r\n    background: linear-gradient(360deg,\r\n            rgba(0, 0, 0, 0.4) 0%,\r\n            rgba(0, 0, 0, 0.06) 48.44%,\r\n            rgba(0, 0, 0, 0.5) 100%);\r\n    position: relative;\r\n    @extend %main-border-radius;\r\n\r\n    @media (max-width: 768px) {\r\n        height: 318px;\r\n    }\r\n\r\n    & img {\r\n        transition: transform 300ms ease;\r\n    }\r\n\r\n    @media(any-hover: hover) {\r\n        &:hover img {\r\n            transform: scale(1.2);\r\n        }\r\n    }\r\n\r\n    &__body {\r\n        width: 100%;\r\n        height: 100%;\r\n\r\n        padding: 50px;\r\n\r\n        display: flex;\r\n        align-items: flex-start;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n\r\n        color: $white;\r\n\r\n        &-promo p {\r\n            @extend %p-small;\r\n\r\n        }\r\n\r\n        @media (max-width: 768px) {\r\n            padding: 25px;\r\n        }\r\n\r\n    }\r\n\r\n    &__title {\r\n        margin-bottom: 16px;\r\n        // margin-bottom: 0.568em;\r\n        @media (max-width: 576px) {\r\n            margin-bottom: 13px;\r\n        }\r\n    }\r\n\r\n    &__image {\r\n        width: 100%;\r\n        height: 100%;\r\n        object-fit: cover;\r\n        position: absolute;\r\n        z-index: -1;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n}",".constructor {\r\n    @extend %section-mrg-bottom;\r\n\r\n    &__top {\r\n        @media (max-width: 768px) {\r\n            margin-bottom: 40px;\r\n        }\r\n    }\r\n\r\n    &__form {\r\n        width: 100%;\r\n        padding: 70px;\r\n        background: $white;\r\n        @extend %main-border-radius;\r\n\r\n        @media (min-width: 768px) and (max-width: 1024px) {\r\n            padding: 60px;\r\n        }\r\n\r\n        @media (max-width: 768px) {\r\n            padding: 20px 20px 40px;\r\n\r\n            border-radius: 30px;\r\n        }\r\n\r\n        & *::placeholder {\r\n            color: $gray300;\r\n        }\r\n    }\r\n\r\n    &__flex {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        row-gap: 33px;\r\n        column-gap: 30px;\r\n\r\n        @media (max-width: 1024px) {\r\n            column-gap: 20px;\r\n        }\r\n\r\n        @media (max-width: 768px) {\r\n            row-gap: 30px;\r\n        }\r\n\r\n    }\r\n\r\n    &__form-field:nth-child(-n+6) {\r\n        flex-basis: calc(50% - 15px);\r\n\r\n        @media (max-width: 1024px) {\r\n            flex-basis: calc(50% - 10px);\r\n\r\n            @media (max-width: 576px) {\r\n                flex-basis: 100%;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    &__form-field:nth-child(n+7):nth-child(-n+10) {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    &__form-field {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 8px;\r\n    }\r\n\r\n    &__form-label {\r\n        display: block;\r\n    }\r\n\r\n    &__form-input,\r\n    &__form-textarea,\r\n    &__form-select,\r\n    &__form-date {\r\n        @extend %p-normal;\r\n\r\n        display: block;\r\n        width: 100%;\r\n        padding: 19px;\r\n        border-radius: 10px;\r\n        background-color: $beige100;\r\n        border: 1px solid $beige100;\r\n        transition: all 0.3s ease;\r\n\r\n        @media(any-hover: hover) {\r\n            &:focus {\r\n                background-color: $beige200;\r\n                border-color: $gray300;\r\n            }\r\n\r\n            &:hover {\r\n                background-color: $beige200;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__form-input,\r\n    &__form-textarea {\r\n        @media (max-width: 768px) {\r\n            padding: 9px;\r\n        }\r\n    }\r\n\r\n    &__form-select {\r\n        -moz-appearance: none;\r\n        -webkit-appearance: none;\r\n        appearance: none;\r\n        color: $black;\r\n        padding-right: 50px;\r\n\r\n        @media (max-width: 768px) {\r\n            padding: 9px 50px 9px 9px;\r\n\r\n            @media (max-width: 576px) {\r\n                padding: 10.5px 50px 10.5px 9px;\r\n            }\r\n    \r\n        }\r\n        \r\n        &::-ms-expand {\r\n            display: none;\r\n        }\r\n\r\n        & option {\r\n            background-color: $white;\r\n            color: $black;\r\n        }\r\n\r\n        &--placeholder {\r\n            color: $gray300;\r\n        }\r\n\r\n    }\r\n\r\n    &__custom-arrow {\r\n        position: relative;\r\n\r\n        &::before {\r\n            content: \"\";\r\n\r\n            position: absolute;\r\n            top: 50%;\r\n            right: 20px;\r\n            transform: translateY(-50%);\r\n\r\n            display: block;\r\n            width: 26px;\r\n            height: 26px;\r\n\r\n            background-image: url(/img/icons/ic-dropdown.svg);\r\n            background-repeat: no-repeat;\r\n            background-size: cover;\r\n\r\n            pointer-events: none;\r\n\r\n            @media (max-width: 768px) {\r\n                right: 10px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__form-date {\r\n        text-transform: uppercase;\r\n        height: 68px;\r\n\r\n        @media (max-width: 768px) {\r\n            padding: 9px;\r\n            height: 43px;\r\n        }\r\n\r\n        &::-webkit-calendar-picker-indicator {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &__form-input--date-placeholder {\r\n        color: $gray300;\r\n    }\r\n\r\n    &__form-input--invalid {\r\n        border: 1px solid #f1c5c8;\r\n\r\n        @media(any-hover: hover) {\r\n            &:focus {\r\n                border-color: #f1c5c8;\r\n            }\r\n\r\n            &:hover {\r\n                border-color: #f1c5c8;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    &__form-textarea {\r\n        height: 152px;\r\n\r\n        @media (max-width: 768px) {\r\n            height: 132px;\r\n        }\r\n    }\r\n\r\n    &__form-fieldset {\r\n        all: unset;\r\n\r\n        & legend {\r\n            margin-bottom: 8px;\r\n        }\r\n    }\r\n\r\n    &__form-radio-flex {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 31px;\r\n    }\r\n\r\n    &__form-radio-label {\r\n        cursor: pointer;\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 11px;\r\n\r\n        & input {\r\n            position: absolute;\r\n            opacity: 0;\r\n            pointer-events: none;\r\n        }\r\n    }\r\n\r\n\r\n    &__form-radio-custom {\r\n        display: inline-block;\r\n        width: 1.1em;\r\n        height: 1.1em;\r\n        border: 0.1em solid $black;\r\n        border-radius: 50%;\r\n\r\n        position: relative;\r\n\r\n    }\r\n\r\n    &__form-radio-input:checked+&__form-radio-custom::before {\r\n        content: '';\r\n\r\n        display: inline-block;\r\n        width: 0.6em;\r\n        height: 0.6em;\r\n        background-color: $black;\r\n        border-radius: 50%;\r\n\r\n        position: absolute;\r\n        left: 50%;\r\n        top: 50%;\r\n        transform: translate(-50%, -50%);\r\n    }\r\n\r\n    &__form-checkbox-lebel {\r\n        @extend %p-small;\r\n\r\n        color: $gray300;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 19px;\r\n\r\n        @media (max-width: 1024px) {\r\n            gap: 12px;\r\n\r\n            @media (max-width: 576px) {\r\n                gap: 10px;\r\n            }\r\n        }\r\n\r\n        @media (max-width: 768px) {\r\n            align-items: flex-start;\r\n            letter-spacing: normal;\r\n        }\r\n\r\n\r\n        cursor: pointer;\r\n\r\n        & input {\r\n            position: absolute;\r\n            opacity: 0;\r\n            pointer-events: none;\r\n        }\r\n\r\n        & a {\r\n            @extend %link;\r\n        }\r\n    }\r\n\r\n\r\n    &__form-checkbox-custom {\r\n        flex-shrink: 0;\r\n        width: 1.5em;\r\n        height: 1.5em;\r\n        border: 0.12em solid $black;\r\n        border-radius: 20%;\r\n\r\n        position: relative;\r\n\r\n        @media (max-width: 768px) {\r\n            width: 20px;\r\n            height: 20px;\r\n        }\r\n\r\n    }\r\n\r\n    &__form-checkbox-input:checked+&__form-checkbox-custom::before {\r\n        content: '';\r\n\r\n        display: inline-block;\r\n        width: 0.82em;\r\n        height: 0.64em;\r\n        background-image: url(/img/icons/check-mark.svg);\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n\r\n        position: absolute;\r\n        left: 50%;\r\n        top: 50%;\r\n        transform: translate(-50%, -50%);\r\n    }\r\n\r\n    &__form-buttons {\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        gap: 30px;\r\n\r\n        @media (max-width: 768px) {\r\n            gap: 10px;\r\n        }\r\n    }\r\n\r\n    &__form-button {\r\n        width: 235px;\r\n        height: 58px;\r\n        padding: 0.75px;\r\n\r\n        @extend %p-normal;\r\n        color: $green400;\r\n        background-color: $green100;\r\n        border-radius: 10px;\r\n\r\n        transition: all 0.3s ease;\r\n\r\n        cursor: pointer;\r\n\r\n        @media (max-width: 768px) {\r\n            width: 134px;\r\n            height: 47px;\r\n        }\r\n\r\n        @media(any-hover: hover) {\r\n            &:hover {\r\n                background-color: $gray100;\r\n            }\r\n\r\n            &:active {\r\n                background-color: $gray200;\r\n            }\r\n        }\r\n\r\n        &--primery {\r\n            color: $white;\r\n            background-color: $green400;\r\n\r\n            @media(any-hover: hover) {\r\n                &:hover {\r\n                    background-color: $green300;\r\n                }\r\n\r\n                &:active {\r\n                    background-color: $green200;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}",".response {\r\n    @extend %section-mrg-bottom;\r\n\r\n    &__content {\r\n        display: flex;\r\n        justify-content: center;\r\n        gap: 30px;\r\n\r\n        @media (max-width: 1024px) {\r\n            gap: 18px;\r\n        }\r\n\r\n        @media (max-width: 668px) {\r\n            flex-wrap: wrap;\r\n        }\r\n\r\n    }\r\n\r\n    &__card {\r\n        flex-basis: 50%;\r\n\r\n        background-color: $beige200;\r\n        min-height: 672px;\r\n        padding: 40px;\r\n        @extend %main-border-radius;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        gap: 70px;\r\n\r\n        @media (max-width: 768px) {\r\n            padding: 20px;\r\n            gap: 40px;\r\n        }\r\n\r\n        @media (max-width: 668px) {\r\n            flex-basis: 100%;\r\n            min-height: auto;\r\n        }\r\n    }\r\n\r\n    &__text {\r\n        @extend %p-big;\r\n\r\n        line-height: normal;\r\n\r\n        & p:not(:last-of-type) {\r\n            margin-bottom: 28px;\r\n            \r\n            @media (max-width: 768px) {\r\n                margin-bottom: 23px;\r\n              }\r\n        }\r\n    }\r\n\r\n    &__user {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n.user {\r\n    &__item {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-end;\r\n        gap: 8px;\r\n\r\n        & p {\r\n            @extend %p-small;\r\n\r\n            color: $gray300;\r\n        }\r\n    }\r\n\r\n    &__avatar {\r\n        border-radius: 100px;\r\n    }\r\n\r\n}",".gallery {\r\n    @extend %section-mrg-bottom;\r\n\r\n    &__flexbox {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 30px;\r\n        max-width: 100%;\r\n\r\n        @media (max-width: 1024px) {\r\n            &>.gallery__row:nth-child(1)>.gallery__item:nth-child(2) {\r\n                display: none;\r\n            }\r\n\r\n            &>.gallery__row:nth-child(2)>.gallery__item:nth-child(3) {\r\n                display: none;\r\n            }\r\n\r\n            &>.gallery__row:nth-child(3)>.gallery__item:nth-child(4) {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        @media (max-width: 768px) {\r\n            &>.gallery__row:nth-child(1)>.gallery__item:nth-child(3) {\r\n                display: none;\r\n            }\r\n\r\n            &>.gallery__row:nth-child(2)>.gallery__item:nth-child(2) {\r\n                display: none;\r\n            }\r\n\r\n            &>.gallery__row:nth-child(3)>.gallery__item:nth-child(2) {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        @media (max-width: 500px) {\r\n            gap: 18px;\r\n        }\r\n    }\r\n\r\n    &__row {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        gap: 30px;\r\n\r\n        @media (min-width: 500px) and (max-width: 1024px) {\r\n            gap: 20px;\r\n        }\r\n\r\n        @media (max-width: 500px) {\r\n            gap: 18px;\r\n        }\r\n\r\n        &--small {\r\n            @media (max-width: 500px) {\r\n                column-gap: 10px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__item {\r\n        @extend %main-border-radius;\r\n\r\n        height: calc((963px - 60px) / 3);\r\n\r\n        @media (max-width: 500px) {\r\n            height: 150px;\r\n\r\n            @media (max-width: 380px) {\r\n                height: 110px;\r\n            }\r\n        }\r\n\r\n        & img {\r\n            border-radius: inherit;\r\n            width: 100%;\r\n            height: 100%;\r\n            object-fit: cover;\r\n        }\r\n    }\r\n\r\n}",".story {\r\n    @extend %section-mrg-bottom;\r\n\r\n    &__content {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 50px;\r\n\r\n        @media (max-width: 768px) {\r\n            gap: 20px;\r\n        }\r\n    }\r\n}\r\n\r\n.ticket {\r\n    max-width: 1170px;\r\n    height: 567px;\r\n    @extend %main-border-radius;\r\n    background: linear-gradient(270deg,\r\n            rgba(0, 0, 0, 0) 0.01%,\r\n            rgba(0, 0, 0, 0.2) 100%);\r\n    position: relative;\r\n\r\n    overflow: hidden;\r\n\r\n    @media (max-width: 768px) {\r\n        height: 455px;\r\n    }\r\n\r\n    & img {\r\n        width: 100%;\r\n        height: 100%;\r\n        object-fit: cover;\r\n        position: absolute;\r\n        z-index: -1;\r\n        top: 0;\r\n        left: 0;\r\n\r\n        transition: transform 300ms ease;\r\n    }\r\n\r\n    @media(any-hover: hover) {\r\n        &:hover img {\r\n            transform: scale(1.2);\r\n        }\r\n    }\r\n\r\n    &__body {\r\n        color: $white;\r\n\r\n        height: 100%;\r\n        padding: 60px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n\r\n        @media (max-width: 768px) {\r\n            padding: 30px;\r\n        }\r\n    }\r\n\r\n    &__top {\r\n        max-width: 554px;\r\n    }\r\n\r\n    &__tittle {\r\n        margin-bottom: 37px;\r\n        // margin-bottom: 0.89em;\r\n\r\n        @media (max-width: 576px) {\r\n            margin-bottom: 20px;\r\n        }\r\n    }\r\n\r\n    &__text {\r\n        &> :not(:last-child) {\r\n            margin-bottom: 1.4em;\r\n        }\r\n    }\r\n\r\n    &__list {\r\n        padding-left: 30px;\r\n\r\n        & li::marker {\r\n            font-size: 16px;\r\n        }\r\n    }\r\n\r\n    &__bottom {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    &__social {\r\n        display: flex;\r\n        gap: 36px;\r\n\r\n        padding: 0;\r\n        list-style: none;\r\n\r\n        @media (max-width: 576px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &__social-link {\r\n\r\n        text-decoration: none;\r\n        transition: color 0.3s ease;\r\n\r\n        @media(any-hover: hover) {\r\n            &:hover {\r\n                text-decoration-line: underline;\r\n                text-underline-offset: 6px;\r\n                text-decoration-thickness: 1px;\r\n            }\r\n\r\n            &:active {\r\n                text-decoration-line: underline;\r\n                text-underline-offset: 6px;\r\n                text-decoration-thickness: 1px;\r\n\r\n                color: $orange200;\r\n            }\r\n        }\r\n    }\r\n\r\n}",".article-promo {\r\n    @extend %section-mrg-bottom;\r\n\r\n    &__content {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 30px;\r\n\r\n        @media (max-width: 668px) {\r\n            flex-wrap: wrap;\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        width: 370px;\r\n        height: 370px;\r\n        object-fit: cover;\r\n        @extend %main-border-radius;\r\n\r\n        @media (max-width: 668px) {\r\n            width: 130px;\r\n            height: 133px;\r\n        }\r\n    }\r\n\r\n    &__info {\r\n        width: 371px;\r\n\r\n        & a {\r\n            @extend %link;\r\n        }\r\n\r\n        @media (max-width: 668px) {\r\n            flex-basis: 100%;\r\n        }\r\n    }\r\n\r\n    &__tittle {\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    &__text {\r\n        color: $gray300;\r\n    }\r\n\r\n}",".footer {\r\n    background: $beige200;\r\n\r\n    &__content {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        gap: 25px;\r\n        align-items: stretch;\r\n\r\n        padding: 30px 1px;\r\n\r\n        @media (max-width: 768px) {\r\n            flex-wrap: wrap;\r\n            justify-content: center;\r\n            row-gap: 7px;\r\n        }\r\n\r\n        @media (max-width: 576px) {\r\n            padding: 21px 1px;\r\n        }\r\n    }\r\n\r\n    &__text {\r\n        color: $gray300;\r\n    }\r\n\r\n    &__social {\r\n        display: flex;\r\n        gap: 25px;\r\n\r\n        padding: 0;\r\n        list-style: none;\r\n\r\n        @media (max-width: 768px) {\r\n            gap: 15px;\r\n        }\r\n    }\r\n\r\n    &__social-item {\r\n        display: flex;\r\n        // align-items: baseline;\r\n        gap: 10px;\r\n\r\n        @media (max-width: 768px) {\r\n            gap: 5px;\r\n        }\r\n\r\n    }\r\n\r\n    &__social-img--mrg {\r\n        // margin-left: 8px;\r\n        // margin-right: 3px;\r\n    }\r\n\r\n    &__social-link {\r\n        text-decoration: none;\r\n\r\n        @media(any-hover: hover) {\r\n            &:hover {\r\n                text-decoration-line: underline;\r\n                text-underline-offset: 4px;\r\n            }\r\n\r\n            &:active {\r\n                text-decoration-line: underline;\r\n                text-underline-offset: 4px;\r\n            }\r\n        }\r\n\r\n    }\r\n}",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./favicon.ico */ "./favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/card-tour/card-tour-photo-1.jpg */ "./img/card-tour/card-tour-photo-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/card-tour/card-tour-photo-2.jpg */ "./img/card-tour/card-tour-photo-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/card-tour/card-tour-photo-3.jpg */ "./img/card-tour/card-tour-photo-3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/card-tour/card-tour-photo-4.jpg */ "./img/card-tour/card-tour-photo-4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/card-tour/card-tour-photo-5.jpg */ "./img/card-tour/card-tour-photo-5.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/card-tour/card-tour-photo-6.jpg */ "./img/card-tour/card-tour-photo-6.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/review-photo/review-photo-1.jpg */ "./img/review-photo/review-photo-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/review-photo/review-photo-2.jpg */ "./img/review-photo/review-photo-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-1.jpg */ "./img/travel-photo/travel-photo-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-2.jpg */ "./img/travel-photo/travel-photo-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-3.jpg */ "./img/travel-photo/travel-photo-3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-4.jpg */ "./img/travel-photo/travel-photo-4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-5.jpg */ "./img/travel-photo/travel-photo-5.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-6.jpg */ "./img/travel-photo/travel-photo-6.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-7.jpg */ "./img/travel-photo/travel-photo-7.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-8.jpg */ "./img/travel-photo/travel-photo-8.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-9.jpg */ "./img/travel-photo/travel-photo-9.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-10.jpg */ "./img/travel-photo/travel-photo-10.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-11.jpg */ "./img/travel-photo/travel-photo-11.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-12.jpg */ "./img/travel-photo/travel-photo-12.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/travel-photo/travel-photo-13.jpg */ "./img/travel-photo/travel-photo-13.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/story-photo/story-photo-1.jpg */ "./img/story-photo/story-photo-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/story-photo/story-photo-2.jpg */ "./img/story-photo/story-photo-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/story-photo/story-photo-3.jpg */ "./img/story-photo/story-photo-3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/article/article-promo-photo.jpg */ "./img/article/article-promo-photo.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/socials/inst-small.svg */ "./img/socials/inst-small.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/socials/inst.svg */ "./img/socials/inst.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/socials/fb-small.svg */ "./img/socials/fb-small.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/socials/fb.svg */ "./img/socials/fb.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/socials/vk-small.svg */ "./img/socials/vk-small.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../img/socials/vk.svg */ "./img/socials/vk.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var code = "<!doctype html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>YourTour</title>\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/ico\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<body>\r\n\r\n  <header class=\"header\">\r\n    <div class=\"header__nav-wrapper\">\r\n      <nav class=\"header__nav\">\r\n        <a class=\"header__logo\" href=\"#\">\r\n          <svg class=\"header__logo-img\" width=\"182\" height=\"32\" viewBox=\"0 0 182 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path d=\"M7.476 0.879883L13.902 14.0679L20.412 0.879883H27.93L17.304 20.5359V30.6999H10.458V20.4519L0 0.879883H7.476Z\" fill=\"white\"/>\r\n            <path d=\"M36.8041 31.1199C34.2841 31.1199 32.1421 30.5879 30.3781 29.5239C28.6421 28.4599 27.3121 27.0599 26.3881 25.3239C25.4641 23.5879 25.0021 21.7119 25.0021 19.6959C25.0021 17.6519 25.4641 15.7619 26.3881 14.0259C27.3121 12.2899 28.6561 10.8899 30.4201 9.82588C32.1841 8.76188 34.3121 8.22988 36.8041 8.22988C39.2961 8.22988 41.4241 8.76188 43.1881 9.82588C44.9521 10.8899 46.2961 12.2899 47.2201 14.0259C48.1441 15.7619 48.6061 17.6519 48.6061 19.6959C48.6061 21.7119 48.1441 23.5879 47.2201 25.3239C46.2961 27.0599 44.9521 28.4599 43.1881 29.5239C41.4241 30.5879 39.2961 31.1199 36.8041 31.1199ZM31.8901 19.6959C31.8901 21.4039 32.3521 22.7899 33.2761 23.8539C34.2281 24.9179 35.4041 25.4499 36.8041 25.4499C38.1761 25.4499 39.3241 24.9179 40.2481 23.8539C41.2001 22.7899 41.6761 21.4039 41.6761 19.6959C41.6761 17.9879 41.2001 16.6019 40.2481 15.5379C39.3241 14.4739 38.1761 13.9419 36.8041 13.9419C35.4041 13.9419 34.2281 14.4739 33.2761 15.5379C32.3521 16.6019 31.8901 17.9879 31.8901 19.6959Z\" fill=\"white\"/>\r\n            <path d=\"M51.7289 22.7619V8.64988H58.4489V21.2919C58.4489 24.0639 59.4709 25.4499 61.5149 25.4499C62.4109 25.4499 63.2789 25.2119 64.1189 24.7359C64.9589 24.2319 65.7009 23.4059 66.3449 22.2579V8.64988H73.0649V23.2239C73.0649 23.8959 73.1629 24.3719 73.3589 24.6519C73.5829 24.9319 73.9609 25.0859 74.4929 25.1139V30.6999C73.8489 30.8119 73.3029 30.8959 72.8549 30.9519C72.4069 31.0079 72.0009 31.0359 71.6369 31.0359C69.2289 31.0359 67.8569 30.0979 67.5209 28.2219L67.3949 26.8779C66.3869 28.3339 65.1269 29.4119 63.6149 30.1119C62.1309 30.7839 60.4649 31.1199 58.6169 31.1199C56.3769 31.1199 54.6689 30.4059 53.4929 28.9779C52.3169 27.5499 51.7289 25.4779 51.7289 22.7619Z\" fill=\"white\"/>\r\n            <path d=\"M92.2569 14.4039C90.6329 14.4319 89.1629 14.6979 87.8469 15.2019C86.5309 15.7059 85.5789 16.4619 84.9909 17.4699V30.6999H78.2709V8.64988H84.4449V13.1019C85.2009 11.6179 86.1809 10.4559 87.3849 9.61588C88.5889 8.77588 89.8489 8.34188 91.1649 8.31388C91.7249 8.31388 92.0889 8.32788 92.2569 8.35588V14.4039Z\" fill=\"white\"/>\r\n            <path d=\"M116.92 6.92788H107.848V30.6999H100.96V6.92788H91.8458V0.879883H116.92V6.92788Z\" fill=\"white\"/>\r\n            <path d=\"M126.382 31.1199C123.862 31.1199 121.72 30.5879 119.956 29.5239C118.22 28.4599 116.89 27.0599 115.966 25.3239C115.042 23.5879 114.58 21.7119 114.58 19.6959C114.58 17.6519 115.042 15.7619 115.966 14.0259C116.89 12.2899 118.234 10.8899 119.998 9.82588C121.762 8.76188 123.89 8.22988 126.382 8.22988C128.874 8.22988 131.002 8.76188 132.766 9.82588C134.53 10.8899 135.874 12.2899 136.798 14.0259C137.722 15.7619 138.184 17.6519 138.184 19.6959C138.184 21.7119 137.722 23.5879 136.798 25.3239C135.874 27.0599 134.53 28.4599 132.766 29.5239C131.002 30.5879 128.874 31.1199 126.382 31.1199ZM121.468 19.6959C121.468 21.4039 121.93 22.7899 122.854 23.8539C123.806 24.9179 124.982 25.4499 126.382 25.4499C127.754 25.4499 128.902 24.9179 129.826 23.8539C130.778 22.7899 131.254 21.4039 131.254 19.6959C131.254 17.9879 130.778 16.6019 129.826 15.5379C128.902 14.4739 127.754 13.9419 126.382 13.9419C124.982 13.9419 123.806 14.4739 122.854 15.5379C121.93 16.6019 121.468 17.9879 121.468 19.6959Z\" fill=\"white\"/>\r\n            <path d=\"M141.307 22.7619V8.64988H148.027V21.2919C148.027 24.0639 149.049 25.4499 151.093 25.4499C151.989 25.4499 152.857 25.2119 153.697 24.7359C154.537 24.2319 155.279 23.4059 155.923 22.2579V8.64988H162.643V23.2239C162.643 23.8959 162.741 24.3719 162.937 24.6519C163.161 24.9319 163.539 25.0859 164.071 25.1139V30.6999C163.427 30.8119 162.881 30.8959 162.433 30.9519C161.985 31.0079 161.579 31.0359 161.215 31.0359C158.807 31.0359 157.435 30.0979 157.099 28.2219L156.973 26.8779C155.965 28.3339 154.705 29.4119 153.193 30.1119C151.709 30.7839 150.043 31.1199 148.195 31.1199C145.955 31.1199 144.247 30.4059 143.071 28.9779C141.895 27.5499 141.307 25.4779 141.307 22.7619Z\" fill=\"white\"/>\r\n            <path d=\"M181.835 14.4039C180.211 14.4319 178.741 14.6979 177.425 15.2019C176.109 15.7059 175.157 16.4619 174.569 17.4699V30.6999H167.849V8.64988H174.023V13.1019C174.779 11.6179 175.759 10.4559 176.963 9.61588C178.167 8.77588 179.427 8.34188 180.743 8.31388C181.303 8.31388 181.667 8.32788 181.835 8.35588V14.4039Z\" fill=\"white\"/>\r\n            </svg>\r\n            \r\n          <!-- <picture>\r\n            <source srcset=\"/img/header/YourTour.svg\" media=\"(min-width: 769px)\">\r\n            <img class=\"header__logo-img\" src=\"/img/header/YourTourMobile.svg\" alt=\"YourTour\">\r\n          </picture> -->\r\n        </a>\r\n          <ul class=\"header__list\">\r\n            <li class=\"header__item\"><a class=\"header__link\" href=\"#choice\">Туры</a></li>\r\n            <li class=\"header__item\"><a class=\"header__link\" href=\"#constructor\">Создать тур</a></li>\r\n            <li class=\"header__item\"><a class=\"header__link\" href=\"#response\">Отзывы</a></li>\r\n            <li class=\"header__item\"><a class=\"header__link\" href=\"#story\">Истории</a></li>\r\n          </ul>\r\n        <a class=\"header__phone\" href=\"tel:+79999999999\">+7 999 999 99 99</a>\r\n      </nav>\r\n    </div>\r\n      <div class=\"header__content\">\r\n        <div class=\"header__content-flex\">\r\n          <h1 class=\"header__title\">Идеальные путешествия существуют</h1>\r\n          <p class=\"header__text\">Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>\r\n          <button class=\"header__btn\"><a href=\"#choice\">Найти тур</a></button>\r\n        </div>\r\n      </div>\r\n  </header>\r\n\r\n  <main>\r\n    <section class=\"choice\" id=\"choice\">\r\n      <div class=\"container\">\r\n        <div class=\"choice__top section__top\">\r\n          <h2 class=\"choice__title\">Выбери свой тур</h2>\r\n          <ul class=\"choice__list\">\r\n            <li class=\"choice__list-item choice__list-item--desktop\"><a class=\"choice__list-link\"\r\n                href=\"#!\">Популярные</a>\r\n            </li>\r\n            <li class=\"choice__list-item\"><a class=\"choice__list-link\" href=\"#!\">Авторские</a></li>\r\n            <li class=\"choice__list-item\"><a class=\"choice__list-link\" href=\"#!\">Походы</a></li>\r\n            <li class=\"choice__list-item\"><a class=\"choice__list-link\" href=\"#!\">Сплавы</a></li>\r\n            <li class=\"choice__list-item\"><a class=\"choice__list-link\" href=\"#!\">Велопрогулки</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"choice__content\">\r\n          <div class=\"choice__flex\">\r\n            <div class=\"choice__card card\">\r\n              <div class=\"card__body\">\r\n                <div class=\"card__body-promo\">\r\n                  <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                  <p>от 80 000 руб</p>\r\n                </div>\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n<span class=\"btn-details__icon\"></span></a>\r\n              </div>\r\n              <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Путешествие в доме на колесах\" />\r\n            </div>\r\n            <div class=\"choice__card card\">\r\n              <div class=\"card__body\">\r\n                <div class=\"card__body-promo\">\r\n                  <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                  <p>от 80 000 руб</p>\r\n                </div>\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n<span class=\"btn-details__icon\"></span></a>\r\n              </div>\r\n              <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Путешествие в пустыню\" />\r\n            </div>\r\n            <div class=\"choice__card card\">\r\n              <div class=\"card__body\">\r\n                <div class=\"card__body-promo\">\r\n                  <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                  <p>от 80 000 руб</p>\r\n                </div>\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n<span class=\"btn-details__icon\"></span></a>\r\n              </div>\r\n              <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Путешествие на край земли\" />\r\n            </div>\r\n            <div class=\"choice__card card\">\r\n              <div class=\"card__body\">\r\n                <div class=\"card__body-promo\">\r\n                  <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                  <p>от 80 000 руб</p>\r\n                </div>\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n<span class=\"btn-details__icon\"></span></a>\r\n              </div>\r\n              <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Путешествие в исторические города\" />\r\n            </div>\r\n            <div class=\"choice__card card\">\r\n              <div class=\"card__body\">\r\n                <div class=\"card__body-promo\">\r\n                  <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                  <p>от 80 000 руб</p>\r\n                </div>\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n<span class=\"btn-details__icon\"></span></a>\r\n              </div>\r\n              <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Путешествие на пляж\" />\r\n            </div>\r\n            <div class=\"choice__card card\">\r\n              <div class=\"card__body\">\r\n                <div class=\"card__body-promo\">\r\n                  <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                  <p>от 80 000 руб</p>\r\n                </div>\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n<span class=\"btn-details__icon\"></span></a>\r\n              </div>\r\n              <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Путешествие в горы\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </section>\r\n    <section class=\"constructor\" id=\"constructor\">\r\n      <div class=\"container\">\r\n        <div class=\"constructor__top section__top\">\r\n          <h2 class=\"constructor__title\">Собери свой тур</h2>\r\n          <p class=\"constructor__subtitle section-subtitle\">Идейные соображения высшего порядка,<br>а также рамки и место\r\n            обучения кадров</p>\r\n        </div>\r\n        <form class=\"constructor__form\">\r\n          <div class=\"constructor__flex\">\r\n            <div class=\"constructor__form-field\">\r\n              <label for=\"name\" class=\"constructor__form-label\">Имя</label>\r\n              <input class=\"constructor__form-input\" type=\"text\" id=\"name\" placeholder=\"Введите Ваше имя\">\r\n            </div>\r\n            <div class=\"constructor__form-field\">\r\n              <label for=\"select__type\" class=\"constructor__form-label\">Направление</label>\r\n              <div class=\"constructor__custom-arrow\">\r\n              <select class=\"constructor__form-select constructor__form-select--placeholder\" id=\"select__type\" name=\"type\">\r\n                <option value=\"none\" hidden=\"\">Куда хотите ехать</option>\r\n                <option value=\"Поход\">Поход</option>\r\n                <option value=\"Сплав\">Сплав</option>\r\n                <option value=\"Велопрогулка\">Велопрогулка</option>\r\n              </select>\r\n            </div>\r\n            </div>\r\n            <div class=\"constructor__form-field\">\r\n              <label for=\"email\" class=\"constructor__form-label\">Email</label>\r\n              <input class=\"constructor__form-input\" type=\"email\" id=\"email\" placeholder=\"example@mail.com\" required>\r\n            </div>\r\n            <div class=\"constructor__form-field\">\r\n              <label for=\"phone\" class=\"constructor__form-label\">Телефон</label>\r\n              <input class=\"constructor__form-input\" type=\"tel\" id=\"phone\" name=\"phone\" maxlength=\"50\"\r\n                pattern=\"\\+7\\s?[\\(]{0,1}9[0-9]{2}[\\)]{0,1}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2}\"\r\n                placeholder=\"+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _\" required>\r\n            </div>\r\n            <div class=\"constructor__form-field\">\r\n              <label for=\"date-1\" class=\"constructor__form-label\">Дата от</label>\r\n              <input class=\"constructor__form-date constructor__form-input--date-placeholder\" type=\"date\" id=\"date-from\" name=\"trip-start\">\r\n            </div>\r\n            <div class=\"constructor__form-field\">\r\n              <label for=\"date-2\" class=\"constructor__form-label\">Дата до</label>\r\n              <input class=\"constructor__form-date constructor__form-input--date-placeholder\" type=\"date\" id=\"date-to\" name=\"trip-end\">\r\n            </div>\r\n            <div class=\"constructor__form-field\">\r\n              <label for=\"comment\" class=\"constructor__form-label\">Комментарий</label>\r\n              <textarea class=\"constructor__form-textarea\" style=\"resize: none; \" name=\"comment\" id=\"comment\" rows=\"5\"\r\n                autocomplete=\"off\"></textarea>\r\n            </div>\r\n            <div class=\"constructor__form-field\">\r\n            <fieldset class=\"constructor__form-fieldset\">\r\n              <legend>Вам есть 18 лет?</legend>\r\n              <div class=\"constructor__form-radio-flex\">\r\n                <label class=\"constructor__form-radio-label\">\r\n                <input type=\"radio\" name=\"answer\" value=\"yes\" class=\"constructor__form-radio-input\">\r\n                <span class=\"constructor__form-radio-custom\"></span>\r\n                Да\r\n              </label>\r\n              <label class=\"constructor__form-radio-label\">\r\n                <input type=\"radio\" name=\"answer\" value=\"no\" class=\"constructor__form-radio-input\">\r\n                <span class=\"constructor__form-radio-custom\"></span></span>Нет\r\n              </label>\r\n            </div>\r\n            </fieldset>\r\n          </div>\r\n          <div class=\"constructor__form-field\">\r\n            <label class=\"constructor__form-checkbox-lebel\">\r\n              <input type=\"checkbox\" class=\"constructor__form-checkbox-input\" required><span class=\"constructor__form-checkbox-custom\"></span><span>Нажимая кнопку, я принимаю условия <a\r\n                href=\"#!\" target=\"_blank\">Лицензионного договора</a></span></label>\r\n          </div>\r\n            <div class=\"constructor__form-field\">\r\n              <div class=\"constructor__form-buttons\">\r\n              <button class=\"constructor__form-button constructor__form-button--primery\" type=\"submit\">Найти тур</button>\r\n              <button class=\"constructor__form-button\" type=\"reset\">Сбросить</button>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"response\" id=\"response\">\r\n      <div class=\"container\">\r\n        <div class=\"response__top section__top\">\r\n          <h2 class=\"response__title\">Отзывы наших путешественников</h2>\r\n          <p class=\"response__subtitle section-subtitle\">Идейные соображения высшего порядка, а также рамки и место\r\n            обучения кадров</p>\r\n        </div>\r\n        <div class=\"response__content\">\r\n          <div class=\"response__card\">\r\n            <div class=\"response__text\">\r\n            <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу\r\n              (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также\r\n              начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>\r\n            </div>\r\n            <div class=\"response__user\">\r\n              <div class=\"user__item\">\r\n                <h3>Мария</h3>\r\n                <p>Тур: Вдали от дома </p>\r\n              </div>\r\n              <img class=\"user__avatar\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Фотография клиента\" width=\"75px\"\r\n                height=\"75px\">\r\n            </div>\r\n          </div>\r\n          <div class=\"response__card\">\r\n            <div class=\"response__text\">\r\n              <p>Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в\r\n                формировании\r\n                системы обучения кадров, соответствует насущным потребностям.\r\n              </p>\r\n              <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности\r\n                обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная\r\n                практика\r\n                показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание\r\n                модели развития.\r\n              </p>\r\n            </div>\r\n            <div class=\"response__user user\">\r\n              <div class=\"user__item\">\r\n                <h3>Павел</h3>\r\n                <p>Тур: Путешествие в горы</p>\r\n              </div>\r\n              <img class=\"user__avatar\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Фотография клиента\" width=\"75px\"\r\n                height=\"75px\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"gallery\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"gallery__top section__top\">\r\n          <h2>Фотографии путешествий</h2>\r\n          <p class=\"gallery__subtitle section-subtitle\">Идейные соображения высшего порядка, а также рамки и место\r\n            обучения кадров</p>\r\n        </div>\r\n        <div class=\"gallery__flexbox\">\r\n          <div class=\"gallery__row\">\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\"></div>\r\n          </div>\r\n          <div class=\"gallery__row gallery__row--small\">\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"\r\n                alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\"\r\n                alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\"\r\n                alt=\"\"></div>\r\n          </div>\r\n          <div class=\"gallery__row\">\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\"></div>\r\n            <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"story\" id=\"story\">\r\n      <div class=\"container\">\r\n        <div class=\"story__top section__top\">\r\n          <h2>Истории путешествий</h2>\r\n          <p class=\"story__subtitle section-subtitle\">Идейные соображения высшего порядка, а также рамки и место\r\n            обучения кадров</p>\r\n        </div>\r\n        <div class=\"story__content\">\r\n          <div class=\"story__ticket ticket ticket--1\">\r\n            <div class=\"ticket__body\">\r\n              <div class=\"ticket__top\">\r\n                <h3 class=\"ticket__tittle\">\r\n                  Автостопом в Стамбул\r\n                </h3>\r\n                <div class=\"ticket__text\">\r\n                  <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров\r\n                    обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:</p>\r\n                  <ul class=\"ticket__list\">\r\n                    <li class=\"ticket__item\">вкусная еда</li>\r\n                    <li class=\"ticket__item\">дешевый транспорт</li>\r\n                    <li class=\"ticket__item\">красивый город.</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"ticket__bottom\">\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n                  <span class=\"btn-details__icon\"></span></a>\r\n                <ul class=\"ticket__social\">\r\n                  <li class=\"ticket__social-item\">\r\n                    <a class=\"ticket__social-link\" href=\"#!\">instagram</a>\r\n                  </li>\r\n                  <li class=\"ticket__social-item\">\r\n                    <a class=\"ticket__social-link\" href=\"#!\">facebook</a>\r\n                  </li>\r\n                  <li class=\"ticket__social-item\">\r\n                    <a class=\"ticket__social-link\" href=\"#!\">YouTube</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"story__ticket ticket ticket--2\">\r\n            <div class=\"ticket__body\">\r\n              <div class=\"ticket__top\">\r\n                <h3 class=\"ticket__tittle\">\r\n                  Автостопом в Стамбул\r\n                </h3>\r\n                <div class=\"ticket__text\">\r\n                  <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров\r\n                    обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"ticket__bottom\">\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n                  <span class=\"btn-details__icon\"></span></a>\r\n                <ul class=\"ticket__social\">\r\n                  <li class=\"ticket__social-item\">\r\n                    <a class=\"ticket__social-link\" href=\"#!\">instagram</a>\r\n                  </li>\r\n                  <li class=\"ticket__social-item\">\r\n                    <a class=\"ticket__social-link\" href=\"#!\">ВКонтакте</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\r\n          </div>\r\n          <div class=\"story__ticket ticket ticket--3\">\r\n            <div class=\"ticket__body\">\r\n              <div class=\"ticket__top\">\r\n                <h3 class=\"ticket__tittle\">\r\n                  Автостопом в Стамбул\r\n                </h3>\r\n                <div class=\"ticket__text\">\r\n                  <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров\r\n                    обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"ticket__bottom\">\r\n                <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span>\r\n                  <span class=\"btn-details__icon\"></span></a>\r\n                <ul class=\"ticket__social\">\r\n                  <li class=\"ticket__social-item\">\r\n                    <a class=\"ticket__social-link\" href=\"#!\">instagram</a>\r\n                  </li>\r\n                  <li class=\"ticket__social-item\">\r\n                    <a class=\"ticket__social-link\" href=\"#!\">facebook</a>\r\n                  </li>\r\n                  <li class=\"ticket__social-item\">\r\n                    <a class=\"ticket__social-link\" href=\"#!\">ВКонтакте</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <article class=\"article-promo\">\r\n      <div class=\"container\">\r\n        <div class=\"article-promo__content\">\r\n          <img class=\"article-promo__img block_radius\" src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\"\r\n            alt=\"Вид у горного водоема\">\r\n          <div class=\"article-promo__info\">\r\n            <h3 class=\"article-promo__tittle\">Пора в путешествие вместе с нами!</h3>\r\n            <p class=\"article-promo__text\">Напиши на почту и узнай подробности <br> на <a class=\"article-promo__email\"\r\n                href=\"mailto:yourtour@gmail.com?subject=Хочу получить консультацию по персональному подбору тура\">yourtour@gmail.com</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </article>\r\n  </main>\r\n  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <div class=\"footer__content\">\r\n        <p class=\"footer__text\">Наши социальные сети</p>\r\n        <ul class=\"footer__social\">\r\n          <li class=\"footer__social-item\">\r\n            <picture>\r\n              <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" media=\"(max-width: 768px)\">\r\n              <img class=\"footer__social-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\"\r\n                alt=\"instagram\">\r\n            </picture>\r\n            <a class=\"footer__social-link\" href=\"#!\">instagram</a>\r\n          </li>\r\n          <li class=\"footer__social-item\">\r\n            <picture>\r\n              <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" media=\"(max-width: 768px)\">\r\n              <img class=\"footer__social-img footer__social-img--mrg\" src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\"\r\n                alt=\"facebook\">\r\n            </picture><a class=\"footer__social-link\" href=\"#!\">facebook</a>\r\n          </li>\r\n          <li class=\"footer__social-item\">\r\n            <picture>\r\n              <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" media=\"(max-width: 768px)\">\r\n              <img class=\"footer__social-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\"\r\n                alt=\"vkontakte\">\r\n            </picture><a class=\"footer__social-link\" href=\"#!\">vkontakte</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/group-css-media-queries-loader/lib/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=\"22\" height=\"16\" viewBox=\"0 0 22 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath id=\"Vector\" d=\"M21.7004 7.28331L15.1535 0.796818C14.7541 0.401061 14.1063 0.401061 13.7068 0.796818C13.3073 1.19266 13.3073 1.83433 13.7068 2.23017L18.5074 6.98647H1.02294C0.458032 6.98647 0 7.44029 0 7.99999C0 8.55961 0.458032 9.0135 1.02294 9.0135H18.5074L13.707 13.7698C13.3075 14.1656 13.3075 14.8073 13.707 15.2032C13.9067 15.4009 14.1686 15.5 14.4304 15.5C14.6921 15.5 14.9539 15.4009 15.1537 15.2032L21.7004 8.71667C22.0999 8.32083 22.0999 7.67915 21.7004 7.28331Z\" fill=\"white\"/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath id="Vector" d="M21.7004 7.28331L15.1535 0.796818C14.7541 0.401061 14.1063 0.401061 13.7068 0.796818C13.3073 1.19266 13.3073 1.83433 13.7068 2.23017L18.5074 6.98647H1.02294C0.458032 6.98647 0 7.44029 0 7.99999C0 8.55961 0.458032 9.0135 1.02294 9.0135H18.5074L13.707 13.7698C13.3075 14.1656 13.3075 14.8073 13.707 15.2032C13.9067 15.4009 14.1686 15.5 14.4304 15.5C14.6921 15.5 14.9539 15.4009 15.1537 15.2032L21.7004 8.71667C22.0999 8.32083 22.0999 7.67915 21.7004 7.28331Z" fill="white"/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg width=\"22\" height=\"16\" viewBox=\"0 0 22 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath id=\"Vector\" d=\"M21.7004 7.28331L15.1535 0.796818C14.7541 0.401061 14.1063 0.401061 13.7068 0.796818C13.3073 1.19266 13.3073 1.83433 13.7068 2.23017L18.5074 6.98647H1.02294C0.458032 6.98647 0 7.44029 0 7.99999C0 8.55961 0.458032 9.0135 1.02294 9.0135H18.5074L13.707 13.7698C13.3075 14.1656 13.3075 14.8073 13.707 15.2032C13.9067 15.4009 14.1686 15.5 14.4304 15.5C14.6921 15.5 14.9539 15.4009 15.1537 15.2032L21.7004 8.71667C22.0999 8.32083 22.0999 7.67915 21.7004 7.28331Z\" fill=\"white\"/%3E%3C/svg%3E";

/***/ }),

/***/ "./favicon.ico":
/*!*********************!*\
  !*** ./favicon.ico ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c78fbc0079eeddb30acd.ico";

/***/ }),

/***/ "./img/article/article-promo-photo.jpg":
/*!*********************************************!*\
  !*** ./img/article/article-promo-photo.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "001a1480e628c0053144.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-1.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f3b8fc581a5050012f3f.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-2.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e7cc52efb167d2358615.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-3.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-3.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6e223ca09aa66f42c367.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-4.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-4.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b458767b9dc23d237dd2.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-5.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-5.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bfd443732379d80d46c8.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-6.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-6.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1a0add339b68ec6a4bcb.jpg";

/***/ }),

/***/ "./img/header/header-img-small.jpg":
/*!*****************************************!*\
  !*** ./img/header/header-img-small.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a359261c3691f91ef9de.jpg";

/***/ }),

/***/ "./img/header/header-img.jpg":
/*!***********************************!*\
  !*** ./img/header/header-img.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9ef6fedcf8398c1d35c3.jpg";

/***/ }),

/***/ "./img/icons/check-mark.svg":
/*!**********************************!*\
  !*** ./img/icons/check-mark.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "360d1e53b93d96176d92.svg";

/***/ }),

/***/ "./img/icons/ic-dropdown.svg":
/*!***********************************!*\
  !*** ./img/icons/ic-dropdown.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ce974b373ee0df46922.svg";

/***/ }),

/***/ "./img/review-photo/review-photo-1.jpg":
/*!*********************************************!*\
  !*** ./img/review-photo/review-photo-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c357fd8533a8fe2d3977.jpg";

/***/ }),

/***/ "./img/review-photo/review-photo-2.jpg":
/*!*********************************************!*\
  !*** ./img/review-photo/review-photo-2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b7a8061289f4d7ef99e7.jpg";

/***/ }),

/***/ "./img/socials/fb-small.svg":
/*!**********************************!*\
  !*** ./img/socials/fb-small.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "52680082151ed18c6c69.svg";

/***/ }),

/***/ "./img/socials/fb.svg":
/*!****************************!*\
  !*** ./img/socials/fb.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "36304e15eafb530aa7af.svg";

/***/ }),

/***/ "./img/socials/inst-small.svg":
/*!************************************!*\
  !*** ./img/socials/inst-small.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "37c01b2537a63b7a58df.svg";

/***/ }),

/***/ "./img/socials/inst.svg":
/*!******************************!*\
  !*** ./img/socials/inst.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "097d922ad5e54b2e0261.svg";

/***/ }),

/***/ "./img/socials/vk-small.svg":
/*!**********************************!*\
  !*** ./img/socials/vk-small.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7115dff66e0bd40f12d5.svg";

/***/ }),

/***/ "./img/socials/vk.svg":
/*!****************************!*\
  !*** ./img/socials/vk.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eec470abb7a23044d6fe.svg";

/***/ }),

/***/ "./img/story-photo/story-photo-1.jpg":
/*!*******************************************!*\
  !*** ./img/story-photo/story-photo-1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8367bed1d35210cafa9d.jpg";

/***/ }),

/***/ "./img/story-photo/story-photo-2.jpg":
/*!*******************************************!*\
  !*** ./img/story-photo/story-photo-2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "71adddfbdad4c01093f4.jpg";

/***/ }),

/***/ "./img/story-photo/story-photo-3.jpg":
/*!*******************************************!*\
  !*** ./img/story-photo/story-photo-3.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a91ba5d89fbd8875fc54.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-1.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ce2c0fd946c3a4de5036.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-10.jpg":
/*!**********************************************!*\
  !*** ./img/travel-photo/travel-photo-10.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a31b4a1d91774042bd7.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-11.jpg":
/*!**********************************************!*\
  !*** ./img/travel-photo/travel-photo-11.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b182f5be716430efff64.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-12.jpg":
/*!**********************************************!*\
  !*** ./img/travel-photo/travel-photo-12.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c0631b12f0e77ca811c7.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-13.jpg":
/*!**********************************************!*\
  !*** ./img/travel-photo/travel-photo-13.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2b32708d6609612a65cc.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-2.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "842979d4532def759b12.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-3.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-3.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d92ee19df9b94db67c95.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-4.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-4.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "79434966e09a1675e5e3.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-5.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-5.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "51147f5b33dc8aae351a.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-6.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-6.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d3846d63d599b6c23df4.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-7.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-7.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "266d69f7ae80b10c42d8.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-8.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-8.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a677236974a6282614b1.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-9.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-9.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f801045a1c1524b8af1d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_cjs_js_node_modules_normalize_css_normalize_css-node_mod-8d9771"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.c83797787e.js.map