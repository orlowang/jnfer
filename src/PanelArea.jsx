import React, {Component} from 'react';
import Format from './utils/Format';

export default class PanelArea extends Component {
	static propTypes = {
		panelTitleText: React.PropTypes.string,
		panelType: React.PropTypes.string,
		className: React.PropTypes.string
	};
	static defaultProps = {
		panelTitleText: 'Panel',
		panelType: 'single',
		className: ''
	};

	render(){
		let styles = {
			panelArea: {
				position: 'relative'
			},
			pATitle: {
				marginTop: '.5em',
				height: '.5em',
				fontSize: '1em'
			},
			pATText: {
				position: 'relative',
				top: '-.5em',
				paddingLeft: 5,
				paddingRight: 5
			},
			pAContainer: {}
		};

		let _classname = `panelArea ${this.props.panelType}`;
		if (this.props.className) { _classname = `${_classname} ${this.props.className}`; }

		return (
			<div {...this.props} className={_classname} style={Object.assign(styles.panelArea, Format.NoUserSelect)}>
				<div className="pA-title" style={styles.pATitle}>
					<span className="pA-t-text" style={styles.pATText}>{this.props.panelTitleText}</span>
				</div>
				<div className="pA-container" style={styles.pAContainer}>{this.props.children}</div>
			</div>
		);
	}
}
