
import React from 'react';

const ToDo = props => {
    return(
        <div className="todo-item" onClick={() => props.toggleItem(props.task.id)}>
            <p>{props.taskName}</p>
        </div>
    );
}

export default ToDo