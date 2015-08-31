import React, {Component} from 'react';
import Format from './utils/Format';

export default class PanelArea extends Component {
	static propTypes = {
		panelTitleText: React.PropTypes.string,
		panelType: React.PropTypes.string
	};
	static defaultProps = {
		panelTitleText: 'Panel',
		panelType: 'single'
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
				top: '-.5em'
			},
			pAContainer: {}
		};

		return (
			<div className={`panelArea ${this.props.panelType}`} style={Object.assign(styles.panelArea, Format.NoUserSelect)}>
				<div className="pA-title" style={styles.pATitle}>
					<span className="pA-t-text" style={styles.pATText}>{this.props.panelTitleText}</span>
				</div>
				<div className="pA-container" style={styles.pAContainer}>{this.props.children}</div>
			</div>
		);
	}
}
