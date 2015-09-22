let _UA = window.navigator.userAgent.toLowerCase();
let browser = {
	name: '',
  kernel: '',
  version: '',
  platform: '',
  prefix: ''
};
if (_UA.indexOf('msie/') > -1) {browser.prefix = '-ms-';}
if (_UA.indexOf('opera/') > -1) {browser.prefix = '-o-';}
if (_UA.indexOf('applewebkit/') > -1) {browser.prefix = '-webkit-';}
if (_UA.indexOf('firefox/') > -1) {browser.prefix = '-moz-';}

export default browser;
