import React, {Component} from 'react';
import Format from '../../utils/Format';

export default class FucNav extends Component{
	static propTypes = {
		classNam: React.PropTypes.string,
		data: React.PropTypes.array
	};
	static defaultProps = {
		classNam: 'style-blue',
		data: [
			{
				name: 'link1',
				tag: 'a',
				props: {
					type: 'link',
					href: '/link1'
				}
			},
			{
				name: 'link2',
				tag: 'a',
				props: {
					type: 'button',
					onClick: function() {
						console.warn('// TODO...');
					}
				}
			}
		]
	};

	render(){
		let styles = {
			position: 'relative'
		};
		Object.assign(styles, Format.NoUserSelect);

		let data = this.props.data;
		let CHILDREN = [];
		for (let i = 0; i < data.length; i++) {
			let childProps = Object.assign(data[i].props, {className: `fN-${data[i].props.type}`});
			let CHILD =[data[i].name];
			if (data[i].props.type == 'logo') {
				if (data[i].props.img) {
					let LOGOIMG = React.createElement('img', {className: `fN-${data[i].props.type}Img`, src: data[i].props.img, style: {verticalAlign: 'middle'}});
					CHILD.unshift(LOGOIMG);
				}
			}
			if (data[i].props.type == 'button' && data[i].tag == 'input') {
				childProps = Object.assign(childProps, {value: `${data[i].name}`});
				CHILD = [];
			}
			CHILDREN.push(React.createElement(`${data[i].tag}`, childProps, CHILD));
		}
		return (
			<div className={`fucNav ${this.props.classNam}`} style={styles}>
				<div className="fucNavContainer clearfix">{CHILDREN}</div>
			</div>
		);
	}
}
