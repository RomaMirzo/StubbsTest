/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/mobileMenu.js":
/*!********************************!*\
  !*** ./js/parts/mobileMenu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function mobileMenu() {
  "use strict";

  var x = document.getElementById("myLinks"),
      topnav = document.getElementsByClassName("topnav")[0],
      btnMobile = document.getElementById("btnMobile");

  function myFunction() {
    if (x.style.display === "block") {
      x.style.display = "none";
      topnav.style.height = 60 + "px";
    } else {
      x.style.display = "block";
      topnav.style.height = 580 + "px";
    }
  }

  btnMobile.addEventListener('click', myFunction);
  var searchIcon = document.querySelector('.searchIcon'),
      searchItem = document.querySelector('#mobileSearch');
  console.log(searchItem);
  searchIcon.addEventListener('click', function () {
    if (searchItem.style.opacity == 0) {
      searchItem.style.opacity = 100;
    } else {
      searchItem.style.opacity = 0;
    }
  });
}

module.exports = mobileMenu;

/***/ }),

/***/ "./js/parts/rotateGear.js":
/*!********************************!*\
  !*** ./js/parts/rotateGear.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function rotateGear() {
  "use strict";

  var gear = document.querySelectorAll(".rotate-gear"),
      services = document.querySelector(".services"),
      num = 0;
  document.addEventListener('mousewheel', function () {
    num = num + 10;
    gear.forEach(function (item, i, gear) {
      gear[i].style.transform = "rotate(".concat(num, "deg)"); // console.log(item);
    });
  });
}

module.exports = rotateGear;

/***/ }),

/***/ "./js/parts/search.js":
/*!****************************!*\
  !*** ./js/parts/search.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function search() {
  "use strict";

  var searchField = document.getElementsByClassName('search-item-block')[0],
      searchSvgStart = document.getElementById('searchSvgStart'),
      searchSvgRun = document.getElementById('searchSvgRun');
  var topUp = -45,
      topDown = 0;
  searchField.style.top = "".concat(topUp, "px"); // moveDown

  searchSvgStart.addEventListener('click', function () {
    searchField.style.display = "block";
    searchSvgStart.style.opacity = 0;
    var intervalId = setInterval(function () {
      searchField.style.top = "".concat(topUp, "px");
      topUp++;

      if (topUp === 0) {
        topUp = -45;
        clearInterval(intervalId);
      }
    }, 5);
  }); // moveUp

  searchSvgRun.addEventListener('click', function () {
    var intervalId = setInterval(function () {
      searchField.style.top = "".concat(topDown, "px");
      topDown--;

      if (topDown < -45) {
        topDown = 0;
        clearInterval(intervalId);
        searchField.style.display = "none";
        searchSvgStart.style.opacity = 100;
      }
    }, 5);
  });
}

module.exports = search;

/***/ }),

/***/ "./js/parts/swiperInit.js":
/*!********************************!*\
  !*** ./js/parts/swiperInit.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function swiperInit() {
  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      width: 14,
      height: 14
    }
  });
}

module.exports = swiperInit;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var mobileMenu = __webpack_require__(/*! ./parts/mobileMenu */ "./js/parts/mobileMenu.js"),
      rotateGear = __webpack_require__(/*! ./parts/rotateGear */ "./js/parts/rotateGear.js"),
      search = __webpack_require__(/*! ./parts/search */ "./js/parts/search.js"),
      swiperInit = __webpack_require__(/*! ./parts/swiperInit */ "./js/parts/swiperInit.js");

  mobileMenu();
  rotateGear();
  search();
  swiperInit();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map