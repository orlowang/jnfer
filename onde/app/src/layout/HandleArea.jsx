import React from 'react';
import Format from '../../../../lib/utils/Format';

let HandleArea = React.createClass({
	render(){
		let styles = {
			position: 'absolute',
			left: 0,
			top: 0
		};
		Object.assign(styles, Format.NoUserSelect);
		return (
			<div className="handleArea" style={styles}></div>
		);
	}
});

export default HandleArea;