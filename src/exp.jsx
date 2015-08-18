import React from 'react';

let exp = React.createClass({
	getStyles(){
		return {
			root: {
				padding: 8
			}
		};
	},

	render(){
		let style = this.getStyles();

		let children = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {
				style: {marginRight: 8}
			});
		});

		return (
			<div {...this.props} style={style.root}>
				{children}
			</div>
		);
	}
});

export default exp;
