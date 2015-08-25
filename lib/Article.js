'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Article = _react2['default'].createClass({
	displayName: 'Article',

	_log: function _log() {
		console.log('you click me!');
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'card', onClick: this._log },
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