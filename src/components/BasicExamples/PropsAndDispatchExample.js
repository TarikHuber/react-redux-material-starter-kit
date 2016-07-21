import React, {  Component, PropTypes } from 'react';

export default class PropsAndDispatchExample extends Component{
	constructor(props) {
		super(props)
	};

	render(){

		const {title, updateTitle} = this.props;

		function handleClick(){

			updateTitle(Math.random().toString(36).substr(2));
		}


		return (
			<div>
				<h3>Props Example</h3>
				<p>This example demonstartes how to use a react component with props and dispatches.</p>
				<p>Like the props we connect the dispatches using redux connect.</p>
				<p>We now show the title of the application that is synced with the state:</p>
				<h4>{title}</h4>
				<button onClick={handleClick}>Change</button>
				<p>By pressing the button we change the title to a random generated string.</p>
			</div>
		);
	}
};

PropsAndDispatchExample.propTypes = {
	title: PropTypes.string.isRequired,
	updateTitle: PropTypes.func.isRequired,
}
