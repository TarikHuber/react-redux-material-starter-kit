import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

class DockedContainer extends Component {
  constructor(props) {
    super(props)

  };

  render() {
    const { browser, navigation} = this.props

	let docked=browser.greaterThan.medium && navigation.responsive;

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
	navigation: PropTypes.object.isRequired,
	children: PropTypes.object,
}

const mapStateToProps = (state) => {
  const {browser, navigation } = state;
  return {
	browser: browser,
	navigation: navigation,
  };
};

export default connect(
  mapStateToProps
)(DockedContainer);
