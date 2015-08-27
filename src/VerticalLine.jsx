import React from 'react';
import Format from './utils/Format';

let VerticalLine = React.createClass({
	render(){
		let styles = {
			marginTop: 4,
			marginBottom: 4,
			width: '100%',
			borderTop: '1px solid rgba(0,0,0,.18)',
			borderBottom: '1px solid rgba(255,255,255,.56)'
		};
		Object.assign(styles, Format.NoUserSelect);
		return (
			<div className="verticalLine" style={styles}></div>
		);
	}
});

export default VerticalLine;
