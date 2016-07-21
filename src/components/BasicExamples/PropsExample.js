import React, {  Component, PropTypes } from 'react';

export default class PropsExample extends Component{
	constructor(props) {
		super(props)
	};

	render(){

		const {intl} = this.props;

		return (
			<div>
				<h3>Props Example</h3>
				<p>This example demonstartes how to use a react component with props.</p>
				<p>Because we use redux the state is immutable. To get a state value we use redux connect.</p>
				<p>And the prop that we us in this componente is intl where we get the locale value:</p>
				<h4>{intl.locale}</h4>
				<p>If you change the language in the settings the value abow would also change.</p>
			</div>
		);
	}
};

PropsExample.propTypes = {
	intl: PropTypes.object.isRequired,
}
