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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

:root{
  --title-bg-color: 71, 33, 85;
  --sideboard-bg-color: 137, 93, 148;

  --pastel-green: 169, 215, 133;
  --pastel-blue: 109, 194, 240;
  --pastel-red: 227, 130, 130;
  --pastel-yellow: 209, 176, 91;
  --pastel-pink: 255, 170, 221;
  --pastel-purple:169, 159, 227;
}

::-webkit-scrollbar {
  display: none;
}


body {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template: max-content max-content 1fr / 5fr 1fr;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

/* Header */

h1 {
  text-align: center;
  font-size: 2rem;
  padding: 0.5rem;
  background-color: rgb(var(--title-bg-color));
  color: white;
  grid-column: 1 / 3;
  user-select: none;
  font-family: 'Lobster', sans-serif;
  font-weight: 400;
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

nav > ul > li, nav button, .sideboard > div:last-of-type h4 {
  cursor: pointer;
}

nav > ul:last-child {
  margin-left: auto;
  gap: 2rem;
  width: 50%;
}

nav button {
  border: none;
  background-color: inherit;
  color: inherit;
}
/* Sideboard */

.sideboard {
  padding: 2rem 2rem 1rem 2rem;
  grid-column: 2 / -1;
  grid-row: 2 / 4;
  text-align: center;
  display: grid;
  gap: 0.2rem;
  background-color: rgb(var(--sideboard-bg-color));
  grid-template-rows: 1fr 1fr;
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

.sideboard > div:last-of-type > div, .sideboard > div:first-of-type > div {
  margin-top: 0.5rem;
  display: grid;
  gap: 0.2rem;
  overflow-y: auto;
}


/* Main */

.main {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(10%,1fr));
  grid-auto-columns: repeat(auto-fit, minmax(10%,1fr));
  grid-auto-rows: minmax(50%,1fr);
  text-align: center;
  user-select: none;
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
  background-color: rgb(var(--pastel-purple));
}

.main > div:nth-child(6) {
  background-color: rgb(var(--pastel-pink));
}


.main h4 {
  font-weight: 600;
  font-size: 1.2rem;
}

/* Pop-Ups */

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

.popup form {
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
  user-select: initial;
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
  user-select: initial;
}

.task > p {
  overflow-wrap: break-word;
}
.task > div {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}

.main .task:hover {
  background-color: thistle;
}
/* Help Screen */

.popup > div a {
  color: inherit;
  text-decoration: none;
}
.popup > div {
  background-color: rgb(var(--title-bg-color));
  color: whitesmoke;
  padding: 1rem;
  overflow: auto;
  height: 98vh;
  width: 60vw;
  box-sizing: border-box;
  scroll-behavior: smooth;
  border: 1rem solid rgb(var(--sideboard-bg-color));
  border-radius: 1rem;
}
.popup > div h2 {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2rem;
}
.popup > div > div.header {
  margin-bottom: 3rem;
}

.header > h3 {
  font-style:italic;
  font-size: 1.5rem;
  margin-left: 1rem;
}
.header > h3 + h3 {
  margin-left: 3rem;
}

.header > h3 + h3 + h3 {
  margin-left: 5rem;
}

.help-content h3 {
  margin: 1rem;
}
.help-content div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  text-align: center;
}


.help-content img, .help-content p {
  width: 60%;
  height: auto;
  margin: 0.1rem;
}


/* Mono Theme */
.mono h1 {
  background-color: black;
  color: whitesmoke;
}

.mono nav {
  background-color: whitesmoke;
  color: black;
  border: 1px solid black;
}

.mono .sideboard{
  background-color: whitesmoke;
  border: 1px solid black;
}

.mono .sideboard h2, body.mono .sideboard h4, body.mono .sideboard > div:last-of-type h4 {
  color: black;
}

.mono .main > .project {
  background-color: rgb(48, 48,48);
  border: 1px solid black;
}

.mono .popup form {
  background-color: black;
  color: whitesmoke;
  border: 1rem solid whitesmoke;
}

.mono .main h4 {
  color: whitesmoke;
  text-decoration-color: whitesmoke;
}

.mono .task {
  background-color: black;
  border: 0.2rem solid whitesmoke;
}

.mono .sideboard .task {
  background-color: whitesmoke;
  border: 0.2rem solid black;
}

.mono .popup > div {
  background-color: black;
  color: whitesmoke;
  border: 1rem solid whitesmoke;
}

.mono svg {
  fill: black;
}

.mono .main .task:hover {
  background-color: whitesmoke;
  
}
.mono .main .task:hover h4 {
  color: black;
  
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,wBAAwB,GAAG,gBAAgB;EAC3C,qBAAqB,GAAG,YAAY;AACtC;;AAEA;EACE,4BAA4B;EAC5B,kCAAkC;;EAElC,6BAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;EAC3B,6BAA6B;EAC7B,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;;AAGA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,oDAAoD;EACpD;AACF;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,4CAA4C;EAC5C,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA,QAAQ;;AAER;EACE,aAAa;EACb,gCAAgC;EAChC,SAAS;EACT,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,cAAc;AAChB;AACA,cAAc;;AAEd;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,gDAAgD;EAChD,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;;AAGA,SAAS;;AAET;EACE,aAAa;EACb,mBAAmB;EACnB,wDAAwD;EACxD,oDAAoD;EACpD,+BAA+B;EAC/B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,yCAAyC;AAC3C;;;AAGA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,gDAAgD;EAChD,eAAe;EACf,mBAAmB;EACnB,6CAA6C;EAC7C,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;EACf,UAAU;EACV,oBAAoB;AACtB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,4CAA4C;EAC5C,kBAAkB;EAClB,2BAA2B;EAC3B,WAAW;AACb;;AAEA,SAAS;;AAET;EACE,uBAAuB;EACvB,mBAAmB;EACnB,+CAA+C;EAC/C,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;AACA,gBAAgB;;AAEhB;EACE,cAAc;EACd,qBAAqB;AACvB;AACA;EACE,4CAA4C;EAC5C,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,iDAAiD;EACjD,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;;AAGA;EACE,UAAU;EACV,YAAY;EACZ,cAAc;AAChB;;;AAGA,eAAe;AACf;EACE,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;EAC5B,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;AACjC;;AAEA;EACE,4BAA4B;EAC5B,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,4BAA4B;;AAE9B;AACA;EACE,YAAY;;AAEd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  -ms-overflow-style: none;  /* IE and Edge */\r\n  scrollbar-width: none;  /* Firefox */\r\n}\r\n\r\n:root{\r\n  --title-bg-color: 71, 33, 85;\r\n  --sideboard-bg-color: 137, 93, 148;\r\n\r\n  --pastel-green: 169, 215, 133;\r\n  --pastel-blue: 109, 194, 240;\r\n  --pastel-red: 227, 130, 130;\r\n  --pastel-yellow: 209, 176, 91;\r\n  --pastel-pink: 255, 170, 221;\r\n  --pastel-purple:169, 159, 227;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\nbody {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template: max-content max-content 1fr / 5fr 1fr;\r\n  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif\r\n}\r\n\r\n/* Header */\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  padding: 0.5rem;\r\n  background-color: rgb(var(--title-bg-color));\r\n  color: white;\r\n  grid-column: 1 / 3;\r\n  user-select: none;\r\n  font-family: 'Lobster', sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\n/* Nav */\r\n\r\nnav {\r\n  display: flex;\r\n  padding: 0.5rem 2rem 0.5rem 4rem;\r\n  gap: 2rem;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 1rem;\r\n}\r\n\r\nnav > ul > li, nav button, .sideboard > div:last-of-type h4 {\r\n  cursor: pointer;\r\n}\r\n\r\nnav > ul:last-child {\r\n  margin-left: auto;\r\n  gap: 2rem;\r\n  width: 50%;\r\n}\r\n\r\nnav button {\r\n  border: none;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n/* Sideboard */\r\n\r\n.sideboard {\r\n  padding: 2rem 2rem 1rem 2rem;\r\n  grid-column: 2 / -1;\r\n  grid-row: 2 / 4;\r\n  text-align: center;\r\n  display: grid;\r\n  gap: 0.2rem;\r\n  background-color: rgb(var(--sideboard-bg-color));\r\n  grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.sideboard h2 {\r\n  color: white;\r\n}\r\n\r\n.sideboard h4 {\r\n  color: black;\r\n}\r\n\r\n.sideboard > div:last-of-type h4 {\r\n  color: white;\r\n}\r\n\r\n.sideboard > div:last-of-type > div, .sideboard > div:first-of-type > div {\r\n  margin-top: 0.5rem;\r\n  display: grid;\r\n  gap: 0.2rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n/* Main */\r\n\r\n.main {\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n  grid-template-columns: repeat(auto-fit, minmax(10%,1fr));\r\n  grid-auto-columns: repeat(auto-fit, minmax(10%,1fr));\r\n  grid-auto-rows: minmax(50%,1fr);\r\n  text-align: center;\r\n  user-select: none;\r\n}\r\n\r\n.main > div:nth-child(1) {\r\n  background-color: rgb(var(--pastel-green));\r\n}\r\n\r\n.main > div:nth-child(2) {\r\n  background-color: rgb(var(--pastel-red));\r\n}\r\n\r\n.main > div:nth-child(3) {\r\n  background-color: rgb(var(--pastel-blue));\r\n}\r\n\r\n.main > div:nth-child(4) {\r\n  background-color: rgb(var(--pastel-yellow));\r\n}\r\n\r\n.main > div:nth-child(5) {\r\n  background-color: rgb(var(--pastel-purple));\r\n}\r\n\r\n.main > div:nth-child(6) {\r\n  background-color: rgb(var(--pastel-pink));\r\n}\r\n\r\n\r\n.main h4 {\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* Pop-Ups */\r\n\r\n.popup {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  visibility: hidden;\r\n}\r\n\r\n.popup form {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  gap: 2rem 1rem;\r\n  text-align: left;\r\n  font-size: 1.5rem;\r\n  background-color: rgb(var(--sideboard-bg-color));\r\n  padding: 1.5rem;\r\n  border-radius: 2rem;\r\n  border: 1rem solid rgb(var(--title-bg-color));\r\n  color: white;\r\n  user-select: initial;\r\n}\r\n\r\nform h2 {\r\n  grid-column: 1 / -1;\r\n  text-align: center;\r\n}\r\n\r\nform input[type=\"text\"]:nth-of-type(2) {\r\n  height: 6rem;\r\n}\r\n\r\nform button {\r\n  grid-column: 2 / -1;\r\n  font-size: 1.2rem;\r\n  border-radius: 1rem 0.5rem;\r\n  padding: 0.2rem;\r\n  width: 50%;\r\n  justify-self: center;\r\n}\r\n\r\n/* project */\r\n.project {\r\n  display: grid;\r\n  grid-template: max-content max-content / 1fr;\r\n  padding: 0rem 1rem;\r\n  grid-auto-rows: max-content;\r\n  gap: 0.5rem;\r\n}\r\n\r\n/* Task */\r\n\r\n.task {\r\n  background-color: azure;\r\n  border-radius: 1rem;\r\n  border: 0.2rem solid rgb(var(--title-bg-color));\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 0.2rem;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 0.25rem;\r\n  user-select: initial;\r\n}\r\n\r\n.task > p {\r\n  overflow-wrap: break-word;\r\n}\r\n.task > div {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.main .task:hover {\r\n  background-color: thistle;\r\n}\r\n/* Help Screen */\r\n\r\n.popup > div a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n.popup > div {\r\n  background-color: rgb(var(--title-bg-color));\r\n  color: whitesmoke;\r\n  padding: 1rem;\r\n  overflow: auto;\r\n  height: 98vh;\r\n  width: 60vw;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  border: 1rem solid rgb(var(--sideboard-bg-color));\r\n  border-radius: 1rem;\r\n}\r\n.popup > div h2 {\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n.popup > div > div.header {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.header > h3 {\r\n  font-style:italic;\r\n  font-size: 1.5rem;\r\n  margin-left: 1rem;\r\n}\r\n.header > h3 + h3 {\r\n  margin-left: 3rem;\r\n}\r\n\r\n.header > h3 + h3 + h3 {\r\n  margin-left: 5rem;\r\n}\r\n\r\n.help-content h3 {\r\n  margin: 1rem;\r\n}\r\n.help-content div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column-reverse;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.help-content img, .help-content p {\r\n  width: 60%;\r\n  height: auto;\r\n  margin: 0.1rem;\r\n}\r\n\r\n\r\n/* Mono Theme */\r\n.mono h1 {\r\n  background-color: black;\r\n  color: whitesmoke;\r\n}\r\n\r\n.mono nav {\r\n  background-color: whitesmoke;\r\n  color: black;\r\n  border: 1px solid black;\r\n}\r\n\r\n.mono .sideboard{\r\n  background-color: whitesmoke;\r\n  border: 1px solid black;\r\n}\r\n\r\n.mono .sideboard h2, body.mono .sideboard h4, body.mono .sideboard > div:last-of-type h4 {\r\n  color: black;\r\n}\r\n\r\n.mono .main > .project {\r\n  background-color: rgb(48, 48,48);\r\n  border: 1px solid black;\r\n}\r\n\r\n.mono .popup form {\r\n  background-color: black;\r\n  color: whitesmoke;\r\n  border: 1rem solid whitesmoke;\r\n}\r\n\r\n.mono .main h4 {\r\n  color: whitesmoke;\r\n  text-decoration-color: whitesmoke;\r\n}\r\n\r\n.mono .task {\r\n  background-color: black;\r\n  border: 0.2rem solid whitesmoke;\r\n}\r\n\r\n.mono .sideboard .task {\r\n  background-color: whitesmoke;\r\n  border: 0.2rem solid black;\r\n}\r\n\r\n.mono .popup > div {\r\n  background-color: black;\r\n  color: whitesmoke;\r\n  border: 1rem solid whitesmoke;\r\n}\r\n\r\n.mono svg {\r\n  fill: black;\r\n}\r\n\r\n.mono .main .task:hover {\r\n  background-color: whitesmoke;\r\n  \r\n}\r\n.mono .main .task:hover h4 {\r\n  color: black;\r\n  \r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDashboard: () => (/* binding */ getDashboard),
/* harmony export */   getTaskID: () => (/* binding */ getTaskID),
/* harmony export */   gridSize: () => (/* binding */ gridSize),
/* harmony export */   incTaskID: () => (/* binding */ incTaskID),
/* harmony export */   setDashboard: () => (/* binding */ setDashboard),
/* harmony export */   setSelectedProject: () => (/* binding */ setSelectedProject),
/* harmony export */   taskId: () => (/* binding */ taskId)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _taskDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDOM */ "./src/taskDOM.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile */ "./src/profile.js");
/* harmony import */ var _videos_AddProject_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videos/AddProject.gif */ "./src/videos/AddProject.gif");
/* harmony import */ var _videos_addTask_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./videos/addTask.gif */ "./src/videos/addTask.gif");
/* harmony import */ var _videos_EditProject_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./videos/EditProject.gif */ "./src/videos/EditProject.gif");
/* harmony import */ var _videos_EditTask_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videos/EditTask.gif */ "./src/videos/EditTask.gif");
/* harmony import */ var _videos_FinishTask_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./videos/FinishTask.gif */ "./src/videos/FinishTask.gif");
/* harmony import */ var _videos_ViewProject_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./videos/ViewProject.gif */ "./src/videos/ViewProject.gif");
/* harmony import */ var _videos_DeleteProject_gif__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./videos/DeleteProject.gif */ "./src/videos/DeleteProject.gif");
/* harmony import */ var _videos_DeleteTask_gif__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./videos/DeleteTask.gif */ "./src/videos/DeleteTask.gif");








//videos









(0,_popup__WEBPACK_IMPORTED_MODULE_5__.popupProject)();
(0,_popup__WEBPACK_IMPORTED_MODULE_5__.closePopups)();
(0,_popup__WEBPACK_IMPORTED_MODULE_5__.popUpHelp)();

//ID
let taskId = 0;
let getTaskID = () => taskId;
let incTaskID = () => {taskId++};

//Change Grid size
let gridSize = 4;

let gridBtn = document.querySelectorAll("nav > ul:first-of-type > li");

gridBtn[0].addEventListener("click",() => {
  gridSize = 4
  document.querySelector('.sideboard > div:last-of-type h4').click();
})

gridBtn[1].addEventListener("click",() => {
  gridSize = 5
  document.querySelector('.sideboard > div:last-of-type h4').click();
})

gridBtn[2].addEventListener("click",() => {
  gridSize = 6
  document.querySelector('.sideboard > div:last-of-type h4').click();
})

//selected project
let selectedProject;
let getSelectedProject = () => selectedProject;
let setSelectedProject = (project) => {selectedProject = project}; 

//Dashboard View
let dashboardView = true;
let getDashboard = () => dashboardView;
let setDashboard = (bool) => {dashboardView = bool};


//Call get Local Storage
(0,_profile__WEBPACK_IMPORTED_MODULE_6__.getLocalStorage)();

  //Set Dashboard Listener
  let viewDashboard = ((profile) => {
    document.querySelector('.sideboard > div:last-of-type h4').addEventListener("click",() => {
      let projectDisplays = document.querySelectorAll('.main > .project');
      //Remove all projects in main
      for(let project of projectDisplays){
        project.remove();
      }
      (0,_profile__WEBPACK_IMPORTED_MODULE_6__.updateProjects)(profile)
      setDashboard(true);
    })
  })(_profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile);


if(_profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile.getProjects() == 0){
    //Add General
    let projectContainer = document.querySelector(".sideboard > div:last-of-type > div");
    let generalProject = (0,_projectDOM__WEBPACK_IMPORTED_MODULE_4__.createProject)((0,_project__WEBPACK_IMPORTED_MODULE_3__.project)("General"));
    generalProject.projectNode.addEventListener("dblclick", () => {
    document.querySelector(".popup").style.visibility = "visible";
    })
    let projectName = document.createElement("h4");
    projectName.textContent = generalProject.projectObj.getName();
    projectContainer.appendChild(projectName);
    _profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile.getProjects().push(generalProject);
    let projectsMain = document.querySelector(".main");
    projectsMain.appendChild(generalProject.projectNode);
    //Create Event Listener to add tasks to project
    (0,_popup__WEBPACK_IMPORTED_MODULE_5__.popupTask)(generalProject);
    //Add Event Listener to view Project
    (0,_projectDOM__WEBPACK_IMPORTED_MODULE_4__.viewProject)(_profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile, document.querySelector(".sideboard > div:last-of-type h4:last-of-type"));
}

let btnSubmitProject = document.querySelector(".popup:nth-of-type(4) button");
btnSubmitProject.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector(".popup:nth-of-type(4) form").checkValidity()){
    //A new project is able to be added to main
      let project  = (0,_projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_profile__WEBPACK_IMPORTED_MODULE_6__.setLocalStorage)(_profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile);
      document.querySelector('#projectName').value = ''; //clear name
    }
  }
);


let btnSubmitTask = document.querySelector("form button");
btnSubmitTask.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector("form").checkValidity()){
    let task = (0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.createTask)((0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.getTask)());
    (0,_taskDOM__WEBPACK_IMPORTED_MODULE_2__.addTask)(task,getSelectedProject());
    (0,_profile__WEBPACK_IMPORTED_MODULE_6__.setLocalStorage)(_profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile);
    document.querySelector('#taskName').value = ''; //clear name
    document.querySelector('#taskDesc').value = ''; //clear desc
    document.querySelector('#taskDate').value = ''; //clear date
    document.querySelector('#taskPriority').value = 'low';//reset priority
  }
})

//Change Themes
let classic = document.querySelector('nav > ul:last-of-type > li')
let mono = document.querySelector('nav > ul:last-of-type > li + li');

classic.addEventListener("click", () => {
  document.body.classList.remove('mono');
  (0,_profile__WEBPACK_IMPORTED_MODULE_6__.setLocalStorage)(_profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile)
})

mono.addEventListener("click", () => {
  document.body.classList.add('mono');
  (0,_profile__WEBPACK_IMPORTED_MODULE_6__.setLocalStorage)(_profile__WEBPACK_IMPORTED_MODULE_6__.defaultProfile)
})

//Help View
const addProjectGIF = new Image();
addProjectGIF.src = _videos_AddProject_gif__WEBPACK_IMPORTED_MODULE_7__
document.querySelector('#helpAdd + div').appendChild(addProjectGIF);

const addTaskGIF = new Image();
addTaskGIF.src = _videos_addTask_gif__WEBPACK_IMPORTED_MODULE_8__;
document.querySelector('#helpAdd + div + h3 + div').appendChild(addTaskGIF);

const editProjectGIF = new Image();
editProjectGIF.src = _videos_EditProject_gif__WEBPACK_IMPORTED_MODULE_9__;
document.querySelector("#helpEdit + div").appendChild(editProjectGIF);

const editTaskGIF = new Image();
editTaskGIF.src = _videos_EditTask_gif__WEBPACK_IMPORTED_MODULE_10__;
document.querySelector('#helpEdit + div + h3 + div').appendChild(editTaskGIF);

const finishTaskGIF = new Image();
finishTaskGIF.src = _videos_FinishTask_gif__WEBPACK_IMPORTED_MODULE_11__;
document.querySelector(`#helpEdit + div${" + h3 + div".repeat(2)}`).appendChild(finishTaskGIF);


const viewProjectGIF = new Image();
viewProjectGIF.src = _videos_ViewProject_gif__WEBPACK_IMPORTED_MODULE_12__;
document.querySelector(`#helpEdit + div${" + h3 + div".repeat(3)}`).appendChild(viewProjectGIF);

const deleteProjectGIF = new Image();
deleteProjectGIF.src = _videos_DeleteProject_gif__WEBPACK_IMPORTED_MODULE_13__;
document.querySelector('#helpDelete + div').appendChild(deleteProjectGIF);

const deleteTaskGIF = new Image();
deleteTaskGIF.src = _videos_DeleteTask_gif__WEBPACK_IMPORTED_MODULE_14__;
document.querySelector('#helpDelete + div + h3 + div').appendChild(deleteTaskGIF);



/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closePopups: () => (/* binding */ closePopups),
/* harmony export */   popUpHelp: () => (/* binding */ popUpHelp),
/* harmony export */   popupProject: () => (/* binding */ popupProject),
/* harmony export */   popupTask: () => (/* binding */ popupTask)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function popupProject(){

  //Trigger popup form for project
  let newProject = document.querySelector("nav button");
  newProject.addEventListener("click", () => {
    document.querySelector(".projectForm").style.visibility = "visible";
  })
  
  document.querySelector(".projectForm form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

function closePopups(){
  //Close project popup
  //.popup functions as div in the query selector. Left as popup for readability
  document.querySelector(".projectForm").addEventListener("click", () => {  
    document.querySelector(".projectForm").style.visibility = "hidden";
  })

  //Close task popup
  document.querySelector(".taskForm").addEventListener("click", () => {
    document.querySelector(".taskForm").style.visibility = "hidden";
  })

  //Prevent task popup from closing when clicking on forms
  document.querySelector("form").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  //Close help popup
    document.querySelector(".help").addEventListener("click", () => {
      document.querySelector(".help").style.visibility = "hidden";
  })
}
function popupTask(project){
  project.projectNode.addEventListener("dblclick", (e) => {
    document.querySelector(".popup").style.visibility = "visible";
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setSelectedProject)(project);
  })
}

function popUpHelp(){
  //Help Screens
  let helpBtn = document.querySelector('nav > ul:last-of-type > li:last-of-type');

  document.querySelector(".popup > div").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  helpBtn.addEventListener("click", () => {
    document.querySelector('.help').style.visibility = 'visible'
  })
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
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   profile: () => (/* binding */ profile),
/* harmony export */   setLocalStorage: () => (/* binding */ setLocalStorage),
/* harmony export */   updateProjects: () => (/* binding */ updateProjects),
/* harmony export */   updateUpcoming: () => (/* binding */ updateUpcoming)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
/* harmony import */ var _taskDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskDOM */ "./src/taskDOM.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup */ "./src/popup.js");








let profile = (projects = []) => {
  let getProjects = () => projects
  let getAllTasks = () => {
    let tasks = [];
    for(let project of getProjects()){
      tasks.push(project.projectObj.getTasks());
    }
    tasks = tasks.flat();
    return tasks;
  }
  
  return {getProjects, getAllTasks}
}

let defaultProfile = profile();


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
  n = tasks.length > 3 ? 3 : tasks.length;
  let upcoming = document.querySelector(".sideboard > div > div")
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

function updateProjects(profile){
  for(let i = 0; i < profile.getProjects().length && i < _index__WEBPACK_IMPORTED_MODULE_1__.gridSize; i++){
    document.querySelector(".main").appendChild(profile.getProjects()[i].projectNode);
  }
}


function setLocalStorage(profile){
  //clear previous local storage
  localStorage.clear();
  //Flatten All Projects
  let projectNames = profile.getProjects().map((x) => x.projectObj.getName()); //;; is used as part of a delimter
  let tasks = [];
  for(let project of profile.getProjects()){
    tasks.push(project.projectObj.getTasks());
  }
  let noTasks = tasks.map((x) => x.length);
  tasks = tasks.flat();
  let taskNames = tasks.map((x) => x.taskObj.getName()); //;; is used as part of a delimter
  let taskDescs = tasks.map((x) => x.taskObj.getDesc());
  let taskPriorities = tasks.map((x) => x.taskObj.getPriority());
  let taskDeadlines = tasks.map((x) => x.taskObj.getDeadline());
  localStorage.setItem('theme',document.body.classList.value);
  localStorage.setItem('projectNames',projectNames);
  localStorage.setItem('taskNames',taskNames);
  localStorage.setItem('taskDescs',taskDescs);
  localStorage.setItem('taskPriorities',taskPriorities);
  localStorage.setItem('taskDeadlines',taskDeadlines);
  localStorage.setItem('noTasks',noTasks);
}

function getLocalStorage(){
  try{
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.setDashboard)(true);
    if(localStorage.getItem('theme') == 'mono'){
      document.body.classList.add('mono');
    }
    //Add Projects
    let projectNames = localStorage.getItem('projectNames');
    projectNames = projectNames.split(',');
    let noTasks = localStorage.getItem('noTasks');
    noTasks = noTasks.split(',');

    //Add Tasks Info
    let taskNames = localStorage.getItem('taskNames');
    taskNames = taskNames.split(',');
    console.log(taskNames);

    let taskDescs = localStorage.getItem('taskDescs');
    taskDescs = taskDescs.split(',');
    console.log(taskDescs);

    let taskPriorities = localStorage.getItem('taskPriorities');
    taskPriorities = taskPriorities.split(',');
    console.log(taskPriorities);
    
    let taskDeadlines = localStorage.getItem('taskDeadlines')
    taskDeadlines = taskDeadlines.split(',');
    console.log(taskDeadlines);

    //Create Project and Tasks
    
    //Add General
    let projectContainer = document.querySelector(".sideboard > div:last-of-type > div");
    let generalProject = (0,_projectDOM__WEBPACK_IMPORTED_MODULE_3__.createProject)((0,_project__WEBPACK_IMPORTED_MODULE_2__.project)("General"));
    generalProject.projectNode.addEventListener("dblclick", () => {
    document.querySelector(".popup").style.visibility = "visible";
    })
    let projectName = document.createElement("h4");
    projectName.textContent = generalProject.projectObj.getName();
    projectContainer.appendChild(projectName);
    defaultProfile.getProjects().push(generalProject);
    let projectsMain = document.querySelector(".main");
    projectsMain.appendChild(generalProject.projectNode);
    //Create Event Listener to add tasks to project
    (0,_popup__WEBPACK_IMPORTED_MODULE_5__.popupTask)(generalProject);
    //Add Event Listener to view Project
    (0,_projectDOM__WEBPACK_IMPORTED_MODULE_3__.viewProject)(defaultProfile, document.querySelector(".sideboard > div:last-of-type h4:last-of-type"));
    for(let i = 0; i <noTasks[0];i++){
      let currTask = (0,_taskDOM__WEBPACK_IMPORTED_MODULE_4__.createTask)((0,_task__WEBPACK_IMPORTED_MODULE_0__.task)(taskNames[i],taskDescs[i],taskDeadlines[i],taskPriorities[i],(0,_index__WEBPACK_IMPORTED_MODULE_1__.getTaskID)()));
      (0,_taskDOM__WEBPACK_IMPORTED_MODULE_4__.addTask)(currTask,generalProject);
    }

    //Iterate through number of projects excluding general. Keep a total count of all tasks
    for(let i = 1, k=noTasks[0]; i < projectNames.length; i++){
      let currProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)(projectNames[i]);
      currProject = (0,_projectDOM__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultProfile,currProject);
      for(let j = 0; j < noTasks[i]; j++,k++){
        let currTask = (0,_taskDOM__WEBPACK_IMPORTED_MODULE_4__.createTask)((0,_task__WEBPACK_IMPORTED_MODULE_0__.task)(taskNames[k],taskDescs[k],taskDeadlines[k],taskPriorities[k],(0,_index__WEBPACK_IMPORTED_MODULE_1__.getTaskID)()));
        (0,_taskDOM__WEBPACK_IMPORTED_MODULE_4__.addTask)(currTask,currProject);
      }
    }
  }catch(e){
    console.log('Local Storage is empty or not supported');
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
function project(name){
  let getName = () => name;

  let setName = newName => {name = newName}

  let tasks = [];
  let getTasks = () => tasks;

  return {getName, getTasks,setName}
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
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteProjectFromLabel: () => (/* binding */ deleteProjectFromLabel),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   viewProject: () => (/* binding */ viewProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _taskDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDOM */ "./src/taskDOM.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./src/profile.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup */ "./src/popup.js");







function createProject(projectObj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)("")){
  let projectNode = document.createElement("div");
  projectNode.classList.add("project");

  let projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");

  let projectName = document.createElement("h4");
  projectName.textContent = projectObj.getName();

  projectHeader.appendChild(projectName);
  projectNode.appendChild(projectHeader);
  
  return {projectObj, projectNode};
}

function getProject(){
  let projectName = document.querySelector("#projectName").value;

  return (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(projectName);
}

function addProject(profile = _profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile, projectObj = getProject()){
  let projectsMain = document.querySelector(".main");
  let numProjects = document.querySelectorAll(".main > div");
  let projectContainer = document.querySelector(".sideboard > div:last-of-type > div");
  let newProject = createProject(projectObj);
  let projectName = document.createElement("h4");
  projectName.textContent = newProject.projectObj.getName();
  projectContainer.appendChild(projectName);
  profile.getProjects().push(newProject);
  if(numProjects.length < _index__WEBPACK_IMPORTED_MODULE_3__.gridSize && (0,_index__WEBPACK_IMPORTED_MODULE_3__.getDashboard)() == true){
      projectsMain.appendChild(newProject.projectNode);
  }
  //Create Event Listener to add tasks to project
  (0,_popup__WEBPACK_IMPORTED_MODULE_4__.popupTask)(newProject);
  //Create Event Listeners to delete/edit a project
  deleteProject(_profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile,newProject);
  editProject(_profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile,newProject);
  deleteProjectFromLabel(_profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile,document.querySelector(".sideboard > div:last-of-type h4:last-of-type"));
  //Add Event Listener to view Project
  viewProject(_profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile, document.querySelector(".sideboard > div:last-of-type h4:last-of-type"));
  return newProject;
}

function deleteProject(profile=_profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile,project){
  project.projectNode.addEventListener("contextmenu",(e) => {
    let projectIndex = profile.getProjects().indexOf(project)
    profile.getProjects().splice(projectIndex,1);
    let projectContainer = document.querySelector(".sideboard > div:last-of-type > div");
    projectContainer.querySelector(`h4:nth-child(${projectIndex+2})`).remove();
    e.preventDefault();
    e.target.remove();
    (0,_profile__WEBPACK_IMPORTED_MODULE_2__.updateProjects)(profile)
    ;(0,_profile__WEBPACK_IMPORTED_MODULE_2__.updateUpcoming)(profile);
    (0,_profile__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(profile)
  })
}

function viewProject(profile=_profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile, projectLabel){
  projectLabel.addEventListener("click", () => {
    let projectDisplays = document.querySelectorAll('.main > .project');
    let projectLabels = document.querySelectorAll('.sideboard > div:last-of-type h4');
    let projectLabelIndex;
    //Project h4 Index in the sideboard display
    for(let i=1; i < projectLabels.length; i++){
      if(projectLabels[i] == projectLabel){
        projectLabelIndex = i - 1;  //ignore dashboard label
        break;
      }
    }    
    
    //Remove all projects in main
    for(let project of projectDisplays){
      project.remove();
    }
    //Add the project display to main
    document.querySelector('.main').appendChild(profile.getProjects()[projectLabelIndex].projectNode)
    
    let projectDisplay = document.querySelector('.main > div')
    //Add all of the tasks in the project to the display
    for(let task of profile.getProjects()[projectLabelIndex].projectObj.getTasks()){
      projectDisplay.appendChild(task.taskNode);
    }

    (0,_index__WEBPACK_IMPORTED_MODULE_3__.setDashboard)(false);
  })
}

function deleteProjectFromLabel(profile=_profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile,projectLabel){
    projectLabel.addEventListener("contextmenu", (e) => {
    let projectDisplays = document.querySelectorAll('.main > .project');
    let projectLabels = document.querySelectorAll('.sideboard > div:last-of-type h4');
    let projectLabelIndex;
    //Project h4 Index in the sideboard display
    for(let i=2; i < projectLabels.length; i++){
      if(projectLabels[i] == projectLabel){
        projectLabelIndex = i - 1; //shift left to 0 index
        break;
      }
    }
    projectLabel.remove();
    //remove project from main
    for(let project of projectDisplays){
      if(project == projectDisplays[projectLabelIndex]){
        project.remove();
        break
      }
    }
    profile.getProjects().splice(projectLabelIndex,1)
    e.preventDefault();
    if((0,_index__WEBPACK_IMPORTED_MODULE_3__.getDashboard)() == true){
      (0,_profile__WEBPACK_IMPORTED_MODULE_2__.updateProjects)(profile);
    }
    (0,_profile__WEBPACK_IMPORTED_MODULE_2__.updateUpcoming)(profile);
    (0,_profile__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(profile);
})
}

function editProject(profile=_profile__WEBPACK_IMPORTED_MODULE_2__.defaultProfile, project){
  //Edit project title
  project.projectNode.querySelector("h4").addEventListener("dblclick", (e) => {
    e.target.contentEditable = "true";
    e.stopPropagation();
    e.target.focus();
  })

  //Project h4 Index in the sideboard display
  let projectIndex  = profile.getProjects().indexOf(project) + 2;
  let projectLabel = document.querySelector(`.sideboard > div:last-of-type h4:nth-of-type(${projectIndex})`);

  
  project.projectNode.addEventListener("focusout", (e) => {
    e.target.contentEditable = "false";
    //update content for task
    project.projectObj.setName(project.projectNode.querySelector("h4").textContent);
    projectLabel.textContent = project.projectObj.getName();
    (0,_profile__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(profile);
  }) 
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

  //unique id to quickly identify tasks
  let getID = () => id;

  let setName = newName => {name = newName}
  let setDesc = newDesc => {desc = newDesc}
  let setDeadline = newDeadline => {deadline = newDeadline}
  let setPriority = newPriority => {priority = newPriority}
  let setID = newID => {
    //ID can only be assigned once
    if(id == undefined){
      id = newID;
    }
  }
  return {getName, getDesc, getDeadline, getPriority, getID, setName, setDesc, setDeadline, setPriority,setID}
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




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

function addTask(task,project){
  (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.incTaskID)();
  task.taskNode.addEventListener("dblclick", (e) => {
    e.stopPropagation();
  })
  task.taskNode.addEventListener("click", () => {
    if(task.taskNode.style.textDecoration == "line-through"){
      task.taskNode.style.textDecoration = "none";
    }else{
      task.taskNode.style.textDecoration = "line-through";
    }
  })
  
  //Appends task object to a list of task and a tasknode to the project node
  project.projectNode.appendChild(task.taskNode);
  project.projectObj.getTasks().push(task);

  //create event listeners to delete and edit task
  deleteTask(task, project);
  editTask(task);
  
  //Update sideboard
  (0,_profile__WEBPACK_IMPORTED_MODULE_1__.updateUpcoming)(_profile__WEBPACK_IMPORTED_MODULE_1__.defaultProfile);
}

function deleteTask(task, project){
      //Deletes the task when right-clicked
      task.taskNode.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();
        task.taskNode.remove();
        //delete task obj from project
        let index = project.projectObj.getTasks().findIndex(checkID);
        project.projectObj.getTasks().splice(index, 1);
        (0,_profile__WEBPACK_IMPORTED_MODULE_1__.updateUpcoming)(_profile__WEBPACK_IMPORTED_MODULE_1__.defaultProfile);

        function checkID(currentTask){
          return currentTask.taskObj.getID() == task.taskObj.getID();
        }

        (0,_profile__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(_profile__WEBPACK_IMPORTED_MODULE_1__.defaultProfile);
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
        task.taskObj.setName(task.taskNode.querySelector("h4").textContent);
        task.taskObj.setDesc(task.taskNode.querySelector("p").textContent);
        task.taskObj.setPriority(task.taskNode.querySelector("div").textContent);
        task.taskObj.setDeadline(task.taskNode.querySelector("input[type='date']").value);
        task.taskNode.style.textDecoration = "none";
        (0,_profile__WEBPACK_IMPORTED_MODULE_1__.updateUpcoming)(_profile__WEBPACK_IMPORTED_MODULE_1__.defaultProfile);
        (0,_profile__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(_profile__WEBPACK_IMPORTED_MODULE_1__.defaultProfile);
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

/***/ }),

/***/ "./src/videos/AddProject.gif":
/*!***********************************!*\
  !*** ./src/videos/AddProject.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39b33ea567daae8f6495.gif";

/***/ }),

/***/ "./src/videos/DeleteProject.gif":
/*!**************************************!*\
  !*** ./src/videos/DeleteProject.gif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2171b509e7ca59310fd.gif";

/***/ }),

/***/ "./src/videos/DeleteTask.gif":
/*!***********************************!*\
  !*** ./src/videos/DeleteTask.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98ff8faa8ef26d2a0689.gif";

/***/ }),

/***/ "./src/videos/EditProject.gif":
/*!************************************!*\
  !*** ./src/videos/EditProject.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f37d9e4c1adcf0b92b13.gif";

/***/ }),

/***/ "./src/videos/EditTask.gif":
/*!*********************************!*\
  !*** ./src/videos/EditTask.gif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff2211e2f154e7b1a1d9.gif";

/***/ }),

/***/ "./src/videos/FinishTask.gif":
/*!***********************************!*\
  !*** ./src/videos/FinishTask.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5924e3ce0c27898fa50a.gif";

/***/ }),

/***/ "./src/videos/ViewProject.gif":
/*!************************************!*\
  !*** ./src/videos/ViewProject.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "240bd0ac68e1028200d2.gif";

/***/ }),

/***/ "./src/videos/addTask.gif":
/*!********************************!*\
  !*** ./src/videos/addTask.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "934ac0c6e3a5d9e7f757.gif";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUhBQXFIO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSx3QkFBd0IsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZ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QUFDdEMsT0FBTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYyxDQUFDLG9EQUFjO0FBQ3JDLFFBQVEseURBQWUsQ0FBQyxvREFBYztBQUN0QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9maWxlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza0RPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOnJvb3R7XHJcbiAgLS10aXRsZS1iZy1jb2xvcjogNzEsIDMzLCA4NTtcclxuICAtLXNpZGVib2FyZC1iZy1jb2xvcjogMTM3LCA5MywgMTQ4O1xyXG5cclxuICAtLXBhc3RlbC1ncmVlbjogMTY5LCAyMTUsIDEzMztcclxuICAtLXBhc3RlbC1ibHVlOiAxMDksIDE5NCwgMjQwO1xyXG4gIC0tcGFzdGVsLXJlZDogMjI3LCAxMzAsIDEzMDtcclxuICAtLXBhc3RlbC15ZWxsb3c6IDIwOSwgMTc2LCA5MTtcclxuICAtLXBhc3RlbC1waW5rOiAyNTUsIDE3MCwgMjIxO1xyXG4gIC0tcGFzdGVsLXB1cnBsZToxNjksIDE1OSwgMjI3O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnIgLyA1ZnIgMWZyO1xyXG4gIGZvbnQtZmFtaWx5OkNhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZlxyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tdGl0bGUtYmctY29sb3IpKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLyogTmF2ICovXHJcblxyXG5uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMC41cmVtIDJyZW0gMC41cmVtIDRyZW07XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxubmF2ID4gdWwgPiBsaSwgbmF2IGJ1dHRvbiwgLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgaDQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubmF2ID4gdWw6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbm5hdiBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi8qIFNpZGVib2FyZCAqL1xyXG5cclxuLnNpZGVib2FyZCB7XHJcbiAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gMnJlbTtcclxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xyXG4gIGdyaWQtcm93OiAyIC8gNDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDAuMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tc2lkZWJvYXJkLWJnLWNvbG9yKSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG59XHJcblxyXG4uc2lkZWJvYXJkIGgyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zaWRlYm9hcmQgaDQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgaDQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgPiBkaXYsIC5zaWRlYm9hcmQgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IGRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAwLjJyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuXHJcbi8qIE1haW4gKi9cclxuXHJcbi5tYWluIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMCUsMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwJSwxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDUwJSwxZnIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWdyZWVuKSk7XHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1yZWQpKTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWJsdWUpKTtcclxufVxyXG5cclxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXllbGxvdykpO1xyXG59XHJcblxyXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1wYXN0ZWwtcHVycGxlKSk7XHJcbn1cclxuXHJcbi5tYWluID4gZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1waW5rKSk7XHJcbn1cclxuXHJcblxyXG4ubWFpbiBoNCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLyogUG9wLVVwcyAqL1xyXG5cclxuLnBvcHVwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnBvcHVwIGZvcm0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gIGdhcDogMnJlbSAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXNpZGVib2FyZC1iZy1jb2xvcikpO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJvcmRlcjogMXJlbSBzb2xpZCByZ2IodmFyKC0tdGl0bGUtYmctY29sb3IpKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdXNlci1zZWxlY3Q6IGluaXRpYWw7XHJcbn1cclxuXHJcbmZvcm0gaDIge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOm50aC1vZi10eXBlKDIpIHtcclxuICBoZWlnaHQ6IDZyZW07XHJcbn1cclxuXHJcbmZvcm0gYnV0dG9uIHtcclxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBwcm9qZWN0ICovXHJcbi5wcm9qZWN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IG1heC1jb250ZW50IC8gMWZyO1xyXG4gIHBhZGRpbmc6IDByZW0gMXJlbTtcclxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi8qIFRhc2sgKi9cclxuXHJcbi50YXNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJnYih2YXIoLS10aXRsZS1iZy1jb2xvcikpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC4yNXJlbTtcclxuICB1c2VyLXNlbGVjdDogaW5pdGlhbDtcclxufVxyXG5cclxuLnRhc2sgPiBwIHtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi50YXNrID4gZGl2IHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubWFpbiAudGFzazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhpc3RsZTtcclxufVxyXG4vKiBIZWxwIFNjcmVlbiAqL1xyXG5cclxuLnBvcHVwID4gZGl2IGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucG9wdXAgPiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS10aXRsZS1iZy1jb2xvcikpO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiA5OHZoO1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgYm9yZGVyOiAxcmVtIHNvbGlkIHJnYih2YXIoLS1zaWRlYm9hcmQtYmctY29sb3IpKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcbi5wb3B1cCA+IGRpdiBoMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5wb3B1cCA+IGRpdiA+IGRpdi5oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5oZWFkZXIgPiBoMyB7XHJcbiAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuLmhlYWRlciA+IGgzICsgaDMge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG59XHJcblxyXG4uaGVhZGVyID4gaDMgKyBoMyArIGgzIHtcclxuICBtYXJnaW4tbGVmdDogNXJlbTtcclxufVxyXG5cclxuLmhlbHAtY29udGVudCBoMyB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcbi5oZWxwLWNvbnRlbnQgZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmhlbHAtY29udGVudCBpbWcsIC5oZWxwLWNvbnRlbnQgcCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwLjFyZW07XHJcbn1cclxuXHJcblxyXG4vKiBNb25vIFRoZW1lICovXHJcbi5tb25vIGgxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm1vbm8gbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm1vbm8gLnNpZGVib2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubW9ubyAuc2lkZWJvYXJkIGgyLCBib2R5Lm1vbm8gLnNpZGVib2FyZCBoNCwgYm9keS5tb25vIC5zaWRlYm9hcmQgPiBkaXY6bGFzdC1vZi10eXBlIGg0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb25vIC5tYWluID4gLnByb2plY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsNDgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubW9ubyAucG9wdXAgZm9ybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyOiAxcmVtIHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5tb25vIC5tYWluIGg0IHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5tb25vIC50YXNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4ubW9ubyAuc2lkZWJvYXJkIC50YXNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubW9ubyAucG9wdXAgPiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlcjogMXJlbSBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4ubW9ubyBzdmcge1xyXG4gIGZpbGw6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9ubyAubWFpbiAudGFzazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBcclxufVxyXG4ubW9ubyAubWFpbiAudGFzazpob3ZlciBoNCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIFxyXG59XHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHdCQUF3QixHQUFHLGdCQUFnQjtFQUMzQyxxQkFBcUIsR0FBRyxZQUFZO0FBQ3RDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtDQUFrQzs7RUFFbEMsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0RBQW9EO0VBQ3BEO0FBQ0Y7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0EsY0FBYzs7QUFFZDtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdEQUFnRDtFQUNoRCwy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LHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7O0FBRTlCO0FBQ0E7RUFDRSxZQUFZOztBQUVkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cXHJcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAtLXRpdGxlLWJnLWNvbG9yOiA3MSwgMzMsIDg1O1xcclxcbiAgLS1zaWRlYm9hcmQtYmctY29sb3I6IDEzNywgOTMsIDE0ODtcXHJcXG5cXHJcXG4gIC0tcGFzdGVsLWdyZWVuOiAxNjksIDIxNSwgMTMzO1xcclxcbiAgLS1wYXN0ZWwtYmx1ZTogMTA5LCAxOTQsIDI0MDtcXHJcXG4gIC0tcGFzdGVsLXJlZDogMjI3LCAxMzAsIDEzMDtcXHJcXG4gIC0tcGFzdGVsLXllbGxvdzogMjA5LCAxNzYsIDkxO1xcclxcbiAgLS1wYXN0ZWwtcGluazogMjU1LCAxNzAsIDIyMTtcXHJcXG4gIC0tcGFzdGVsLXB1cnBsZToxNjksIDE1OSwgMjI3O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnIgLyA1ZnIgMWZyO1xcclxcbiAgZm9udC1mYW1pbHk6Q2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmXFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS10aXRsZS1iZy1jb2xvcikpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2ICovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gNHJlbTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiA+IHVsID4gbGksIG5hdiBidXR0b24sIC5zaWRlYm9hcmQgPiBkaXY6bGFzdC1vZi10eXBlIGg0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gdWw6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbm5hdiBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG4vKiBTaWRlYm9hcmQgKi9cXHJcXG5cXHJcXG4uc2lkZWJvYXJkIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMnJlbSAxcmVtIDJyZW07XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcclxcbiAgZ3JpZC1yb3c6IDIgLyA0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMC4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXNpZGVib2FyZC1iZy1jb2xvcikpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJvYXJkIGgyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVib2FyZCBoNCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYm9hcmQgPiBkaXY6bGFzdC1vZi10eXBlIGg0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgPiBkaXYsIC5zaWRlYm9hcmQgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IGRpdiB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAwLjJyZW07XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNYWluICovXFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwJSwxZnIpKTtcXHJcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMCUsMWZyKSk7XFxyXFxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDUwJSwxZnIpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLWdyZWVuKSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXJlZCkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1ibHVlKSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2Om50aC1jaGlsZCg0KSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcGFzdGVsLXllbGxvdykpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA+IGRpdjpudGgtY2hpbGQoNSkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXBhc3RlbC1wdXJwbGUpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gPiBkaXY6bnRoLWNoaWxkKDYpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1wYXN0ZWwtcGluaykpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWFpbiBoNCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFBvcC1VcHMgKi9cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gIGdhcDogMnJlbSAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXNpZGVib2FyZC1iZy1jb2xvcikpO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGJvcmRlcjogMXJlbSBzb2xpZCByZ2IodmFyKC0tdGl0bGUtYmctY29sb3IpKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGgyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbSAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3QgKi9cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgLyAxZnI7XFxyXFxuICBwYWRkaW5nOiAwcmVtIDFyZW07XFxyXFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGFzayAqL1xcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJnYih2YXIoLS10aXRsZS1iZy1jb2xvcikpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMC4yNXJlbTtcXHJcXG4gIHVzZXItc2VsZWN0OiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayA+IHAge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLnRhc2sgPiBkaXYge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluIC50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRoaXN0bGU7XFxyXFxufVxcclxcbi8qIEhlbHAgU2NyZWVuICovXFxyXFxuXFxyXFxuLnBvcHVwID4gZGl2IGEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5wb3B1cCA+IGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tdGl0bGUtYmctY29sb3IpKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiA5OHZoO1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBib3JkZXI6IDFyZW0gc29saWQgcmdiKHZhcigtLXNpZGVib2FyZC1iZy1jb2xvcikpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuLnBvcHVwID4gZGl2IGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbi5wb3B1cCA+IGRpdiA+IGRpdi5oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciA+IGgzIHtcXHJcXG4gIGZvbnQtc3R5bGU6aXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuLmhlYWRlciA+IGgzICsgaDMge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgPiBoMyArIGgzICsgaDMge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWxwLWNvbnRlbnQgaDMge1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG4uaGVscC1jb250ZW50IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhlbHAtY29udGVudCBpbWcsIC5oZWxwLWNvbnRlbnQgcCB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE1vbm8gVGhlbWUgKi9cXHJcXG4ubW9ubyBoMSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ubyBuYXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ubyAuc2lkZWJvYXJke1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ubyAuc2lkZWJvYXJkIGgyLCBib2R5Lm1vbm8gLnNpZGVib2FyZCBoNCwgYm9keS5tb25vIC5zaWRlYm9hcmQgPiBkaXY6bGFzdC1vZi10eXBlIGg0IHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1vbm8gLm1haW4gPiAucHJvamVjdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LDQ4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ubyAucG9wdXAgZm9ybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYm9yZGVyOiAxcmVtIHNvbGlkIHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5tb25vIC5tYWluIGg0IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ubyAudGFzayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5tb25vIC5zaWRlYm9hcmQgLnRhc2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ubyAucG9wdXAgPiBkaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlcjogMXJlbSBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ubyBzdmcge1xcclxcbiAgZmlsbDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tb25vIC5tYWluIC50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBcXHJcXG59XFxyXFxuLm1vbm8gLm1haW4gLnRhc2s6aG92ZXIgaDQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7dGFzaywgc3ViVGFza30gZnJvbSAnLi90YXNrLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlVGFzaywgZGVsZXRlVGFzaywgZ2V0VGFzaywgZWRpdFRhc2ssIGFkZFRhc2sgfSBmcm9tICcuL3Rhc2tET00nO1xyXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IGFkZFByb2plY3QsIHt2aWV3UHJvamVjdCAsIGNyZWF0ZVByb2plY3R9IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCB7IHBvcHVwUHJvamVjdCwgcG9wdXBUYXNrLCBjbG9zZVBvcHVwcywgcG9wVXBIZWxwfSBmcm9tICcuL3BvcHVwJztcclxuaW1wb3J0IHsgZGVmYXVsdFByb2ZpbGUsIHVwZGF0ZVByb2plY3RzLCBzZXRMb2NhbFN0b3JhZ2UsZ2V0TG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9wcm9maWxlJztcclxuXHJcbi8vdmlkZW9zXHJcbmltcG9ydCBBZGRQcm9qZWN0VmlkIGZyb20gJy4vdmlkZW9zL0FkZFByb2plY3QuZ2lmJztcclxuaW1wb3J0IEFkZFRhc2tWaWQgZnJvbSAnLi92aWRlb3MvYWRkVGFzay5naWYnO1xyXG5pbXBvcnQgRWRpdFByb2plY3RWaWQgZnJvbSAnLi92aWRlb3MvRWRpdFByb2plY3QuZ2lmJztcclxuaW1wb3J0IEVkaXRUYXNrVmlkIGZyb20gJy4vdmlkZW9zL0VkaXRUYXNrLmdpZic7XHJcbmltcG9ydCBGaW5pc2hUYXNrVmlkIGZyb20gJy4vdmlkZW9zL0ZpbmlzaFRhc2suZ2lmJztcclxuaW1wb3J0IFZpZXdQcm9qZWN0VmlkIGZyb20gJy4vdmlkZW9zL1ZpZXdQcm9qZWN0LmdpZic7XHJcbmltcG9ydCBEZWxldGVQcm9qZWN0VmlkIGZyb20gJy4vdmlkZW9zL0RlbGV0ZVByb2plY3QuZ2lmJztcclxuaW1wb3J0IERlbGV0ZVRhc2tWaWQgZnJvbSAnLi92aWRlb3MvRGVsZXRlVGFzay5naWYnO1xyXG5cclxucG9wdXBQcm9qZWN0KCk7XHJcbmNsb3NlUG9wdXBzKCk7XHJcbnBvcFVwSGVscCgpO1xyXG5cclxuLy9JRFxyXG5leHBvcnQgbGV0IHRhc2tJZCA9IDA7XHJcbmV4cG9ydCBsZXQgZ2V0VGFza0lEID0gKCkgPT4gdGFza0lkO1xyXG5leHBvcnQgbGV0IGluY1Rhc2tJRCA9ICgpID0+IHt0YXNrSWQrK307XHJcblxyXG4vL0NoYW5nZSBHcmlkIHNpemVcclxuZXhwb3J0IGxldCBncmlkU2l6ZSA9IDQ7XHJcblxyXG5sZXQgZ3JpZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgPiB1bDpmaXJzdC1vZi10eXBlID4gbGlcIik7XHJcblxyXG5ncmlkQnRuWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICBncmlkU2l6ZSA9IDRcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJvYXJkID4gZGl2Omxhc3Qtb2YtdHlwZSBoNCcpLmNsaWNrKCk7XHJcbn0pXHJcblxyXG5ncmlkQnRuWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICBncmlkU2l6ZSA9IDVcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJvYXJkID4gZGl2Omxhc3Qtb2YtdHlwZSBoNCcpLmNsaWNrKCk7XHJcbn0pXHJcblxyXG5ncmlkQnRuWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICBncmlkU2l6ZSA9IDZcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJvYXJkID4gZGl2Omxhc3Qtb2YtdHlwZSBoNCcpLmNsaWNrKCk7XHJcbn0pXHJcblxyXG4vL3NlbGVjdGVkIHByb2plY3RcclxubGV0IHNlbGVjdGVkUHJvamVjdDtcclxubGV0IGdldFNlbGVjdGVkUHJvamVjdCA9ICgpID0+IHNlbGVjdGVkUHJvamVjdDtcclxuZXhwb3J0IGxldCBzZXRTZWxlY3RlZFByb2plY3QgPSAocHJvamVjdCkgPT4ge3NlbGVjdGVkUHJvamVjdCA9IHByb2plY3R9OyBcclxuXHJcbi8vRGFzaGJvYXJkIFZpZXdcclxubGV0IGRhc2hib2FyZFZpZXcgPSB0cnVlO1xyXG5leHBvcnQgbGV0IGdldERhc2hib2FyZCA9ICgpID0+IGRhc2hib2FyZFZpZXc7XHJcbmV4cG9ydCBsZXQgc2V0RGFzaGJvYXJkID0gKGJvb2wpID0+IHtkYXNoYm9hcmRWaWV3ID0gYm9vbH07XHJcblxyXG5cclxuLy9DYWxsIGdldCBMb2NhbCBTdG9yYWdlXHJcbmdldExvY2FsU3RvcmFnZSgpO1xyXG5cclxuICAvL1NldCBEYXNoYm9hcmQgTGlzdGVuZXJcclxuICBsZXQgdmlld0Rhc2hib2FyZCA9ICgocHJvZmlsZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgaDQnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgIGxldCBwcm9qZWN0RGlzcGxheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbiA+IC5wcm9qZWN0Jyk7XHJcbiAgICAgIC8vUmVtb3ZlIGFsbCBwcm9qZWN0cyBpbiBtYWluXHJcbiAgICAgIGZvcihsZXQgcHJvamVjdCBvZiBwcm9qZWN0RGlzcGxheXMpe1xyXG4gICAgICAgIHByb2plY3QucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlUHJvamVjdHMocHJvZmlsZSlcclxuICAgICAgc2V0RGFzaGJvYXJkKHRydWUpO1xyXG4gICAgfSlcclxuICB9KShkZWZhdWx0UHJvZmlsZSk7XHJcblxyXG5cclxuaWYoZGVmYXVsdFByb2ZpbGUuZ2V0UHJvamVjdHMoKSA9PSAwKXtcclxuICAgIC8vQWRkIEdlbmVyYWxcclxuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYm9hcmQgPiBkaXY6bGFzdC1vZi10eXBlID4gZGl2XCIpO1xyXG4gICAgbGV0IGdlbmVyYWxQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0KFwiR2VuZXJhbFwiKSk7XHJcbiAgICBnZW5lcmFsUHJvamVjdC5wcm9qZWN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9KVxyXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBnZW5lcmFsUHJvamVjdC5wcm9qZWN0T2JqLmdldE5hbWUoKTtcclxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgZGVmYXVsdFByb2ZpbGUuZ2V0UHJvamVjdHMoKS5wdXNoKGdlbmVyYWxQcm9qZWN0KTtcclxuICAgIGxldCBwcm9qZWN0c01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICBwcm9qZWN0c01haW4uYXBwZW5kQ2hpbGQoZ2VuZXJhbFByb2plY3QucHJvamVjdE5vZGUpO1xyXG4gICAgLy9DcmVhdGUgRXZlbnQgTGlzdGVuZXIgdG8gYWRkIHRhc2tzIHRvIHByb2plY3RcclxuICAgIHBvcHVwVGFzayhnZW5lcmFsUHJvamVjdCk7XHJcbiAgICAvL0FkZCBFdmVudCBMaXN0ZW5lciB0byB2aWV3IFByb2plY3RcclxuICAgIHZpZXdQcm9qZWN0KGRlZmF1bHRQcm9maWxlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgaDQ6bGFzdC1vZi10eXBlXCIpKTtcclxufVxyXG5cclxubGV0IGJ0blN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwOm50aC1vZi10eXBlKDQpIGJ1dHRvblwiKTtcclxuYnRuU3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIC8vQ2hlY2tzIGlmIGFsbCBvZiB0aGUgaHRtbCBmb3JtIHJlcXVpcmVtZW50cyBhcmUgZmlsbGVkXHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDpudGgtb2YtdHlwZSg0KSBmb3JtXCIpLmNoZWNrVmFsaWRpdHkoKSl7XHJcbiAgICAvL0EgbmV3IHByb2plY3QgaXMgYWJsZSB0byBiZSBhZGRlZCB0byBtYWluXHJcbiAgICAgIGxldCBwcm9qZWN0ICA9IGFkZFByb2plY3QoKTtcclxuICAgICAgc2V0TG9jYWxTdG9yYWdlKGRlZmF1bHRQcm9maWxlKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJykudmFsdWUgPSAnJzsgLy9jbGVhciBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuXHJcbmxldCBidG5TdWJtaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpO1xyXG5idG5TdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgLy9DaGVja3MgaWYgYWxsIG9mIHRoZSBodG1sIGZvcm0gcmVxdWlyZW1lbnRzIGFyZSBmaWxsZWRcclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKGdldFRhc2soKSk7XHJcbiAgICBhZGRUYXNrKHRhc2ssZ2V0U2VsZWN0ZWRQcm9qZWN0KCkpO1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGRlZmF1bHRQcm9maWxlKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTmFtZScpLnZhbHVlID0gJyc7IC8vY2xlYXIgbmFtZVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjJykudmFsdWUgPSAnJzsgLy9jbGVhciBkZXNjXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0RhdGUnKS52YWx1ZSA9ICcnOyAvL2NsZWFyIGRhdGVcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrUHJpb3JpdHknKS52YWx1ZSA9ICdsb3cnOy8vcmVzZXQgcHJpb3JpdHlcclxuICB9XHJcbn0pXHJcblxyXG4vL0NoYW5nZSBUaGVtZXNcclxubGV0IGNsYXNzaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgPiB1bDpsYXN0LW9mLXR5cGUgPiBsaScpXHJcbmxldCBtb25vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2ID4gdWw6bGFzdC1vZi10eXBlID4gbGkgKyBsaScpO1xyXG5cclxuY2xhc3NpYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9ubycpO1xyXG4gIHNldExvY2FsU3RvcmFnZShkZWZhdWx0UHJvZmlsZSlcclxufSlcclxuXHJcbm1vbm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vbm8nKTtcclxuICBzZXRMb2NhbFN0b3JhZ2UoZGVmYXVsdFByb2ZpbGUpXHJcbn0pXHJcblxyXG4vL0hlbHAgVmlld1xyXG5jb25zdCBhZGRQcm9qZWN0R0lGID0gbmV3IEltYWdlKCk7XHJcbmFkZFByb2plY3RHSUYuc3JjID0gQWRkUHJvamVjdFZpZFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVscEFkZCArIGRpdicpLmFwcGVuZENoaWxkKGFkZFByb2plY3RHSUYpO1xyXG5cclxuY29uc3QgYWRkVGFza0dJRiA9IG5ldyBJbWFnZSgpO1xyXG5hZGRUYXNrR0lGLnNyYyA9IEFkZFRhc2tWaWQ7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWxwQWRkICsgZGl2ICsgaDMgKyBkaXYnKS5hcHBlbmRDaGlsZChhZGRUYXNrR0lGKTtcclxuXHJcbmNvbnN0IGVkaXRQcm9qZWN0R0lGID0gbmV3IEltYWdlKCk7XHJcbmVkaXRQcm9qZWN0R0lGLnNyYyA9IEVkaXRQcm9qZWN0VmlkO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlbHBFZGl0ICsgZGl2XCIpLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0R0lGKTtcclxuXHJcbmNvbnN0IGVkaXRUYXNrR0lGID0gbmV3IEltYWdlKCk7XHJcbmVkaXRUYXNrR0lGLnNyYyA9IEVkaXRUYXNrVmlkO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVscEVkaXQgKyBkaXYgKyBoMyArIGRpdicpLmFwcGVuZENoaWxkKGVkaXRUYXNrR0lGKTtcclxuXHJcbmNvbnN0IGZpbmlzaFRhc2tHSUYgPSBuZXcgSW1hZ2UoKTtcclxuZmluaXNoVGFza0dJRi5zcmMgPSBGaW5pc2hUYXNrVmlkO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaGVscEVkaXQgKyBkaXYke1wiICsgaDMgKyBkaXZcIi5yZXBlYXQoMil9YCkuYXBwZW5kQ2hpbGQoZmluaXNoVGFza0dJRik7XHJcblxyXG5cclxuY29uc3Qgdmlld1Byb2plY3RHSUYgPSBuZXcgSW1hZ2UoKTtcclxudmlld1Byb2plY3RHSUYuc3JjID0gVmlld1Byb2plY3RWaWQ7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNoZWxwRWRpdCArIGRpdiR7XCIgKyBoMyArIGRpdlwiLnJlcGVhdCgzKX1gKS5hcHBlbmRDaGlsZCh2aWV3UHJvamVjdEdJRik7XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0R0lGID0gbmV3IEltYWdlKCk7XHJcbmRlbGV0ZVByb2plY3RHSUYuc3JjID0gRGVsZXRlUHJvamVjdFZpZDtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlbHBEZWxldGUgKyBkaXYnKS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0R0lGKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2tHSUYgPSBuZXcgSW1hZ2UoKTtcclxuZGVsZXRlVGFza0dJRi5zcmMgPSBEZWxldGVUYXNrVmlkO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVscERlbGV0ZSArIGRpdiArIGgzICsgZGl2JykuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0dJRik7XHJcblxyXG4iLCJpbXBvcnQge3NldFNlbGVjdGVkUHJvamVjdH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdXBQcm9qZWN0KCl7XHJcblxyXG4gIC8vVHJpZ2dlciBwb3B1cCBmb3JtIGZvciBwcm9qZWN0XHJcbiAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IGJ1dHRvblwiKTtcclxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICB9KVxyXG4gIFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm0gZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBvcHVwcygpe1xyXG4gIC8vQ2xvc2UgcHJvamVjdCBwb3B1cFxyXG4gIC8vLnBvcHVwIGZ1bmN0aW9ucyBhcyBkaXYgaW4gdGhlIHF1ZXJ5IHNlbGVjdG9yLiBMZWZ0IGFzIHBvcHVwIGZvciByZWFkYWJpbGl0eVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICB9KVxyXG5cclxuICAvL0Nsb3NlIHRhc2sgcG9wdXBcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tGb3JtXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gIH0pXHJcblxyXG4gIC8vUHJldmVudCB0YXNrIHBvcHVwIGZyb20gY2xvc2luZyB3aGVuIGNsaWNraW5nIG9uIGZvcm1zXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICAvL0Nsb3NlIGhlbHAgcG9wdXBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVscFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlbHBcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdXBUYXNrKHByb2plY3Qpe1xyXG4gIHByb2plY3QucHJvamVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBIZWxwKCl7XHJcbiAgLy9IZWxwIFNjcmVlbnNcclxuICBsZXQgaGVscEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiA+IHVsOmxhc3Qtb2YtdHlwZSA+IGxpOmxhc3Qtb2YtdHlwZScpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwID4gZGl2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgaGVscEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgfSlcclxufSIsImltcG9ydCB7dGFza30gIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgZ2V0VGFza0lELCBncmlkU2l6ZX0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IGFkZFByb2plY3QsIHsgY3JlYXRlUHJvamVjdCwgdmlld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0RE9NXCI7XHJcbmltcG9ydCB7IGFkZFRhc2ssIGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrRE9NXCI7XHJcbmltcG9ydCB7IHNldERhc2hib2FyZCwgZ2V0RGFzaGJvYXJkIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgcG9wdXBUYXNrIH0gZnJvbSBcIi4vcG9wdXBcIjtcclxuXHJcbmV4cG9ydCBsZXQgcHJvZmlsZSA9IChwcm9qZWN0cyA9IFtdKSA9PiB7XHJcbiAgbGV0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHNcclxuICBsZXQgZ2V0QWxsVGFza3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFza3MgPSBbXTtcclxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBnZXRQcm9qZWN0cygpKXtcclxuICAgICAgdGFza3MucHVzaChwcm9qZWN0LnByb2plY3RPYmouZ2V0VGFza3MoKSk7XHJcbiAgICB9XHJcbiAgICB0YXNrcyA9IHRhc2tzLmZsYXQoKTtcclxuICAgIHJldHVybiB0YXNrcztcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHtnZXRQcm9qZWN0cywgZ2V0QWxsVGFza3N9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZGVmYXVsdFByb2ZpbGUgPSBwcm9maWxlKCk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVwY29taW5nKHByb2ZpbGUpe1xyXG4gIC8vU29ydHMgdGhlIHRhc2sgYXJyYXkgYnkgZGF0ZSAgXHJcbiAgbGV0IHRhc2tzID0gcHJvZmlsZS5nZXRBbGxUYXNrcygpO1xyXG4gICAgXHJcbiAgICBsZXQgbiA9IHRhc2tzLmxlbmd0aDtcclxuICAgIHNvcnRCeVRpbWUodGFza3MsIG4pO1xyXG4gICAgdXBkYXRlVXBjb21pbmdET00odGFza3MsIDUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0QnlUaW1lKHRhc2tzLCBuKXtcclxuICBsZXQgaSwga2V5LCBqO1xyXG4gIGZvcihpID0gMTsgaSA8IG47IGkrKyl7XHJcbiAgICBrZXkgPSB0YXNrc1tpXTtcclxuICAgIGogPSBpIC0gMTtcclxuXHJcbiAgICB3aGlsZShqID49IDAgJiYgdGFza3Nbal0udGFza09iai5nZXREZWFkbGluZSgpID4ga2V5LnRhc2tPYmouZ2V0RGVhZGxpbmUoKSl7XHJcbiAgICAgIHRhc2tzW2ogKyAxXSA9IHRhc2tzW2pdO1xyXG4gICAgICBqIC09IDE7XHJcbiAgICB9XHJcbiAgICB0YXNrc1tqICsgMV0gPSBrZXk7XHJcbiAgfVxyXG59XHJcblxyXG4vL1JlcXVpcmVzIHNvcnRlZCB0YXNrcyBhcnJheVxyXG4vL1JlcXVpcmVzIG51bWJlciBvZiB0YXNrcyB0byBkaXNwbGF5IGluIERPTVxyXG5mdW5jdGlvbiB1cGRhdGVVcGNvbWluZ0RPTSh0YXNrcywgbil7XHJcbiAgY2xlYXJVcGNvbWluZ0RPTSgpO1xyXG4gIG4gPSB0YXNrcy5sZW5ndGggPiAzID8gMyA6IHRhc2tzLmxlbmd0aDtcclxuICBsZXQgdXBjb21pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVib2FyZCA+IGRpdiA+IGRpdlwiKVxyXG4gIGZvcihsZXQgaSA9IDAgOyBpIDwgbjsgaSsrKXtcclxuICAgIGxldCB0YXNrQ29weSA9IHRhc2tzW2ldLnRhc2tOb2RlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHVwY29taW5nLmFwcGVuZENoaWxkKHRhc2tDb3B5KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyVXBjb21pbmdET00oKXtcclxuICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGVib2FyZCA+IGRpdjpmaXJzdC1vZi10eXBlIC50YXNrXCIpO1xyXG4gIGZvcihsZXQgdGFzayBvZiB0YXNrcyl7XHJcbiAgICB0YXNrLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKHByb2ZpbGUpe1xyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmdldFByb2plY3RzKCkubGVuZ3RoICYmIGkgPCBncmlkU2l6ZTsgaSsrKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5hcHBlbmRDaGlsZChwcm9maWxlLmdldFByb2plY3RzKClbaV0ucHJvamVjdE5vZGUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UocHJvZmlsZSl7XHJcbiAgLy9jbGVhciBwcmV2aW91cyBsb2NhbCBzdG9yYWdlXHJcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgLy9GbGF0dGVuIEFsbCBQcm9qZWN0c1xyXG4gIGxldCBwcm9qZWN0TmFtZXMgPSBwcm9maWxlLmdldFByb2plY3RzKCkubWFwKCh4KSA9PiB4LnByb2plY3RPYmouZ2V0TmFtZSgpKTsgLy87OyBpcyB1c2VkIGFzIHBhcnQgb2YgYSBkZWxpbXRlclxyXG4gIGxldCB0YXNrcyA9IFtdO1xyXG4gIGZvcihsZXQgcHJvamVjdCBvZiBwcm9maWxlLmdldFByb2plY3RzKCkpe1xyXG4gICAgdGFza3MucHVzaChwcm9qZWN0LnByb2plY3RPYmouZ2V0VGFza3MoKSk7XHJcbiAgfVxyXG4gIGxldCBub1Rhc2tzID0gdGFza3MubWFwKCh4KSA9PiB4Lmxlbmd0aCk7XHJcbiAgdGFza3MgPSB0YXNrcy5mbGF0KCk7XHJcbiAgbGV0IHRhc2tOYW1lcyA9IHRhc2tzLm1hcCgoeCkgPT4geC50YXNrT2JqLmdldE5hbWUoKSk7IC8vOzsgaXMgdXNlZCBhcyBwYXJ0IG9mIGEgZGVsaW10ZXJcclxuICBsZXQgdGFza0Rlc2NzID0gdGFza3MubWFwKCh4KSA9PiB4LnRhc2tPYmouZ2V0RGVzYygpKTtcclxuICBsZXQgdGFza1ByaW9yaXRpZXMgPSB0YXNrcy5tYXAoKHgpID0+IHgudGFza09iai5nZXRQcmlvcml0eSgpKTtcclxuICBsZXQgdGFza0RlYWRsaW5lcyA9IHRhc2tzLm1hcCgoeCkgPT4geC50YXNrT2JqLmdldERlYWRsaW5lKCkpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudmFsdWUpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TmFtZXMnLHByb2plY3ROYW1lcyk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tOYW1lcycsdGFza05hbWVzKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0Rlc2NzJyx0YXNrRGVzY3MpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrUHJpb3JpdGllcycsdGFza1ByaW9yaXRpZXMpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrRGVhZGxpbmVzJyx0YXNrRGVhZGxpbmVzKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm9UYXNrcycsbm9UYXNrcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKXtcclxuICB0cnl7XHJcbiAgICBzZXREYXNoYm9hcmQodHJ1ZSk7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PSAnbW9ubycpe1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vbm8nKTtcclxuICAgIH1cclxuICAgIC8vQWRkIFByb2plY3RzXHJcbiAgICBsZXQgcHJvamVjdE5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lcycpO1xyXG4gICAgcHJvamVjdE5hbWVzID0gcHJvamVjdE5hbWVzLnNwbGl0KCcsJyk7XHJcbiAgICBsZXQgbm9UYXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub1Rhc2tzJyk7XHJcbiAgICBub1Rhc2tzID0gbm9UYXNrcy5zcGxpdCgnLCcpO1xyXG5cclxuICAgIC8vQWRkIFRhc2tzIEluZm9cclxuICAgIGxldCB0YXNrTmFtZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza05hbWVzJyk7XHJcbiAgICB0YXNrTmFtZXMgPSB0YXNrTmFtZXMuc3BsaXQoJywnKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tOYW1lcyk7XHJcblxyXG4gICAgbGV0IHRhc2tEZXNjcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrRGVzY3MnKTtcclxuICAgIHRhc2tEZXNjcyA9IHRhc2tEZXNjcy5zcGxpdCgnLCcpO1xyXG4gICAgY29uc29sZS5sb2codGFza0Rlc2NzKTtcclxuXHJcbiAgICBsZXQgdGFza1ByaW9yaXRpZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza1ByaW9yaXRpZXMnKTtcclxuICAgIHRhc2tQcmlvcml0aWVzID0gdGFza1ByaW9yaXRpZXMuc3BsaXQoJywnKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tQcmlvcml0aWVzKTtcclxuICAgIFxyXG4gICAgbGV0IHRhc2tEZWFkbGluZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0RlYWRsaW5lcycpXHJcbiAgICB0YXNrRGVhZGxpbmVzID0gdGFza0RlYWRsaW5lcy5zcGxpdCgnLCcpO1xyXG4gICAgY29uc29sZS5sb2codGFza0RlYWRsaW5lcyk7XHJcblxyXG4gICAgLy9DcmVhdGUgUHJvamVjdCBhbmQgVGFza3NcclxuICAgIFxyXG4gICAgLy9BZGQgR2VuZXJhbFxyXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgPiBkaXZcIik7XHJcbiAgICBsZXQgZ2VuZXJhbFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3QoXCJHZW5lcmFsXCIpKTtcclxuICAgIGdlbmVyYWxQcm9qZWN0LnByb2plY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH0pXHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGdlbmVyYWxQcm9qZWN0LnByb2plY3RPYmouZ2V0TmFtZSgpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcbiAgICBkZWZhdWx0UHJvZmlsZS5nZXRQcm9qZWN0cygpLnB1c2goZ2VuZXJhbFByb2plY3QpO1xyXG4gICAgbGV0IHByb2plY3RzTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIHByb2plY3RzTWFpbi5hcHBlbmRDaGlsZChnZW5lcmFsUHJvamVjdC5wcm9qZWN0Tm9kZSk7XHJcbiAgICAvL0NyZWF0ZSBFdmVudCBMaXN0ZW5lciB0byBhZGQgdGFza3MgdG8gcHJvamVjdFxyXG4gICAgcG9wdXBUYXNrKGdlbmVyYWxQcm9qZWN0KTtcclxuICAgIC8vQWRkIEV2ZW50IExpc3RlbmVyIHRvIHZpZXcgUHJvamVjdFxyXG4gICAgdmlld1Byb2plY3QoZGVmYXVsdFByb2ZpbGUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJvYXJkID4gZGl2Omxhc3Qtb2YtdHlwZSBoNDpsYXN0LW9mLXR5cGVcIikpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8bm9UYXNrc1swXTtpKyspe1xyXG4gICAgICBsZXQgY3VyclRhc2sgPSBjcmVhdGVUYXNrKHRhc2sodGFza05hbWVzW2ldLHRhc2tEZXNjc1tpXSx0YXNrRGVhZGxpbmVzW2ldLHRhc2tQcmlvcml0aWVzW2ldLGdldFRhc2tJRCgpKSk7XHJcbiAgICAgIGFkZFRhc2soY3VyclRhc2ssZ2VuZXJhbFByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSXRlcmF0ZSB0aHJvdWdoIG51bWJlciBvZiBwcm9qZWN0cyBleGNsdWRpbmcgZ2VuZXJhbC4gS2VlcCBhIHRvdGFsIGNvdW50IG9mIGFsbCB0YXNrc1xyXG4gICAgZm9yKGxldCBpID0gMSwgaz1ub1Rhc2tzWzBdOyBpIDwgcHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IGN1cnJQcm9qZWN0ID0gcHJvamVjdChwcm9qZWN0TmFtZXNbaV0pO1xyXG4gICAgICBjdXJyUHJvamVjdCA9IGFkZFByb2plY3QoZGVmYXVsdFByb2ZpbGUsY3VyclByb2plY3QpO1xyXG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgbm9UYXNrc1tpXTsgaisrLGsrKyl7XHJcbiAgICAgICAgbGV0IGN1cnJUYXNrID0gY3JlYXRlVGFzayh0YXNrKHRhc2tOYW1lc1trXSx0YXNrRGVzY3Nba10sdGFza0RlYWRsaW5lc1trXSx0YXNrUHJpb3JpdGllc1trXSxnZXRUYXNrSUQoKSkpO1xyXG4gICAgICAgIGFkZFRhc2soY3VyclRhc2ssY3VyclByb2plY3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfWNhdGNoKGUpe1xyXG4gICAgY29uc29sZS5sb2coJ0xvY2FsIFN0b3JhZ2UgaXMgZW1wdHkgb3Igbm90IHN1cHBvcnRlZCcpO1xyXG4gIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KG5hbWUpe1xyXG4gIGxldCBnZXROYW1lID0gKCkgPT4gbmFtZTtcclxuXHJcbiAgbGV0IHNldE5hbWUgPSBuZXdOYW1lID0+IHtuYW1lID0gbmV3TmFtZX1cclxuXHJcbiAgbGV0IHRhc2tzID0gW107XHJcbiAgbGV0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XHJcblxyXG4gIHJldHVybiB7Z2V0TmFtZSwgZ2V0VGFza3Msc2V0TmFtZX1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrLCBnZXRUYXNrIH0gZnJvbSBcIi4vdGFza0RPTVwiO1xyXG5pbXBvcnQgcHJvZmlsZSwge2RlZmF1bHRQcm9maWxlLCB1cGRhdGVVcGNvbWluZywgdXBkYXRlUHJvamVjdHMsIHNldExvY2FsU3RvcmFnZX0gZnJvbSBcIi4vcHJvZmlsZVwiO1xyXG5pbXBvcnQge2RlbGV0ZVRhc2t9IGZyb20gXCIuL3Rhc2tET01cIjtcclxuaW1wb3J0IHtncmlkU2l6ZSwgZ2V0RGFzaGJvYXJkLCBzZXREYXNoYm9hcmR9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHsgcG9wdXBUYXNrIH0gZnJvbSBcIi4vcG9wdXBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RPYmogPSBwcm9qZWN0KFwiXCIpKXtcclxuICBsZXQgcHJvamVjdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3ROb2RlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xyXG5cclxuICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XHJcblxyXG4gIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RPYmouZ2V0TmFtZSgpO1xyXG5cclxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICBwcm9qZWN0Tm9kZS5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICBcclxuICByZXR1cm4ge3Byb2plY3RPYmosIHByb2plY3ROb2RlfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3QoKXtcclxuICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3ROYW1lXCIpLnZhbHVlO1xyXG5cclxuICByZXR1cm4gcHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvZmlsZSA9IGRlZmF1bHRQcm9maWxlLCBwcm9qZWN0T2JqID0gZ2V0UHJvamVjdCgpKXtcclxuICBsZXQgcHJvamVjdHNNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gIGxldCBudW1Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbiA+IGRpdlwiKTtcclxuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJvYXJkID4gZGl2Omxhc3Qtb2YtdHlwZSA+IGRpdlwiKTtcclxuICBsZXQgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE9iaik7XHJcbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5wcm9qZWN0T2JqLmdldE5hbWUoKTtcclxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICBwcm9maWxlLmdldFByb2plY3RzKCkucHVzaChuZXdQcm9qZWN0KTtcclxuICBpZihudW1Qcm9qZWN0cy5sZW5ndGggPCBncmlkU2l6ZSAmJiBnZXREYXNoYm9hcmQoKSA9PSB0cnVlKXtcclxuICAgICAgcHJvamVjdHNNYWluLmFwcGVuZENoaWxkKG5ld1Byb2plY3QucHJvamVjdE5vZGUpO1xyXG4gIH1cclxuICAvL0NyZWF0ZSBFdmVudCBMaXN0ZW5lciB0byBhZGQgdGFza3MgdG8gcHJvamVjdFxyXG4gIHBvcHVwVGFzayhuZXdQcm9qZWN0KTtcclxuICAvL0NyZWF0ZSBFdmVudCBMaXN0ZW5lcnMgdG8gZGVsZXRlL2VkaXQgYSBwcm9qZWN0XHJcbiAgZGVsZXRlUHJvamVjdChkZWZhdWx0UHJvZmlsZSxuZXdQcm9qZWN0KTtcclxuICBlZGl0UHJvamVjdChkZWZhdWx0UHJvZmlsZSxuZXdQcm9qZWN0KTtcclxuICBkZWxldGVQcm9qZWN0RnJvbUxhYmVsKGRlZmF1bHRQcm9maWxlLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJvYXJkID4gZGl2Omxhc3Qtb2YtdHlwZSBoNDpsYXN0LW9mLXR5cGVcIikpO1xyXG4gIC8vQWRkIEV2ZW50IExpc3RlbmVyIHRvIHZpZXcgUHJvamVjdFxyXG4gIHZpZXdQcm9qZWN0KGRlZmF1bHRQcm9maWxlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgaDQ6bGFzdC1vZi10eXBlXCIpKTtcclxuICByZXR1cm4gbmV3UHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvZmlsZT1kZWZhdWx0UHJvZmlsZSxwcm9qZWN0KXtcclxuICBwcm9qZWN0LnByb2plY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLChlKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gcHJvZmlsZS5nZXRQcm9qZWN0cygpLmluZGV4T2YocHJvamVjdClcclxuICAgIHByb2ZpbGUuZ2V0UHJvamVjdHMoKS5zcGxpY2UocHJvamVjdEluZGV4LDEpO1xyXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgPiBkaXZcIik7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYGg0Om50aC1jaGlsZCgke3Byb2plY3RJbmRleCsyfSlgKS5yZW1vdmUoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xyXG4gICAgdXBkYXRlUHJvamVjdHMocHJvZmlsZSlcclxuICAgIHVwZGF0ZVVwY29taW5nKHByb2ZpbGUpO1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlKHByb2ZpbGUpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdQcm9qZWN0KHByb2ZpbGU9ZGVmYXVsdFByb2ZpbGUsIHByb2plY3RMYWJlbCl7XHJcbiAgcHJvamVjdExhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdERpc3BsYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4gPiAucHJvamVjdCcpO1xyXG4gICAgbGV0IHByb2plY3RMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJvYXJkID4gZGl2Omxhc3Qtb2YtdHlwZSBoNCcpO1xyXG4gICAgbGV0IHByb2plY3RMYWJlbEluZGV4O1xyXG4gICAgLy9Qcm9qZWN0IGg0IEluZGV4IGluIHRoZSBzaWRlYm9hcmQgZGlzcGxheVxyXG4gICAgZm9yKGxldCBpPTE7IGkgPCBwcm9qZWN0TGFiZWxzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgaWYocHJvamVjdExhYmVsc1tpXSA9PSBwcm9qZWN0TGFiZWwpe1xyXG4gICAgICAgIHByb2plY3RMYWJlbEluZGV4ID0gaSAtIDE7ICAvL2lnbm9yZSBkYXNoYm9hcmQgbGFiZWxcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLy9SZW1vdmUgYWxsIHByb2plY3RzIGluIG1haW5cclxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBwcm9qZWN0RGlzcGxheXMpe1xyXG4gICAgICBwcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgLy9BZGQgdGhlIHByb2plY3QgZGlzcGxheSB0byBtYWluXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZENoaWxkKHByb2ZpbGUuZ2V0UHJvamVjdHMoKVtwcm9qZWN0TGFiZWxJbmRleF0ucHJvamVjdE5vZGUpXHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluID4gZGl2JylcclxuICAgIC8vQWRkIGFsbCBvZiB0aGUgdGFza3MgaW4gdGhlIHByb2plY3QgdG8gdGhlIGRpc3BsYXlcclxuICAgIGZvcihsZXQgdGFzayBvZiBwcm9maWxlLmdldFByb2plY3RzKClbcHJvamVjdExhYmVsSW5kZXhdLnByb2plY3RPYmouZ2V0VGFza3MoKSl7XHJcbiAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHRhc2sudGFza05vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhc2hib2FyZChmYWxzZSk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tTGFiZWwocHJvZmlsZT1kZWZhdWx0UHJvZmlsZSxwcm9qZWN0TGFiZWwpe1xyXG4gICAgcHJvamVjdExhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IHByb2plY3REaXNwbGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluID4gLnByb2plY3QnKTtcclxuICAgIGxldCBwcm9qZWN0TGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgaDQnKTtcclxuICAgIGxldCBwcm9qZWN0TGFiZWxJbmRleDtcclxuICAgIC8vUHJvamVjdCBoNCBJbmRleCBpbiB0aGUgc2lkZWJvYXJkIGRpc3BsYXlcclxuICAgIGZvcihsZXQgaT0yOyBpIDwgcHJvamVjdExhYmVscy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGlmKHByb2plY3RMYWJlbHNbaV0gPT0gcHJvamVjdExhYmVsKXtcclxuICAgICAgICBwcm9qZWN0TGFiZWxJbmRleCA9IGkgLSAxOyAvL3NoaWZ0IGxlZnQgdG8gMCBpbmRleFxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0TGFiZWwucmVtb3ZlKCk7XHJcbiAgICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gbWFpblxyXG4gICAgZm9yKGxldCBwcm9qZWN0IG9mIHByb2plY3REaXNwbGF5cyl7XHJcbiAgICAgIGlmKHByb2plY3QgPT0gcHJvamVjdERpc3BsYXlzW3Byb2plY3RMYWJlbEluZGV4XSl7XHJcbiAgICAgICAgcHJvamVjdC5yZW1vdmUoKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm9maWxlLmdldFByb2plY3RzKCkuc3BsaWNlKHByb2plY3RMYWJlbEluZGV4LDEpXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihnZXREYXNoYm9hcmQoKSA9PSB0cnVlKXtcclxuICAgICAgdXBkYXRlUHJvamVjdHMocHJvZmlsZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVVcGNvbWluZyhwcm9maWxlKTtcclxuICAgIHNldExvY2FsU3RvcmFnZShwcm9maWxlKTtcclxufSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2ZpbGU9ZGVmYXVsdFByb2ZpbGUsIHByb2plY3Qpe1xyXG4gIC8vRWRpdCBwcm9qZWN0IHRpdGxlXHJcbiAgcHJvamVjdC5wcm9qZWN0Tm9kZS5xdWVyeVNlbGVjdG9yKFwiaDRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnRhcmdldC5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gIH0pXHJcblxyXG4gIC8vUHJvamVjdCBoNCBJbmRleCBpbiB0aGUgc2lkZWJvYXJkIGRpc3BsYXlcclxuICBsZXQgcHJvamVjdEluZGV4ICA9IHByb2ZpbGUuZ2V0UHJvamVjdHMoKS5pbmRleE9mKHByb2plY3QpICsgMjtcclxuICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGVib2FyZCA+IGRpdjpsYXN0LW9mLXR5cGUgaDQ6bnRoLW9mLXR5cGUoJHtwcm9qZWN0SW5kZXh9KWApO1xyXG5cclxuICBcclxuICBwcm9qZWN0LnByb2plY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoZSkgPT4ge1xyXG4gICAgZS50YXJnZXQuY29udGVudEVkaXRhYmxlID0gXCJmYWxzZVwiO1xyXG4gICAgLy91cGRhdGUgY29udGVudCBmb3IgdGFza1xyXG4gICAgcHJvamVjdC5wcm9qZWN0T2JqLnNldE5hbWUocHJvamVjdC5wcm9qZWN0Tm9kZS5xdWVyeVNlbGVjdG9yKFwiaDRcIikudGV4dENvbnRlbnQpO1xyXG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0T2JqLmdldE5hbWUoKTtcclxuICAgIHNldExvY2FsU3RvcmFnZShwcm9maWxlKTtcclxuICB9KSBcclxufSIsImV4cG9ydCBmdW5jdGlvbiB0YXNrKG5hbWUsZGVzYyxkZWFkbGluZSxwcmlvcml0eSwgaWQpe1xyXG4gIFxyXG4gIGxldCBkYXRlQWRkZWQgPSBuZXcgRGF0ZSgpO1xyXG4gIFxyXG4gIC8vVHlwZXM6IE5vbmUsIE9yZGVyZWQsIFVub3JkZXJlZC4gXHJcbiAgLy9Pbmx5IGFwcGxpY2FibGUgaWYgdGhlcmUgYXJlIHN1YnRhc2tzLlxyXG4gIGxldCB0eXBlID0gJ25vbmUnO1xyXG5cclxuICBsZXQgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcbiAgbGV0IGdldERlc2MgPSAoKSA9PiBkZXNjO1xyXG4gIGxldCBnZXREZWFkbGluZSA9ICgpID0+IGRlYWRsaW5lO1xyXG4gIGxldCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xyXG5cclxuICAvL3VuaXF1ZSBpZCB0byBxdWlja2x5IGlkZW50aWZ5IHRhc2tzXHJcbiAgbGV0IGdldElEID0gKCkgPT4gaWQ7XHJcblxyXG4gIGxldCBzZXROYW1lID0gbmV3TmFtZSA9PiB7bmFtZSA9IG5ld05hbWV9XHJcbiAgbGV0IHNldERlc2MgPSBuZXdEZXNjID0+IHtkZXNjID0gbmV3RGVzY31cclxuICBsZXQgc2V0RGVhZGxpbmUgPSBuZXdEZWFkbGluZSA9PiB7ZGVhZGxpbmUgPSBuZXdEZWFkbGluZX1cclxuICBsZXQgc2V0UHJpb3JpdHkgPSBuZXdQcmlvcml0eSA9PiB7cHJpb3JpdHkgPSBuZXdQcmlvcml0eX1cclxuICBsZXQgc2V0SUQgPSBuZXdJRCA9PiB7XHJcbiAgICAvL0lEIGNhbiBvbmx5IGJlIGFzc2lnbmVkIG9uY2VcclxuICAgIGlmKGlkID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIGlkID0gbmV3SUQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7Z2V0TmFtZSwgZ2V0RGVzYywgZ2V0RGVhZGxpbmUsIGdldFByaW9yaXR5LCBnZXRJRCwgc2V0TmFtZSwgc2V0RGVzYywgc2V0RGVhZGxpbmUsIHNldFByaW9yaXR5LHNldElEfVxyXG59XHJcbiIsImltcG9ydCB7dGFza30gZnJvbSAnLi90YXNrLmpzJztcclxuaW1wb3J0IHsgZGVmYXVsdFByb2ZpbGUsIHNldExvY2FsU3RvcmFnZSwgdXBkYXRlVXBjb21pbmd9IGZyb20gJy4vcHJvZmlsZSc7XHJcbmltcG9ydCB7Z2V0VGFza0lEICwgaW5jVGFza0lEfSBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tPYmogPSB0YXNrKFwiXCIsXCJcIiwgbmV3IERhdGUoKSxcIk5vcm1hbFwiKSl7XHJcbiAgbGV0IHRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuXHJcbiAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFza09iai5nZXROYW1lKCk7XHJcblxyXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFza09iai5nZXREZXNjKCk7XHJcblxyXG4gIGxldCB0YXNrRGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza0RlYWRsaW5lLnR5cGUgPSAnZGF0ZSc7XHJcbiAgdGFza0RlYWRsaW5lLnZhbHVlID0gdGFza09iai5nZXREZWFkbGluZSgpO1xyXG5cclxuICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzd2l0Y2godGFza09iai5nZXRQcmlvcml0eSgpKXtcclxuICAgIGNhc2UgJ2xvdyc6XHJcbiAgICAgIHRhc2tQcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ21vZGVyYXRlJzpcclxuICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2hpZ2gnOlxyXG4gICAgICB0YXNrUHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gIHRhc2tOb2RlLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgdGFza05vZGUuYXBwZW5kQ2hpbGQodGFza0RlYWRsaW5lKTtcclxuICB0YXNrTm9kZS5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XHJcblxyXG4gIHJldHVybiB7dGFza09iaiwgdGFza05vZGV9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFzaygpe1xyXG4gIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIikudmFsdWU7XHJcbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGVzY1wiKS52YWx1ZTtcclxuICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlXCIpLnZhbHVlO1xyXG4gIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tQcmlvcml0eVwiKS52YWx1ZTtcclxuXHJcbiAgcmV0dXJuIHRhc2sodGFza05hbWUsdGFza0Rlc2MsdGFza0RhdGUsdGFza1ByaW9yaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGFzayxwcm9qZWN0KXtcclxuICBpbmNUYXNrSUQoKTtcclxuICB0YXNrLnRhc2tOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KVxyXG4gIHRhc2sudGFza05vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmKHRhc2sudGFza05vZGUuc3R5bGUudGV4dERlY29yYXRpb24gPT0gXCJsaW5lLXRocm91Z2hcIil7XHJcbiAgICAgIHRhc2sudGFza05vZGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcclxuICAgIH1lbHNle1xyXG4gICAgICB0YXNrLnRhc2tOb2RlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gIC8vQXBwZW5kcyB0YXNrIG9iamVjdCB0byBhIGxpc3Qgb2YgdGFzayBhbmQgYSB0YXNrbm9kZSB0byB0aGUgcHJvamVjdCBub2RlXHJcbiAgcHJvamVjdC5wcm9qZWN0Tm9kZS5hcHBlbmRDaGlsZCh0YXNrLnRhc2tOb2RlKTtcclxuICBwcm9qZWN0LnByb2plY3RPYmouZ2V0VGFza3MoKS5wdXNoKHRhc2spO1xyXG5cclxuICAvL2NyZWF0ZSBldmVudCBsaXN0ZW5lcnMgdG8gZGVsZXRlIGFuZCBlZGl0IHRhc2tcclxuICBkZWxldGVUYXNrKHRhc2ssIHByb2plY3QpO1xyXG4gIGVkaXRUYXNrKHRhc2spO1xyXG4gIFxyXG4gIC8vVXBkYXRlIHNpZGVib2FyZFxyXG4gIHVwZGF0ZVVwY29taW5nKGRlZmF1bHRQcm9maWxlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaywgcHJvamVjdCl7XHJcbiAgICAgIC8vRGVsZXRlcyB0aGUgdGFzayB3aGVuIHJpZ2h0LWNsaWNrZWRcclxuICAgICAgdGFzay50YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0YXNrLnRhc2tOb2RlLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vZGVsZXRlIHRhc2sgb2JqIGZyb20gcHJvamVjdFxyXG4gICAgICAgIGxldCBpbmRleCA9IHByb2plY3QucHJvamVjdE9iai5nZXRUYXNrcygpLmZpbmRJbmRleChjaGVja0lEKTtcclxuICAgICAgICBwcm9qZWN0LnByb2plY3RPYmouZ2V0VGFza3MoKS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHVwZGF0ZVVwY29taW5nKGRlZmF1bHRQcm9maWxlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tJRChjdXJyZW50VGFzayl7XHJcbiAgICAgICAgICByZXR1cm4gY3VycmVudFRhc2sudGFza09iai5nZXRJRCgpID09IHRhc2sudGFza09iai5nZXRJRCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKGRlZmF1bHRQcm9maWxlKTtcclxuICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKHRhc2spe1xyXG4gICAgICAvL0VkaXQgdGFzayB0aXRsZVxyXG4gICAgICB0YXNrLnRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJoNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUudGFyZ2V0LmZvY3VzKCk7XHJcbiAgICAgIH0pXHJcbiAgXHJcbiAgICAgIC8vRWRpdCB0YXNrIGRlc2NyaXB0aW9uXHJcbiAgICAgIHRhc2sudGFza05vZGUucXVlcnlTZWxlY3RvcihcInBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgICB9KVxyXG4gIFxyXG4gICAgICAvL0VkaXQgUHJpb3JpdHlcclxuICAgICAgdGFzay50YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLFxyXG4gICAgICAgIGBcclxuICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibW9kZXJhdGVcIj5Nb2RlcmF0ZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIGBcclxuICAgICAgICApXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLmZvY3VzKCk7XHJcbiAgICAgICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHByaW9yaXR5SW5wdXQpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRhc2sudGFza05vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuY29udGVudEVkaXRhYmxlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgIC8vdXBkYXRlIGNvbnRlbnQgZm9yIHRhc2tcclxuICAgICAgICB0YXNrLnRhc2tPYmouc2V0TmFtZSh0YXNrLnRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJoNFwiKS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgdGFzay50YXNrT2JqLnNldERlc2ModGFzay50YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgdGFzay50YXNrT2JqLnNldFByaW9yaXR5KHRhc2sudGFza05vZGUucXVlcnlTZWxlY3RvcihcImRpdlwiKS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgdGFzay50YXNrT2JqLnNldERlYWRsaW5lKHRhc2sudGFza05vZGUucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J2RhdGUnXVwiKS52YWx1ZSk7XHJcbiAgICAgICAgdGFzay50YXNrTm9kZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIHVwZGF0ZVVwY29taW5nKGRlZmF1bHRQcm9maWxlKTtcclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoZGVmYXVsdFByb2ZpbGUpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9EaXNwbGF5cyBhIHByaW9yaXR5IHNlbGVjdCBpbnB1dFxyXG4gICAgICBmdW5jdGlvbiBwcmlvcml0eUlucHV0KGUpe1xyXG4gICAgICAgIGxldCBwcmlvcml0eSA9ICB0YXNrLnRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgc3dpdGNoKHByaW9yaXR5LnZhbHVlKXtcclxuICAgICAgICAgIGNhc2UgJ2xvdyc6XHJcbiAgICAgICAgICAgIHRhc2sudGFza05vZGUucXVlcnlTZWxlY3RvcihcImRpdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ21vZGVyYXRlJzpcclxuICAgICAgICAgICAgdGFzay50YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxyXG4gICAgICAgICAgICB0YXNrLnRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmlvcml0eS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9