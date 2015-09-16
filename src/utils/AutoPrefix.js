const isBrowser = typeof window !== 'undefined';
let Modernizr = isBrowser ? require('./TestPrefixed') : undefined;

module.exports = {

  addPrefixed(key) {
    let _UA = navigator.userAgent.toLowerCase();
    let browser = {
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

  all(styles) {
    let prefixedStyle = {};
    for (let key in styles) {
      prefixedStyle[this.addPrefixed(key)] = styles[key];
    }
    return prefixedStyle;
  },

  set(style, key, value) {
    style[this.single(key)] = value;
  },

  single(key) {
    return isBrowser ? Modernizr.prefixed(key) : key;
  },

  singleHyphened(key) {
    let str = this.single(key);

    return !str ? key : str.replace(/([A-Z])/g, (str,m1) => {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/,'-ms-');
  }

};
