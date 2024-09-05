const { JSDOM } =  require('jsdom');

const { window } = new JSDOM('', { url: 'http://localhost/' });

global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.SVGElement = window.SVGElement || function () {};
global.Element = window.Element; // Add Element definition
global.Node = window.Node;
global.HTMLElement = window.HTMLElement;
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};

global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};



// jsdom('', { url: 'http://localhost/' }); // Initialize JSDOM with a base URL

// // Polyfill for missing DOM APIs
// global.SVGElement = global.SVGElement || function () {};
// "test": "mocha --webpack-config webpack.config.js --require test/setup.js test/*.spec.js",