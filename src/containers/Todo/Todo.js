import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {onIncrement, onDecrement, onReset} from '../../actions/counter';
import { messages } from './Todo.i18n';
import {  FormattedNumber, FormattedMessage} from 'react-intl';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import AVReplay from 'material-ui/svg-icons/av/replay';
import Activity from '../../components/Activity/Activity';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import AddTodo from '../../containers/Todo/AddTodo'
import Filter from '../../containers/Todo/Filter'
import VisibleTodoList from '../../containers/Todo/VisibleTodoList'
import Dialog from 'material-ui/Dialog';
import {setTodoDialogOpen} from '../../actions/todoDialog';

let open=false;
  
  
const styles={
	 appBar: {
        position: 'fixed',
		zIndex:2,
		
        bottom: 0,
		height:64,
		margin: '0px',
        },
		
	  left_button:{
		position: 'fixed',
		float: 'left',
		zIndex:3,	
        bottom: 35,
	  },
	  
	  middle_button:{
		position: 'fixed',
		float: 'left',
		zIndex:3,
	    left: '50%',
        bottom: 35,
	  },

	  
	  right_button:{
		position: 'fixed',
		zIndex:3,
	    right:30,	
        bottom: 35,
	  },
	  
	  main_container:{
		float: 'left',
		position: 'relative',
		left: '50%',
		marginTop: '100px',
	  },

	  fixer_container:{
		float: 'left',
		position: 'relative',
		left: '-50%',
	  },
	  
	  txt_number:{
		  fontSize:"80",
	  }

}


class Todo extends Component {
  constructor(props) {
    super(props)
	  
  };
    

  render() {
    const { intl, todoDialog, setTodoDialogOpen, onReset, theme, value, onIncrement, onDecrement , locale} = this.props;
	
	const menu=<div>
					<Filter/>
					<IconMenu
						iconButtonElement={
						  <IconButton><MoreVertIcon color={'white'}/></IconButton>
						}
						targetOrigin={{horizontal: 'right', vertical: 'top'}}
						anchorOrigin={{horizontal: 'right', vertical: 'top'}}
						
					  >
						<MenuItem 
							primaryText={<FormattedMessage {...messages.add}/>} 
							onTouchTap={()=>setTodoDialogOpen(true)}/>
					</IconMenu>
				</div>;
	
	function handleOpen(){
		setTodoDialogOpen(true);
	}

    return (
	
		<Activity title={intl.messages.todo} nav_index='/todo' menu={menu} >
		  <div>
		  
			  <div>
				<AddTodo />
				<VisibleTodoList />
			  </div>
			  

			<FloatingActionButton 
				secondary={true}
				style={styles.right_button}
				onTouchTap={handleOpen}
				>
			  <ContentAdd />
			</FloatingActionButton>
		 
		  
		  <AppBar 
		  
			style={styles.appBar}
			iconElementLeft={<div/>}

				/>
				
		  </div>
		</Activity>
    )
  }
}

Todo.propTypes = {
  intl: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  setAppBarTitle: PropTypes.func.isRequired,
  setAppBarIconElementRight: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  setTodoDialogOpen: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  todoDialog: PropTypes.object.isRequired,
  visibilityFilter:PropTypes.string.isRequired,
}


function mapStateToProps(state) {

	 const { intl, visibilityFilter, todoDialog, appNavDrawer, appStyle, counter, locale} = state;

	 return {
			intl: intl,
			value: counter,
			theme: appStyle.theme,
			appNavDrawer:appNavDrawer,
			todoDialog:todoDialog,
			visibilityFilter:visibilityFilter,
		 };

}



const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(onIncrement());
    },
	onDecrement: () => {
      dispatch(onDecrement());
    },
	onReset:()=>{
		dispatch(onReset());
	},
	setAppBarTitle:(title)=>{
		dispatch(setAppBarTitle(title));
	},
	setAppBarIconElementRight:(element)=>{
		dispatch(setAppBarIconElementRight(element));
	},
	setSelectedIndex:(index)=>{
		dispatch(setSelectedIndex(index));
	},
	setTodoDialogOpen:(index)=>{
		dispatch(setTodoDialogOpen(index));
	},
	
	
	
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);