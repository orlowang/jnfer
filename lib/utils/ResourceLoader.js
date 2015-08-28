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
				var _ARG = arg[i][j].split('::');
				if (_ARG[0] == 'innertext') {
					_RES.innerText = _ARG[1];
				} else {
					_RES.setAttribute(_ARG[0], _ARG[1]);
				}
			}
			_HEAD.appendChild(_RES);
		}
	},
	link: function link(arg) {
		var _ARG = [];
		for (var i = 0; i < arg.length; i++) {
			_ARG.push(['link', 'rel::stylesheet', 'type::text/css', 'href::' + arg[i]]);
		}
		this.load(_ARG);
	},
	script: function script(arg) {
		var _ARG = [];
		for (var i = 0; i < arg.length; i++) {
			_ARG.push(['script', 'type::text/javascript', 'src::' + arg[i]]);
		}
		this.load(_ARG);
	},
	img: function img(arg) {
		var _ARG = [];
		for (var i = 0; i < arg.length; i++) {
			_ARG.push(['img', 'src::' + arg[i]]);
		}
		this.load(_ARG);
	},
	style: function style(arg) {
		var _ARG = [];
		for (var i = 0; i < arg.length; i++) {
			_ARG.push(['style', 'type::text/css', 'innertext::' + arg[i]]);
		}
		this.load(_ARG);
	}
};

// ResourceLoader.load(res);

exports['default'] = ResourceLoader;
module.exports = exports['default'];