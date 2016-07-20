import React, {  Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class CounterMenu extends Component{
	constructor(props) {
		super(props)
	};
  
	render(){
		
	const {  intl, onReset, onIncrement, onDecrement } = this.props
		
		return (  
			<IconMenu					
				iconButtonElement={<IconButton><MoreVertIcon color='white' /></IconButton>}
			>
				<MenuItem primaryText={intl.messages.reset||'reset'} onTouchTap={onReset}/>
				<MenuItem primaryText={intl.messages.increment||'increment'} onTouchTap={onIncrement}/>
				<MenuItem primaryText={intl.messages.decrement||'decrement'} onTouchTap={onDecrement}/>
			</IconMenu>
		);
	}
};

CounterMenu.propTypes = {
	intl: PropTypes.object.isRequired,
	onReset: PropTypes.func.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
}

export default (CounterMenu);