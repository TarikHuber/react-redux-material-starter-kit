import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import GitUser from '../../components/GitUser/GitUser';
import MiddleContainer from '../../components/MiddleContainer/MiddleContainer';
import Activity from '../../components/Activity/Activity';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { invalidateUsersPage,
	selectUsersPage,
	fetchTopUsersIfNeeded,
	fetchUsersForQuery,
	usersQuery,
	clearUsers } from '../../actions/gitUsers';
	import RefreshIndicator from 'material-ui/RefreshIndicator';
	import AVReplay from 'material-ui/svg-icons/av/replay';
	import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
	import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
	import TextField from 'material-ui/TextField';
	import ActionSearch from 'material-ui/svg-icons/action/search';
	import IconButton from 'material-ui/IconButton/IconButton';

	const styles={

		left_button:{
			position: 'fixed',
			zIndex:4,
			right:230,
			bottom: 35,

		},

		middle_button:{

			position: 'fixed',
			zIndex:4,
			right:130,
			bottom: 35,
		},


		right_button:{
			position: 'fixed',
			zIndex:4,
			right:30,
			bottom: 35,
		},

		refresh: {

			display: 'inline-block',
			position: 'relative',


		},

		search:{
			position: 'fixed',
			float:'right',
			zIndex:4,
			right:50,
			top: 10,
			width: 150,
		},


	}


	class UsersPage extends Component {
		constructor(props) {
			super(props);
			this.handleNextPageClick = this.handleNextPageClick.bind(this);
			this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
			this.handleRefreshClick = this.handleRefreshClick.bind(this);
		}

		componentDidMount() {
			const { dispatch, page} = this.props;
			dispatch(fetchTopUsersIfNeeded(page));

		}



		componentWillReceiveProps(nextProps) {
			if (nextProps.page !== this.props.page) {
				const { dispatch, page, usersQuery } = nextProps;
				dispatch(fetchTopUsersIfNeeded(page, usersQuery));
			}
		}

		handleQueryChange(event){
			const { dispatch } = this.props;

			if(event && event.keyCode!==13){
				return;
			}

			dispatch(clearUsers());
			dispatch(usersQuery(this.refs.query.input.value));
			dispatch(selectUsersPage(1));
			dispatch(fetchUsersForQuery(this.refs.query.input.value));
		}

		handleNextPageClick() {
			const { page, users } = this.props;
			if (users.length > 0) {
				// go to next page only if more users may be available
				this.props.dispatch(selectUsersPage(page + 1));
			}
		}

		handlePreviousPageClick() {
			const page = this.props.page;
			if (page > 1) {
				this.props.dispatch(selectUsersPage(page - 1));
			}
		}

		handleRefreshClick(event) {
			event.preventDefault();

			const { dispatch, page } = this.props;
			dispatch(invalidateUsersPage(page, usersQuery));
		}

		render() {
			const { page, error, users, isFetching } = this.props;


			const menu =<div>
				<IconButton
					onClick={()=>{this.handleQueryChange()}}
					><ActionSearch color={'white'}/></IconButton>
			</div>;


			return (
				<Activity title="Git Users" nav_index='/gitusers' menu={menu}>
					<div>


						<TextField
							ref='query'
							hintStyle={{color:'white'}}
							inputStyle={{color:'white'}}
							hintText="Search"
							onKeyDown ={ (event)=>{this.handleQueryChange(event)}}
							style={styles.search}
							/>


						{
							error &&
							<div>
								{error.message || 'Unknown errors.'}
							</div>
						}

						{!isFetching && users.length === 0 &&

							<MiddleContainer top='50px'>
								<RefreshIndicator
									size={40}
									left={10}
									top={0}
									status="loading"
									style={styles.refresh}
									/>
							</MiddleContainer>

						}

						{users.length > 0 &&
							<div  style={{ opacity: isFetching ? 0.5 : 1 , paddingTop: '4px'}}>
								{users.map(user =>
									<div key={user.login}>
										<GitUser key={user.login} user={user} />
									</div>
								)}
							</div>
						}

						{page>1 &&

							<FloatingActionButton
								secondary={true}
								style={styles.left_button}
								onTouchTap={this.handlePreviousPageClick}
								>
								<HardwareKeyboardArrowLeft />
							</FloatingActionButton>
						}

						<FloatingActionButton
							secondary={true}
							style={styles.middle_button}
							onTouchTap={this.handleRefreshClick}
							>
							<AVReplay />
						</FloatingActionButton>

						<FloatingActionButton
							secondary={true}
							style={styles.right_button}
							onTouchTap={this.handleNextPageClick}
							>
							<HardwareKeyboardArrowRight />
						</FloatingActionButton>
					</div>
				</Activity>
			);
		}
	}

	UsersPage.propTypes = {
		page: PropTypes.number.isRequired,
		users: PropTypes.array.isRequired,
		isFetching: PropTypes.bool.isRequired,
		dispatch: PropTypes.func.isRequired,
		error: PropTypes.object,
	};

	function mapStateToProps(state) {
		const { selectedUsersPage, usersByPage, usersQuery} = state;
		const page = selectedUsersPage || 1;

		if (!usersByPage || !usersByPage[page]) {
			return {
				page,
				isFetching: false,
				didInvalidate: false,
				totalCount: 0,
				users: [],
				error: null,
				usersQuery: usersQuery,
			};
		}

		return {
			page,
			error: usersByPage[page].error,
			isFetching: usersByPage[page].isFetching,
			didInvalidate: usersByPage[page].didInvalidate,
			totalCount: usersByPage[page].totalCount,
			users: usersByPage[page].users,
			usersQuery:usersQuery,
		};
	}

	export default connect(mapStateToProps)(UsersPage);
