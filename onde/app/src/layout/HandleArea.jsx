import React from 'react';
import Format from '../../../../lib/utils/Format';
import MouseMenu from '../../../../lib/MouseMenu';
import Article from '../../../../lib/Article';

let HandleArea = React.createClass({
	render(){
		let styles = {
			position: 'absolute',
			right: 0,
			top: 0,
			height: '100%',
			width: 'calc( 100% - 320px )'
		};
		Object.assign(styles, Format.NoUserSelect);
		return (
			<div className="handleArea" style={styles}>
				<MouseMenu>
					<div>this is a panel</div>
				</MouseMenu>
			</div>
		);
	}
});

export default HandleArea;