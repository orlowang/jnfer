import React from "react";
import ResetStyle from "../../../lib/utils/ResetStyle";
import PanelLeft from "./layout/PanelLeft.jsx";

var USERHEAD = {
	title: 'Auto Design',
	bodyClass: 'onde'
};

function rednerHead(arg) {
	let ARG = arg || {};
	let _HEAD = document.head;
	let _TITLE = document.createElement('title');
	let _CHARSET = document.createElement('meta');
	let _IEMODEL = document.createElement('meta');
	let _RESETCSS = document.createElement('style');

	_TITLE.innerText = ARG.title;

	_CHARSET.setAttribute('charset', 'utf-8');

	_IEMODEL.setAttribute('http-equiv', 'X-UA-Compatible');
	_IEMODEL.setAttribute('content', 'IE=edge');

	_RESETCSS.setAttribute('type', 'text/css');
	_RESETCSS.innerText = ResetStyle;

	_HEAD.appendChild(_TITLE);
	_HEAD.appendChild(_CHARSET);
	_HEAD.appendChild(_IEMODEL);
	_HEAD.appendChild(_RESETCSS);
};

let Body = React.createClass({
	render(){
		return (
			<div className={USERHEAD.bodyClass}>
				<PanelLeft></PanelLeft>
			</div>
		)
	}
});
// window.React = React;
rednerHead(USERHEAD);
React.render(<Body />, document.body);
