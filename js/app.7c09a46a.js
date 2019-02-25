/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([86,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/flickity/js/index.js
var js = __webpack_require__(41);
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// EXTERNAL MODULE: ./node_modules/desandro-classie/classie.js
var classie = __webpack_require__(0);
var classie_default = /*#__PURE__*/__webpack_require__.n(classie);

// EXTERNAL MODULE: ./node_modules/support/index.js
var support = __webpack_require__(22);
var support_default = /*#__PURE__*/__webpack_require__.n(support);

// CONCATENATED MODULE: ./src/scripts/main.js



/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015, Codrops
 * http://www.codrops.com
 */




var bodyEl = document.body,
    transEndEventNames = {
  'WebkitTransition': 'webkitTransitionEnd',
  'MozTransition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'msTransition': 'MSTransitionEnd',
  'transition': 'transitionend'
},
    transEndEventName = transEndEventNames['transition'],
    main_onEndTransition = function onEndTransition(el, callback) {
  var onEndCallbackFn = function onEndCallbackFn(ev) {
    if (support_default.a.transitions) {
      if (ev.target != this) return;
      this.removeEventListener(transEndEventName, onEndCallbackFn);
    }

    if (callback && typeof callback === 'function') {
      callback.call(this);
    }
  };

  if (support_default.a.transitions) {
    el.addEventListener(transEndEventName, onEndCallbackFn);
  } else {
    onEndCallbackFn();
  }
},
    slider = document.querySelector('.stack-slider'),
    stacksWrapper = slider.querySelector('.stacks-wrapper'),
    stacks = [].slice.call(stacksWrapper.children),
    imghero = document.querySelector('.hero__back--mover'),
    flkty,
    canOpen = true,
    canMoveHeroImage = true,
    win = {
  width: window.innerWidth,
  height: window.innerHeight
}; // from http://www.sberry.me/articles/javascript-event-throttling-debouncing


function throttle(fn, delay) {
  var allowSample = true;
  return function (e) {
    if (allowSample) {
      allowSample = false;
      setTimeout(function () {
        allowSample = true;
      }, delay);
      fn(e);
    }
  };
}

function init() {
  flkty = new js_default.a(stacksWrapper, {
    wrapAround: true,
    imagesLoaded: true,
    initialIndex: 0,
    setGallerySize: false,
    pageDots: false,
    prevNextButtons: false
  });
  initEvents();
  flkty.select(1);
}

function initEvents() {
  stacks.forEach(function (stack) {
    var titleEl = stack.querySelector('.stack-title'); // expand/close the stack

    titleEl.addEventListener('click', function (ev) {
      ev.preventDefault();

      if (classie_default.a.has(stack, 'is-selected')) {
        // current stack
        if (classie_default.a.has(bodyEl, 'view-full')) {
          // stack is opened
          classie_default.a.remove(bodyEl, 'move-items');
          main_onEndTransition(slider, function () {
            classie_default.a.remove(bodyEl, 'view-full');
            bodyEl.style.height = '';
            flkty.bindDrag();
            flkty.options.accessibility = true;
            canMoveHeroImage = true;
          });
        } else if (canOpen) {
          // stack is closed
          canMoveHeroImage = false;
          classie_default.a.add(bodyEl, 'view-full');
          setTimeout(function () {
            classie_default.a.add(bodyEl, 'move-items');
          }, 25);
          bodyEl.style.height = stack.offsetHeight + 'px';
          flkty.unbindDrag();
          flkty.options.accessibility = false;
        }
      } else if (classie_default.a.has(stack, 'stack-prev')) {
        flkty.previous(true);
      } else if (classie_default.a.has(stack, 'stack-next')) {
        flkty.next(true);
      }
    });
    titleEl.addEventListener('mouseenter', function (ev) {
      if (classie_default.a.has(stack, 'is-selected')) {
        canMoveHeroImage = false;
        imghero.style.WebkitTransform = 'perspective(1000px) translate3d(0,0,0) rotate3d(1,1,1,0deg)';
        imghero.style.transform = 'perspective(1000px) translate3d(0,0,0) rotate3d(1,1,1,0deg)';
      }
    });
    titleEl.addEventListener('mouseleave', function (ev) {
      if (classie_default.a.has(stack, 'is-selected') && !classie_default.a.has(bodyEl, 'view-full')) {
        canMoveHeroImage = true;
      }
    });
  });
  window.addEventListener('mousemove', throttle(function (ev) {
    if (!canMoveHeroImage) return false;
    var xVal = -1 / (win.height / 2) * ev.clientY + 1,
        yVal = 1 / (win.width / 2) * ev.clientX - 1,
        transX = 20 / win.width * ev.clientX - 10,
        transY = 20 / win.height * ev.clientY - 10,
        transZ = 100 / win.height * ev.clientY - 50;
    imghero.style.WebkitTransform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
    imghero.style.transform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
  }, 100)); // window resize

  window.addEventListener('resize', throttle(function (ev) {
    // recalculate window width/height
    win = {
      width: window.innerWidth,
      height: window.innerHeight
    }; // reset body height if stack is opened

    if (classie_default.a.has(bodyEl, 'view-full')) {
      // stack is opened
      bodyEl.style.height = stacks[flkty.selectedIndex].offsetHeight + 'px';
    }
  }, 50)); // Flickity events:

  flkty.on('select', function () {
    console.info('Flickity select');
    classie_default.a.remove(bodyEl, 'item-clickable');
    var prevStack = stacksWrapper.querySelector('.stack-prev'),
        nextStack = stacksWrapper.querySelector('.stack-next'),
        selidx = flkty.selectedIndex,
        cellsCount = flkty.cells.length,
        previdx = selidx > 0 ? selidx - 1 : cellsCount - 1,
        nextidx = selidx < cellsCount - 1 ? selidx + 1 : 0;

    if (prevStack) {
      classie_default.a.remove(prevStack, 'stack-prev');
    }

    if (nextStack) {
      classie_default.a.remove(nextStack, 'stack-next');
    }

    classie_default.a.add(stacks[previdx], 'stack-prev');
    classie_default.a.add(stacks[nextidx], 'stack-next');
  });
  flkty.on('dragStart', function () {
    canOpen = false;
    classie_default.a.remove(bodyEl, 'item-clickable');
  });
  flkty.on('settle', function () {
    classie_default.a.add(bodyEl, 'item-clickable');
    canOpen = true;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  init();
}, false);
// EXTERNAL MODULE: ./node_modules/vanilla-lazyload/dist/lazyload.min.js
var lazyload_min = __webpack_require__(42);
var lazyload_min_default = /*#__PURE__*/__webpack_require__.n(lazyload_min);

// CONCATENATED MODULE: ./src/scripts/lozad.js

var lazyLoadInstance = new lazyload_min_default.a({
  elements_selector: ".lozad",
  container: document.querySelector('.stack.is-selected')
});
// CONCATENATED MODULE: ./src/scripts/index.js




/***/ })

/******/ });
//# sourceMappingURL=app.7c09a46a.js.map