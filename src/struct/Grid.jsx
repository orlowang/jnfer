import React, {Component} from 'react';
import Wrapper from '../utils/Wrapper';

export default class Grid extends Component{
	static propTypes = {
		unit: React.PropTypes.number,
		gap: React.PropTypes.number
	};
	static defaultProps = {
		unit: 2,
		gap: 0
	};
	render(){
		let {
			centerWidth,
			...other
		} = this.props;
		let styles = {
			afterStyle: {
				clear: 'both'
			}
		};

		// let childProps = React.propTypes = {
		// 	left: React.PropTypes.number,
		// 	width: React.PropTypes.number,
		// 	offsetLeft: React.PropTypes.number
		// };
		let Type = '^\\d+$';
		let re = new RegExp(Type);
		let _unit = this.props.unit.toString().match(re);
		let _gap = this.props.gap.toString().match(re);
		// let _left = childProps.left.toString().match(re);
		// let _width = childProps.width.toString().match(re);
		// let _offsetLeft = childProps.offsetLeft.toString().match(re);
		let CHILDREN;

		if (_unit != null) {
			if (_unit >= 2) {
				if (_gap != null) {
					// if (_width != null) {
					// 	if (_width >= 1) {
					// 		styles.gridList.width = `calc( (100% - ${(_unit-1)*_gap}px)/${_unit}*${_width} )`;
					// 	} else {
					// 		console.warn('width must greater than 0.');
					// 	}
					// } else {
					// 	console.warn('width is an integer greater than 0.');
					// }

					// if (_left != null) {console.warn('width is an integer greater than 0.');}

					// if (_offsetLeft != null) {console.warn('width is an integer greater than 0.');}

					if (_gap == 0) {
						CHILDREN = React.Children.map(this.props.children, (child) => {
							let gridList = {
								boxSizing: 'border-box',
								float: 'left'
							};
							if (child.props.width) {
								gridList.width = `calc( (100% - ${(_unit-1)*_gap}px)/${_unit}*${child.props.width} )`;
								console.log(child.props.width, gridList.width);
							}
							return React.createElement('div', {style: gridList}, child);
						});
					} else {
						console.log(this.props.children.props);
					}
				} else {
					console.warn('gap must be an integer.');
				}
			} else {
				console.warn('unit must greater than 1.');
			}
		} else {
			console.warn('unit is an integer greater than 1.');
		}

		// let CHILDREN = React.Children.map(this.props.children, (child) => {
  //     if (this.props.gap == 0) {
  //     	return React.createElement('div', {style: styles.gridList},child);
  //     } else {

  //     }
  //   });

		let props = other;
    props.style = this.props.style;

		return (
			<Wrapper afterStyle={styles.afterStyle}>{CHILDREN}</Wrapper>
		);
	}
}
