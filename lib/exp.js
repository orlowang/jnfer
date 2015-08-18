'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var exp = _react2['default'].createClass({
	displayName: 'exp',

	getStyles: function getStyles() {
		return {
			root: {
				padding: 8
			}
		};
	},

	render: function render() {
		var style = this.getStyles();

		var children = _react2['default'].Children.map(this.props.children, function (child) {
			return _react2['default'].cloneElement(child, {
				style: { marginRight: 8 }
			});
		});

		return _react2['default'].createElement(
			'div',
			_extends({}, this.props, { style: style.root }),
			children
		);
	}
});

exports['default'] = exp;
module.exports = exports['default'];