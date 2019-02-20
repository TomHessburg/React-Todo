
import React from 'react';

const ToDo = props => {
    return(
        <div className={`todo-item ${props.task.completed ? ' task-complete' : ''}`} >
            <p>{props.taskName}</p>
            <button onClick={() => props.toggleItem(props.task.id)}>x</button>
        </div>
    );
}

export default ToDo