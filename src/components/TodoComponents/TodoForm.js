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
            <div className="action-buttons">
                <button>Add Task</button>
                <button onClick={props.handelClear}>Clear All</button>
                <button onClick={props.handelClearCompleted}>Clear Selected</button>
            </div>
        </form>
    );
}


export default TodoForm;