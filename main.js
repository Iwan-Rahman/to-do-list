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
  gap: 0.2rem;
  background-color: rgb(var(--sideboard-bg-color));
}

.sideboard h2 {
  color: white;
}

.sideboard h4 {
  color: black;
}

.sideboard > div:last-of-type h4 {
  color: white;
}

.sideboard > div:last-of-type > div {
  margin-top: 0.5rem;
  display: grid;
  gap: 0.2rem;
  overflow-y: auto;
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

.popup {
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

/* project */
.project {
  display: grid;
  grid-template: max-content max-content / 1fr;
  padding: 0rem 1rem;
  grid-auto-rows: max-content;
  gap: 0.5rem;
}

/* Task */

.task {
  background-color: azure;
  border-radius: 1rem;
  border: 0.2rem solid rgb(var(--title-bg-color));
  display: flex;
  justify-content: space-around;
  padding: 0.2rem;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.task > p {
  overflow-wrap: break-word;
}
.task > div {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,4BAA4B;EAC5B,kCAAkC;;EAElC,6BAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;EAC3B,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,oDAAoD;AACtD;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,4CAA4C;EAC5C,YAAY;EACZ,kBAAkB;AACpB;;AAEA,QAAQ;;AAER;EACE,aAAa;EACb,gCAAgC;EAChC,SAAS;EACT,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,SAAS;EACT,UAAU;AACZ;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,gDAAgD;AAClD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,mBAAmB;EACnB,wDAAwD;EACxD,oDAAoD;EACpD,+BAA+B;EAC/B,kBAAkB;EAClB,oDAAoD;;AAEtD;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA,eAAe;;AAEf;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,gDAAgD;EAChD,eAAe;EACf,mBAAmB;EACnB,6CAA6C;EAC7C,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;EACf,UAAU;EACV,oBAAoB;AACtB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,4CAA4C;EAC5C,kBAAkB;EAClB,2BAA2B;EAC3B,WAAW;AACb;;AAEA,SAAS;;AAET;EACE,uBAAuB;EACvB,mBAAmB;EACnB,+CAA+C;EAC/C,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root{\r\n  --title-bg-color: 71, 33, 85;\r\n  --sideboard-bg-color: 137, 93, 148;\r\n\r\n  --pastel-green: 169, 215, 133;\r\n  --pastel-blue: 109, 194, 240;\r\n  --pastel-red: 227, 130, 130;\r\n  --pastel-yellow: 209, 176, 91;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template: max-content max-content 1fr / 5fr 1fr;\r\n}\r\n\r\n/* Header */\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  padding: 0.5rem;\r\n  background-color: rgb(var(--title-bg-color));\r\n  color: white;\r\n  grid-column: 1 / 3;\r\n}\r\n\r\n/* Nav */\r\n\r\nnav {\r\n  display: flex;\r\n  padding: 0.5rem 2rem 0.5rem 4rem;\r\n  gap: 2rem;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 1rem;\r\n}\r\n\r\nnav > ul:last-child {\r\n  margin-left: auto;\r\n  gap: 2rem;\r\n  width: 50%;\r\n}\r\n\r\n/* Sideboard */\r\n\r\n.sideboard {\r\n  padding: 2rem;\r\n  grid-column: 2 / -1;\r\n  grid-row: 2 / 4;\r\n  text-align: center;\r\n  display: grid;\r\n  gap: 0.2rem;\r\n  background-color: rgb(var(--sideboard-bg-color));\r\n}\r\n\r\n.sideboard h2 {\r\n  color: white;\r\n}\r\n\r\n.sideboard h4 {\r\n  color: black;\r\n}\r\n\r\n.sideboard > div:last-of-type h4 {\r\n  color: white;\r\n}\r\n\r\n.sideboard > div:last-of-type > div {\r\n  margin-top: 0.5rem;\r\n  display: grid;\r\n  gap: 0.2rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* Main */\r\n\r\n.main {\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n  grid-template-columns: repeat(auto-fit, minmax(25%,1fr));\r\n  grid-auto-columns: repeat(auto-fit, minmax(25%,1fr));\r\n  grid-auto-rows: minmax(50%,1fr);\r\n  text-align: center;\r\n  background-color: rgb(var(--sideboard-bg-color),0.5);\r\n\r\n}\r\n\r\n.main > div:nth-child(1) {\r\n  background-color: rgb(var(--pastel-green));\r\n}\r\n\r\n.main > div:nth-child(2) {\r\n  background-color: rgb(var(--pastel-red));\r\n}\r\n\r\n.main > div:nth-child(3) {\r\n  background-color: rgb(var(--pastel-blue));\r\n}\r\n\r\n.main > div:nth-child(4) {\r\n  background-color: rgb(var(--pastel-yellow));\r\n}\r\n\r\n.main > div:nth-child(5) {\r\n  background-color: rgb(var(--pastel-green));\r\n}\r\n\r\n.main > div:nth-child(6) {\r\n  background-color: rgb(var(--pastel-red));\r\n}\r\n\r\n.main > div:nth-child(7) {\r\n  background-color: rgb(var(--pastel-blue));\r\n}\r\n\r\n.main > div:nth-child(8) {\r\n  background-color: rgb(var(--pastel-yellow));\r\n}\r\n\r\n/* Pop-Ups c: */\r\n\r\n.popup {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  visibility: hidden;\r\n}\r\n\r\nform {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  gap: 2rem 1rem;\r\n  text-align: left;\r\n  font-size: 1.5rem;\r\n  background-color: rgb(var(--sideboard-bg-color));\r\n  padding: 1.5rem;\r\n  border-radius: 2rem;\r\n  border: 1rem solid rgb(var(--title-bg-color));\r\n  color: white;\r\n}\r\n\r\nform h2 {\r\n  grid-column: 1 / -1;\r\n  text-align: center;\r\n}\r\n\r\nform input[type=\"text\"]:nth-of-type(2) {\r\n  height: 6rem;\r\n}\r\n\r\nform button {\r\n  grid-column: 2 / -1;\r\n  font-size: 1.2rem;\r\n  border-radius: 1rem 0.5rem;\r\n  padding: 0.2rem;\r\n  width: 50%;\r\n  justify-self: center;\r\n}\r\n\r\n/* project */\r\n.project {\r\n  display: grid;\r\n  grid-template: max-content max-content / 1fr;\r\n  padding: 0rem 1rem;\r\n  grid-auto-rows: max-content;\r\n  gap: 0.5rem;\r\n}\r\n\r\n/* Task */\r\n\r\n.task {\r\n  background-color: azure;\r\n  border-radius: 1rem;\r\n  border: 0.2rem solid rgb(var(--title-bg-color));\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 0.2rem;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.task > p {\r\n  overflow-wrap: break-word;\r\n}\r\n.task > div {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border-radius: 50%;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile */ "./src/profile.js");








(0,_popup__WEBPACK_IMPORTED_MODULE_5__.popUpProject)();
(0,_popup__WEBPACK_IMPORTED_MODULE_5__.popUpTask)();

//ID
let taskId = 0;
let projectId = 0;

//The current selected project when the new task form is displayed
let selectedProject;

//Add tasks to general
let generalProject = (0,_projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_project__WEBPACK_IMPORTED_MODULE_3__.project)("General","",'',projectId++));
generalProject.projectNode.querySelector("input[type='date']").style.display = 'none';
generalProject.projectNode.addEventListener("dblclick", () => {
document.querySelector(".popup").style.visibility = "visible";
selectedProject = generalProject;
})

let btnSubmitProject = document.querySelector(".popup:last-of-type button");
btnSubmitProject.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector(".popup:last-of-type form").checkValidity()){
    //A new project is able to be added to main
      let project  = (0,_projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"])();
      project.id = projectId++;
      project.projectNode.addEventListener("dblclick", (e) => {
      document.querySelector(".popup").style.visibility = "visible";
      selectedProject = project;
      })
    }
  }
);


let btnSubmitTask = document.querySelector("form button");
btnSubmitTask.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector("form").checkValidity()){
    let task = (0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.getTask)());
    task.taskObj.setID = taskId++;
    task.taskNode.addEventListener("dblclick", (e) => {
      e.stopPropagation();
    })
    task.taskNode.addEventListener("mouseenter",(e) => {
      task.taskNode.style.backgroundColor = "thistle";
    })
    task.taskNode.addEventListener("mouseleave",(e) => {
      task.taskNode.style.backgroundColor = "white";
    })
    task.taskNode.addEventListener("click", () => {
      if(task.taskNode.style.textDecoration == "line-through"){
        task.taskNode.style.textDecoration = "none";
      }else{
        task.taskNode.style.textDecoration = "line-through";
      }
    })

    //Appends task object to a list of task and a tasknode to the project node
    selectedProject.projectNode.appendChild(task.taskNode);
    selectedProject.projectObj.getTasks().push(task);

    //create event listeners to delete and edit task
    (0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(task, selectedProject);
    (0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.editTask)(task);

    //Update sideboard
    (0,_profile__WEBPACK_IMPORTED_MODULE_6__.updateUpcoming)(_profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile);
  }
})

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popUpProject: () => (/* binding */ popUpProject),
/* harmony export */   popUpTask: () => (/* binding */ popUpTask)
/* harmony export */ });
function popUpProject(){

  //Trigger popup form for project
  let newProject = document.querySelector("nav button");
  newProject.addEventListener("click", () => {
    document.querySelector(".popup:last-of-type").style.visibility = "visible";
  })
  
  //Close popup form when clicked away from popup form
  document.querySelector(".popup:last-of-type").addEventListener("click", () => {
    document.querySelector(".popup:last-of-type").style.visibility = "hidden";
  })
  
  document.querySelector(".popup:last-of-type form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
}

function popUpTask(){
  
  //Close popup form when clicked away from popup form
  document.querySelector(".popup").addEventListener("click", () => {
    document.querySelector(".popup").style.visibility = "hidden";
  })
  
  document.querySelector("form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
}

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProfile: () => (/* binding */ defaultProfile),
/* harmony export */   profile: () => (/* binding */ profile),
/* harmony export */   updateUpcoming: () => (/* binding */ updateUpcoming)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


let profile = (name, email, password) => {
  let getName = () => name;
  let getEmail = () => email;
  let getPassword = () => password;

  let projects = [];
  let getAllTasks = () => {
    let tasks = [];
    for(let project of projects){
      tasks.push(project.projectObj.getTasks());
    }
    tasks = tasks.flat();
    return tasks;
  }
  
  return {getName, getEmail, getPassword, projects, getAllTasks}
}

let defaultProfile = profile("User", "fake.email@fakemail.com", "");


function updateUpcoming(profile){
  //Sorts the task array by date  
  let tasks = profile.getAllTasks();
    
    let n = tasks.length;
    sortByTime(tasks, n);
    updateUpcomingDOM(tasks, 5);
}

function sortByTime(tasks, n){
  let i, key, j;
  for(i = 1; i < n; i++){
    key = tasks[i];
    j = i - 1;

    while(j >= 0 && tasks[j].taskObj.getDeadline() > key.taskObj.getDeadline()){
      tasks[j + 1] = tasks[j];
      j -= 1;
    }
    tasks[j + 1] = key;
  }
}

//Requires sorted tasks array
//Requires number of tasks to display in DOM
function updateUpcomingDOM(tasks, n){
  clearUpcomingDOM();
  n = tasks.length > 5 ? 5 : tasks.length;
  let upcoming = document.querySelector(".sideboard > div")
  for(let i = 0 ; i < n; i++){
    let taskCopy = tasks[i].taskNode.cloneNode(true);
    upcoming.appendChild(taskCopy);
  }
}

function clearUpcomingDOM(){
  let tasks = document.querySelectorAll(".sideboard > div:first-of-type .task");
  for(let task of tasks){
    task.remove();
  }
}

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
function project(name, desc, deadline, id){
  //Order: Priority-Ordered, Deadline Ordered, Date-Added Ordered 
  let order = "date";

  let getName = () => name;
  let getDesc = () => desc;
  let getDeadline = () => deadline;
  let getOrder = () => order;

  //unqiue id to quickly identify projects
  let getId = () => id;

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
/* harmony import */ var _taskDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDOM */ "./src/taskDOM.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./src/profile.js");




function createProject(projectObj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)("","", new Date())){
  let projectNode = document.createElement("div");
  projectNode.classList.add("project");

  let projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");

  let projectName = document.createElement("h4");
  projectName.textContent = projectObj.getName();

  let projectDesc = document.createElement("p");
  projectDesc.textContent = projectObj.getDesc();

  let projectDeadline = document.createElement("input");
  projectDeadline.type = 'date';
  projectDeadline.value = projectObj.getDeadline();

  projectHeader.appendChild(projectName);
  projectHeader.appendChild(projectDeadline);
  projectHeader.appendChild(projectDesc);
  projectNode.appendChild(projectHeader);
  
  return {projectObj, projectNode};
}

function getProject(){
  let projectName = document.querySelector("#projectName").value;
  let projectDesc = document.querySelector("#projectDesc").value;
  let projectDate = document.querySelector("#projectDate").value;

  return (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(projectName,projectDesc,projectDate);
}

function addProject(projectObj = getProject()){
  let projectsMain = document.querySelector(".main");
  let numProjects = document.querySelectorAll(".main > div");
  let projectContainer = document.querySelector(".sideboard > div:last-of-type > div");
  let newProject = createProject(projectObj);

  let projectName = document.createElement("h4");
  projectName.textContent = newProject.projectObj.getName();
  projectContainer.appendChild(projectName);
  _profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile.projects.push(newProject);
  
  if(numProjects.length < 4){
      projectsMain.appendChild(newProject.projectNode);
  }

  return newProject;
}



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
function task(name,desc,deadline,priority, id){
  
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

  //unique id to quickly identify tasks
  let getID = () => id;

  let setName = newName => {name = newName}
  let setDesc = newDesc => {desc = newDesc}
  let setDeadline = newDeadline => {deadline = newDeadline}
  let setPriority = newPriority => {priority = newPriority}
  let setType = (newType) => {type = newType}
  let setID = newID => {
    //ID can only be assigned once
    if(id == undefined){
      id = newID;
    }
  }

  let subtasks = [];
  let getSubtasks = () => subtasks;
  return {getName, getDesc, getDeadline, getPriority, getDate, getSubtasks, getType, getID, setName, setDesc, setDeadline, setPriority, setType, setID}
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
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getTask: () => (/* binding */ getTask)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile */ "./src/profile.js");



function createTask(taskObj = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)("","", new Date(),"Normal")){
  let taskNode = document.createElement("div");
  taskNode.classList.add("task");

  let taskName = document.createElement("h4");
  taskName.textContent = taskObj.getName();

  let taskDesc = document.createElement("p");
  taskDesc.textContent = taskObj.getDesc();

  let taskDeadline = document.createElement("input");
  taskDeadline.type = 'date';
  taskDeadline.value = taskObj.getDeadline();

  let taskPriority = document.createElement("div");
  switch(taskObj.getPriority()){
    case 'low':
      taskPriority.style.backgroundColor = 'green';
      break;
    case 'moderate':
      taskPriority.style.backgroundColor = 'yellow';
      break;
    case 'high':
      taskPriority.style.backgroundColor = 'red';
      break;
  }

  taskNode.appendChild(taskName);
  taskNode.appendChild(taskPriority);
  taskNode.appendChild(taskDeadline);
  taskNode.appendChild(taskDesc);

  return {taskObj, taskNode};
}

function getTask(){
  let taskName = document.querySelector("#taskName").value;
  let taskDesc = document.querySelector("#taskDesc").value;
  let taskDate = document.querySelector("#taskDate").value;
  let taskPriority = document.querySelector("#taskPriority").value;

  return (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)(taskName,taskDesc,taskDate,taskPriority);
}

function addTask(project){
  project.appendChild(createTask(getTask()));
}

function deleteTask(task, project){
      //Deletes the task when right-clicked
      task.taskNode.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        task.taskNode.remove();
        //delete task obj from project
        let index = project.projectObj.getTasks().findIndex(checkID);
        project.projectObj.getTasks().splice(index, 1);
        (0,_profile__WEBPACK_IMPORTED_MODULE_1__.updateUpcoming)(_profile__WEBPACK_IMPORTED_MODULE_1__.defaultProfile);

        function checkID(currentTask){
          return currentTask.taskObj.getID() == task.taskObj.getID();
        }
      })
}

function editTask(task){
      //Edit task title
      task.taskNode.querySelector("h4").addEventListener("dblclick", (e) => {
        e.target.contentEditable = "true";
        e.stopPropagation();
        e.target.focus();
      })
  
      //Edit task description
      task.taskNode.querySelector("p").addEventListener("dblclick", (e) => {
        e.target.contentEditable = "true";
        e.stopPropagation();
        e.target.focus();
      })
  
      //Edit Priority
      task.taskNode.querySelector("div").addEventListener("dblclick",(e) => {
        e.target.insertAdjacentHTML("afterbegin",
        `
        <select>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
        </select>
        `
        )
        e.stopPropagation();
        e.target.querySelector("select").focus();
        e.target.addEventListener("focusout", priorityInput)
      })
      task.taskNode.addEventListener("focusout", (e) => {
        e.target.contentEditable = "false";
        //update content for task
        task.taskObj.setName(task.taskNode.querySelector("h4").value);
        task.taskObj.setDesc(task.taskNode.querySelector("p").value);
        task.taskObj.setPriority(task.taskNode.querySelector("div").value);
        task.taskObj.setDeadline(task.taskNode.querySelector("input[type='date']").value);
        task.taskNode.style.textDecoration = "none";
        (0,_profile__WEBPACK_IMPORTED_MODULE_1__.updateUpcoming)(_profile__WEBPACK_IMPORTED_MODULE_1__.defaultProfile);
      })

      //Displays a priority select input
      function priorityInput(e){
        let priority =  task.taskNode.querySelector("select");
        switch(priority.value){
          case 'low':
            task.taskNode.querySelector("div").style.backgroundColor = 'green';
            break;
          case 'moderate':
            task.taskNode.querySelector("div").style.backgroundColor = 'yellow';
            break;
          case 'high':
            task.taskNode.querySelector("div").style.backgroundColor = 'red';
            break;
        }
        priority.remove();
      }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLDZCQUE2QixpQkFBaUIsZ0JBQWdCLEtBQUssY0FBYyxtQ0FBbUMseUNBQXlDLHdDQUF3QyxtQ0FBbUMsa0NBQWtDLG9DQUFvQyxLQUFLLGNBQWMsa0JBQWtCLHdCQUF3QixvQkFBb0IsMkRBQTJELEtBQUssZ0NBQWdDLHlCQUF5QixzQkFBc0Isc0JBQXNCLG1EQUFtRCxtQkFBbUIseUJBQXlCLEtBQUssOEJBQThCLG9CQUFvQix1Q0FBdUMsZ0JBQWdCLDhCQUE4QixtQkFBbUIsS0FBSyxZQUFZLDRCQUE0QixvQkFBb0Isb0NBQW9DLGdCQUFnQixLQUFLLDZCQUE2Qix3QkFBd0IsZ0JBQWdCLGlCQUFpQixLQUFLLDJDQUEyQyxvQkFBb0IsMEJBQTBCLHNCQUFzQix5QkFBeUIsb0JBQW9CLGtCQUFrQix1REFBdUQsS0FBSyx1QkFBdUIsbUJBQW1CLEtBQUssdUJBQXVCLG1CQUFtQixLQUFLLDBDQUEwQyxtQkFBbUIsS0FBSyw2Q0FBNkMseUJBQXlCLG9CQUFvQixrQkFBa0IsdUJBQXVCLEtBQUssaUNBQWlDLG9CQUFvQiwwQkFBMEIsK0RBQStELDJEQUEyRCxzQ0FBc0MseUJBQXlCLDJEQUEyRCxTQUFTLGtDQUFrQyxpREFBaUQsS0FBSyxrQ0FBa0MsK0NBQStDLEtBQUssa0NBQWtDLGdEQUFnRCxLQUFLLGtDQUFrQyxrREFBa0QsS0FBSyxrQ0FBa0MsaURBQWlELEtBQUssa0NBQWtDLCtDQUErQyxLQUFLLGtDQUFrQyxnREFBZ0QsS0FBSyxrQ0FBa0Msa0RBQWtELEtBQUssd0NBQXdDLHNCQUFzQixrQkFBa0Isb0JBQW9CLDJDQUEyQyxvQkFBb0IsOEJBQThCLDBCQUEwQix5QkFBeUIsS0FBSyxjQUFjLG9CQUFvQixxQ0FBcUMscUJBQXFCLHVCQUF1Qix3QkFBd0IsdURBQXVELHNCQUFzQiwwQkFBMEIsb0RBQW9ELG1CQUFtQixLQUFLLGlCQUFpQiwwQkFBMEIseUJBQXlCLEtBQUssa0RBQWtELG1CQUFtQixLQUFLLHFCQUFxQiwwQkFBMEIsd0JBQXdCLGlDQUFpQyxzQkFBc0IsaUJBQWlCLDJCQUEyQixLQUFLLG1DQUFtQyxvQkFBb0IsbURBQW1ELHlCQUF5QixrQ0FBa0Msa0JBQWtCLEtBQUssaUNBQWlDLDhCQUE4QiwwQkFBMEIsc0RBQXNELG9CQUFvQixvQ0FBb0Msc0JBQXNCLDBCQUEwQixzQkFBc0IsbUJBQW1CLEtBQUssbUJBQW1CLGdDQUFnQyxLQUFLLGlCQUFpQixrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLG1CQUFtQjtBQUNwckw7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNyTjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNic0I7QUFDa0I7QUFDOEI7QUFDbEM7QUFDRTtBQUNXO0FBQ1U7QUFDM0Q7QUFDQSxvREFBWTtBQUNaLGlEQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFVLENBQUMsaURBQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQVUsQ0FBQyxpREFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVU7QUFDZCxJQUFJLGtEQUFRO0FBQ1o7QUFDQTtBQUNBLElBQUksd0RBQWMsQ0FBQyxvREFBYztBQUNqQztBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUI4QjtBQUM5QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QixvQ0FBb0M7QUFDcEMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCb0M7QUFDWTtBQUNQO0FBQ3pDO0FBQ08sb0NBQW9DLGlEQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaURBQU87QUFDaEI7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RETztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDd0M7QUFDbUI7QUFDM0Q7QUFDTyw4QkFBOEIsOENBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOENBQUk7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYyxDQUFDLG9EQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYyxDQUFDLG9EQUFjO0FBQ3JDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuOnJvb3R7XHJcbiAgLS10aXRsZS1iZy1jb2xvcjogNzEsIDMzLCA4NTtcclxuICAtLXNpZGVib2FyZC1iZy1jb2xvcjogMTM3LCA5MywgMTQ4O1xyXG5cclxuICAtLXBhc3RlbC1ncmVlbjogMTY5LCAyMTUsIDEzMztcclxuICAtLXBhc3RlbC1ibHVlOiAxMDksIDE5NCwgMjQwO1xyXG4gIC0tcGFzdGVsLXJlZDogMjI3LCAxMzAsIDEzMDtcclxuICAtLXBhc3RlbC15ZWxsb3c6IDIwOSwgMTc2LCA5MTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnIgLyA1ZnIgMWZyO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tdGl0bGUtYmctY29sb3IpKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG59XHJcblxyXG4vKiBOYXYgKi9cclxuXHJcbm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gNHJlbTtcclxuICBnYXA6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5uYXYgPiB1bDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBnYXA6IDJyZW07XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogU2lkZWJvYXJkICovXHJcblxyXG4uc2lkZWJvYXJkIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XHJcbiAgZ3JpZC1yb3c6IDIgLyA0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMC4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpKTtcclxufVxyXG5cclxuLnNpZGVib2FyZCBoMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2lkZWJvYXJkIGg0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zaWRlYm9hcmQgPiBkaXY6bGFzdC1vZi10eXBlIGg0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zaWRlYm9hcmQgPiBkaXY6bGFzdC1vZi10eXBlID4gZGl2IHtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDAuMnJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiBNYWluICovXHJcblxyXG4ubWFpbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUlLDFmcikpO1xyXG4gIGdyaWQtYXV0by1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNSUsMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MCUsMWZyKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXNpZGVib2FyZC1iZy1jb2xvciksMC41KTtcclxuXHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ncmVlbikpO1xyXG59XHJcblxyXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1wYXN0ZWwtcmVkKSk7XHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ibHVlKSk7XHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC15ZWxsb3cpKTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWdyZWVuKSk7XHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1yZWQpKTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWJsdWUpKTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXllbGxvdykpO1xyXG59XHJcblxyXG4vKiBQb3AtVXBzIGM6ICovXHJcblxyXG4ucG9wdXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICBnYXA6IDJyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpKTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBib3JkZXI6IDFyZW0gc29saWQgcmdiKHZhcigtLXRpdGxlLWJnLWNvbG9yKSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5mb3JtIGgyIHtcclxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG59XHJcblxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtIDAuNXJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgd2lkdGg6IDUwJTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLyogcHJvamVjdCAqL1xyXG4ucHJvamVjdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCBtYXgtY29udGVudCAvIDFmcjtcclxuICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4vKiBUYXNrICovXHJcblxyXG4udGFzayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCByZ2IodmFyKC0tdGl0bGUtYmctY29sb3IpKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDAuMjVyZW07XHJcbn1cclxuXHJcbi50YXNrID4gcCB7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4udGFzayA+IGRpdiB7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0NBQWtDOztFQUVsQyw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvREFBb0Q7QUFDdEQ7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsb0RBQW9EO0VBQ3BELCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsb0RBQW9EOztBQUV0RDs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0RBQWdEO0VBQ2hELGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsV0FBVztBQUNiOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gIC0tdGl0bGUtYmctY29sb3I6IDcxLCAzMywgODU7XFxyXFxuICAtLXNpZGVib2FyZC1iZy1jb2xvcjogMTM3LCA5MywgMTQ4O1xcclxcblxcclxcbiAgLS1wYXN0ZWwtZ3JlZW46IDE2OSwgMjE1LCAxMzM7XFxyXFxuICAtLXBhc3RlbC1ibHVlOiAxMDksIDE5NCwgMjQwO1xcclxcbiAgLS1wYXN0ZWwtcmVkOiAyMjcsIDEzMCwgMTMwO1xcclxcbiAgLS1wYXN0ZWwteWVsbG93OiAyMDksIDE3NiwgOTE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnIgLyA1ZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tdGl0bGUtYmctY29sb3IpKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2ICovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gNHJlbTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiA+IHVsOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWRlYm9hcmQgKi9cXHJcXG5cXHJcXG4uc2lkZWJvYXJkIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcclxcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMC4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXNpZGVib2FyZC1iZy1jb2xvcikpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJvYXJkIGgyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVib2FyZCBoNCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYm9hcmQgPiBkaXY6bGFzdC1vZi10eXBlIGg0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgPiBkaXYge1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMC4ycmVtO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiAqL1xcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNSUsMWZyKSk7XFxyXFxuICBncmlkLWF1dG8tY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUlLDFmcikpO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MCUsMWZyKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpLDAuNSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWdyZWVuKSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXJlZCkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ibHVlKSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCg0KSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXllbGxvdykpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoNSkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ncmVlbikpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoNikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1yZWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDcpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1wYXN0ZWwtYmx1ZSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoOCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC15ZWxsb3cpKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9wLVVwcyBjOiAqL1xcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICBnYXA6IDJyZW0gMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpKTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBib3JkZXI6IDFyZW0gc29saWQgcmdiKHZhcigtLXRpdGxlLWJnLWNvbG9yKSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaDIge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06bnRoLW9mLXR5cGUoMikge1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtIDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHJvamVjdCAqL1xcclxcbi5wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCBtYXgtY29udGVudCAvIDFmcjtcXHJcXG4gIHBhZGRpbmc6IDByZW0gMXJlbTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUYXNrICovXFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmdiKHZhcigtLXRpdGxlLWJnLWNvbG9yKSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayA+IHAge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLnRhc2sgPiBkaXYge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7dGFzaywgc3ViVGFza30gZnJvbSAnLi90YXNrLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlVGFzaywgZGVsZXRlVGFzaywgZ2V0VGFzaywgZWRpdFRhc2sgfSBmcm9tICcuL3Rhc2tET00nO1xyXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IGFkZFByb2plY3QgZnJvbSAnLi9wcm9qZWN0RE9NJztcclxuaW1wb3J0IHsgcG9wVXBQcm9qZWN0LCBwb3BVcFRhc2t9IGZyb20gJy4vcG9wdXAnO1xyXG5pbXBvcnQgeyBkZWZhdWx0UHJvZmlsZSwgdXBkYXRlVXBjb21pbmcgfSBmcm9tICcuL3Byb2ZpbGUnO1xyXG5cclxucG9wVXBQcm9qZWN0KCk7XHJcbnBvcFVwVGFzaygpO1xyXG5cclxuLy9JRFxyXG5sZXQgdGFza0lkID0gMDtcclxubGV0IHByb2plY3RJZCA9IDA7XHJcblxyXG4vL1RoZSBjdXJyZW50IHNlbGVjdGVkIHByb2plY3Qgd2hlbiB0aGUgbmV3IHRhc2sgZm9ybSBpcyBkaXNwbGF5ZWRcclxubGV0IHNlbGVjdGVkUHJvamVjdDtcclxuXHJcbi8vQWRkIHRhc2tzIHRvIGdlbmVyYWxcclxubGV0IGdlbmVyYWxQcm9qZWN0ID0gYWRkUHJvamVjdChwcm9qZWN0KFwiR2VuZXJhbFwiLFwiXCIsJycscHJvamVjdElkKyspKTtcclxuZ2VuZXJhbFByb2plY3QucHJvamVjdE5vZGUucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J2RhdGUnXVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5nZW5lcmFsUHJvamVjdC5wcm9qZWN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuc2VsZWN0ZWRQcm9qZWN0ID0gZ2VuZXJhbFByb2plY3Q7XHJcbn0pXHJcblxyXG5sZXQgYnRuU3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXA6bGFzdC1vZi10eXBlIGJ1dHRvblwiKTtcclxuYnRuU3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIC8vQ2hlY2tzIGlmIGFsbCBvZiB0aGUgaHRtbCBmb3JtIHJlcXVpcmVtZW50cyBhcmUgZmlsbGVkXHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDpsYXN0LW9mLXR5cGUgZm9ybVwiKS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgLy9BIG5ldyBwcm9qZWN0IGlzIGFibGUgdG8gYmUgYWRkZWQgdG8gbWFpblxyXG4gICAgICBsZXQgcHJvamVjdCAgPSBhZGRQcm9qZWN0KCk7XHJcbiAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0SWQrKztcclxuICAgICAgcHJvamVjdC5wcm9qZWN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuXHJcbmxldCBidG5TdWJtaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpO1xyXG5idG5TdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgLy9DaGVja3MgaWYgYWxsIG9mIHRoZSBodG1sIGZvcm0gcmVxdWlyZW1lbnRzIGFyZSBmaWxsZWRcclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKGdldFRhc2soKSk7XHJcbiAgICB0YXNrLnRhc2tPYmouc2V0SUQgPSB0YXNrSWQrKztcclxuICAgIHRhc2sudGFza05vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KVxyXG4gICAgdGFzay50YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLChlKSA9PiB7XHJcbiAgICAgIHRhc2sudGFza05vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0aGlzdGxlXCI7XHJcbiAgICB9KVxyXG4gICAgdGFzay50YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLChlKSA9PiB7XHJcbiAgICAgIHRhc2sudGFza05vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgfSlcclxuICAgIHRhc2sudGFza05vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYodGFzay50YXNrTm9kZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PSBcImxpbmUtdGhyb3VnaFwiKXtcclxuICAgICAgICB0YXNrLnRhc2tOb2RlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRhc2sudGFza05vZGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vQXBwZW5kcyB0YXNrIG9iamVjdCB0byBhIGxpc3Qgb2YgdGFzayBhbmQgYSB0YXNrbm9kZSB0byB0aGUgcHJvamVjdCBub2RlXHJcbiAgICBzZWxlY3RlZFByb2plY3QucHJvamVjdE5vZGUuYXBwZW5kQ2hpbGQodGFzay50YXNrTm9kZSk7XHJcbiAgICBzZWxlY3RlZFByb2plY3QucHJvamVjdE9iai5nZXRUYXNrcygpLnB1c2godGFzayk7XHJcblxyXG4gICAgLy9jcmVhdGUgZXZlbnQgbGlzdGVuZXJzIHRvIGRlbGV0ZSBhbmQgZWRpdCB0YXNrXHJcbiAgICBkZWxldGVUYXNrKHRhc2ssIHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgICBlZGl0VGFzayh0YXNrKTtcclxuXHJcbiAgICAvL1VwZGF0ZSBzaWRlYm9hcmRcclxuICAgIHVwZGF0ZVVwY29taW5nKGRlZmF1bHRQcm9maWxlKTtcclxuICB9XHJcbn0pIiwiZXhwb3J0IGZ1bmN0aW9uIHBvcFVwUHJvamVjdCgpe1xyXG5cclxuICAvL1RyaWdnZXIgcG9wdXAgZm9ybSBmb3IgcHJvamVjdFxyXG4gIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiBidXR0b25cIik7XHJcbiAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDpsYXN0LW9mLXR5cGVcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIH0pXHJcbiAgXHJcbiAgLy9DbG9zZSBwb3B1cCBmb3JtIHdoZW4gY2xpY2tlZCBhd2F5IGZyb20gcG9wdXAgZm9ybVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXA6bGFzdC1vZi10eXBlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwOmxhc3Qtb2YtdHlwZVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICB9KVxyXG4gIFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXA6bGFzdC1vZi10eXBlIGZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBUYXNrKCl7XHJcbiAgXHJcbiAgLy9DbG9zZSBwb3B1cCBmb3JtIHdoZW4gY2xpY2tlZCBhd2F5IGZyb20gcG9wdXAgZm9ybVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgfSlcclxuICBcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcbiAgXHJcbn0iLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuZXhwb3J0IGxldCBwcm9maWxlID0gKG5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGxldCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICBsZXQgZ2V0RW1haWwgPSAoKSA9PiBlbWFpbDtcclxuICBsZXQgZ2V0UGFzc3dvcmQgPSAoKSA9PiBwYXNzd29yZDtcclxuXHJcbiAgbGV0IHByb2plY3RzID0gW107XHJcbiAgbGV0IGdldEFsbFRhc2tzID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tzID0gW107XHJcbiAgICBmb3IobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpe1xyXG4gICAgICB0YXNrcy5wdXNoKHByb2plY3QucHJvamVjdE9iai5nZXRUYXNrcygpKTtcclxuICAgIH1cclxuICAgIHRhc2tzID0gdGFza3MuZmxhdCgpO1xyXG4gICAgcmV0dXJuIHRhc2tzO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4ge2dldE5hbWUsIGdldEVtYWlsLCBnZXRQYXNzd29yZCwgcHJvamVjdHMsIGdldEFsbFRhc2tzfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGRlZmF1bHRQcm9maWxlID0gcHJvZmlsZShcIlVzZXJcIiwgXCJmYWtlLmVtYWlsQGZha2VtYWlsLmNvbVwiLCBcIlwiKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXBjb21pbmcocHJvZmlsZSl7XHJcbiAgLy9Tb3J0cyB0aGUgdGFzayBhcnJheSBieSBkYXRlICBcclxuICBsZXQgdGFza3MgPSBwcm9maWxlLmdldEFsbFRhc2tzKCk7XHJcbiAgICBcclxuICAgIGxldCBuID0gdGFza3MubGVuZ3RoO1xyXG4gICAgc29ydEJ5VGltZSh0YXNrcywgbik7XHJcbiAgICB1cGRhdGVVcGNvbWluZ0RPTSh0YXNrcywgNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRCeVRpbWUodGFza3MsIG4pe1xyXG4gIGxldCBpLCBrZXksIGo7XHJcbiAgZm9yKGkgPSAxOyBpIDwgbjsgaSsrKXtcclxuICAgIGtleSA9IHRhc2tzW2ldO1xyXG4gICAgaiA9IGkgLSAxO1xyXG5cclxuICAgIHdoaWxlKGogPj0gMCAmJiB0YXNrc1tqXS50YXNrT2JqLmdldERlYWRsaW5lKCkgPiBrZXkudGFza09iai5nZXREZWFkbGluZSgpKXtcclxuICAgICAgdGFza3NbaiArIDFdID0gdGFza3Nbal07XHJcbiAgICAgIGogLT0gMTtcclxuICAgIH1cclxuICAgIHRhc2tzW2ogKyAxXSA9IGtleTtcclxuICB9XHJcbn1cclxuXHJcbi8vUmVxdWlyZXMgc29ydGVkIHRhc2tzIGFycmF5XHJcbi8vUmVxdWlyZXMgbnVtYmVyIG9mIHRhc2tzIHRvIGRpc3BsYXkgaW4gRE9NXHJcbmZ1bmN0aW9uIHVwZGF0ZVVwY29taW5nRE9NKHRhc2tzLCBuKXtcclxuICBjbGVhclVwY29taW5nRE9NKCk7XHJcbiAgbiA9IHRhc2tzLmxlbmd0aCA+IDUgPyA1IDogdGFza3MubGVuZ3RoO1xyXG4gIGxldCB1cGNvbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJvYXJkID4gZGl2XCIpXHJcbiAgZm9yKGxldCBpID0gMCA7IGkgPCBuOyBpKyspe1xyXG4gICAgbGV0IHRhc2tDb3B5ID0gdGFza3NbaV0udGFza05vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgdXBjb21pbmcuYXBwZW5kQ2hpbGQodGFza0NvcHkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJVcGNvbWluZ0RPTSgpe1xyXG4gIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJvYXJkID4gZGl2OmZpcnN0LW9mLXR5cGUgLnRhc2tcIik7XHJcbiAgZm9yKGxldCB0YXNrIG9mIHRhc2tzKXtcclxuICAgIHRhc2sucmVtb3ZlKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QobmFtZSwgZGVzYywgZGVhZGxpbmUsIGlkKXtcclxuICAvL09yZGVyOiBQcmlvcml0eS1PcmRlcmVkLCBEZWFkbGluZSBPcmRlcmVkLCBEYXRlLUFkZGVkIE9yZGVyZWQgXHJcbiAgbGV0IG9yZGVyID0gXCJkYXRlXCI7XHJcblxyXG4gIGxldCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuICBsZXQgZ2V0RGVzYyA9ICgpID0+IGRlc2M7XHJcbiAgbGV0IGdldERlYWRsaW5lID0gKCkgPT4gZGVhZGxpbmU7XHJcbiAgbGV0IGdldE9yZGVyID0gKCkgPT4gb3JkZXI7XHJcblxyXG4gIC8vdW5xaXVlIGlkIHRvIHF1aWNrbHkgaWRlbnRpZnkgcHJvamVjdHNcclxuICBsZXQgZ2V0SWQgPSAoKSA9PiBpZDtcclxuXHJcbiAgbGV0IHNldE5hbWUgPSBuZXdOYW1lID0+IHtuYW1lID0gbmV3TmFtZX1cclxuICBsZXQgc2V0RGVzYyA9IG5ld0Rlc2MgPT4ge25hbWUgPSBuZXdEZXNjfVxyXG4gIGxldCBzZXREZWFkbGluZSA9IG5ld0RlYWRsaW5lID0+IHtuYW1lID0gbmV3RGVhZGxpbmV9XHJcbiAgbGV0IHNldE9yZGVyID0gKG5ld09yZGVyKSA9PiB7b3JkZXIgPSBuZXdPcmRlcn1cclxuXHJcbiAgbGV0IHRhc2tzID0gW107XHJcbiAgbGV0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XHJcblxyXG4gIHJldHVybiB7Z2V0TmFtZSwgZ2V0RGVzYywgZ2V0RGVhZGxpbmUsIGdldFRhc2tzLCBnZXRPcmRlciwgc2V0TmFtZSwgc2V0RGVzYywgc2V0RGVhZGxpbmUsIHNldE9yZGVyfVxyXG59XHJcbiIsImltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIGdldFRhc2sgfSBmcm9tIFwiLi90YXNrRE9NXCI7XHJcbmltcG9ydCB7ZGVmYXVsdFByb2ZpbGV9IGZyb20gXCIuL3Byb2ZpbGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RPYmogPSBwcm9qZWN0KFwiXCIsXCJcIiwgbmV3IERhdGUoKSkpe1xyXG4gIGxldCBwcm9qZWN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdE5vZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcblxyXG4gIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlclwiKTtcclxuXHJcbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE9iai5nZXROYW1lKCk7XHJcblxyXG4gIGxldCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHByb2plY3REZXNjLnRleHRDb250ZW50ID0gcHJvamVjdE9iai5nZXREZXNjKCk7XHJcblxyXG4gIGxldCBwcm9qZWN0RGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgcHJvamVjdERlYWRsaW5lLnR5cGUgPSAnZGF0ZSc7XHJcbiAgcHJvamVjdERlYWRsaW5lLnZhbHVlID0gcHJvamVjdE9iai5nZXREZWFkbGluZSgpO1xyXG5cclxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3REZWFkbGluZSk7XHJcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzYyk7XHJcbiAgcHJvamVjdE5vZGUuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgXHJcbiAgcmV0dXJuIHtwcm9qZWN0T2JqLCBwcm9qZWN0Tm9kZX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0KCl7XHJcbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS52YWx1ZTtcclxuICBsZXQgcHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3REZXNjXCIpLnZhbHVlO1xyXG4gIGxldCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdERhdGVcIikudmFsdWU7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0KHByb2plY3ROYW1lLHByb2plY3REZXNjLHByb2plY3REYXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0T2JqID0gZ2V0UHJvamVjdCgpKXtcclxuICBsZXQgcHJvamVjdHNNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gIGxldCBudW1Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbiA+IGRpdlwiKTtcclxuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJvYXJkID4gZGl2Omxhc3Qtb2YtdHlwZSA+IGRpdlwiKTtcclxuICBsZXQgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE9iaik7XHJcblxyXG4gIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QucHJvamVjdE9iai5nZXROYW1lKCk7XHJcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcbiAgZGVmYXVsdFByb2ZpbGUucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICBcclxuICBpZihudW1Qcm9qZWN0cy5sZW5ndGggPCA0KXtcclxuICAgICAgcHJvamVjdHNNYWluLmFwcGVuZENoaWxkKG5ld1Byb2plY3QucHJvamVjdE5vZGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0YXNrKG5hbWUsZGVzYyxkZWFkbGluZSxwcmlvcml0eSwgaWQpe1xyXG4gIFxyXG4gIGxldCBkYXRlQWRkZWQgPSBuZXcgRGF0ZSgpO1xyXG4gIFxyXG4gIC8vVHlwZXM6IE5vbmUsIE9yZGVyZWQsIFVub3JkZXJlZC4gXHJcbiAgLy9Pbmx5IGFwcGxpY2FibGUgaWYgdGhlcmUgYXJlIHN1YnRhc2tzLlxyXG4gIGxldCB0eXBlID0gJ25vbmUnO1xyXG5cclxuICBsZXQgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgbGV0IGdldERlc2MgPSAoKSA9PiBkZXNjO1xyXG4gIGxldCBnZXREZWFkbGluZSA9ICgpID0+IGRlYWRsaW5lO1xyXG4gIGxldCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xyXG4gIGxldCBnZXREYXRlID0gKCkgPT4gZGF0ZUFkZGVkO1xyXG4gIGxldCBnZXRUeXBlID0gKCkgPT4gdHlwZTtcclxuXHJcbiAgLy91bmlxdWUgaWQgdG8gcXVpY2tseSBpZGVudGlmeSB0YXNrc1xyXG4gIGxldCBnZXRJRCA9ICgpID0+IGlkO1xyXG5cclxuICBsZXQgc2V0TmFtZSA9IG5ld05hbWUgPT4ge25hbWUgPSBuZXdOYW1lfVxyXG4gIGxldCBzZXREZXNjID0gbmV3RGVzYyA9PiB7ZGVzYyA9IG5ld0Rlc2N9XHJcbiAgbGV0IHNldERlYWRsaW5lID0gbmV3RGVhZGxpbmUgPT4ge2RlYWRsaW5lID0gbmV3RGVhZGxpbmV9XHJcbiAgbGV0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4ge3ByaW9yaXR5ID0gbmV3UHJpb3JpdHl9XHJcbiAgbGV0IHNldFR5cGUgPSAobmV3VHlwZSkgPT4ge3R5cGUgPSBuZXdUeXBlfVxyXG4gIGxldCBzZXRJRCA9IG5ld0lEID0+IHtcclxuICAgIC8vSUQgY2FuIG9ubHkgYmUgYXNzaWduZWQgb25jZVxyXG4gICAgaWYoaWQgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgaWQgPSBuZXdJRDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBzdWJ0YXNrcyA9IFtdO1xyXG4gIGxldCBnZXRTdWJ0YXNrcyA9ICgpID0+IHN1YnRhc2tzO1xyXG4gIHJldHVybiB7Z2V0TmFtZSwgZ2V0RGVzYywgZ2V0RGVhZGxpbmUsIGdldFByaW9yaXR5LCBnZXREYXRlLCBnZXRTdWJ0YXNrcywgZ2V0VHlwZSwgZ2V0SUQsIHNldE5hbWUsIHNldERlc2MsIHNldERlYWRsaW5lLCBzZXRQcmlvcml0eSwgc2V0VHlwZSwgc2V0SUR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VidGFzayhuYW1lKXtcclxuICBsZXQgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgbGV0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge25hbWUgPSBuZXdOYW1lfVxyXG5cclxuICByZXR1cm4ge2dldE5hbWUsIHNldE5hbWV9XHJcbn0iLCJpbXBvcnQge3Rhc2ssIHN1YlRhc2t9IGZyb20gJy4vdGFzay5qcyc7XHJcbmltcG9ydCB7IGRlZmF1bHRQcm9maWxlLCB1cGRhdGVVcGNvbWluZyB9IGZyb20gJy4vcHJvZmlsZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrT2JqID0gdGFzayhcIlwiLFwiXCIsIG5ldyBEYXRlKCksXCJOb3JtYWxcIikpe1xyXG4gIGxldCB0YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza05vZGUuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcblxyXG4gIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmouZ2V0TmFtZSgpO1xyXG5cclxuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2tPYmouZ2V0RGVzYygpO1xyXG5cclxuICBsZXQgdGFza0RlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tEZWFkbGluZS50eXBlID0gJ2RhdGUnO1xyXG4gIHRhc2tEZWFkbGluZS52YWx1ZSA9IHRhc2tPYmouZ2V0RGVhZGxpbmUoKTtcclxuXHJcbiAgbGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc3dpdGNoKHRhc2tPYmouZ2V0UHJpb3JpdHkoKSl7XHJcbiAgICBjYXNlICdsb3cnOlxyXG4gICAgICB0YXNrUHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdtb2RlcmF0ZSc6XHJcbiAgICAgIHRhc2tQcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdoaWdoJzpcclxuICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICB0YXNrTm9kZS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKHRhc2tEZWFkbGluZSk7XHJcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xyXG5cclxuICByZXR1cm4ge3Rhc2tPYmosIHRhc2tOb2RlfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2soKXtcclxuICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpLnZhbHVlO1xyXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NcIikudmFsdWU7XHJcbiAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZVwiKS52YWx1ZTtcclxuICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrUHJpb3JpdHlcIikudmFsdWU7XHJcblxyXG4gIHJldHVybiB0YXNrKHRhc2tOYW1lLHRhc2tEZXNjLHRhc2tEYXRlLHRhc2tQcmlvcml0eSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHByb2plY3Qpe1xyXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlVGFzayhnZXRUYXNrKCkpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaywgcHJvamVjdCl7XHJcbiAgICAgIC8vRGVsZXRlcyB0aGUgdGFzayB3aGVuIHJpZ2h0LWNsaWNrZWRcclxuICAgICAgdGFzay50YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGFzay50YXNrTm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAvL2RlbGV0ZSB0YXNrIG9iaiBmcm9tIHByb2plY3RcclxuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0LnByb2plY3RPYmouZ2V0VGFza3MoKS5maW5kSW5kZXgoY2hlY2tJRCk7XHJcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0T2JqLmdldFRhc2tzKCkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB1cGRhdGVVcGNvbWluZyhkZWZhdWx0UHJvZmlsZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSUQoY3VycmVudFRhc2spe1xyXG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrLnRhc2tPYmouZ2V0SUQoKSA9PSB0YXNrLnRhc2tPYmouZ2V0SUQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayh0YXNrKXtcclxuICAgICAgLy9FZGl0IHRhc2sgdGl0bGVcclxuICAgICAgdGFzay50YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiaDRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgICB9KVxyXG4gIFxyXG4gICAgICAvL0VkaXQgdGFzayBkZXNjcmlwdGlvblxyXG4gICAgICB0YXNrLnRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LmNvbnRlbnRFZGl0YWJsZSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS50YXJnZXQuZm9jdXMoKTtcclxuICAgICAgfSlcclxuICBcclxuICAgICAgLy9FZGl0IFByaW9yaXR5XHJcbiAgICAgIHRhc2sudGFza05vZGUucXVlcnlTZWxlY3RvcihcImRpdlwiKS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIixcclxuICAgICAgICBgXHJcbiAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vZGVyYXRlXCI+TW9kZXJhdGU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICBgXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS5mb2N1cygpO1xyXG4gICAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBwcmlvcml0eUlucHV0KVxyXG4gICAgICB9KVxyXG4gICAgICB0YXNrLnRhc2tOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LmNvbnRlbnRFZGl0YWJsZSA9IFwiZmFsc2VcIjtcclxuICAgICAgICAvL3VwZGF0ZSBjb250ZW50IGZvciB0YXNrXHJcbiAgICAgICAgdGFzay50YXNrT2JqLnNldE5hbWUodGFzay50YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiaDRcIikudmFsdWUpO1xyXG4gICAgICAgIHRhc2sudGFza09iai5zZXREZXNjKHRhc2sudGFza05vZGUucXVlcnlTZWxlY3RvcihcInBcIikudmFsdWUpO1xyXG4gICAgICAgIHRhc2sudGFza09iai5zZXRQcmlvcml0eSh0YXNrLnRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikudmFsdWUpO1xyXG4gICAgICAgIHRhc2sudGFza09iai5zZXREZWFkbGluZSh0YXNrLnRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdkYXRlJ11cIikudmFsdWUpO1xyXG4gICAgICAgIHRhc2sudGFza05vZGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICB1cGRhdGVVcGNvbWluZyhkZWZhdWx0UHJvZmlsZSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvL0Rpc3BsYXlzIGEgcHJpb3JpdHkgc2VsZWN0IGlucHV0XHJcbiAgICAgIGZ1bmN0aW9uIHByaW9yaXR5SW5wdXQoZSl7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gIHRhc2sudGFza05vZGUucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcclxuICAgICAgICBzd2l0Y2gocHJpb3JpdHkudmFsdWUpe1xyXG4gICAgICAgICAgY2FzZSAnbG93JzpcclxuICAgICAgICAgICAgdGFzay50YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbW9kZXJhdGUnOlxyXG4gICAgICAgICAgICB0YXNrLnRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaGlnaCc6XHJcbiAgICAgICAgICAgIHRhc2sudGFza05vZGUucXVlcnlTZWxlY3RvcihcImRpdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaW9yaXR5LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=