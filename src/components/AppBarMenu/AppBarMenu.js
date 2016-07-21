import React, {  Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class AppBarMenu extends Component{
	constructor(props) {
		super(props)
	};

	render(){

		const {  items , appStyle} = this.props

		return (
				<IconMenu
					iconButtonElement={	<IconButton>
						<MoreVertIcon color={appStyle.theme.source.palette.alternateTextColor} />
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

AppBarMenu.propTypes = {
	items: PropTypes.array.isRequired,
	appStyle: PropTypes.object.isRequired,
}

export default (AppBarMenu);
