import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Activity from '../../components/Activity/Activity';
import TodoDialog from '../../containers/Todo/TodoDialog'
import Filter from '../../containers/Todo/Filter'
import VisibleTodoList from '../../containers/Todo/VisibleTodoList'
import {setTodoDialogOpen} from '../../actions/todoDialog';
import AppBarMenu from '../../containers/AppBarMenu/AppBarMenu';
import BottomRightFAB from '../../components/FloatingActionButtons/BottomRightFAB';

class Todo extends Component {
    constructor(props) {
        super(props)

    };

    render() {
        const {messages, setTodoDialogOpen} = this.props;

        const menuItems = [
            {
                key: 'todo_add',
                text: messages.todo_add || 'todo_add',
                onTouchTap: () => setTodoDialogOpen(true)
            }
        ];

        function handleOpen() {
            setTodoDialogOpen(true);
        }

        const menu = <div>
            <Filter/>
            <AppBarMenu items={menuItems}/>
        </div>;

        return (

            <Activity title={messages.todo} menu={menu}>
                <div>
                    <TodoDialog/>
                    <VisibleTodoList/>
                    <BottomRightFAB secondary={true} onTouchTap={handleOpen} icon={< ContentAdd />}/>
                </div>
            </Activity>
        )
    }
}

Todo.propTypes = {
    messages: PropTypes.object.isRequired,
    setTodoDialogOpen: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {intl, visibilityFilter} = state;
    return {messages: intl.messages, visibilityFilter: visibilityFilter};
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTodoDialogOpen: (index) => {
            dispatch(setTodoDialogOpen(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
