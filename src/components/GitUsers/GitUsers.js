import React, { Component, PropTypes } from 'react';
import GitUser from '../../components/GitUsers/GitUser';
import Activity from '../../components/Activity/Activity';
import IconButton from 'material-ui/IconButton/IconButton';
import Search from '../../containers/Search/Search';
import PaginationFooter from '../../components/PaginationFooter/PaginationFooter';
import MiddleRefreshIndicator from '../../components/MiddleRefreshIndicator/MiddleRefreshIndicator';


export default class GitUsers extends Component {
  constructor(props) {
    super(props);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
    this.handleSearchRequest=this.handleSearchRequest.bind(this);
  }

  componentDidMount() {
    const { fetchTopUsersIfNeeded, page} = this.props;
    fetchTopUsersIfNeeded(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      const { fetchTopUsersIfNeeded, page, usersQuery } = nextProps;
      fetchTopUsersIfNeeded(page, usersQuery);
    }
  }

  handleSearchRequest(query){

    const {  clearUsers, setUsersQuery, selectUsersPage, fetchUsersForQuery } = this.props;

    clearUsers();
    setUsersQuery(query);
    selectUsersPage(1);
    fetchUsersForQuery(query);
  }

  handleNextPageClick() {
    const { page, users, selectUsersPage } = this.props;
    if (users.length > 0) {
      selectUsersPage(page + 1);
    }
  }

  handlePreviousPageClick() {
    const { page, selectUsersPage} = this.props;
    if (page > 1) {
      selectUsersPage(page - 1);
    }
  }

  handleRefreshClick() {
    const { invalidateUsersPage, page, usersQuery } = this.props;

    invalidateUsersPage(page, usersQuery);
  }

  render() {
    const { messages, page, error, users, isFetching } = this.props;

    return (
      <Activity
        title={messages.git_users||'git_users'}
        menu={<Search
          handleSearchRequest={(query)=>this.handleSearchRequest(query)}
          hintText={messages.search||'search'} />}>
          <div>

            { error && <div> {error.message || 'Unknown errors.'} </div> }

            {!isFetching && users.length === 0 && <MiddleRefreshIndicator /> }

            {users.length > 0 &&
              <div  style={{ opacity: isFetching ? 0.5 : 1 , paddingTop: '4px'}}>
                {users.map(user =>
                  <div key={user.login}>
                    <GitUser key={user.login} user={user} />
                  </div>
                )}
              </div>
            }

            <PaginationFooter
              page={page}
              handlePreviousPageClick={this.handlePreviousPageClick}
              handleRefreshClick={this.handleRefreshClick}
              handleNextPageClick={this.handleNextPageClick}
              />

          </div>
        </Activity>
      );
    }
  }

  GitUsers.propTypes = {
    messages: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    usersQuery: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    invalidateUsersPage: PropTypes.func.isRequired,
    selectUsersPage: PropTypes.func.isRequired,
    fetchTopUsersIfNeeded: PropTypes.func.isRequired,
    fetchUsersForQuery: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setUsersQuery: PropTypes.func.isRequired,
    error: PropTypes.object,
  };
