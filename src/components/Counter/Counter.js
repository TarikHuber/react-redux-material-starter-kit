import React, { Component, PropTypes } from 'react'
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import AVReplay from 'material-ui/svg-icons/av/replay';
import BottomLeftFAB from '../FloatingActionButtons/BottomLeftFAB';
import BottomMiddleFAB from '../FloatingActionButtons/BottomMiddleFAB';
import BottomRightFAB from '../FloatingActionButtons/BottomRightFAB';
import Activity from '../../components/Activity/Activity';
import MiddleContainer from '../MiddleContainer/MiddleContainer';
import FooterAppBar from '../FooterAppBar/FooterAppBar';
import AppBarMenu from '../../containers/AppBarMenu/AppBarMenu';
import DockedContainer from '../../containers/DockedContainer/DockedContainer';

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


		const menuItems=[
			{	key: 'reset',
				text:intl.messages.reset||'reset',
				onTouchTap: onReset
			},
			{
				key: 'increment',
				text:intl.messages.increment||'increment',
				onTouchTap: onIncrement
			},
			{
				key: 'decrement',
				text:intl.messages.decrement||'decrement',
				onTouchTap: onDecrement
			}
		];

		return (
			<Activity
				title={intl.messages.counter}
				menu={<AppBarMenu items={menuItems} />
		}>
		<div>
			<MiddleContainer top={100}>
				<h1 style={styles.txt_number}>{value}</h1>
			</MiddleContainer>


			<DockedContainer>
				<BottomLeftFAB
					secondary={true}
					onTouchTap={onDecrement}
					icon={<ContentRemove />}
					/>
			</DockedContainer>

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
