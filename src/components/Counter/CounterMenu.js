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
		
	const {  onReset, onIncrement, onDecrement } = this.props
		
		return (  
			<IconMenu					
					iconButtonElement={
					  <IconButton><MoreVertIcon color={'white'}/></IconButton>
					}
					targetOrigin={{horizontal: 'right', vertical: 'top'}}
					anchorOrigin={{horizontal: 'right', vertical: 'top'}}
					
				  >
					<MenuItem primaryText="Reset" onTouchTap={onReset}/>
					<MenuItem primaryText="Increment" onTouchTap={onIncrement}/>
					<MenuItem primaryText="Decrement" onTouchTap={onDecrement}/>
				</IconMenu>
		);
	}
};

CounterMenu.propTypes = {
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default (CounterMenu);