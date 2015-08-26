import React from "react";
import Article from "../../lib/Article";

let _HEAD = document.getElementsByTagName('head');

let Body = React.createClass({
	render(){
		return (
			<Article></Article>
		)
	}
});
// window.React = React;
React.render(<Body />, document.body);
