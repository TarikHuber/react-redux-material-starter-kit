'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GitUser = function GitUser(_ref) {
	var _React$createElement;

	var user = _ref.user;
	var login = user.login;
	var avatar_url = user.avatar_url;
	var html_url = user.html_url;

	var src = 'https://ghbtns.com/github-btn.html?user=' + login + '&type=follow&count=true&size=large';

	var styles = {

		card: {
			margin: '8px'
		}

	};

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_Card.Card,
			{ style: styles.card },
			_react2.default.createElement(_Card.CardHeader, {
				title: login,
				subtitle: 'Subtitle',
				avatar: avatar_url
			}),
			_react2.default.createElement(_Card.CardTitle, { title: _react2.default.createElement(
					'a',
					{ href: html_url, target: '_blank' },
					login
				), subtitle: 'Card subtitle' }),
			_react2.default.createElement(
				_Card.CardText,
				null,
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
			),
			_react2.default.createElement(
				_Card.CardActions,
				null,
				_react2.default.createElement('iframe', (_React$createElement = {
					src: src,
					frameBorder: '0',
					allowTransparency: 'true',
					scrolling: '0'
				}, _defineProperty(_React$createElement, 'frameBorder', '0'), _defineProperty(_React$createElement, 'width', '500'), _defineProperty(_React$createElement, 'height', '30'), _React$createElement))
			)
		)
	);
};

GitUser.propTypes = {
	user: _react.PropTypes.shape({
		login: _react.PropTypes.string.isRequired,
		avatar_url: _react.PropTypes.string.isRequired,
		url: _react.PropTypes.string.isRequired,
		html_url: _react.PropTypes.string.isRequired
	}).isRequired
};

exports.default = GitUser;