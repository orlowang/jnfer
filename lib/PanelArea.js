'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsFormat = require('./utils/Format');

var _utilsFormat2 = _interopRequireDefault(_utilsFormat);

var PanelArea = (function (_Component) {
	_inherits(PanelArea, _Component);

	function PanelArea() {
		_classCallCheck(this, PanelArea);

		_get(Object.getPrototypeOf(PanelArea.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(PanelArea, [{
		key: 'render',
		value: function render() {
			var styles = {
				panelArea: {
					position: 'relative'
				},
				pATitle: {
					marginTop: '.5em',
					height: '.5em',
					fontSize: '1em'
				},
				pATText: {
					position: 'relative',
					top: '-.5em'
				},
				pAContainer: {}
			};

			return _react2['default'].createElement(
				'div',
				{ className: 'panelArea ' + this.props.panelType, style: _extends(styles.panelArea, _utilsFormat2['default'].NoUserSelect) },
				_react2['default'].createElement(
					'div',
					{ className: 'pA-title', style: styles.pATitle },
					_react2['default'].createElement(
						'span',
						{ className: 'pA-t-text', style: styles.pATText },
						this.props.panelTitleText
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'pA-container', style: styles.pAContainer },
					this.props.children
				)
			);
		}
	}], [{
		key: 'propTypes',
		value: {
			panelTitleText: _react2['default'].PropTypes.string,
			panelType: _react2['default'].PropTypes.string
		},
		enumerable: true
	}, {
		key: 'defaultProps',
		value: {
			panelTitleText: 'Panel',
			panelType: 'single'
		},
		enumerable: true
	}]);

	return PanelArea;
})(_react.Component);

exports['default'] = PanelArea;
module.exports = exports['default'];