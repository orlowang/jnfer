import React, {Component} from 'react';
import Format from '../../../../lib/utils/Format';
import PanelArea from '../../../../lib/PanelArea';
import UserAction from './UserAction.jsx';

export default class PanelLeft extends Component{
	render(){
		let styles = {
			overflow: 'hidden',
			float: 'left',
			minWidth: 260,
			maxWidth: 340,
			width: '20%',
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
				<PanelArea panelType="rich" panelTitleText="Layout">
					<PanelArea panelType="single" className="basicgroup" panelTitleText="Basic">
						<div className="layout-preview layout-unit-level2"></div>
						<div className="layout-preview layout-unit-vertical2"></div>
						<div className="layout-preview layout-unit-level3"></div>
					</PanelArea>
					<PanelArea panelType="single" className="standardgroup" panelTitleText="Standard">
						<div className="layout-preview layout-standard-t"></div>
						<div className="layout-preview layout-standard-vertical3"></div>
						<div className="layout-preview layout-standard-i"></div>
						<div className="layout-preview layout-standard-i3"></div>
					</PanelArea>
				</PanelArea>
				<PanelArea panelType="rich" panelTitleText="Component"></PanelArea>
			</div>
		);
	}
}
