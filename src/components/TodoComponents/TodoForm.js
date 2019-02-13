import React from 'react';

const TodoForm = props => {
    return(
        <form>
            <input></input>
            <button onClick={props.handelAddToDo}>Add Task</button>
            <button onClick={props.handelClear}>Clear All Tasks</button>

        </form>
    );
}


export default TodoForm;