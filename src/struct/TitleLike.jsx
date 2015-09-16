import React, {Component} from 'react';
import Wrapper from '../utils/Wrapper';

export default class TitleLike extends Component{
	static propTypes = {
		centerWidth: React.PropTypes.string
	};
	static defaultProps = {
		centerWidth: '75%'
	};
	render(){
		let {
			centerWidth,
			...other
		} = this.props;
		let styles = {
			wrapper: {
				position: 'relative'
			},
			afterStyle: {
				clear: 'both'
			}
		};
		let CHILDREN = React.Children.map(this.props.children, (child) => {
      if (child.props.layoutPosition == 'left'){return React.cloneElement(child, {style: {position: 'absolute', left: 0}});}
      if (child.props.layoutPosition == 'right'){return React.cloneElement(child, {style: {position: 'absolute', right: 0}});}
      if (child.props.layoutPosition == 'center'){return React.createElement('div', {style: {maxWidth: `${this.props.centerWidth}`, float: 'left', marginLeft: '50%'}}, React.createElement('div', {style: {'marginLeft': '-50%', width: '100%'}}, child));}
    });

		let props = other;
    props.style = this.props.style;

		return (
			<Wrapper style={styles.wrapper} afterStyle={styles.afterStyle}>{CHILDREN}</Wrapper>
		);
	}
}
