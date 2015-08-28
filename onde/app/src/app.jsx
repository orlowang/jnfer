import React from "react";
import ResetStyle from "../../../lib/utils/ResetStyle";
import UserCSS from "../../../lib/utils/UserCSS";
import ResourceLoader from "../../../lib/utils/ResourceLoader";
import PanelLeft from "./layout/PanelLeft.jsx";
import HandleArea from "./layout/HandleArea.jsx";

var USERHEAD = {
	title: 'Auto Design',
	bodyClass: 'onde'
};

var RESOURCE = ['./init.css'];

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
};

let Body = React.createClass({
	render(){
		let styles = {
			position: 'relative',
			width: '100%',
			height: '100%'
		};
		return (
			<div className={USERHEAD.bodyClass} style={styles}>
				<PanelLeft></PanelLeft>
				<HandleArea></HandleArea>
			</div>
		)
	}
});
// window.React = React;

rednerHead(USERHEAD);
ResourceLoader.loadCSS(RESOURCE);

React.render(<Body />, document.body);
