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

let ResourceLoader = {
	load(arg){
		let _HEAD = document.head;
		for (var i = 0; i < arg.length; i++) {

			let _RES = document.createElement(arg[i][0]);

			for (var j = arg[i].length - 1; j >= 1; j--) {
				let _ARG = arg[i][j].split(':');
				_RES.setAttribute(_ARG[0], _ARG[1]);
			}
			_HEAD.appendChild(_RES);
		}
	},
	loadCSS(arg){
		let _ARG = [];
		for (var i = 0; i < arg.length; i++) {
			_ARG.push(['style', 'type:text/css', `href:${arg[i]}`]);
		}
		this.load(_ARG);
	},
	loadJS(arg){
		let _ARG = [];
		for (var i = 0; i < arg.length; i++) {
			_ARG.push(['script', 'type:text/javascript', `href:${arg[i]}`]);
		}
		this.load(_ARG);
	},
	loadIMG(arg){
		let _ARG = [];
		for (var i = 0; i < arg.length; i++) {
			_ARG.push(['img', `href:${arg[i]}`]);
		}
		this.load(_ARG);
	}
};

// ResourceLoader.load(res);

export default ResourceLoader;
