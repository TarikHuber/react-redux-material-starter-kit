import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {  push } from 'react-router-redux'


class RestrictPage extends Component {
  componentWillMount() {
    const { auth, to } = this.props;

	
    if (auth.apiToken===undefined) {
      this.props.to(`/signin?redirect=${this.props.location.pathname}`);
    }
	
  }

  render() {
    const { auth } = this.props;
    if (auth.apiToken!==undefined) {
      return this.props.children;
    }

    return null;
  }
}

RestrictPage.propTypes = {
  auth: PropTypes.object,
  children: PropTypes.object,
  location: PropTypes.object,
  to: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
	const {auth} =state;
	
	
  return { auth: auth };
}

const mapDispatchToProps = (dispatch) => {
  return {
	to: (path)=>{
		dispatch(push(path))
	},

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestrictPage);
