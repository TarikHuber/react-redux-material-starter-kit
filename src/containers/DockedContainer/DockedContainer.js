import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

class DockedContainer extends Component {
  constructor(props) {
    super(props)
	
  };
  
  render() {
    const { browser, appNavDrawer} = this.props
	
	let docked=browser.greaterThan.medium && appNavDrawer.responsive;

	const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       docked: docked
     })
    );
	
    return (

		<div >
			{childrenWithProps}
		</div>

    )
  }
}

DockedContainer.propTypes = {
	browser: PropTypes.object.isRequired,
	appNavDrawer: PropTypes.object.isRequired,
	children: PropTypes.object,
}

const mapStateToProps = (state) => {
  const {browser, appNavDrawer } = state;
  return {
	browser: browser,
	appNavDrawer: appNavDrawer,
  };
};

export default connect(
  mapStateToProps
)(DockedContainer);
