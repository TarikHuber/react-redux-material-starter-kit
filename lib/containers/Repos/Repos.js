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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _repos = require('../../actions/repos');

var _Repo = require('../../components/Repo/Repo');

var _Repo2 = _interopRequireDefault(_Repo);

var _Activity = require('../../components/Activity/Activity');

var _Activity2 = _interopRequireDefault(_Activity);

var _MiddleContainer = require('../../containers/MiddleContainer/MiddleContainer');

var _MiddleContainer2 = _interopRequireDefault(_MiddleContainer);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _RefreshIndicator = require('material-ui/RefreshIndicator');

var _RefreshIndicator2 = _interopRequireDefault(_RefreshIndicator);

var _replay = require('material-ui/svg-icons/av/replay');

var _replay2 = _interopRequireDefault(_replay);

var _keyboardArrowLeft = require('material-ui/svg-icons/hardware/keyboard-arrow-left');

var _keyboardArrowLeft2 = _interopRequireDefault(_keyboardArrowLeft);

var _keyboardArrowRight = require('material-ui/svg-icons/hardware/keyboard-arrow-right');

var _keyboardArrowRight2 = _interopRequireDefault(_keyboardArrowRight);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = require('material-ui/IconButton/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
		Repos: {
				displayName: 'Repos'
		}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: 'src/containers/Repos/Repos.js',
		components: _components,
		locals: [module],
		imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: 'src/containers/Repos/Repos.js',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
		return function (Component) {
				return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
}

var styles = {

		left_button: {
				position: 'fixed',
				zIndex: 4,
				right: 230,
				bottom: 35

		},

		middle_button: {

				position: 'fixed',
				zIndex: 4,
				right: 130,
				bottom: 35
		},

		right_button: {
				position: 'fixed',
				zIndex: 4,
				right: 30,
				bottom: 35
		},

		refresh: {

				display: 'inline-block',
				position: 'relative'

		},

		search: {
				position: 'fixed',
				float: 'right',
				zIndex: 4,
				right: 50,
				top: 10,
				width: 150
		}

};

var Repos = _wrapComponent('Repos')(function (_Component) {
		_inherits(Repos, _Component);

		function Repos(props) {
				_classCallCheck(this, Repos);

				var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Repos).call(this, props));

				_this.handleNextPageClick = _this.handleNextPageClick.bind(_this);
				_this.handlePreviousPageClick = _this.handlePreviousPageClick.bind(_this);
				_this.handleRefreshClick = _this.handleRefreshClick.bind(_this);
				return _this;
		}

		_createClass(Repos, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
						var _props = this.props;
						var dispatch = _props.dispatch;
						var page = _props.page;

						dispatch((0, _repos.fetchTopReposIfNeeded)(page));
				}
		}, {
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(nextProps) {
						var dispatch = nextProps.dispatch;
						var page = nextProps.page;
						var reposQuery = nextProps.reposQuery;

						dispatch((0, _repos.fetchTopReposIfNeeded)(page, reposQuery));
				}
		}, {
				key: 'handleQueryChange',
				value: function handleQueryChange(event) {
						var dispatch = this.props.dispatch;


						if (event && event.keyCode !== 13) {
								return;
						}

						dispatch((0, _repos.clearRepos)());
						dispatch((0, _repos.reposQuery)(this.refs.query.input.value));
						dispatch((0, _repos.selectReposPage)(1));
						//dispatch(fetchTopReposIfNeeded(1, reposQuery));
						dispatch((0, _repos.fetchReposForQuery)(this.refs.query.input.value));
				}
		}, {
				key: 'handleNextPageClick',
				value: function handleNextPageClick() {
						var _props2 = this.props;
						var page = _props2.page;
						var repos = _props2.repos;

						if (repos.length > 0) {
								// go to next page only if more data may be available
								this.props.dispatch((0, _repos.selectReposPage)(page + 1));
						}
				}
		}, {
				key: 'handlePreviousPageClick',
				value: function handlePreviousPageClick() {
						var page = this.props.page;

						if (page > 1) {
								this.props.dispatch((0, _repos.selectReposPage)(page - 1));
						}
				}
		}, {
				key: 'handleRefreshClick',
				value: function handleRefreshClick(event) {
						event.preventDefault();

						var _props3 = this.props;
						var dispatch = _props3.dispatch;
						var page = _props3.page;
						var reposQuery = _props3.reposQuery;

						dispatch((0, _repos.invalidateReposPage)(page, reposQuery));
				}
		}, {
				key: 'render',
				value: function render() {
						var _this2 = this;

						var menu = _react3.default.createElement(
								'div',
								null,
								_react3.default.createElement(
										_IconButton2.default,
										{
												onClick: function onClick() {
														_this2.handleQueryChange();
												}
										},
										_react3.default.createElement(_search2.default, { color: 'white' })
								)
						);

						var controlledScrolling = this.props.left !== undefined || this.props.top !== undefined;

						var _props4 = this.props;
						var reposQuery = _props4.reposQuery;
						var page = _props4.page;
						var error = _props4.error;
						var repos = _props4.repos;
						var isFetching = _props4.isFetching;

						return _react3.default.createElement(
								_Activity2.default,
								{ title: 'Repos', nav_index: '/repos', menu: menu },
								_react3.default.createElement(
										'div',
										null,
										_react3.default.createElement(_TextField2.default, {

												ref: 'query',
												hintStyle: { color: 'white' },
												inputStyle: { color: 'white' },
												hintText: 'Search',
												onKeyDown: function onKeyDown(event) {
														_this2.handleQueryChange(event);
												},
												style: styles.search
										}),
										error && _react3.default.createElement(
												'div',
												null,
												error.message || 'Unknown errors.'
										),
										isFetching && _react3.default.createElement(
												_MiddleContainer2.default,
												{ top: '50px' },
												_react3.default.createElement(_RefreshIndicator2.default, {
														size: 40,
														left: 10,
														top: 0,
														status: 'loading',
														style: styles.refresh
												})
										),
										repos.length > 0 && _react3.default.createElement(
												'div',
												{ style: { opacity: isFetching ? 0.5 : 1, paddingTop: '4px' } },
												repos.map(function (repo) {
														return _react3.default.createElement(
																'div',
																{ key: repo.full_name },
																_react3.default.createElement(_Repo2.default, { repo: repo, owner: repo.owner })
														);
												})
										),
										page > 1 && _react3.default.createElement(
												_FloatingActionButton2.default,
												{
														secondary: true,
														style: styles.left_button,
														onTouchTap: this.handlePreviousPageClick
												},
												_react3.default.createElement(_keyboardArrowLeft2.default, null)
										),
										_react3.default.createElement(
												_FloatingActionButton2.default,
												{
														secondary: true,
														style: styles.middle_button,
														onTouchTap: this.handleRefreshClick
												},
												_react3.default.createElement(_replay2.default, null)
										),
										_react3.default.createElement(
												_FloatingActionButton2.default,
												{
														secondary: true,
														style: styles.right_button,
														onTouchTap: this.handleNextPageClick
												},
												_react3.default.createElement(_keyboardArrowRight2.default, null)
										)
								)
						);
				}
		}]);

		return Repos;
}(_react2.Component));

Repos.propTypes = {
		page: _react2.PropTypes.number.isRequired,
		reposQuery: _react2.PropTypes.string.isRequired,
		repos: _react2.PropTypes.array.isRequired,
		isFetching: _react2.PropTypes.bool.isRequired,
		error: _react2.PropTypes.object,
		dispatch: _react2.PropTypes.func.isRequired,
		left: _react2.PropTypes.number,
		top: _react2.PropTypes.number
};

function mapStateToProps(state) {
		var selectedReposPage = state.selectedReposPage;
		var reposByPage = state.reposByPage;
		var reposQuery = state.reposQuery;

		var page = selectedReposPage ? selectedReposPage : 1;
		if (!reposByPage[page]) {
				return {
						page: page,
						error: null,
						isFetching: false,
						didInvalidate: false,
						totalCount: 0,
						repos: [],
						reposQuery: reposQuery
				};
		}

		return {
				page: page,
				error: reposByPage[page].error,
				isFetching: reposByPage[page].isFetching,
				didInvalidate: reposByPage[page].didInvalidate,
				totalCount: reposByPage[page].totalCount,
				repos: reposByPage[page].repos,
				reposQuery: reposQuery
		};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Repos);