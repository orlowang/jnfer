import React from 'react';
import Format from './utils/Format';

console.log(Format.NoSelect);

let Article = React.createClass({
	_log(){
		console.log('you click me!');
	},
	render(){
		let styles = {
			padding: Format.Px8
		};
		Object.assign(styles, Format.NoUserSelect);
		return (
			<div className="card" onClick={this._log} style={styles}>
				<a>This is a article</a>
			</div>
		);
	}
});

export default Article;
