import React from 'react';
import Format from '../../../../lib/utils/Format';
import PanelArea from '../../../../lib/PanelArea';

let PanelLeft = React.createClass({
	showContextMenu(){

	},
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
			<div className="panelLeft" onContextMenu={this.showContextMenu} style={styles}>
				<PanelArea></PanelArea>
			</div>
		);
	}
});

export default PanelLeft;
