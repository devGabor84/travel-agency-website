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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n///////////an object that contains the selected elements from html\n\nvar elements = exports.elements = {\n  holidaysContainer: document.querySelector(\".holidays__hotel-list\"),\n  sortControlBtns: document.querySelectorAll(\".sort-control__item\"),\n  airportBtns: document.querySelectorAll(\"input\"),\n  filterBtn: document.querySelector(\".btn-filter\"),\n  dateInputs: document.querySelectorAll(\"option\")\n};\n\n//# sourceURL=webpack:///./src/base.js?");

/***/ }),

/***/ "./src/formControlView.js":
/*!********************************!*\
  !*** ./src/formControlView.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getDate = exports.getAirport = undefined;\n\nvar _base = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\nvar getAirport = exports.getAirport = function getAirport() {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = _base.elements.airportBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var btn = _step.value;\n\n      if (btn.checked) {\n        return btn.value;\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\nvar getDate = exports.getDate = function getDate() {\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = _base.elements.dateInputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var date = _step2.value;\n\n      if (date.selected) {\n        return date.value;\n      }\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2.return) {\n        _iterator2.return();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/formControlView.js?");

/***/ }),

/***/ "./src/holidayView.js":
/*!****************************!*\
  !*** ./src/holidayView.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.renderHolidays = undefined;\n\nvar _base = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\n/////////function that clears the UI\n\nvar clearHolidaysContainer = function clearHolidaysContainer() {\n  _base.elements.holidaysContainer.innerHTML = \"\";\n};\n\n/////////function that renders the template with dynamic data and adds it to html afterwards\n\nvar renderHoliday = function renderHoliday(holiday) {\n  var ratingTemplate = \"<svg class=\\\"hotel-view__rating\\\">\\n  <use xLink:href=\\\"./assets/sprite.svg#icon-star\\\"></use>\\n</svg>\";\n\n  var infantTemplate = \"&\\n  <span class=\\\"text-highlighted\\\">\" + holiday.infants + \"</span> infant\";\n\n  var infants = holiday.infants > 0 ? infantTemplate : \"\";\n\n  var rating = [];\n  var ratingValue = holiday.ratingValue;\n\n  for (var i = 0; i < ratingValue; i++) {\n    rating.push(ratingTemplate);\n  }\n\n  var template = \"<div class=\\\"hotel-view\\\">\\n  <div class=\\\"hotel-view__info\\\">\\n    <h3 class=\\\"heading-xs \\\">\\n    \" + holiday.name + \" \\n    \" + rating.join(\"\") + \" \\n    </h3>\\n    <p class=\\\"text text--grey\\\">\" + holiday.location + \"</p>\\n  </div>\\n\\n  <div class=\\\"hotel-view__price\\\">\\n    <h3 class=\\\"heading-sm \\\">\" + holiday.price + \"</h3>\\n  </div>\\n\\n  <div class=\\\"hotel-view__img\\\">\\n    <img src=\\\"\" + holiday.imgPath + \"\\\" alt=\\\"\" + holiday.name + \"\\\"  />\\n    <div class=\\\"hotel-view__details\\\">\\n      <p class=\\\"text text--light text--small\\\">\\n          Lorem ipsum, dolor sit amet \\n          consectetur adipisicing elit. Veniam, itaque. Fugiat minima sequi mollitia \\n          numquam iusto hic odio aliquam repellat.\\n      </p>\\n      </div>\\n  </div>\\n\\n<div class=\\\"hotel-view__description\\\">\\n  <p class=\\\"hotel-view__description__header text--small\\\">\\n    <span class=\\\"text-highlighted\\\">\" + holiday.startDate + \"</span> for\\n    <span class=\\\"text-highlighted\\\">\" + holiday.duration + \"</span> nights from\\n    <span class=\\\"text-highlighted\\\">\" + holiday.airport + \"</span>,\\n    <span class=\\\"text-highlighted\\\">\" + holiday.adults + \"</span>, Adults,\\n    <span class=\\\"text-highlighted\\\">\" + holiday.children + \"</span>, \" + (holiday.children > 1 ? \"children\" : \"child\") + \" \" + infants + \"\\n  </p>\\n  <button class=\\\"btn btn--green\\\">Book Now</button>\\n</div>\\n</div>\";\n\n  _base.elements.holidaysContainer.insertAdjacentHTML(\"beforeend\", template);\n};\n\n/////////function that receives an array of objects, loops through them and runs the renderHoliday function on each\n\nvar renderHolidays = exports.renderHolidays = function renderHolidays(holidays) {\n  //1. clear the current UI\n  clearHolidaysContainer();\n\n  //2. render the holidays\n  holidays.forEach(renderHoliday);\n};\n\n//# sourceURL=webpack:///./src/holidayView.js?");

/***/ }),

/***/ "./src/holidaysModel.js":
/*!******************************!*\
  !*** ./src/holidaysModel.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar holidays = exports.holidays = [{\n    name: \"Adeje Hotel\",\n    location: \"Costa Adeje, Tenerife\",\n    ratingValue: 5,\n    price: \"£1,135.50\",\n    priceValue: 1135.6,\n    imgPath: \"./assets/hotel1.jpeg\",\n    startDate: \"3 July 2019\",\n    date: \"july\",\n    duration: 7,\n    airport: \"East Midlands\",\n    airportCheck: \"midlands\",\n    adults: 2,\n    children: 2,\n\n    infants: 1,\n    description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores dolores quo animi labore aliquam dolore fuga iusto, deserunt repudiandae quaerat quidem praesentium veritatis aliquid non similique? Labore, quam fugit! Excepturi debitis quia sequi quidem quasi veritatis quaerat sint fugiat!\"\n}, {\n    name: \"Aguamarina Hotel\",\n    location: \"Costa Adeje, Tenerife\",\n    ratingValue: 4,\n    price: \"£499.99\",\n    priceValue: 499.99,\n    imgPath: \"./assets/hotel2.jpeg\",\n    startDate: \"5 May 2019\",\n    date: \"may\",\n    duration: 7,\n    airport: \"East Midlands\",\n    airportCheck: \"midlands\",\n    adults: 2,\n    children: 2,\n\n    infants: 0,\n    description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores dolores quo animi labore aliquam dolore fuga iusto, deserunt repudiandae quaerat quidem praesentium veritatis aliquid non similique? Labore, quam fugit! Excepturi debitis quia sequi quidem quasi veritatis quaerat sint fugiat!\"\n}, {\n    name: \"Perada Hotel\",\n    location: \"Costa Brava, Spain\",\n    ratingValue: 3,\n    price: \"£510.70\",\n    priceValue: 510.7,\n    imgPath: \"./assets/hotel3.jpeg\",\n    startDate: \"12 July 2019\",\n    date: \"july\",\n    duration: 7,\n    airport: \"Manchester\",\n    airportCheck: \"manchester\",\n    adults: 2,\n    children: 1,\n\n    infants: 0,\n    description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores dolores quo animi labore aliquam dolore fuga iusto, deserunt repudiandae quaerat quidem praesentium veritatis aliquid non similique? Labore, quam fugit! Excepturi debitis quia sequi quidem quasi veritatis quaerat sint fugiat!\"\n}, {\n    name: \"Laguna Park II\",\n    location: \"Costa Adeje, Tenerife\",\n    ratingValue: 5,\n    price: \"£966.80\",\n    priceValue: 966.8,\n    imgPath: \"./assets/hotel4.jpeg\",\n    startDate: \"18 May 2019\",\n    date: \"may\",\n    duration: 7,\n    airport: \"Liverpool\",\n    airportCheck: \"liverpool\",\n    adults: 2,\n    children: 2,\n\n    infants: 0,\n    description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores dolores quo animi labore aliquam dolore fuga iusto, deserunt repudiandae quaerat quidem praesentium veritatis aliquid non similique? Labore, quam fugit! Excepturi debitis quia sequi quidem quasi veritatis quaerat sint fugiat!\"\n}, {\n    name: \"Holiday Resort\",\n    location: \"Kandooma, Maldives\",\n    ratingValue: 3,\n    price: \"£1,205.80\",\n    priceValue: 1205.8,\n    imgPath: \"./assets/hotel5.jpeg\",\n    startDate: \"21 July 2019\",\n    date: \"july\",\n    duration: 7,\n    airport: \"Manchester\",\n    airportCheck: \"manchester\",\n    adults: 2,\n    children: 1,\n\n    infants: 0,\n    description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores dolores quo animi labore aliquam dolore fuga iusto, deserunt repudiandae quaerat quidem praesentium veritatis aliquid non similique? Labore, quam fugit! Excepturi debitis quia sequi quidem quasi veritatis quaerat sint fugiat!\"\n}, {\n    name: \"Resort Valle\",\n    location: \"Villasimius, Sardinia\",\n    ratingValue: 4,\n    price: \"£1,155.80\",\n    priceValue: 696.8,\n    imgPath: \"./assets/hotel6.jpeg\",\n    startDate: \"27 May 2019\",\n    date: \"may\",\n    duration: 7,\n    airport: \"Liverpool\",\n    airportCheck: \"liverpool\",\n    adults: 2,\n    children: 2,\n\n    infants: 1,\n    description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores dolores quo animi labore aliquam dolore fuga iusto, deserunt repudiandae quaerat quidem praesentium veritatis aliquid non similique? Labore, quam fugit! Excepturi debitis quia sequi quidem quasi veritatis quaerat sint fugiat!\"\n}];\n\n//# sourceURL=webpack:///./src/holidaysModel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n\nvar _holidaysModel = __webpack_require__(/*! ./holidaysModel */ \"./src/holidaysModel.js\");\n\nvar model = _interopRequireWildcard(_holidaysModel);\n\nvar _holidayView = __webpack_require__(/*! ./holidayView */ \"./src/holidayView.js\");\n\nvar holidayView = _interopRequireWildcard(_holidayView);\n\nvar _formControlView = __webpack_require__(/*! ./formControlView */ \"./src/formControlView.js\");\n\nvar formControlView = _interopRequireWildcard(_formControlView);\n\nvar _base = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n////////global app state, it contains the currently rendered holidays in the view and wether they are sorted or not\n\n///////////////////////////////////////\n///////////CONTROLLER\nvar state = {\n  sortedByPrice: false,\n  sortedByName: false,\n  sortedByRating: false\n};\n\n////////function that sets the holidays to be rendered first time\n\nvar setInitialState = function setInitialState() {\n  state.holidays = model.holidays;\n};\n\n////////function that calls the render method of the view\n\nvar updateView = function updateView() {\n  holidayView.renderHolidays(state.holidays);\n};\n\n////////sort functions, sorts the currently displayed holidays\n\nvar sortByName = function sortByName() {\n  if (state.sortedByName) {\n    state.holidays.reverse();\n  } else {\n    state.sortedByName = true;\n    state.sortedByPrice = false;\n    state.sortedByValue = false;\n    return state.holidays.sort(function (a, b) {\n      return a[\"name\"].localeCompare(b[\"name\"]);\n    });\n  }\n};\n\nvar sortByPrice = function sortByPrice() {\n  if (state.sortedByPrice) {\n    state.holidays.reverse();\n  } else {\n    state.sortedByPrice = true;\n    state.sortedByName = false;\n    state.sortedByRating = false;\n    return state.holidays.sort(function (a, b) {\n      return a[\"priceValue\"] - b[\"priceValue\"];\n    });\n  }\n};\n\nvar sortByRating = function sortByRating() {\n  if (state.sortedByRating) {\n    state.holidays.reverse();\n  } else {\n    state.sortedByPrice = false;\n    state.sortedByName = false;\n    state.sortedByRating = true;\n    return state.holidays.sort(function (a, b) {\n      return a[\"ratingValue\"] - b[\"ratingValue\"];\n    });\n  }\n};\n\nvar sortControl = function sortControl(type) {\n  if (type === \"name\") {\n    sortByName();\n  } else if (type === \"rating\") {\n    sortByRating();\n  } else {\n    sortByPrice();\n  }\n\n  updateView();\n};\n\n////////filter functions, it filters the holidays in the model by the value provided as function parameter, and sets it to the state to be be rendered\n\nvar filterByDate = function filterByDate(inputValue) {\n  state.holidays = model.holidays.filter(function (holiday) {\n    return holiday.date === inputValue;\n  });\n};\n\nvar filterByAirport = function filterByAirport(inputValue) {\n  state.holidays = model.holidays.filter(function (holiday) {\n    return holiday.airportCheck === inputValue;\n  });\n};\n\nvar filterByAll = function filterByAll(inputValueAirport, inputValueDate) {\n  state.holidays = model.holidays.filter(function (holiday) {\n    return holiday.airportCheck === inputValueAirport && holiday.date === inputValueDate;\n  });\n};\n\nvar filterControl = function filterControl() {\n  //1. get the input value from the view\n  var airport = formControlView.getAirport();\n  var date = formControlView.getDate();\n\n  //2. decide which filter function to be called\n  if (airport !== \"all\" && date === \"all\") {\n    filterByAirport(airport);\n  } else if (date !== \"all\" && airport === \"all\") {\n    filterByDate(date);\n  } else if (airport && date !== \"all\") {\n    filterByAll(airport, date);\n  } else if (airport && date === \"all\") {\n    setInitialState();\n  }\n\n  //3. sort the filtered holidays by price as default\n  sortControl();\n};\n\n///////////function adds event listeners to the sort buttons\n\nvar addEvListeners = function addEvListeners() {\n  _base.elements.sortControlBtns.forEach(function (sortBtn) {\n    sortBtn.addEventListener(\"click\", function (e) {\n      var btn = e.target.closest(\".sort-control__item\");\n      sortControl(btn.dataset.type);\n    });\n  });\n\n  _base.elements.filterBtn.addEventListener(\"click\", function () {\n    filterControl();\n  });\n};\n\n///////////initialising the app\n\nvar init = function init() {\n  setInitialState();\n  sortControl();\n  addEvListeners();\n};\n\n///////////initialising the app\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });