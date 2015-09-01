import React, {Component} from 'react';
import Format from '../../../../lib/utils/Format';
import PanelArea from '../../../../lib/PanelArea';
export default class PanelLeft extends Component{
	_console(){
		console.log(this.props);
	}
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
			<div className="panelLeft" onClick={this._console} onContextMenu={this.showContextMenu} style={styles}>
				<PanelArea panelType="simple"></PanelArea>
			</div>
		);
	}
}
