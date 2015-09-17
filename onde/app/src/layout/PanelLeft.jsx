import React, {Component} from 'react';
import Format from '../../../../lib/utils/Format';
import PanelArea from '../../../../lib/PanelArea';
import UserAction from './UserAction.jsx';

export default class PanelLeft extends Component{
	render(){
		let styles = {
			position: 'absolute',
			overflow: 'hidden',
			left: 0,
			top: 0,
			width: 320,
			height: '100%',
			borderRightWidth: 1,
			borderRightStyle: 'solid',
			boxSizing: 'border-box'
		};
		Object.assign(styles, Format.NoUserSelect);

		let userData = {
			userPhoto: './img/defaultPhoto.jpg',
			userName: 'Kolous Masou',
			message: 2,
			action: {
				language: 'language',
				setting: 'option',
				exit: 'logout'
			}
		};

		return (
			<div className="panelLeft" onContextMenu={this.showContextMenu} style={styles}>
				<UserAction props={userData}></UserAction>
				<PanelArea panelType="simple" panelTitleText="Layout"></PanelArea>
				<PanelArea panelType="rich" panelTitleText="Component"></PanelArea>
			</div>
		);
	}
}
