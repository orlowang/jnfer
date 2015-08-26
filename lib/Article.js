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

console.log(_utilsFormat2['default'].NoSelect);

var Article = _react2['default'].createClass({
	displayName: 'Article',

	_log: function _log() {
		console.log('you click me!');
	},
	render: function render() {
		var styles = {
			padding: _utilsFormat2['default'].Px8
		};
		_extends(styles, _utilsFormat2['default'].NoUserSelect);
		return _react2['default'].createElement(
			'div',
			{ className: 'card', onClick: this._log, style: styles },
			_react2['default'].createElement(
				'a',
				null,
				'This is a article'
			)
		);
	}
});

exports['default'] = Article;
module.exports = exports['default'];