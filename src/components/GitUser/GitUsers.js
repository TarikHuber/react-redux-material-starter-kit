import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GitUser from '../../components/GitUser/GitUser';
import MiddleContainer from '../../components/MiddleContainer/MiddleContainer';
import Activity from '../../components/Activity/Activity';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import AVReplay from 'material-ui/svg-icons/av/replay';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton/IconButton';
import Search from '../../containers/Search/Search';

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

}


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

    const { clearUsers, setUsersQuery, selectUsersPage, fetchUsersForQuery } = this.props;

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
    const { page, selectUsersPage} = this.props.page;
    if (page > 1) {
      selectUsersPage(page - 1);
    }
  }

  handleRefreshClick(event) {
    event.preventDefault();

    const { invalidateUsersPage, page } = this.props;
    invalidateUsersPage(page, usersQuery);
  }

  render() {
    const { page, error, users, isFetching } = this.props;

    return (
      <Activity
        title="Git Users"
        nav_index='/gitusers'
        menu={<Search handleSearchRequest={(query)=>this.handleSearchRequest(query)} />}>
        <div>

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
