'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _UA = navigator.userAgent.toLowerCase();
var browser = {
  name: '',
  kernel: '',
  version: '',
  platform: '',
  vendorPrefix: ''
};
if (_UA.indexOf('trident/') > -1 || _UA.indexOf('edge/') > -1) {
  browser.vendorPrefix = 'ms';
}
if (_UA.indexOf('presto/') > -1) {
  browser.vendorPrefix = 'o';
}
if (_UA.indexOf('applewebKit/') > -1) {
  browser.vendorPrefix = 'webkit';
}
if (_UA.indexOf('gecko/') > -1) {
  browser.vendorPrefix = 'moz';
}

exports['default'] = browser;
module.exports = exports['default'];