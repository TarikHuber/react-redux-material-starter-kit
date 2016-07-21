import React, { PropTypes } from 'react'
import Todo from './Todo'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const TodoList = ({ todos, onTodoClick }) => (

	<List>
		{todos.map(todo =>
			<div key={todo.id}>
				<Todo
					{...todo}
					onClickHandler={() => onTodoClick(todo.id)}
					/>
				<Divider/>
			</div>
		)}
	</List>

)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList
