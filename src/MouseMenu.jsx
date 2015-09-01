import React, {Component} from 'react';
import Wrapper from './utils/Wrapper';
import Format from './utils/Format';

export default class PanelLeft extends Component{
	static propTypes = {
		title: React.PropTypes.node,
		titlePosition: React.PropTypes.string
	};
	static defaultProps = {
		title: 'Menu',
		titlePosition: 'center'		// [value] 'center','left','right';
	};

	render(){
		let styles = {
			mouseMenu: {
				position: 'absolute',
				borderWidth: 1,
				borderStyle: 'solid',
				boxShadow: '0 0 6px rgba(0,0,0,.21)',
				boxSizing: 'border-box'
			},
			mMTitle: {
				maxWidth: '50%',
				height: '1em',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				display: 'block',
				whiteSpace: 'nowrap'
			}
		};
		let title = this.props.title;
		let titlePosition = this.props.titlePosition;
		let titleElement;
		let titleMixStyle;

		let afterStyle = { clear: 'both' };

		Object.assign(styles, Format.NoUserSelect);

		if (title) {
			if (titlePosition) {
				switch(titlePosition){
					case 'center':
						titleMixStyle = { marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' };
						break;
					case 'left':
						titleMixStyle = { float: 'left' };
						break;
					case 'right':
						titleMixStyle = { float: 'right' };
						break;
				}
			}
			titleElement = typeof title === 'string' || title instanceof String ?
				<span className="mMTitle" style={Object.assign(styles.mMTitle, titleMixStyle)}>{title}</span> :
				<div className="mMTitle" style={Object.assign(styles.mMTitle, titleMixStyle)}>{title}</div>;
		}
		let CHILDREN = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {className: "mMContainer", style: {borderTopWidth: 1, borderTopStyle: 'solid'}});
    });
		return (
			<div className="mouseMenu" style={styles.mouseMenu}>
				<Wrapper afterStyle={afterStyle}>{titleElement}</Wrapper>
				{CHILDREN}
			</div>
		);
	}
}
