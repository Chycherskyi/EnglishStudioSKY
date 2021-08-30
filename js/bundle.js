/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/gallery.js":
/*!*******************************!*\
  !*** ./js/modules/gallery.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function gallery() {
    let slideIndex = 1;
    const slides = document.querySelectorAll('.gallery-slide'),
        prev = document.querySelector('.modal-gallery__prev'),
        next = document.querySelector('.modal-gallery__next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 37) {
            plusSlides(-1);
        } else if (e.keyCode == 39) {
            plusSlides(1);
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);

/***/ }),

/***/ "./js/modules/imageList.js":
/*!*********************************!*\
  !*** ./js/modules/imageList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function imageList(){
function addImgGallery() {
    const parent = document.querySelector('.gallery-slider__wrapper');
    for (let i = 1; i <= 18; i++) {
        const element = document.createElement('div');
        element.classList.add('gallery-slide');
        element.innerHTML = `<img src="img/gallery/gallery-${i}.jpg" alt="image">`;
        parent.append(element);
    }
}

function addImgReview() {
    const parent = document.querySelector('.autoplay');
    for (let i = 1; i <= 16; i++) {
        const element = document.createElement('img');
        element.src = `img/reviews/review-${i}.jpg`
        parent.append(element);
    }
}

addImgGallery();
addImgReview();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageList);

/***/ }),

/***/ "./js/modules/maps.js":
/*!****************************!*\
  !*** ./js/modules/maps.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function maps(){
let tabs = document.querySelectorAll('.tabs'),
  tabsContent = document.querySelectorAll('.map'),
  tabsParent = document.querySelector('.location-block__item');

function hideTabContent() {

  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });

  tabs.forEach(item => {
    item.classList.remove('active');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function (event) {
  const target = event.target;
  if (target && target.classList.contains('tabs')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maps);

/***/ }),

/***/ "./js/modules/navigation.js":
/*!**********************************!*\
  !*** ./js/modules/navigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navigation() {
  const burger = document.querySelector(".navbar-block__burger");

  const iconBurger = document.querySelector(".fa-bars");
  const iconX = document.querySelector(".fa-times");
  const column = document.querySelector(".navbar-mobile");

  burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");

  })

  document.querySelectorAll('a.header-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.innerWidth < 760 && e.target !== document.querySelector('.logo')) {
        iconBurger.classList.toggle("show");
        iconX.classList.toggle("show");
        column.classList.toggle("show");
      }

      const href = this.getAttribute('href').substring(1),
        scrollTarget = document.getElementById(href),
        topOffset = 70,
        elementPosition = scrollTarget.getBoundingClientRect().top,
        offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      })
    })
  })

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {


    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 671,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gallery */ "./js/modules/gallery.js");
/* harmony import */ var _modules_imageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/imageList */ "./js/modules/imageList.js");
/* harmony import */ var _modules_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/maps */ "./js/modules/maps.js");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navigation */ "./js/modules/navigation.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");






new WOW().init();
(0,_modules_imageList__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_modules_gallery__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_modules_maps__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_modules_navigation__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map