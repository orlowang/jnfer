/**=================================================
 * |	ResourceLoader utils | BSD
 * |	@authors   IveWang (ivework@outlook.com)
 * |	@date      2015-08-25 14:04:00
 * |	@version   $Id$
 * |	@copyright Jnfinity
 * =================================================
 */
// 'use strict';
// var res = [
// 	['style', 'type:text/css', 'href:./nit.css'],
// 	['style', 'type:text/css', 'href:./ppp.css']
// ];

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var ResourceLoader = {
	load: function load(arg) {
		var _HEAD = document.head;
		for (var i = 0; i < arg.length; i++) {

			var _RES = document.createElement(arg[i][0]);

			for (var j = arg[i].length - 1; j >= 1; j--) {
				var _ARG = arg[i][j].split(':');
				_RES.setAttribute(_ARG[0], _ARG[1]);
			}
			_HEAD.appendChild(_RES);
		}
	},
	loadCSS: function loadCSS(arg) {
		var _ARG = [];
		for (var i = 0; i < arg.length; i++) {
			_ARG.push(['style', 'type:text/css', 'href:' + arg[i]]);
		}
		this.load(_ARG);
	},
	loadJS: function loadJS(arg) {
		return arg;
	},
	loadIMG: function loadIMG(arg) {
		return arg;
	}
};

// ResourceLoader.load(res);

exports['default'] = ResourceLoader;
module.exports = exports['default'];