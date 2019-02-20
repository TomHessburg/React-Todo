import React from 'react';

const TodoForm = props => {
    return(
        <form onSubmit={props.handelAddToDo}>
            <input
                type="text"
                onChange={props.handelChanges}
                placeholder="add value..."
                value={props.value}
            />
            <input
                type="text"
                onChange={props.handelSearch}
                placeholder="search notes..."
                value={props.searchValue}
                onChange={props.handelSearch}
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