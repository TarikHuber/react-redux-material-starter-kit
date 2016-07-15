import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {onIncrement, onDecrement, onReset} from '../../actions/counter';
import {setSelectedIndex} from '../../actions/appNavDrawer';
import { messages } from './Counter.i18n';
import {  FormattedNumber, FormattedMessage} from 'react-intl';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import AVReplay from 'material-ui/svg-icons/av/replay';
import Activity from '../../containers/Activity/Activity';

import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
		zIndex:3,
	    right:230,	
        bottom: 35,
	  },
	  
	  middle_button:{
		position: 'fixed',
		zIndex:3,
	    right:130,	
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
		  fontSize: 80,
	  }

}


class Counter extends Component {
  constructor(props) {
    super(props)
	
  };
  

    

  render() {
    const { intl, onReset, theme, value, onIncrement, onDecrement , locale} = this.props
	
	
	
	const menu=<IconMenu					
					iconButtonElement={
					  <IconButton><MoreVertIcon color={'white'}/></IconButton>
					}
					targetOrigin={{horizontal: 'right', vertical: 'top'}}
					anchorOrigin={{horizontal: 'right', vertical: 'top'}}
					
				  >
					<MenuItem primaryText="Reset" onTouchTap={onReset}/>
					<MenuItem primaryText="Increment" onTouchTap={onIncrement}/>
					<MenuItem primaryText="Decrement" onTouchTap={onDecrement}/>
				</IconMenu>;
	
	
    return (
      <Activity title={intl.messages.counter} nav_index='/counter' menu={menu}>
	  <div>
	  
	    <div style={styles.main_container}>
			<div style={styles.fixer_container}>
				<h1 style={styles.txt_number}>
				{value}
				</h1>
			</div>
		</div>
		
		<FloatingActionButton 
			secondary={true}
			style={styles.left_button}
			onTouchTap={onDecrement}
			>
			
		  <ContentRemove />
		</FloatingActionButton>
		
		

		<FloatingActionButton 
			secondary={true}
			style={styles.middle_button}
			onTouchTap={onReset}
			>
			
		  <AVReplay />
		</FloatingActionButton>

		
		<FloatingActionButton 
			secondary={true}
			style={styles.right_button}
			onTouchTap={onIncrement}
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

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  setAppBarTitle: PropTypes.func.isRequired,
  setAppBarIconElementRight: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
}


function mapStateToProps(state) {

	 const { intl, appNavDrawer, appStyle, counter, locale} = state;

	 return {
			value: counter,
			theme: appStyle.theme,
			appNavDrawer:appNavDrawer,
			intl:intl,
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
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);