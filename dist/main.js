"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
}

:root{
  --title-bg-color: 71, 33, 85;
  --sideboard-bg-color: 137, 93, 148;

  --pastel-green: 169, 215, 133;
  --pastel-blue: 109, 194, 240;
  --pastel-red: 227, 130, 130;
  --pastel-yellow: 209, 176, 91;
}

body {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template: max-content max-content 1fr / 5fr 1fr;
}

/* Header */

h1 {
  text-align: center;
  font-size: 2rem;
  padding: 0.5rem;
  background-color: rgb(var(--title-bg-color));
  color: white;
  grid-column: 1 / 3;
}

/* Nav */

nav {
  display: flex;
  padding: 0.5rem 2rem 0.5rem 4rem;
  gap: 2rem;
  background-color: black;
  color: white;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
}

nav > ul:last-child {
  margin-left: auto;
  gap: 2rem;
  width: 50%;
}

/* Sideboard */

.sideboard {
  padding: 2rem;
  grid-column: 2 / -1;
  grid-row: 2 / 4;
  text-align: center;
  display: grid;
  background-color: rgb(var(--sideboard-bg-color));
}

.sideboard h2 {
  color: white;
}

/* Main */

.main {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(25%,1fr));
  grid-auto-columns: repeat(auto-fit, minmax(25%,1fr));
  grid-auto-rows: minmax(50%,1fr);
  text-align: center;
  background-color: rgb(var(--sideboard-bg-color),0.5);

}

.main > div:nth-child(1) {
  background-color: rgb(var(--pastel-green));
}

.main > div:nth-child(2) {
  background-color: rgb(var(--pastel-red));
}

.main > div:nth-child(3) {
  background-color: rgb(var(--pastel-blue));
}

.main > div:nth-child(4) {
  background-color: rgb(var(--pastel-yellow));
}

.main > div:nth-child(5) {
  background-color: rgb(var(--pastel-green));
}

.main > div:nth-child(6) {
  background-color: rgb(var(--pastel-red));
}

.main > div:nth-child(7) {
  background-color: rgb(var(--pastel-blue));
}

.main > div:nth-child(8) {
  background-color: rgb(var(--pastel-yellow));
}

/* Pop-Ups c: */

.popup-task, .popup-project {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}

form {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem 1rem;
  text-align: left;
  font-size: 1.5rem;
  background-color: rgb(var(--sideboard-bg-color));
  padding: 1.5rem;
  border-radius: 2rem;
  border: 1rem solid rgb(var(--title-bg-color));
  color: white;
}

form h2 {
  grid-column: 1 / -1;
  text-align: center;
}

form input[type="text"]:nth-of-type(2) {
  height: 6rem;
}

form button {
  grid-column: 2 / -1;
  font-size: 1.2rem;
  border-radius: 1rem 0.5rem;
  padding: 0.2rem;
  width: 50%;
  justify-self: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,4BAA4B;EAC5B,kCAAkC;;EAElC,6BAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;EAC3B,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,oDAAoD;AACtD;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,4CAA4C;EAC5C,YAAY;EACZ,kBAAkB;AACpB;;AAEA,QAAQ;;AAER;EACE,aAAa;EACb,gCAAgC;EAChC,SAAS;EACT,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,SAAS;EACT,UAAU;AACZ;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,gDAAgD;AAClD;;AAEA;EACE,YAAY;AACd;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,mBAAmB;EACnB,wDAAwD;EACxD,oDAAoD;EACpD,+BAA+B;EAC/B,kBAAkB;EAClB,oDAAoD;;AAEtD;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA,eAAe;;AAEf;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,gDAAgD;EAChD,eAAe;EACf,mBAAmB;EACnB,6CAA6C;EAC7C,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;EACf,UAAU;EACV,oBAAoB;AACtB","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root{\r\n  --title-bg-color: 71, 33, 85;\r\n  --sideboard-bg-color: 137, 93, 148;\r\n\r\n  --pastel-green: 169, 215, 133;\r\n  --pastel-blue: 109, 194, 240;\r\n  --pastel-red: 227, 130, 130;\r\n  --pastel-yellow: 209, 176, 91;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template: max-content max-content 1fr / 5fr 1fr;\r\n}\r\n\r\n/* Header */\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  padding: 0.5rem;\r\n  background-color: rgb(var(--title-bg-color));\r\n  color: white;\r\n  grid-column: 1 / 3;\r\n}\r\n\r\n/* Nav */\r\n\r\nnav {\r\n  display: flex;\r\n  padding: 0.5rem 2rem 0.5rem 4rem;\r\n  gap: 2rem;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 1rem;\r\n}\r\n\r\nnav > ul:last-child {\r\n  margin-left: auto;\r\n  gap: 2rem;\r\n  width: 50%;\r\n}\r\n\r\n/* Sideboard */\r\n\r\n.sideboard {\r\n  padding: 2rem;\r\n  grid-column: 2 / -1;\r\n  grid-row: 2 / 4;\r\n  text-align: center;\r\n  display: grid;\r\n  background-color: rgb(var(--sideboard-bg-color));\r\n}\r\n\r\n.sideboard h2 {\r\n  color: white;\r\n}\r\n\r\n/* Main */\r\n\r\n.main {\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n  grid-template-columns: repeat(auto-fit, minmax(25%,1fr));\r\n  grid-auto-columns: repeat(auto-fit, minmax(25%,1fr));\r\n  grid-auto-rows: minmax(50%,1fr);\r\n  text-align: center;\r\n  background-color: rgb(var(--sideboard-bg-color),0.5);\r\n\r\n}\r\n\r\n.main > div:nth-child(1) {\r\n  background-color: rgb(var(--pastel-green));\r\n}\r\n\r\n.main > div:nth-child(2) {\r\n  background-color: rgb(var(--pastel-red));\r\n}\r\n\r\n.main > div:nth-child(3) {\r\n  background-color: rgb(var(--pastel-blue));\r\n}\r\n\r\n.main > div:nth-child(4) {\r\n  background-color: rgb(var(--pastel-yellow));\r\n}\r\n\r\n.main > div:nth-child(5) {\r\n  background-color: rgb(var(--pastel-green));\r\n}\r\n\r\n.main > div:nth-child(6) {\r\n  background-color: rgb(var(--pastel-red));\r\n}\r\n\r\n.main > div:nth-child(7) {\r\n  background-color: rgb(var(--pastel-blue));\r\n}\r\n\r\n.main > div:nth-child(8) {\r\n  background-color: rgb(var(--pastel-yellow));\r\n}\r\n\r\n/* Pop-Ups c: */\r\n\r\n.popup-task, .popup-project {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  visibility: hidden;\r\n}\r\n\r\nform {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  gap: 2rem 1rem;\r\n  text-align: left;\r\n  font-size: 1.5rem;\r\n  background-color: rgb(var(--sideboard-bg-color));\r\n  padding: 1.5rem;\r\n  border-radius: 2rem;\r\n  border: 1rem solid rgb(var(--title-bg-color));\r\n  color: white;\r\n}\r\n\r\nform h2 {\r\n  grid-column: 1 / -1;\r\n  text-align: center;\r\n}\r\n\r\nform input[type=\"text\"]:nth-of-type(2) {\r\n  height: 6rem;\r\n}\r\n\r\nform button {\r\n  grid-column: 2 / -1;\r\n  font-size: 1.2rem;\r\n  border-radius: 1rem 0.5rem;\r\n  padding: 0.2rem;\r\n  width: 50%;\r\n  justify-self: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _taskDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDOM */ "./src/taskDOM.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup */ "./src/popup.js");







// let btnSubmitTask = document.querySelector("form button");
let btnSubmitProject = document.querySelector("form:last-of-type button");


// btnSubmitTask.addEventListener("click", (e) => {
//   document.body.appendChild(createTask(getTask()));
// })
(0,_popup__WEBPACK_IMPORTED_MODULE_5__.popUpProject)();
btnSubmitProject.addEventListener("click", () => {
  if(document.querySelector("form").checkValidity()){
    (0,_projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
});

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popUpProject: () => (/* binding */ popUpProject)
/* harmony export */ });
function popUpProject(){

  //Trigger pop-up form for project
  let newProject = document.querySelector("nav button");
  newProject.addEventListener("click", () => {
    document.querySelector(".popup-project").style.visibility = "visible";
  })
  
  //Close pop-up form when clicked away from pop-up form
  document.querySelector(".popup-project").addEventListener("click", () => {
    document.querySelector(".popup-project").style.visibility = "hidden";
  })
  
  document.querySelector("form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
}

// export function popUpTask(){

//   //Trigger pop-up form for project
//   let newProject = document.querySelector("nav button");
//   newProject.addEventListener("click", () => {
//     document.querySelector(".pop-up").style.visibility = "visible";
//   })
  
//   //Close pop-up form when clicked away from pop-up form
//   document.querySelector(".pop-up").addEventListener("click", () => {
//     document.querySelector(".pop-up").style.visibility = "hidden";
//   })
  
//   document.querySelector("form").addEventListener("click", (e) => {
//     e.stopPropagation();
//   });
  
// }

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });
function project(name, desc, deadline){
  //Order: Priority-Ordered, Deadline Ordered, Date-Added Ordered 
  let order = "date";

  let getName = () => name;
  let getDesc = () => desc;
  let getDeadline = () => deadline;
  let getOrder = () => order;

  let setName = newName => {name = newName}
  let setDesc = newDesc => {name = newDesc}
  let setDeadline = newDeadline => {name = newDeadline}
  let setOrder = (newOrder) => {order = newOrder}

  let tasks = [];
  let getTasks = () => tasks;

  return {getName, getDesc, getDeadline, getTasks, getOrder, setName, setDesc, setDeadline, setOrder}
}


/***/ }),

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   "default": () => (/* binding */ addProject),
/* harmony export */   getProject: () => (/* binding */ getProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


function createProject(newproject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)("","", new Date())){
  let projectNode = document.createElement("div");
  projectNode.classList.add("project");

  let projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");

  let projectName = document.createElement("h4");
  projectName.textContent = newproject.getName();

  let projectDesc = document.createElement("p");
  projectDesc.textContent = newproject.getDesc();

  let projectDeadline = document.createElement("input");
  projectDeadline.type = 'date';
  projectDeadline.value = newproject.getDeadline();

  projectHeader.appendChild(projectName);
  projectHeader.appendChild(projectDeadline);
  projectHeader.appendChild(projectDesc);
  projectNode.appendChild(projectHeader);
  return projectNode;
}

function getProject(){
  let projectName = document.querySelector("#projectName").value;
  let projectDesc = document.querySelector("#projectDesc").value;
  let projectDate = document.querySelector("#projectDate").value;

  return (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(projectName,projectDesc,projectDate);
}

function addProject(){
  let projectsMain = document.querySelector(".main");
  let numProjects = document.querySelectorAll(".main > div");

  if(numProjects.length < 4){
      projectsMain.appendChild(createProject(getProject()));
  }

  document.querySelector(".pop-up").style.visibility = "hidden";
}

let projectX = document.querySelector(".main div:last-child")
projectX.addEventListener("dblclick", () => {
  document.querySelector("popup-task").style.visibility = "visible";
});

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subtask: () => (/* binding */ subtask),
/* harmony export */   task: () => (/* binding */ task)
/* harmony export */ });
function task(name,desc,deadline,priority){
  
  let dateAdded = new Date();
  
  //Types: None, Ordered, Unordered. 
  //Only applicable if there are subtasks.
  let type = 'none';

  let getName = () => name;
  let getDesc = () => desc;
  let getDeadline = () => deadline;
  let getPriority = () => priority;
  let getDate = () => dateAdded;
  let getType = () => type;

  let setName = newName => {name = newName}
  let setDesc = newDesc => {name = newDesc}
  let setDeadline = newDeadline => {name = newDeadline}
  let setPriority = newPriority => {priority = newPriority}
  let setType = (newType) => {type = newType}

  let subtasks = [];
  let getSubtasks = () => subtasks;
  return {getName, getDesc, getDeadline, getPriority, getDate, getSubtasks, getType, setName, setDesc, setDeadline, setPriority, setType}
}


function subtask(name){
  let getName = () => name;
  let setName = (newName) => {name = newName}

  return {getName, setName}
}

/***/ }),

/***/ "./src/taskDOM.js":
/*!************************!*\
  !*** ./src/taskDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   getTask: () => (/* binding */ getTask)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


function createTask(newTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)("","", new Date(),"Normal")){
  let taskNode = document.createElement("div");
  taskNode.classList.add("task");

  let taskName = document.createElement("h4");
  taskName.textContent = newTask.getName();

  let taskDesc = document.createElement("p");
  taskDesc.textContent = newTask.getDesc();

  let taskDeadline = document.createElement("input");
  taskDeadline.type = 'date';
  taskDeadline.value = newTask.getDeadline();

  let taskPriority = document.createElement("div");
  taskPriority.textContent = newTask.getPriority();

  taskNode.appendChild(taskName);
  taskNode.appendChild(taskDesc);
  taskNode.appendChild(taskDeadline);
  taskNode.appendChild(taskPriority);
  return taskNode;
}

function getTask(){
  let taskName = document.querySelector("#taskName").value;
  let taskDesc = document.querySelector("#taskDesc").value;
  let taskDate = document.querySelector("#taskDate").value;
  let taskPriority = document.querySelector("#taskPriority").value;

  return (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)(taskName,taskDesc,taskDate,taskPriority);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNoQjtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hETTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEN3QztBQUN4QztBQUNPLDhCQUE4Qiw4Q0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw4Q0FBSTtBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuOnJvb3R7XHJcbiAgLS10aXRsZS1iZy1jb2xvcjogNzEsIDMzLCA4NTtcclxuICAtLXNpZGVib2FyZC1iZy1jb2xvcjogMTM3LCA5MywgMTQ4O1xyXG5cclxuICAtLXBhc3RlbC1ncmVlbjogMTY5LCAyMTUsIDEzMztcclxuICAtLXBhc3RlbC1ibHVlOiAxMDksIDE5NCwgMjQwO1xyXG4gIC0tcGFzdGVsLXJlZDogMjI3LCAxMzAsIDEzMDtcclxuICAtLXBhc3RlbC15ZWxsb3c6IDIwOSwgMTc2LCA5MTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnIgLyA1ZnIgMWZyO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tdGl0bGUtYmctY29sb3IpKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG59XHJcblxyXG4vKiBOYXYgKi9cclxuXHJcbm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gNHJlbTtcclxuICBnYXA6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5uYXYgPiB1bDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBnYXA6IDJyZW07XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogU2lkZWJvYXJkICovXHJcblxyXG4uc2lkZWJvYXJkIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XHJcbiAgZ3JpZC1yb3c6IDIgLyA0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpKTtcclxufVxyXG5cclxuLnNpZGVib2FyZCBoMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBNYWluICovXHJcblxyXG4ubWFpbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUlLDFmcikpO1xyXG4gIGdyaWQtYXV0by1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNSUsMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MCUsMWZyKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXNpZGVib2FyZC1iZy1jb2xvciksMC41KTtcclxuXHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ncmVlbikpO1xyXG59XHJcblxyXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1wYXN0ZWwtcmVkKSk7XHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ibHVlKSk7XHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC15ZWxsb3cpKTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWdyZWVuKSk7XHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1yZWQpKTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWJsdWUpKTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXllbGxvdykpO1xyXG59XHJcblxyXG4vKiBQb3AtVXBzIGM6ICovXHJcblxyXG4ucG9wdXAtdGFzaywgLnBvcHVwLXByb2plY3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICBnYXA6IDJyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpKTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBib3JkZXI6IDFyZW0gc29saWQgcmdiKHZhcigtLXRpdGxlLWJnLWNvbG9yKSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5mb3JtIGgyIHtcclxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG59XHJcblxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtIDAuNXJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgd2lkdGg6IDUwJTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtDQUFrQzs7RUFFbEMsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0RBQW9EO0FBQ3REOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSxRQUFROztBQUVSO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsb0RBQW9EO0VBQ3BELCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsb0RBQW9EOztBQUV0RDs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0RBQWdEO0VBQ2hELGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgLS10aXRsZS1iZy1jb2xvcjogNzEsIDMzLCA4NTtcXHJcXG4gIC0tc2lkZWJvYXJkLWJnLWNvbG9yOiAxMzcsIDkzLCAxNDg7XFxyXFxuXFxyXFxuICAtLXBhc3RlbC1ncmVlbjogMTY5LCAyMTUsIDEzMztcXHJcXG4gIC0tcGFzdGVsLWJsdWU6IDEwOSwgMTk0LCAyNDA7XFxyXFxuICAtLXBhc3RlbC1yZWQ6IDIyNywgMTMwLCAxMzA7XFxyXFxuICAtLXBhc3RlbC15ZWxsb3c6IDIwOSwgMTc2LCA5MTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IG1heC1jb250ZW50IDFmciAvIDVmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS10aXRsZS1iZy1jb2xvcikpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXYgKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtIDAuNXJlbSA0cmVtO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gdWw6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi8qIFNpZGVib2FyZCAqL1xcclxcblxcclxcbi5zaWRlYm9hcmQge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxyXFxuICBncmlkLXJvdzogMiAvIDQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXNpZGVib2FyZC1iZy1jb2xvcikpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJvYXJkIGgyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiAqL1xcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNSUsMWZyKSk7XFxyXFxuICBncmlkLWF1dG8tY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUlLDFmcikpO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MCUsMWZyKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpLDAuNSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWdyZWVuKSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXJlZCkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ibHVlKSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCg0KSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXllbGxvdykpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoNSkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ncmVlbikpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoNikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1yZWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDcpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1wYXN0ZWwtYmx1ZSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoOCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC15ZWxsb3cpKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9wLVVwcyBjOiAqL1xcclxcblxcclxcbi5wb3B1cC10YXNrLCAucG9wdXAtcHJvamVjdCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICBnYXA6IDJyZW0gMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpKTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBib3JkZXI6IDFyZW0gc29saWQgcmdiKHZhcigtLXRpdGxlLWJnLWNvbG9yKSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaDIge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06bnRoLW9mLXR5cGUoMikge1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtIDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHt0YXNrLCBzdWJUYXNrfSBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrLCBnZXRUYXNrIH0gZnJvbSAnLi90YXNrRE9NJztcclxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XHJcbmltcG9ydCBhZGRQcm9qZWN0IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCB7IHBvcFVwUHJvamVjdCB9IGZyb20gJy4vcG9wdXAnO1xyXG5cclxuLy8gbGV0IGJ0blN1Ym1pdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBidXR0b25cIik7XHJcbmxldCBidG5TdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm06bGFzdC1vZi10eXBlIGJ1dHRvblwiKTtcclxuXHJcblxyXG4vLyBidG5TdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlVGFzayhnZXRUYXNrKCkpKTtcclxuLy8gfSlcclxucG9wVXBQcm9qZWN0KCk7XHJcbmJ0blN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgYWRkUHJvamVjdCgpO1xyXG4gIH1cclxufSk7IiwiZXhwb3J0IGZ1bmN0aW9uIHBvcFVwUHJvamVjdCgpe1xyXG5cclxuICAvL1RyaWdnZXIgcG9wLXVwIGZvcm0gZm9yIHByb2plY3RcclxuICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgYnV0dG9uXCIpO1xyXG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtcHJvamVjdFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgfSlcclxuICBcclxuICAvL0Nsb3NlIHBvcC11cCBmb3JtIHdoZW4gY2xpY2tlZCBhd2F5IGZyb20gcG9wLXVwIGZvcm1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLXByb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtcHJvamVjdFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICB9KVxyXG4gIFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuICBcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBvcFVwVGFzaygpe1xyXG5cclxuLy8gICAvL1RyaWdnZXIgcG9wLXVwIGZvcm0gZm9yIHByb2plY3RcclxuLy8gICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgYnV0dG9uXCIpO1xyXG4vLyAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuLy8gICB9KVxyXG4gIFxyXG4vLyAgIC8vQ2xvc2UgcG9wLXVwIGZvcm0gd2hlbiBjbGlja2VkIGF3YXkgZnJvbSBwb3AtdXAgZm9ybVxyXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuLy8gICB9KVxyXG4gIFxyXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuLy8gICB9KTtcclxuICBcclxuLy8gfSIsImV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KG5hbWUsIGRlc2MsIGRlYWRsaW5lKXtcclxuICAvL09yZGVyOiBQcmlvcml0eS1PcmRlcmVkLCBEZWFkbGluZSBPcmRlcmVkLCBEYXRlLUFkZGVkIE9yZGVyZWQgXHJcbiAgbGV0IG9yZGVyID0gXCJkYXRlXCI7XHJcblxyXG4gIGxldCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICBsZXQgZ2V0RGVzYyA9ICgpID0+IGRlc2M7XHJcbiAgbGV0IGdldERlYWRsaW5lID0gKCkgPT4gZGVhZGxpbmU7XHJcbiAgbGV0IGdldE9yZGVyID0gKCkgPT4gb3JkZXI7XHJcblxyXG4gIGxldCBzZXROYW1lID0gbmV3TmFtZSA9PiB7bmFtZSA9IG5ld05hbWV9XHJcbiAgbGV0IHNldERlc2MgPSBuZXdEZXNjID0+IHtuYW1lID0gbmV3RGVzY31cclxuICBsZXQgc2V0RGVhZGxpbmUgPSBuZXdEZWFkbGluZSA9PiB7bmFtZSA9IG5ld0RlYWRsaW5lfVxyXG4gIGxldCBzZXRPcmRlciA9IChuZXdPcmRlcikgPT4ge29yZGVyID0gbmV3T3JkZXJ9XHJcblxyXG4gIGxldCB0YXNrcyA9IFtdO1xyXG4gIGxldCBnZXRUYXNrcyA9ICgpID0+IHRhc2tzO1xyXG5cclxuICByZXR1cm4ge2dldE5hbWUsIGdldERlc2MsIGdldERlYWRsaW5lLCBnZXRUYXNrcywgZ2V0T3JkZXIsIHNldE5hbWUsIHNldERlc2MsIHNldERlYWRsaW5lLCBzZXRPcmRlcn1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmV3cHJvamVjdCA9IHByb2plY3QoXCJcIixcIlwiLCBuZXcgRGF0ZSgpKSl7XHJcbiAgbGV0IHByb2plY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0Tm9kZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuXHJcbiAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xyXG5cclxuICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuZXdwcm9qZWN0LmdldE5hbWUoKTtcclxuXHJcbiAgbGV0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcHJvamVjdERlc2MudGV4dENvbnRlbnQgPSBuZXdwcm9qZWN0LmdldERlc2MoKTtcclxuXHJcbiAgbGV0IHByb2plY3REZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBwcm9qZWN0RGVhZGxpbmUudHlwZSA9ICdkYXRlJztcclxuICBwcm9qZWN0RGVhZGxpbmUudmFsdWUgPSBuZXdwcm9qZWN0LmdldERlYWRsaW5lKCk7XHJcblxyXG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlYWRsaW5lKTtcclxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjKTtcclxuICBwcm9qZWN0Tm9kZS5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICByZXR1cm4gcHJvamVjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0KCl7XHJcbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS52YWx1ZTtcclxuICBsZXQgcHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3REZXNjXCIpLnZhbHVlO1xyXG4gIGxldCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdERhdGVcIikudmFsdWU7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0KHByb2plY3ROYW1lLHByb2plY3REZXNjLHByb2plY3REYXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCgpe1xyXG4gIGxldCBwcm9qZWN0c01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgbGV0IG51bVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluID4gZGl2XCIpO1xyXG5cclxuICBpZihudW1Qcm9qZWN0cy5sZW5ndGggPCA0KXtcclxuICAgICAgcHJvamVjdHNNYWluLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoZ2V0UHJvamVjdCgpKSk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxufVxyXG5cclxubGV0IHByb2plY3RYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIGRpdjpsYXN0LWNoaWxkXCIpXHJcbnByb2plY3RYLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBvcHVwLXRhc2tcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG59KTsiLCJleHBvcnQgZnVuY3Rpb24gdGFzayhuYW1lLGRlc2MsZGVhZGxpbmUscHJpb3JpdHkpe1xyXG4gIFxyXG4gIGxldCBkYXRlQWRkZWQgPSBuZXcgRGF0ZSgpO1xyXG4gIFxyXG4gIC8vVHlwZXM6IE5vbmUsIE9yZGVyZWQsIFVub3JkZXJlZC4gXHJcbiAgLy9Pbmx5IGFwcGxpY2FibGUgaWYgdGhlcmUgYXJlIHN1YnRhc2tzLlxyXG4gIGxldCB0eXBlID0gJ25vbmUnO1xyXG5cclxuICBsZXQgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgbGV0IGdldERlc2MgPSAoKSA9PiBkZXNjO1xyXG4gIGxldCBnZXREZWFkbGluZSA9ICgpID0+IGRlYWRsaW5lO1xyXG4gIGxldCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xyXG4gIGxldCBnZXREYXRlID0gKCkgPT4gZGF0ZUFkZGVkO1xyXG4gIGxldCBnZXRUeXBlID0gKCkgPT4gdHlwZTtcclxuXHJcbiAgbGV0IHNldE5hbWUgPSBuZXdOYW1lID0+IHtuYW1lID0gbmV3TmFtZX1cclxuICBsZXQgc2V0RGVzYyA9IG5ld0Rlc2MgPT4ge25hbWUgPSBuZXdEZXNjfVxyXG4gIGxldCBzZXREZWFkbGluZSA9IG5ld0RlYWRsaW5lID0+IHtuYW1lID0gbmV3RGVhZGxpbmV9XHJcbiAgbGV0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4ge3ByaW9yaXR5ID0gbmV3UHJpb3JpdHl9XHJcbiAgbGV0IHNldFR5cGUgPSAobmV3VHlwZSkgPT4ge3R5cGUgPSBuZXdUeXBlfVxyXG5cclxuICBsZXQgc3VidGFza3MgPSBbXTtcclxuICBsZXQgZ2V0U3VidGFza3MgPSAoKSA9PiBzdWJ0YXNrcztcclxuICByZXR1cm4ge2dldE5hbWUsIGdldERlc2MsIGdldERlYWRsaW5lLCBnZXRQcmlvcml0eSwgZ2V0RGF0ZSwgZ2V0U3VidGFza3MsIGdldFR5cGUsIHNldE5hbWUsIHNldERlc2MsIHNldERlYWRsaW5lLCBzZXRQcmlvcml0eSwgc2V0VHlwZX1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJ0YXNrKG5hbWUpe1xyXG4gIGxldCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICBsZXQgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7bmFtZSA9IG5ld05hbWV9XHJcblxyXG4gIHJldHVybiB7Z2V0TmFtZSwgc2V0TmFtZX1cclxufSIsImltcG9ydCB7dGFzaywgc3ViVGFza30gZnJvbSAnLi90YXNrLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5ld1Rhc2sgPSB0YXNrKFwiXCIsXCJcIiwgbmV3IERhdGUoKSxcIk5vcm1hbFwiKSl7XHJcbiAgbGV0IHRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuXHJcbiAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID0gbmV3VGFzay5nZXROYW1lKCk7XHJcblxyXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gbmV3VGFzay5nZXREZXNjKCk7XHJcblxyXG4gIGxldCB0YXNrRGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza0RlYWRsaW5lLnR5cGUgPSAnZGF0ZSc7XHJcbiAgdGFza0RlYWRsaW5lLnZhbHVlID0gbmV3VGFzay5nZXREZWFkbGluZSgpO1xyXG5cclxuICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBuZXdUYXNrLmdldFByaW9yaXR5KCk7XHJcblxyXG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICB0YXNrTm9kZS5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XHJcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQodGFza0RlYWRsaW5lKTtcclxuICB0YXNrTm9kZS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gIHJldHVybiB0YXNrTm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2soKXtcclxuICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpLnZhbHVlO1xyXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NcIikudmFsdWU7XHJcbiAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZVwiKS52YWx1ZTtcclxuICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrUHJpb3JpdHlcIikudmFsdWU7XHJcblxyXG4gIHJldHVybiB0YXNrKHRhc2tOYW1lLHRhc2tEZXNjLHRhc2tEYXRlLHRhc2tQcmlvcml0eSk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=