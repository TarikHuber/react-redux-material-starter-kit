import React, { PropTypes } from 'react'
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';

const Todo = ({ onClickHandler, completed, text , id}) => (

  <ListItem  key={id} primaryText={text} onClick={onClickHandler} rightToggle={<Toggle key={id} toggled={completed}/>} />
)

Todo.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo