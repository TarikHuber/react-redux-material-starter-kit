import React, { Component, PropTypes } from 'react'
import Activity from '../../components/Activity/Activity';
import CounterMenu from './CounterMenu';
import CounterFooter from './CounterFooter';
import MiddleContainer from '../MiddleContainer/MiddleContainer';

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
			nav_index='counter' 
			menu={<CounterMenu {...this.props} />
		}>
			<div>
				<MiddleContainer top={'100px'}>
					<h1 style={styles.txt_number}>{value}</h1>
				</MiddleContainer>
				<CounterFooter {...this.props} />
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