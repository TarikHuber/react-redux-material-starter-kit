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
		
	const {  items } = this.props
		
		return (  
			<IconMenu					
				iconButtonElement={	<IconButton>
										<MoreVertIcon color='white' />
									</IconButton>}
			>
				{items.map(item =>
					<MenuItem 
						key={item.key}
						primaryText={item.text} 
						onTouchTap={item.onTouchTap}
				/>)}
			</IconMenu>
		);
	}
};

CounterMenu.propTypes = {
	items: PropTypes.array.isRequired,

}

export default (CounterMenu);