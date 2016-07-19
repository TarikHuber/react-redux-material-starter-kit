import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import AVReplay from 'material-ui/svg-icons/av/replay';

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

}


class CounterFooter extends Component {
  constructor(props) {
    super(props)
	
  };
  
  render() {
    const {  onReset, onIncrement, onDecrement } = this.props
	
    return (

	  <div>
	  
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

    )
  }
}

CounterFooter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}


export default (CounterFooter);