import React, {  Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';

class Search extends Component{
  constructor(props) {
    super(props)
  };

  render(){

    const { hintText , appStyle, handleSearchRequest} = this.props
    const alternateTextColor=appStyle.theme.source.palette.alternateTextColor;

    function handleKeyDown(event, value){

      if(event && event.keyCode!==13){
        return;
      }

      handleSearchRequest(value);
    }

    return (
      <div style={{ display:'inline-block'}} >
        <TextField
          ref='search'
          style={{width:150}}
          hintStyle={{color:alternateTextColor}}
          inputStyle={{color:alternateTextColor}}
          hintText={hintText}
          onKeyDown ={ (event)=>{handleKeyDown(event, this.refs.search.input.value)}}
          />
        <IconButton
          onClick={()=>handleSearchRequest(this.refs.search.input.value)}>
          <ActionSearch color={alternateTextColor}/>
        </IconButton>
      </div>
    );
  }
};

Search.propTypes = {
  hintText: PropTypes.string,
  appStyle: PropTypes.object.isRequired,
  handleSearchRequest: PropTypes.func.isRequired,
}

export default (Search);
