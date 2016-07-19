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

var styles = {

	card: {
		margin: '8px'
	}

};

var Repo = function Repo(_ref) {
	var _React$createElement;

	var repo = _ref.repo;
	var owner = _ref.owner;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_Card.Card,
			{ style: styles.card },
			_react2.default.createElement(_Card.CardHeader, {
				title: owner.login,
				subtitle: _react2.default.createElement(
					'a',
					{ href: owner.html_url, target: '_blank' },
					owner.html_url
				),
				avatar: owner.avatar_url
			}),
			_react2.default.createElement(_Card.CardTitle, { title: repo.name, subtitle: _react2.default.createElement(
					'a',
					{ href: repo.html_url, target: '_blank' },
					repo.html_url
				) }),
			_react2.default.createElement(
				_Card.CardText,
				null,
				repo.description
			),
			_react2.default.createElement(
				_Card.CardActions,
				null,
				_react2.default.createElement('iframe', (_React$createElement = {
					src: 'https://ghbtns.com/github-btn.html?user=' + owner.login + '&type=follow&count=true&size=large',
					frameBorder: '0',
					allowTransparency: 'true',
					scrolling: '0'
				}, _defineProperty(_React$createElement, 'frameBorder', '0'), _defineProperty(_React$createElement, 'width', '500'), _defineProperty(_React$createElement, 'height', '30'), _React$createElement))
			)
		)
	);
};

Repo.propTypes = {
	repo: _react.PropTypes.shape({
		name: _react.PropTypes.string.isRequired,
		html_url: _react.PropTypes.string.isRequired,
		stargazers_count: _react.PropTypes.number.isRequired
	}).isRequired,
	owner: _react.PropTypes.shape({
		login: _react.PropTypes.string.isRequired,
		avatar_url: _react.PropTypes.string.isRequired,
		html_url: _react.PropTypes.string.isRequired
	}).isRequired
};

exports.default = Repo;