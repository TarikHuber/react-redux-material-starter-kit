import React, { Component, PropTypes } from 'react';
import Repo from '../../components/Repos/Repo';
import Activity from '../../components/Activity/Activity';
import IconButton from 'material-ui/IconButton/IconButton';
import Search from '../../containers/Search/Search';
import PaginationFooter from '../../components/PaginationFooter/PaginationFooter';
import MiddleRefreshIndicator from '../../components/MiddleRefreshIndicator/MiddleRefreshIndicator';
import FilterNav from '../../components/FilterNav/FilterNav';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {

    const { fetchTopReposIfNeeded, page } = this.props;
    fetchTopReposIfNeeded(page);

  }

  componentWillReceiveProps(nextProps) {
    const { fetchTopReposIfNeeded, page, reposQuery } = nextProps;
    fetchTopReposIfNeeded(page, reposQuery);
  }



  handleSearchRequest(query){

    const { clearRepos, setReposQuery, selectReposPage, fetchReposForQuery  } = this.props;

    clearRepos();
    setReposQuery(query);
    selectReposPage(1);
    fetchReposForQuery(query);
  }

  handleNextPageClick() {
    const { page, repos, selectReposPage } = this.props;
    if (repos.length > 0) {
      selectReposPage(page + 1);
    }
  }

  handlePreviousPageClick() {
    const { page, selectReposPage } = this.props;
    if (page > 1) {
      selectReposPage(page - 1);
    }
  }

  handleRefreshClick(event) {
    const {  page, reposQuery, invalidateReposPage } = this.props;
    invalidateReposPage(page, reposQuery);
  }

  render() {

    const { messages, reposQuery, page, error, repos, isFetching, setFilterNavOpen } = this.props;

    return (

      <Activity
        title={messages.repos||'repos'}
        menu={<div >
          <Search
            handleSearchRequest={(query)=>this.handleSearchRequest(query)}
            hintText={messages.search||'search'} />
          <IconButton onClick={()=>setFilterNavOpen(true)}><ContentFilter color={'white'} /></IconButton>
        </div>} >

        <div >

          <FilterNav title={messages.filter||'filter'} />

          { error &&	<div >	{error.message || 'Unknown errors.'} </div>	}

          { isFetching && <MiddleRefreshIndicator/> }

          {repos.length > 0 &&
            <div  style={{ opacity: isFetching ? 0.5 : 1 , paddingTop: '4px'}}>
              {repos.map(repo =>
                <div key={repo.full_name}>
                  <Repo repo={repo} owner={repo.owner} />
                </div>
              )}
            </div>
          }

          <PaginationFooter
            page={page}
            handlePreviousPageClick={this.handlePreviousPageClick}
            handleRefreshClick={this.handleRefreshClick}
            handleNextPageClick={this.handleNextPageClick}/>

        </div>
      </Activity>
    );
  }
}

Repos.propTypes = {
  page: PropTypes.number.isRequired,
  reposQuery: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
  left: PropTypes.number,
  top: PropTypes.number,
  invalidateReposPage: PropTypes.func.isRequired,
  selectReposPage: PropTypes.func.isRequired,
  fetchTopReposIfNeeded: PropTypes.func.isRequired,
  fetchReposForQuery: PropTypes.func.isRequired,
  setReposQuery: PropTypes.func.isRequired,
  clearRepos: PropTypes.func.isRequired,
  setFilterNavOpen: PropTypes.func.isRequired,
};

export default (Repos);
