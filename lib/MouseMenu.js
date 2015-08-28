'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsFormat = require('./utils/Format');

var _utilsFormat2 = _interopRequireDefault(_utilsFormat);

var PanelLeft = _react2['default'].createClass({
	displayName: 'PanelLeft',

	render: function render() {
		var styles = {
			position: 'absolute',
			borderWidth: 1,
			borderStyle: 'solid',
			boxShadow: '0 0 6px rgba(0,0,0,.21)',
			boxSizing: 'border-box'
		};
		_extends(styles, _utilsFormat2['default'].NoUserSelect);

		return _react2['default'].createElement(
			'div',
			{ className: 'mouseMenu', style: styles },
			_react2['default'].createElement('div', { className: 'mMTitle' }),
			this.props.children
		);
	}
});

exports['default'] = PanelLeft;
module.exports = exports['default'];