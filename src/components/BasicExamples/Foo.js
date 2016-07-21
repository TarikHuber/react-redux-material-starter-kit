import React, {  Component } from 'react';

class Foo extends Component{

	render(){
		return (
			<div>
				<h3>Foo</h3>
				<p>This is a very simple example of a component that has no properties and no dispatches.</p>
				<p>As you can see: This small peace of code could be reused in any kind of application.</p>
				<p>We have here no application header so if you are watching this on a mobile device open the left menu with sliding it from the left.</p>
			</div>
		);
	}
};

export default (Foo);
