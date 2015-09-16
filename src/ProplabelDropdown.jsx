import React, {Component} from 'react';
import Format from './utils/Format';

export default class ProplabelDropdown extends Component{
	static propTypes = {
		proplabelName: React.PropTypes.string,
		proplabelClass: React.PropTypes.string,
		actionType: React.PropTypes.node,
		proplabelInput: React.PropTypes.string
	};
	static defaultProps = {
		proplabelName: 'Name',
		proplabelClass: 'dropDown',
		proplabelInput: '0 px'
	};

	render(){
		let styles = {
			propLabel: {
				position: 'relative',
				borderWidth: 1,
				borderStyle: 'solid',
				padding: 0,
				overflow: 'hidden',
				display: 'table'
			},
			labelLeft: {
				paddingLeft: 4,
				paddingRight: 4,
				display: 'table-cell',
				verticalAlign: 'middle'
			},
			labelInput: {
				boxSizing: 'initial',
				borderWidth: '0 1px',
				borderStyle: 'solid',
				outline: 'none',
				paddingLeft: 4,
				paddingRight: 4,
				height: '100%',
				display: 'inherit'
			}
		};

		Object.assign(styles, Format.NoUserSelect);

		return (
			<div className={`propLabel ${this.props.proplabelClass}`} style={styles.propLabel}>
					<span style={styles.labelLeft}>{this.props.proplabelName}</span>
					<input type="text" style={styles.labelInput}/>
			</div>
		);
	}
}
