import React from 'react';
import Format from '../../../../lib/utils/Format';

let PanelLeft = React.createClass({
	render(){
		let styles = {
			position: 'absolute',
			left: 0,
			top: 0,
			width: 320,
			height: '100%',
			borderRightWidth: 1,
			borderRightStyle: 'solid',
			boxSizing: 'border-box'
		};
		Object.assign(styles, Format.NoUserSelect);
		return (
			<div className="panelLeft" style={styles}></div>
		);
	}
});

export default PanelLeft;
