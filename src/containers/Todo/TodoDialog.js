import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../actions/todo'
import {setTodoDialogOpen, setErrorText} from '../../actions/todoDialog';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class TodoDialog extends Component {
    constructor(props) {
        super(props)

    };

    render() {
        const {messages, todoDialog, setTodoDialogOpen, addTodo, setErrorText} = this.props;

        function handleClose() {
            setErrorText(undefined);
            setTodoDialogOpen(false);
        };

        function handleSubmit(todoText) {

            if (!todoText.input.value.trim()) {
                setErrorText(messages.required || 'required');
                return
            }

            addTodo(todoText.input.value);
            handleClose();
        };

        const actions = [ < FlatButton label = {
                messages.cancel || 'cancel'
            }
            primary = {
                true
            }
            onTouchTap = {
                handleClose
            } />, < FlatButton label = {
                messages.submit || 'submit'
            }
            primary = {
                true
            }
            onTouchTap = {
                () => handleSubmit(this.refs.todoText)
            } />
        ];

        return (
            <div>
                <Dialog title={messages.todo_add || 'todo_add'} actions={actions} modal={false} open={todoDialog.open} onRequestClose={handleClose}>
                    <form onSubmit={e => {
                        e.preventDefault();
                        handleSubmit(this.refs.todoText);
                    }}>
                        <TextField ref="todoText" hintText={messages.todo_hint || 'todo_hint'} errorText={todoDialog.errorText} floatingLabelText={messages.todo_label || 'todo_label'} fullWidth={true}/>
                    </form>
                </Dialog>
            </div>
        )
    }
}

TodoDialog.propTypes = {
    messages: PropTypes.object.isRequired,
    todoDialog: PropTypes.object.isRequired,
    setTodoDialogOpen: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    setErrorText: PropTypes.func.isRequired
}

function mapStateToProps(state) {

    const {intl, todoDialog} = state;

    return {messages: intl.messages, todoDialog: todoDialog};

}

const mapDispatchToProps = (dispatch) => {
    return {
        setTodoDialogOpen: (index) => {
            dispatch(setTodoDialogOpen(index));
        },
        addTodo: (text) => {
            dispatch(addTodo(text));
        },
        setErrorText: (text) => {
            dispatch(setErrorText(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDialog);
(dispatch) => {
    return {
        setTodoDialogOpen: (index) => {
            dispatch(setTodoDialogOpen(index));
        },
        addTodo: (text) => {
            dispatch(addTodo(text));
        },
        setErrorText: (text) => {
            dispatch(setErrorText(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDialog);

(dispatch) => {
    return {
        setTodoDialogOpen: (index) => {
            dispatch(setTodoDialogOpen(index));
        },
        addTodo: (text) => {
            dispatch(addTodo(text));
        },
        setErrorText: (text) => {
            dispatch(setErrorText(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDialog);
