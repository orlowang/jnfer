import React, {Component} from 'react';
import Format from './utils/Format';

export default class SearchBox extends Component{
	static propTypes = {
		title: React.PropTypes.node
	};
	static defaultProps = {
		title: 'Menu'
	};

	render(){
		let styles = {
			searchBox: {
				position: 'absolute',
				borderWidth: 1,
				borderStyle: 'solid',
				boxShadow: '0 0 6px rgba(0,0,0,.21)',
				boxSizing: 'border-box',
				overflow: 'hidden'
			},
			sBcontainer: {
				height: '1em',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				display: 'block',
				whiteSpace: 'nowrap'
			}
		};

		Object.assign(styles, Format.NoUserSelect);

		return (
			<div className="searchBox" style={styles.searchBox}>
				<div className="sB-container" style={styles.sBcontainer}>
					<input type="text"/>
				</div>
			</div>
		);
	}
}
