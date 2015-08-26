'use strict';

var isBrowser = typeof window !== 'undefined';
var Modernizr = isBrowser ? require('./TestPrefixed') : undefined;

module.exports = {

  addPrefixed: function addPrefixed(key) {
    var _UA = navigator.userAgent.toLowerCase();
    var browser = {
      kernelPrefix: ''
    };
    console.log(_UA.indexOf('applewebKit'));
    _UA.indexOf('trident/') > -1 || _UA.indexOf('edge/') > -1 ? browser.kernelPrefix = 'ms' : false;
    _UA.indexOf('presto') > -1 ? browser.kernelPrefix = 'o' : false;
    _UA.indexOf('applewebKit') > -1 ? browser.kernelPrefix = 'webkit' : false;
    _UA.indexOf('gecko') > -1 ? browser.kernelPrefix = 'moz' : false;
    if (isBrowser) {
      if (Modernizr.prefixed(key)) {
        return key;
      } else {
        return browser.kernelPrefix + key;
      }
    }
  },

  all: function all(styles) {
    var prefixedStyle = {};
    for (var key in styles) {
      prefixedStyle[this.addPrefixed(key)] = styles[key];
    }
    return prefixedStyle;
  },

  set: function set(style, key, value) {
    style[this.single(key)] = value;
  },

  single: function single(key) {
    return isBrowser ? Modernizr.prefixed(key) : key;
  },

  singleHyphened: function singleHyphened(key) {
    var str = this.single(key);

    return !str ? key : str.replace(/([A-Z])/g, function (str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }

};