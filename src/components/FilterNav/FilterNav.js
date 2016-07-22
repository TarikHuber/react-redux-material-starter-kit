import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setFilterNavOpen } from '../../actions/filterNav';
import {Drawer } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class FilterNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, filterNav, setFilterNavOpen } = this.props;

	let drawerP = {...filterNav,
		open:filterNav.open,
		onRequestChange:() => {console.log('test')},
    };

    return (

		<Drawer {...drawerP} >
        <AppBar
          title={title}
          iconElementLeft={<IconButton
                              onClick={()=>setFilterNavOpen(false)}>
                              <NavigationClose />
                           </IconButton>}/>
		</Drawer>

    );

  }
}

FilterNav.propTypes = {
  title: PropTypes.string,
  filterNav: PropTypes.object.isRequired,
  setFilterNavOpen: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {  filterNav } = state;
  return {
	   filterNav: filterNav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterNavOpen: (open) => {
      dispatch(setFilterNavOpen(open));
    },

  }
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(FilterNav);
