import React from 'react';

const TodoForm = props => {
    return(
        <form onSubmit={props.handelAddToDo}>
            <input
                type="text"
                onChange={props.handelChanges}
                placeholder="Add Value"
                value={props.value}
            />
            <button>Add Task</button>
            <button onClick={props.handelClear}>Clear All Tasks</button>
            <button onClick={props.handelClearCompleted}>Clear Selected Tasks</button>

        </form>
    );
}


export default TodoForm;