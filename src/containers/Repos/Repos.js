import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { invalidateReposPage, 
		selectReposPage, 
		fetchTopReposIfNeeded, 
		fetchReposForQuery,
		reposQuery,
		clearRepos} from '../../actions/repos';
import Repo from '../../components/Repo/Repo';
import Activity from '../../containers/Activity/Activity';
import MiddleContainer from '../../containers/MiddleContainer/MiddleContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import AVReplay from 'material-ui/svg-icons/av/replay';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';


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


class Repos extends Component {
  constructor(props) {
    super(props);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {

    const { dispatch, page } = this.props;
    dispatch(fetchTopReposIfNeeded(page));

  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, page, reposQuery } = nextProps;
    dispatch(fetchTopReposIfNeeded(page, reposQuery));
  }

   handleQueryChange(event){
	   const { dispatch } = this.props;
	      
		  
		  
	   if(event && event.keyCode!==13){
		   return;
	   }
	   
	   dispatch(clearRepos());
	   dispatch(reposQuery(this.refs.query.input.value));
	   dispatch(selectReposPage(1));
	   //dispatch(fetchTopReposIfNeeded(1, reposQuery));
	   dispatch(fetchReposForQuery(this.refs.query.input.value));
	   
   }	

  handleNextPageClick() {
    const { page, repos } = this.props;
    if (repos.length > 0) {
      // go to next page only if more data may be available
      this.props.dispatch(selectReposPage(page + 1));
    }
  }

  handlePreviousPageClick() {
    const { page } = this.props;
    if (page > 1) {
      this.props.dispatch(selectReposPage(page - 1));
    }
  }

  handleRefreshClick(event) {
    event.preventDefault();

    const { dispatch, page, reposQuery } = this.props;
    dispatch(invalidateReposPage(page, reposQuery));
  }
  
  
  

  render() {
	  
	const menu =<div>		
					<IconButton
						onClick={()=>{this.handleQueryChange()}}
					><ActionSearch color={'white'}/></IconButton>
				</div>;  
	  
	  
	  
    const controlledScrolling =
      this.props.left !== undefined || this.props.top !== undefined;

    const { reposQuery, page, error, repos, isFetching } = this.props;
    return (
	
	
		<Activity title='Repos' nav_index='/repos' menu={menu} >
      <div >
	  
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
            <div >
              {error.message || 'Unknown errors.'}
            </div>
        }


		
		{isFetching &&
		
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

        {repos.length > 0 &&
          <div  style={{ opacity: isFetching ? 0.5 : 1 , paddingTop: '4px'}}>
              {repos.map(repo =>
                <div key={repo.full_name}>
                  <Repo repo={repo} owner={repo.owner} />
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

Repos.propTypes = {
  page: PropTypes.number.isRequired,
  reposQuery: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  left: PropTypes.number,
  top: PropTypes.number
};

function mapStateToProps(state) {
  const { selectedReposPage, reposByPage, reposQuery} = state;
  const page = selectedReposPage ? selectedReposPage : 1;
  if (!reposByPage[page]) {
    return {
      page: page,
      error: null,
      isFetching: false,
      didInvalidate: false,
      totalCount: 0,
      repos: [],
	  reposQuery: reposQuery,
    };
  }

  return {
    page: page,
    error: reposByPage[page].error,
    isFetching: reposByPage[page].isFetching,
    didInvalidate: reposByPage[page].didInvalidate,
    totalCount: reposByPage[page].totalCount,
    repos: reposByPage[page].repos,
	reposQuery: reposQuery,
  };
}

export default connect(mapStateToProps)(Repos);