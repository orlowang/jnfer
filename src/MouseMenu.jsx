import React, {Component} from 'react';
import TitleLike from './struct/TitleLike';
import Format from './utils/Format';

export default class PanelLeft extends Component{
	static propTypes = {
		title: React.PropTypes.node
	};
	static defaultProps = {
		title: 'Menu'
	};

	render(){
		let styles = {
			mouseMenu: {
				position: 'absolute',
				borderWidth: 1,
				borderStyle: 'solid',
				boxShadow: '0 0 6px rgba(0,0,0,.21)',
				boxSizing: 'border-box',
				overflow: 'hidden'
			},
			mMTitle: {
				height: '1em',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				display: 'block',
				whiteSpace: 'nowrap'
			},
			mMContainer: {
				borderTopWidth: 1,
				borderTopStyle: 'solid',
				margin: 0
			}
		};

		Object.assign(styles, Format.NoUserSelect);

		return (
			<div className="mouseMenu" style={styles.mouseMenu}>
				<TitleLike centerWidth="50%">
					<span layoutPosition="center" style={styles.mMTitle}>{this.props.title}</span>
					<div layoutPosition="right">Pin</div>
				</TitleLike>
				<div className="mMContainer" style={styles.mMContainer}>{this.props.children}</div>
			</div>
		);
	}
}
