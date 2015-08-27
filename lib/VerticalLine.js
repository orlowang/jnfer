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

var VerticalLine = _react2['default'].createClass({
	displayName: 'VerticalLine',

	render: function render() {
		var styles = {
			marginTop: 4,
			marginBottom: 4,
			width: '100%',
			borderTop: '1px solid rgba(0,0,0,.18)',
			borderBottom: '1px solid rgba(255,255,255,.56)'
		};
		_extends(styles, _utilsFormat2['default'].NoUserSelect);
		return _react2['default'].createElement('div', { className: 'verticalLine', style: styles });
	}
});

exports['default'] = VerticalLine;
module.exports = exports['default'];