import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/todo';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

class Filter extends Component {
  constructor(props) {
    super(props)

  };


  render(){
    const {messages , visibilityFilter, setVisibilityFilter } = this.props;

    function handleChangeSingle (event, value) {
      setVisibilityFilter(value);
    };


    return (
      <IconMenu
        iconButtonElement={<IconButton><ContentFilter color={'white'}/></IconButton>}
        onChange={handleChangeSingle}
        value={visibilityFilter}
        multiple={false}
        >
        <MenuItem value="SHOW_ALL" primaryText={messages.all||'all'} />
        <MenuItem value="SHOW_COMPLETED" primaryText={messages.completed||'completed'} />
        <MenuItem value="SHOW_ACTIVE" primaryText={messages.active||'active'} />
      </IconMenu>
    )
  }
}


Filter.propTypes = {
  messages: PropTypes.object.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  visibilityFilter:PropTypes.string.isRequired,
}

function mapStateToProps(state) {

  const { intl, visibilityFilter} = state;

  return {
    messages: intl.messages,
    visibilityFilter: visibilityFilter,
  };

}



const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter:(filter)=>{
      dispatch(setVisibilityFilter(filter));
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
