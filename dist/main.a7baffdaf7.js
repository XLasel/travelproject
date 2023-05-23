/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const headerLink = document.querySelectorAll('.header__link');
const headerNavWrapp = document.querySelector('.header__nav-wrapper');
const constructorForm = document.querySelector('.constructor__form');
const select = document.getElementById('select__type');
const inputDate = constructorForm.querySelectorAll('input[type="date"]');
const dateFromInput = document.getElementById('date-from');
const dateToInput = document.getElementById('date-to');
const resetButton = constructorForm.querySelector('button[type="reset"]');
let scrollById = false;
headerLogo.addEventListener('click', event => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
headerLink.forEach(link => {
  link.addEventListener('click', smoothScroll);
});
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
    if (scrollPos > 1240 & scrollPos > prevScrollPos && !scrollById) {
      toDown++;
      toUp = 0;
      if (toDown > 30) {
        addHidden();
      }
    }
    if (requiredScroll && scrollPos < prevScrollPos && !scrollById) {
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
      header.classList.add('header--nav-fixed');
      statusFixed = true;
    }
  }
  function removeFixed() {
    if (statusFixed) {
      headerNavWrapp.classList.remove('header__nav-wrapper--fixed');
      header.classList.remove('header--nav-fixed');
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
function smoothScroll(event) {
  event.preventDefault();
  const targetLink = event.target.closest('a');
  if (!targetLink) {
    return;
  }
  const targetId = targetLink.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.offsetTop;
  const offsetPosition = targetPosition - 88;
  scrollById = true;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
  setTimeout(() => {
    scrollById = false;
  }, 3000);
}
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
document.addEventListener('DOMContentLoaded', makeNavToFixed);
verifyFormDate();

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
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/story-photo/story-photo-1.jpg */ "./img/story-photo/story-photo-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/story-photo/story-photo-2.jpg */ "./img/story-photo/story-photo-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/story-photo/story-photo-3.jpg */ "./img/story-photo/story-photo-3.jpg"), __webpack_require__.b);
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
var code = "<!doctype html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>YourTour | Авторские путешествия</title>\r\n  <meta name=\"description\"\r\n    content=\"Авторские путешествия по России и всему миру. Насыщенные туры в малых группах с небанальными маршрутами. Продуманная программа, забота о каждом путешественнике.\" />\r\n  <meta name=\"keywords\"\r\n    content=\"авторские путешествия, туры, отдых, туризм, путешествия, поиск туров, туроператор, бронирование, путешествия по России, путешествия по всему миру, насыщенные туры, тур в горы, отдых у океана, кемпинг\" />\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/ico\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<body>\r\n  <div class=\"wrapper\">\r\n    <header class=\"header\">\r\n      <div class=\"header__nav-wrapper\">\r\n        <nav class=\"header__nav\">\r\n          <a class=\"header__logo\" href=\"#\">\r\n            <svg class=\"header__logo-img\" width=\"182\" height=\"32\" viewBox=\"0 0 182 32\" fill=\"none\"\r\n              xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path\r\n                d=\"M7.476 0.879883L13.902 14.0679L20.412 0.879883H27.93L17.304 20.5359V30.6999H10.458V20.4519L0 0.879883H7.476Z\"\r\n                fill=\"white\" />\r\n              <path\r\n                d=\"M36.8041 31.1199C34.2841 31.1199 32.1421 30.5879 30.3781 29.5239C28.6421 28.4599 27.3121 27.0599 26.3881 25.3239C25.4641 23.5879 25.0021 21.7119 25.0021 19.6959C25.0021 17.6519 25.4641 15.7619 26.3881 14.0259C27.3121 12.2899 28.6561 10.8899 30.4201 9.82588C32.1841 8.76188 34.3121 8.22988 36.8041 8.22988C39.2961 8.22988 41.4241 8.76188 43.1881 9.82588C44.9521 10.8899 46.2961 12.2899 47.2201 14.0259C48.1441 15.7619 48.6061 17.6519 48.6061 19.6959C48.6061 21.7119 48.1441 23.5879 47.2201 25.3239C46.2961 27.0599 44.9521 28.4599 43.1881 29.5239C41.4241 30.5879 39.2961 31.1199 36.8041 31.1199ZM31.8901 19.6959C31.8901 21.4039 32.3521 22.7899 33.2761 23.8539C34.2281 24.9179 35.4041 25.4499 36.8041 25.4499C38.1761 25.4499 39.3241 24.9179 40.2481 23.8539C41.2001 22.7899 41.6761 21.4039 41.6761 19.6959C41.6761 17.9879 41.2001 16.6019 40.2481 15.5379C39.3241 14.4739 38.1761 13.9419 36.8041 13.9419C35.4041 13.9419 34.2281 14.4739 33.2761 15.5379C32.3521 16.6019 31.8901 17.9879 31.8901 19.6959Z\"\r\n                fill=\"white\" />\r\n              <path\r\n                d=\"M51.7289 22.7619V8.64988H58.4489V21.2919C58.4489 24.0639 59.4709 25.4499 61.5149 25.4499C62.4109 25.4499 63.2789 25.2119 64.1189 24.7359C64.9589 24.2319 65.7009 23.4059 66.3449 22.2579V8.64988H73.0649V23.2239C73.0649 23.8959 73.1629 24.3719 73.3589 24.6519C73.5829 24.9319 73.9609 25.0859 74.4929 25.1139V30.6999C73.8489 30.8119 73.3029 30.8959 72.8549 30.9519C72.4069 31.0079 72.0009 31.0359 71.6369 31.0359C69.2289 31.0359 67.8569 30.0979 67.5209 28.2219L67.3949 26.8779C66.3869 28.3339 65.1269 29.4119 63.6149 30.1119C62.1309 30.7839 60.4649 31.1199 58.6169 31.1199C56.3769 31.1199 54.6689 30.4059 53.4929 28.9779C52.3169 27.5499 51.7289 25.4779 51.7289 22.7619Z\"\r\n                fill=\"white\" />\r\n              <path\r\n                d=\"M92.2569 14.4039C90.6329 14.4319 89.1629 14.6979 87.8469 15.2019C86.5309 15.7059 85.5789 16.4619 84.9909 17.4699V30.6999H78.2709V8.64988H84.4449V13.1019C85.2009 11.6179 86.1809 10.4559 87.3849 9.61588C88.5889 8.77588 89.8489 8.34188 91.1649 8.31388C91.7249 8.31388 92.0889 8.32788 92.2569 8.35588V14.4039Z\"\r\n                fill=\"white\" />\r\n              <path d=\"M116.92 6.92788H107.848V30.6999H100.96V6.92788H91.8458V0.879883H116.92V6.92788Z\" fill=\"white\" />\r\n              <path\r\n                d=\"M126.382 31.1199C123.862 31.1199 121.72 30.5879 119.956 29.5239C118.22 28.4599 116.89 27.0599 115.966 25.3239C115.042 23.5879 114.58 21.7119 114.58 19.6959C114.58 17.6519 115.042 15.7619 115.966 14.0259C116.89 12.2899 118.234 10.8899 119.998 9.82588C121.762 8.76188 123.89 8.22988 126.382 8.22988C128.874 8.22988 131.002 8.76188 132.766 9.82588C134.53 10.8899 135.874 12.2899 136.798 14.0259C137.722 15.7619 138.184 17.6519 138.184 19.6959C138.184 21.7119 137.722 23.5879 136.798 25.3239C135.874 27.0599 134.53 28.4599 132.766 29.5239C131.002 30.5879 128.874 31.1199 126.382 31.1199ZM121.468 19.6959C121.468 21.4039 121.93 22.7899 122.854 23.8539C123.806 24.9179 124.982 25.4499 126.382 25.4499C127.754 25.4499 128.902 24.9179 129.826 23.8539C130.778 22.7899 131.254 21.4039 131.254 19.6959C131.254 17.9879 130.778 16.6019 129.826 15.5379C128.902 14.4739 127.754 13.9419 126.382 13.9419C124.982 13.9419 123.806 14.4739 122.854 15.5379C121.93 16.6019 121.468 17.9879 121.468 19.6959Z\"\r\n                fill=\"white\" />\r\n              <path\r\n                d=\"M141.307 22.7619V8.64988H148.027V21.2919C148.027 24.0639 149.049 25.4499 151.093 25.4499C151.989 25.4499 152.857 25.2119 153.697 24.7359C154.537 24.2319 155.279 23.4059 155.923 22.2579V8.64988H162.643V23.2239C162.643 23.8959 162.741 24.3719 162.937 24.6519C163.161 24.9319 163.539 25.0859 164.071 25.1139V30.6999C163.427 30.8119 162.881 30.8959 162.433 30.9519C161.985 31.0079 161.579 31.0359 161.215 31.0359C158.807 31.0359 157.435 30.0979 157.099 28.2219L156.973 26.8779C155.965 28.3339 154.705 29.4119 153.193 30.1119C151.709 30.7839 150.043 31.1199 148.195 31.1199C145.955 31.1199 144.247 30.4059 143.071 28.9779C141.895 27.5499 141.307 25.4779 141.307 22.7619Z\"\r\n                fill=\"white\" />\r\n              <path\r\n                d=\"M181.835 14.4039C180.211 14.4319 178.741 14.6979 177.425 15.2019C176.109 15.7059 175.157 16.4619 174.569 17.4699V30.6999H167.849V8.64988H174.023V13.1019C174.779 11.6179 175.759 10.4559 176.963 9.61588C178.167 8.77588 179.427 8.34188 180.743 8.31388C181.303 8.31388 181.667 8.32788 181.835 8.35588V14.4039Z\"\r\n                fill=\"white\" />\r\n            </svg>\r\n          </a>\r\n          <ul class=\"header__list\">\r\n            <li class=\"header__item\"><a class=\"header__link\" href=\"#choice\">Туры</a></li>\r\n            <li class=\"header__item\"><a class=\"header__link\" href=\"#constructor\">Создать тур</a></li>\r\n            <li class=\"header__item\"><a class=\"header__link\" href=\"#response\">Отзывы</a></li>\r\n            <li class=\"header__item\"><a class=\"header__link\" href=\"#story\">Истории</a></li>\r\n          </ul>\r\n          <a class=\"header__phone\" href=\"tel:+79999999999\">+7 999 999 99 99</a>\r\n        </nav>\r\n      </div>\r\n      <div class=\"header__content\">\r\n        <div class=\"header__content-flex\">\r\n          <h1 class=\"header__title\">Идеальные путешествия существуют</h1>\r\n          <p class=\"header__text\">Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>\r\n          <a class=\"header__btn header__link\" href=\"#choice\"><span>Найти тур</span></a>\r\n        </div>\r\n      </div>\r\n    </header>\r\n\r\n    <main>\r\n      <section class=\"choice\" id=\"choice\">\r\n        <div class=\"container\">\r\n          <div class=\"choice__top section__top\">\r\n            <h2 class=\"choice__title\">Выбери свой тур</h2>\r\n            <ul class=\"choice__list\">\r\n              <li class=\"choice__list-item choice__list-item--desktop\"><a class=\"choice__list-link\"\r\n                  href=\"#!\">Популярные</a>\r\n              </li>\r\n              <li class=\"choice__list-item\"><a class=\"choice__list-link\" href=\"#!\">Авторские</a></li>\r\n              <li class=\"choice__list-item\"><a class=\"choice__list-link\" href=\"#!\">Походы</a></li>\r\n              <li class=\"choice__list-item\"><a class=\"choice__list-link\" href=\"#!\">Сплавы</a></li>\r\n              <li class=\"choice__list-item\"><a class=\"choice__list-link\" href=\"#!\">Велопрогулки</a></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"choice__content\">\r\n            <div class=\"choice__flex\">\r\n              <div class=\"choice__card card\">\r\n                <div class=\"card__body\">\r\n                  <div class=\"card__body-promo\">\r\n                    <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                    <p>от 80 000 руб</p>\r\n                  </div>\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                </div>\r\n                <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n              </div>\r\n              <div class=\"choice__card card\">\r\n                <div class=\"card__body\">\r\n                  <div class=\"card__body-promo\">\r\n                    <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                    <p>от 80 000 руб</p>\r\n                  </div>\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                </div>\r\n                <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n              </div>\r\n              <div class=\"choice__card card\">\r\n                <div class=\"card__body\">\r\n                  <div class=\"card__body-promo\">\r\n                    <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                    <p>от 80 000 руб</p>\r\n                  </div>\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                </div>\r\n                <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" />\r\n              </div>\r\n              <div class=\"choice__card card\">\r\n                <div class=\"card__body\">\r\n                  <div class=\"card__body-promo\">\r\n                    <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                    <p>от 80 000 руб</p>\r\n                  </div>\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                </div>\r\n                <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" />\r\n              </div>\r\n              <div class=\"choice__card card\">\r\n                <div class=\"card__body\">\r\n                  <div class=\"card__body-promo\">\r\n                    <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                    <p>от 80 000 руб</p>\r\n                  </div>\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                </div>\r\n                <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" />\r\n              </div>\r\n              <div class=\"choice__card card\">\r\n                <div class=\"card__body\">\r\n                  <div class=\"card__body-promo\">\r\n                    <h3 class=\"card__title\">Путешествие в горы</h3>\r\n                    <p>от 80 000 руб</p>\r\n                  </div>\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                </div>\r\n                <img class=\"card__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </section>\r\n      <section class=\"constructor\" id=\"constructor\">\r\n        <div class=\"container\">\r\n          <div class=\"constructor__top section__top\">\r\n            <h2 class=\"constructor__title\">Собери свой тур</h2>\r\n            <p class=\"constructor__subtitle section-subtitle\">Идейные соображения высшего порядка,<br>а также рамки и\r\n              место\r\n              обучения кадров</p>\r\n          </div>\r\n          <form class=\"constructor__form\">\r\n            <div class=\"constructor__flex\">\r\n              <div class=\"constructor__form-field\">\r\n                <label for=\"name\" class=\"constructor__form-label\">Имя</label>\r\n                <input class=\"constructor__form-input\" type=\"text\" id=\"name\" placeholder=\"Введите Ваше имя\">\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <label for=\"select__type\" class=\"constructor__form-label\">Направление</label>\r\n                <div class=\"constructor__custom-arrow\">\r\n                  <select class=\"constructor__form-select constructor__form-select--placeholder\" id=\"select__type\"\r\n                    name=\"type\">\r\n                    <option value=\"none\" hidden=\"\">Куда хотите ехать</option>\r\n                    <option value=\"Поход\">Поход</option>\r\n                    <option value=\"Сплав\">Сплав</option>\r\n                    <option value=\"Велопрогулка\">Велопрогулка</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <label for=\"email\" class=\"constructor__form-label\">Email</label>\r\n                <input class=\"constructor__form-input\" type=\"email\" id=\"email\" placeholder=\"example@mail.com\" required>\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <label for=\"phone\" class=\"constructor__form-label\">Телефон</label>\r\n                <input class=\"constructor__form-input\" type=\"tel\" id=\"phone\" name=\"phone\" maxlength=\"50\"\r\n                  pattern=\"\\+7\\s?[\\(]{0,1}9[0-9]{2}[\\)]{0,1}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2}\"\r\n                  placeholder=\"+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _\" required>\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <label for=\"date-1\" class=\"constructor__form-label\">Дата от</label>\r\n                <input class=\"constructor__form-date constructor__form-input--date-placeholder\" type=\"date\"\r\n                  id=\"date-from\" name=\"trip-start\">\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <label for=\"date-2\" class=\"constructor__form-label\">Дата до</label>\r\n                <input class=\"constructor__form-date constructor__form-input--date-placeholder\" type=\"date\" id=\"date-to\"\r\n                  name=\"trip-end\">\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <label for=\"comment\" class=\"constructor__form-label\">Комментарий</label>\r\n                <textarea class=\"constructor__form-textarea\" style=\"resize: none; \" name=\"comment\" id=\"comment\" rows=\"5\"\r\n                  autocomplete=\"off\"></textarea>\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <fieldset class=\"constructor__form-fieldset\">\r\n                  <legend>Вам есть 18 лет?</legend>\r\n                  <div class=\"constructor__form-radio-flex\">\r\n                    <label class=\"constructor__form-radio-label\">\r\n                      <input type=\"radio\" name=\"answer\" value=\"yes\" class=\"constructor__form-radio-input\">\r\n                      <span class=\"constructor__form-radio-custom\"></span>\r\n                      Да\r\n                    </label>\r\n                    <label class=\"constructor__form-radio-label\">\r\n                      <input type=\"radio\" name=\"answer\" value=\"no\" class=\"constructor__form-radio-input\">\r\n                      <span class=\"constructor__form-radio-custom\"></span></span>\r\n                      Нет\r\n                    </label>\r\n                  </div>\r\n                </fieldset>\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <label class=\"constructor__form-checkbox-lebel\">\r\n                  <input type=\"checkbox\" class=\"constructor__form-checkbox-input\" required><span\r\n                    class=\"constructor__form-checkbox-custom\"></span><span>Нажимая кнопку, я принимаю условия <a\r\n                      href=\"#!\">Лицензионного договора</a></span></label>\r\n              </div>\r\n              <div class=\"constructor__form-field\">\r\n                <div class=\"constructor__form-buttons\">\r\n                  <button class=\"constructor__form-button constructor__form-button--primery\" type=\"submit\">Найти\r\n                    тур</button>\r\n                  <button class=\"constructor__form-button\" type=\"reset\">Сбросить</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"response\" id=\"response\">\r\n        <div class=\"container\">\r\n          <div class=\"response__top section__top\">\r\n            <h2 class=\"response__title\">Отзывы наших путешественников</h2>\r\n            <p class=\"response__subtitle section-subtitle\">Идейные соображения высшего порядка, а также рамки и место\r\n              обучения кадров</p>\r\n          </div>\r\n          <div class=\"response__content\">\r\n            <div class=\"response__card\">\r\n              <div class=\"response__text\">\r\n                <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому\r\n                  кругу\r\n                  (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также\r\n                  начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>\r\n              </div>\r\n              <div class=\"response__user\">\r\n                <div class=\"user__item\">\r\n                  <h3>Мария</h3>\r\n                  <p>Тур: Вдали от дома </p>\r\n                </div>\r\n                <img class=\"user__avatar\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" width=\"75px\" height=\"75px\">\r\n              </div>\r\n            </div>\r\n            <div class=\"response__card\">\r\n              <div class=\"response__text\">\r\n                <p>Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в\r\n                  формировании\r\n                  системы обучения кадров, соответствует насущным потребностям.\r\n                </p>\r\n                <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности\r\n                  обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная\r\n                  практика\r\n                  показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание\r\n                  модели развития.\r\n                </p>\r\n              </div>\r\n              <div class=\"response__user user\">\r\n                <div class=\"user__item\">\r\n                  <h3>Павел</h3>\r\n                  <p>Тур: Путешествие в горы</p>\r\n                </div>\r\n                <img class=\"user__avatar\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" width=\"75px\" height=\"75px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"gallery\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"gallery__top section__top\">\r\n            <h2>Фотографии путешествий</h2>\r\n            <p class=\"gallery__subtitle section-subtitle\">Идейные соображения высшего порядка, а также рамки и место\r\n              обучения кадров</p>\r\n          </div>\r\n          <div class=\"gallery__flexbox\">\r\n            <div class=\"gallery__row\">\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\"></div>\r\n            </div>\r\n            <div class=\"gallery__row gallery__row--small\">\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"gallery__row\">\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\"></div>\r\n              <div class=\"gallery__item\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"story\" id=\"story\">\r\n        <div class=\"container\">\r\n          <div class=\"story__top section__top\">\r\n            <h2>Истории путешествий</h2>\r\n            <p class=\"story__subtitle section-subtitle\">Идейные соображения высшего порядка, а также рамки и место\r\n              обучения кадров</p>\r\n          </div>\r\n          <div class=\"story__content\">\r\n            <div class=\"story__ticket ticket ticket--1\">\r\n              <div class=\"ticket__body\">\r\n                <div class=\"ticket__top\">\r\n                  <h3 class=\"ticket__tittle\">\r\n                    Автостопом в Стамбул\r\n                  </h3>\r\n                  <div class=\"ticket__text\">\r\n                    <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров\r\n                      обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:</p>\r\n                    <ul class=\"ticket__list\">\r\n                      <li class=\"ticket__item\">вкусная еда</li>\r\n                      <li class=\"ticket__item\">дешевый транспорт</li>\r\n                      <li class=\"ticket__item\">красивый город.</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ticket__bottom\">\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                  <ul class=\"ticket__social\">\r\n                    <li class=\"ticket__social-item\">\r\n                      <a class=\"ticket__social-link\" href=\"#!\">instagram</a>\r\n                    </li>\r\n                    <li class=\"ticket__social-item\">\r\n                      <a class=\"ticket__social-link\" href=\"#!\">facebook</a>\r\n                    </li>\r\n                    <li class=\"ticket__social-item\">\r\n                      <a class=\"ticket__social-link\" href=\"#!\">YouTube</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"story__ticket ticket ticket--2\">\r\n              <div class=\"ticket__body\">\r\n                <div class=\"ticket__top\">\r\n                  <h3 class=\"ticket__tittle\">\r\n                    Автостопом в Стамбул\r\n                  </h3>\r\n                  <div class=\"ticket__text\">\r\n                    <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров\r\n                      обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ticket__bottom\">\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                  <ul class=\"ticket__social\">\r\n                    <li class=\"ticket__social-item\">\r\n                      <a class=\"ticket__social-link\" href=\"#!\">instagram</a>\r\n                    </li>\r\n                    <li class=\"ticket__social-item\">\r\n                      <a class=\"ticket__social-link\" href=\"#!\">ВКонтакте</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\">\r\n            </div>\r\n            <div class=\"story__ticket ticket ticket--3\">\r\n              <div class=\"ticket__body\">\r\n                <div class=\"ticket__top\">\r\n                  <h3 class=\"ticket__tittle\">\r\n                    Автостопом в Стамбул\r\n                  </h3>\r\n                  <div class=\"ticket__text\">\r\n                    <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров\r\n                      обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ticket__bottom\">\r\n                  <a class=\"btn-details\" href=\"#!\"><span class=\"btn-details__text\">Подробнее</span></a>\r\n                  <ul class=\"ticket__social\">\r\n                    <li class=\"ticket__social-item\">\r\n                      <a class=\"ticket__social-link\" href=\"#!\">instagram</a>\r\n                    </li>\r\n                    <li class=\"ticket__social-item\">\r\n                      <a class=\"ticket__social-link\" href=\"#!\">facebook</a>\r\n                    </li>\r\n                    <li class=\"ticket__social-item\">\r\n                      <a class=\"ticket__social-link\" href=\"#!\">ВКонтакте</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <article class=\"article-promo\">\r\n        <div class=\"container\">\r\n          <div class=\"article-promo__content\">\r\n            <img class=\"article-promo__img block_radius\" src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\"\r\n              alt=\"Вид у горного водоема\">\r\n            <div class=\"article-promo__info\">\r\n              <h3 class=\"article-promo__tittle\">Пора в путешествие вместе с нами!</h3>\r\n              <p class=\"article-promo__text\">Напиши на почту и узнай подробности <br> на <a class=\"article-promo__email\"\r\n                  href=\"mailto:yourtour@gmail.com?subject=Хочу получить консультацию по персональному подбору тура\">yourtour@gmail.com</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </article>\r\n    </main>\r\n\r\n    <footer class=\"footer\">\r\n      <div class=\"container\">\r\n        <div class=\"footer__content\">\r\n          <p class=\"footer__text\">Наши социальные сети</p>\r\n          <ul class=\"footer__social\">\r\n            <li class=\"footer__social-item\">\r\n              <picture>\r\n                <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" media=\"(max-width: 768px)\">\r\n                <img class=\"footer__social-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"instagram\">\r\n              </picture>\r\n              <a class=\"footer__social-link\" href=\"#!\">instagram</a>\r\n            </li>\r\n            <li class=\"footer__social-item\">\r\n              <picture>\r\n                <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" media=\"(max-width: 768px)\">\r\n                <img class=\"footer__social-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"facebook\">\r\n              </picture><a class=\"footer__social-link\" href=\"#!\">facebook</a>\r\n            </li>\r\n            <li class=\"footer__social-item\">\r\n              <picture>\r\n                <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" media=\"(max-width: 768px)\">\r\n                <img class=\"footer__social-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" alt=\"vkontakte\">\r\n              </picture><a class=\"footer__social-link\" href=\"#!\">vkontakte</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/article/article-promo-photo.jpg":
/*!*********************************************!*\
  !*** ./img/article/article-promo-photo.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/article-promo-photo.dfe88e.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-1.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/card-tour-photo-1.1d921f.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-2.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/card-tour-photo-2.e8d818.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-3.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-3.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/card-tour-photo-3.a9af24.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-4.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-4.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/card-tour-photo-4.1fa61f.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-5.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-5.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/card-tour-photo-5.a31872.jpg";

/***/ }),

/***/ "./img/card-tour/card-tour-photo-6.jpg":
/*!*********************************************!*\
  !*** ./img/card-tour/card-tour-photo-6.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/card-tour-photo-6.e3a54b.jpg";

/***/ }),

/***/ "./img/review-photo/review-photo-1.jpg":
/*!*********************************************!*\
  !*** ./img/review-photo/review-photo-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/review-photo-1.d43a63.jpg";

/***/ }),

/***/ "./img/review-photo/review-photo-2.jpg":
/*!*********************************************!*\
  !*** ./img/review-photo/review-photo-2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/review-photo-2.d9391e.jpg";

/***/ }),

/***/ "./img/socials/fb-small.svg":
/*!**********************************!*\
  !*** ./img/socials/fb-small.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fb-small.a200da.svg";

/***/ }),

/***/ "./img/socials/fb.svg":
/*!****************************!*\
  !*** ./img/socials/fb.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fb.85711e.svg";

/***/ }),

/***/ "./img/socials/inst-small.svg":
/*!************************************!*\
  !*** ./img/socials/inst-small.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/inst-small.4b91eb.svg";

/***/ }),

/***/ "./img/socials/inst.svg":
/*!******************************!*\
  !*** ./img/socials/inst.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/inst.cd8d27.svg";

/***/ }),

/***/ "./img/socials/vk-small.svg":
/*!**********************************!*\
  !*** ./img/socials/vk-small.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/vk-small.f550dd.svg";

/***/ }),

/***/ "./img/socials/vk.svg":
/*!****************************!*\
  !*** ./img/socials/vk.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/vk.54fd9a.svg";

/***/ }),

/***/ "./img/story-photo/story-photo-1.jpg":
/*!*******************************************!*\
  !*** ./img/story-photo/story-photo-1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/story-photo-1.c35202.jpg";

/***/ }),

/***/ "./img/story-photo/story-photo-2.jpg":
/*!*******************************************!*\
  !*** ./img/story-photo/story-photo-2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/story-photo-2.d755c4.jpg";

/***/ }),

/***/ "./img/story-photo/story-photo-3.jpg":
/*!*******************************************!*\
  !*** ./img/story-photo/story-photo-3.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/story-photo-3.de170b.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-1.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-1.e67494.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-10.jpg":
/*!**********************************************!*\
  !*** ./img/travel-photo/travel-photo-10.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-10.ad48e5.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-11.jpg":
/*!**********************************************!*\
  !*** ./img/travel-photo/travel-photo-11.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-11.3b2eab.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-12.jpg":
/*!**********************************************!*\
  !*** ./img/travel-photo/travel-photo-12.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-12.c43f6e.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-13.jpg":
/*!**********************************************!*\
  !*** ./img/travel-photo/travel-photo-13.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-13.4e358a.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-2.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-2.6c43cc.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-3.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-3.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-3.a210f3.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-4.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-4.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-4.86e86e.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-5.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-5.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-5.68159f.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-6.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-6.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-6.0f9555.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-7.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-7.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-7.a67c4a.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-8.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-8.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-8.31af5e.jpg";

/***/ }),

/***/ "./img/travel-photo/travel-photo-9.jpg":
/*!*********************************************!*\
  !*** ./img/travel-photo/travel-photo-9.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/travel-photo-9.0a193e.jpg";

/***/ }),

/***/ "./favicon.ico":
/*!*********************!*\
  !*** ./favicon.ico ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c78fbc0079eeddb30acd.ico";

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
/******/ 			// no module.id needed
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./style/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./main.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=main.a7baffdaf7.js.map