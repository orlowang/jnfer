import React from 'react';

let Article = React.createClass({
	_log(){
		console.log('you click me!');
	},
	render(){
		return (
			<div className="card" onClick={this._log}>
				<a>This is a article</a>
			</div>
		);
	}
});

export default Article;
