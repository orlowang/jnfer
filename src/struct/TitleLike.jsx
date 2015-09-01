import React, {Component} from 'react';

export default class TitleLike extends Component{
	static propTypes = {
		leftElement: React.PropTypes.object,
		centerElement: React.PropTypes.object,
		rightElement: React.PropTypes.object
	};
	static defaultProps = {
		leftElementType: 'div',
		centerElementType: 'div',
		rightElementType: 'div'
	};
	render(){
		let {
			leftElement,
			leftElementType,
			centerElement,
			centerElementType,
			rightElement,
			rightElementType,
			...other
		} = this.props;

		let LEFTELEMENT, CENTERELEMENT, RIGHTELEMENT, CHILDREN;

		if (this.props.leftElement) LEFTELEMENT =
			React.createElement(this.props.leftElementType);
		if (this.props.createElement) CENTERELEMENT =
			React.createElement(this.props.centerElementType);
		if (this.props.rightElement) RIGHTELEMENT =
			React.createElement(this.props.rightElementType);
		CHILDREN = [LEFTELEMENT, CENTERELEMENT, RIGHTELEMENT];

		return CHILDREN;
	}
}
