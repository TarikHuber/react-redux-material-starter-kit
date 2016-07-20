import React, { Component, PropTypes } from 'react'
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import AVReplay from 'material-ui/svg-icons/av/replay';
import BottomLeftFAB from '../FloatingActionButtons/BottomLeftFAB';
import BottomMiddleFAB from '../FloatingActionButtons/BottomMiddleFAB';
import BottomRightFAB from '../FloatingActionButtons/BottomRightFAB';
import Activity from '../../components/Activity/Activity';
import CounterMenu from './CounterMenu';
import MiddleContainer from '../MiddleContainer/MiddleContainer';
import FooterAppBar from '../FooterAppBar/FooterAppBar';
 

const styles={
	  txt_number:{
		  fontSize: 80,
	  }
}  

class Counter extends Component {
  constructor(props) {
    super(props)
	
  };  
  
  render() {
    const { intl, onReset, value, onIncrement, onDecrement } = this.props
	
    return (
		<Activity 
			title={intl.messages.counter} 
			menu={<CounterMenu {...this.props} />
		}>
			<div>
				<MiddleContainer top={'100px'}>
					<h1 style={styles.txt_number}>{value}</h1>
				</MiddleContainer>
						
				<BottomLeftFAB 
					secondary={true}
					onTouchTap={onDecrement}
					icon={<ContentRemove />}
				/>
				
				<BottomMiddleFAB 
					secondary={true}
					onTouchTap={onReset}
					icon={<AVReplay />}
				/>
				
				<BottomRightFAB 
					secondary={true}
					onTouchTap={onIncrement}
					icon={<ContentAdd />}
				/>
				<FooterAppBar/>
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
  intl: PropTypes.object.isRequired,
}


export default (Counter);