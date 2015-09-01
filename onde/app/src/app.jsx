import React from "react";
import ResetStyle from "../../../lib/utils/ResetStyle";
import UserCSS from "../../../lib/utils/UserCSS";
import ResourceLoader from "../../../lib/utils/ResourceLoader";
import PanelLeft from "./layout/PanelLeft.jsx";
import HandleArea from "./layout/HandleArea.jsx";

var USERSET = {
	title: ['title', 'innertext::Auto Design'],
	bodyClass: 'onde',
	css: ['./ConsoleLike.css'],
	charset: ['meta', 'charset::utf-8'],
	ieDoc: ['meta', 'http-equiv::X-UA-Compatible', 'content::IE=edge']
};

function rednerHead(arg) {
	let ARG = arg || {};
	let _HEAD = document.head;
	let _TITLE = document.createElement('title');
	let _CHARSET = document.createElement('meta');
	let _IEMODEL = document.createElement('meta');
	let _INITCSS = document.createElement('style');

	_TITLE.innerText = ARG.title;

	_CHARSET.setAttribute('charset', 'utf-8');

	_IEMODEL.setAttribute('http-equiv', 'X-UA-Compatible');
	_IEMODEL.setAttribute('content', 'IE=edge');

	_INITCSS.setAttribute('type', 'text/css');
	_INITCSS.innerText = ResetStyle + UserCSS;

	_HEAD.appendChild(_TITLE);
	_HEAD.appendChild(_CHARSET);
	_HEAD.appendChild(_IEMODEL);
	_HEAD.appendChild(_INITCSS);

	ResourceLoader.link(USERSET.css);
};

let Body = React.createClass({
	render(){
		let styles = {
			position: 'relative',
			width: '100%',
			height: '100%'
		};
		return (
			<div className={USERSET.bodyClass} style={styles}>
				<PanelLeft></PanelLeft>
				<HandleArea></HandleArea>
			</div>
		)
	}
});

ResourceLoader.load([USERSET.title, USERSET.charset, USERSET.ieDoc])
ResourceLoader.style([ResetStyle + UserCSS]);
ResourceLoader.link(USERSET.css);

window.React = React;
React.render(<Body />, document.body);
