import React from "react";
import ResetStyle from "../../../lib/utils/ResetStyle";
import UserCSS from "../../../lib/utils/UserCSS";
import ResourceLoader from "../../../lib/utils/ResourceLoader";
import PanelLeft from "./layout/PanelLeft.jsx";
import HandleArea from "./layout/HandleArea.jsx";

var USERSET = {
	title: ['title', 'innertext::Auto Design'],
	bodyClass: 'onde',
	css: ['./style.css'],
	charset: ['meta', 'charset::utf-8'],
	ieDoc: ['meta', 'http-equiv::X-UA-Compatible', 'content::IE=edge']
};

let Body = React.createClass({
	render(){
		let styles = {
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
