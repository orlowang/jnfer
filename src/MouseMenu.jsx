import React from 'react';
import Format from './utils/Format';

let PanelLeft = React.createClass({
	render(){
		let styles = {
			position: 'absolute',
			borderWidth: 1,
			borderStyle: 'solid',
			boxShadow: '0 0 6px rgba(0,0,0,.21)',
			boxSizing: 'border-box'
		};
		Object.assign(styles, Format.NoUserSelect);

		return (
			<div className="mouseMenu" style={styles}>
				<div className="mMTitle"></div>
				{this.props.children}
			</div>
		);
	}
});

export default PanelLeft;
