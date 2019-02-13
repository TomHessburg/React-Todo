import React from 'react';

const TodoForm = props => {
    return(
        <form onSubmit={props.handelAddToDo}>
            <input
                type="text"
                onChange={props.handelChanges}
                placeholder="add a task"
            />
            <button>Add Task</button>
            <button onClick={props.handelClear}>Clear All Tasks</button>

        </form>
    );
}


export default TodoForm;