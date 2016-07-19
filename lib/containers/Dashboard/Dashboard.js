'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('/var/srv/domains/smartscan.services/www/htdocs/rrm/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/var/srv/domains/smartscan.services/www/htdocs/rrm/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/var/srv/domains/smartscan.services/www/htdocs/rrm/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _Card = require('material-ui/Card');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _GridList = require('material-ui/GridList');

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _starBorder = require('material-ui/svg-icons/toggle/star-border');

var _starBorder2 = _interopRequireDefault(_starBorder);

var _Dashboard = require('./Dashboard.i18n');

var _reactGridLayout = require('react-grid-layout');

var _appNavDrawer = require('../../actions/appNavDrawer');

var _dashboard = require('../../actions/dashboard');

var _Activity = require('../../components/Activity/Activity');

var _Activity2 = _interopRequireDefault(_Activity);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

require('../../../static/images/grid-list/vegetables-790022_640.jpg');

require('../../../static/images/grid-list/burger-827309_640.jpg');

require('../../../static/images/grid-list/camera-813814_640.jpg');

require('../../../static/images/grid-list/morning-819362_640.jpg');

require('../../../static/images/grid-list/hats-829509_640.jpg');

require('../../../static/images/grid-list/honey-823614_640.jpg');

require('../../../static/images/grid-list/water-plant-821293_640.jpg');

require('../../../static/images/semesnica.jpg');

require('../../../static/images/bih.png');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Dashboard: {
		displayName: 'Dashboard'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/Dashboard/Dashboard.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/Dashboard/Dashboard.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);;


var style = {
	height: 100,
	width: 100,
	margin: 5,
	textAlign: 'center',
	display: 'inline-block'
};

var styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	gridList: {
		width: 500,
		height: 500,
		overflowY: 'auto',
		marginBottom: 24
	}
};

var layoutToSave = undefined;

var Dashboard = _wrapComponent('Dashboard')(function (_Component) {
	_inherits(Dashboard, _Component);

	function Dashboard(props) {
		_classCallCheck(this, Dashboard);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));
	}

	_createClass(Dashboard, [{
		key: 'render',
		value: function render() {

			function handleLayoutChange(layout) {
				layoutToSave = layout;
			};

			var _props = this.props;
			var intl = _props.intl;
			var browser = _props.browser;
			var appNavDrawer = _props.appNavDrawer;
			var theme = _props.theme;
			var dashboard = _props.dashboard;
			var onLayoutChange = _props.onLayoutChange;


			var layout = [{ i: '1', x: 0, y: 0, w: 4, h: 4.2, isResizable: false }, { i: '2', x: 0, y: 0, w: 3, h: 1 }, { i: '3', x: 4, y: 0, w: 3, h: 3 }, { i: '4', x: 4, y: 0, w: 3, h: 2 }];

			var layouts = dashboard.layout ? { lg: dashboard.layout } : { lg: layout };

			var menu = _react3.default.createElement(
				_IconMenu2.default,
				{
					iconButtonElement: _react3.default.createElement(
						_IconButton2.default,
						null,
						_react3.default.createElement(_moreVert2.default, { color: 'white' })
					),
					targetOrigin: { horizontal: 'right', vertical: 'top' },
					anchorOrigin: { horizontal: 'right', vertical: 'top' }

				},
				_react3.default.createElement(_MenuItem2.default, { primaryText: 'Save', onTouchTap: function onTouchTap() {
						return onLayoutChange(layoutToSave);
					} }),
				_react3.default.createElement(_MenuItem2.default, { primaryText: 'Reset', onTouchTap: function onTouchTap() {
						return onLayoutChange(undefined);
					} })
			);

			var tilesData = [{
				img: 'static/vegetables-790022_640.jpg',
				title: 'Breakfast',
				author: 'jill111'
			}, {
				img: 'static/burger-827309_640.jpg',
				title: 'Tasty burger',
				author: 'pashminu'
			}, {
				img: 'static/camera-813814_640.jpg',
				title: 'Camera',
				author: 'Danson67'
			}, {
				img: 'static/morning-819362_640.jpg',
				title: 'Morning',
				author: 'fancycrave1'
			}, {
				img: 'static/hats-829509_640.jpg',
				title: 'Hats',
				author: 'Hans'
			}, {
				img: 'static/honey-823614_640.jpg',
				title: 'Honey',
				author: 'fancycravel'
			}, {
				img: 'static/water-plant-821293_640.jpg',
				title: 'Water plant',
				author: 'BkrmadtyaKarki'
			}];

			return _react3.default.createElement(
				_Activity2.default,
				{ title: intl.messages.dashboard, nav_index: '/dashboard', menu: menu },
				_react3.default.createElement(
					'div',
					null,
					_react3.default.createElement(
						ResponsiveReactGridLayout,
						{
							isDraggable: browser.greaterThan.medium,
							isResizable: browser.greaterThan.medium,
							onLayoutChange: handleLayoutChange,
							className: 'layout',
							layouts: layouts,
							autoSize: true,
							breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
							cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
							ref: 'grid'
						},
						_react3.default.createElement(
							_Card.Card,
							{ key: "1" },
							_react3.default.createElement(_Card.CardHeader, {
								title: 'URL Avatar',
								subtitle: 'Semesnica',
								avatar: 'static/bih.png'
							}),
							_react3.default.createElement(
								_Card.CardMedia,
								{
									overlay: _react3.default.createElement(_Card.CardTitle, { title: 'Overlay title', subtitle: 'Overlay subtitle' })
								},
								_react3.default.createElement('img', { src: 'static/semesnica.jpg' })
							),
							_react3.default.createElement(_Card.CardTitle, { title: 'Semesnica', subtitle: 'A beutiful place in Bosnia and Herzegovina' }),
							_react3.default.createElement(
								_Card.CardText,
								null,
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
							),
							_react3.default.createElement(
								_Card.CardActions,
								null,
								_react3.default.createElement(_FlatButton2.default, { label: 'Action1' }),
								_react3.default.createElement(_FlatButton2.default, { label: 'Action2' })
							)
						),
						_react3.default.createElement(
							_GridList.GridList,
							{ key: "3",
								cellHeight: 200,
								style: styles.gridList
							},
							_react3.default.createElement(
								_Subheader2.default,
								null,
								'December'
							),
							tilesData.map(function (tile) {
								return _react3.default.createElement(
									_GridList.GridTile,
									{
										key: tile.img,
										title: tile.title,
										subtitle: _react3.default.createElement(
											'span',
											null,
											'by ',
											_react3.default.createElement(
												'b',
												null,
												tile.author
											)
										),
										actionIcon: _react3.default.createElement(
											_IconButton2.default,
											null,
											_react3.default.createElement(_starBorder2.default, { color: 'white' })
										)
									},
									_react3.default.createElement('img', { src: tile.img })
								);
							})
						),
						_react3.default.createElement(
							_Card.Card,
							{ key: "4" },
							_react3.default.createElement(_Card.CardHeader, {
								title: 'Without Avatar',
								subtitle: 'Subtitle',
								actAsExpander: true,
								showExpandableButton: true
							}),
							_react3.default.createElement(
								_Card.CardText,
								{ expandable: true },
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
							),
							_react3.default.createElement(
								_Card.CardActions,
								{ expandable: true },
								_react3.default.createElement(_FlatButton2.default, { label: 'Action1' }),
								_react3.default.createElement(_FlatButton2.default, { label: 'Action2' })
							)
						),
						_react3.default.createElement(_Paper2.default, { key: "2", style: style, zDepth: 3 })
					)
				)
			);
		}
	}]);

	return Dashboard;
}(_react2.Component));

;

Dashboard.propTypes = {
	setAppBarTitle: _react2.PropTypes.func.isRequired,
	setAppBarIconElementRight: _react2.PropTypes.func.isRequired,
	setSelectedIndex: _react2.PropTypes.func.isRequired,
	onLayoutChange: _react2.PropTypes.func.isRequired,
	theme: _react2.PropTypes.object.isRequired,
	dashboard: _react2.PropTypes.object.isRequired,
	intl: _react2.PropTypes.object.isRequired,
	appNavDrawer: _react2.PropTypes.object.isRequired,
	browser: _react2.PropTypes.object.isRequired
};

function mapStateToProps(state) {
	var responsiveStateReducer = state.responsiveStateReducer;
	var intl = state.intl;
	var dashboard = state.dashboard;
	var appNavDrawer = state.appNavDrawer;
	var appStyle = state.appStyle;


	return {
		theme: appStyle.theme,
		appNavDrawer: appNavDrawer,
		dashboard: dashboard,
		intl: intl,
		browser: responsiveStateReducer
	};
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {

		setAppBarTitle: function (_setAppBarTitle) {
			function setAppBarTitle(_x) {
				return _setAppBarTitle.apply(this, arguments);
			}

			setAppBarTitle.toString = function () {
				return _setAppBarTitle.toString();
			};

			return setAppBarTitle;
		}(function (title) {
			dispatch(setAppBarTitle(title));
		}),
		setAppBarIconElementRight: function (_setAppBarIconElementRight) {
			function setAppBarIconElementRight(_x2) {
				return _setAppBarIconElementRight.apply(this, arguments);
			}

			setAppBarIconElementRight.toString = function () {
				return _setAppBarIconElementRight.toString();
			};

			return setAppBarIconElementRight;
		}(function (element) {
			dispatch(setAppBarIconElementRight(element));
		}),
		onLayoutChange: function onLayoutChange(layout) {
			dispatch((0, _dashboard.onLayoutChange)(layout));
		},
		setSelectedIndex: function setSelectedIndex(index) {
			dispatch((0, _appNavDrawer.setSelectedIndex)(index));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);