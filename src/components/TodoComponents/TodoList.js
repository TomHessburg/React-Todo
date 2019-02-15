// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo'

const ToDoList = props => {
    return(
        <div>
            {props.tasks.filter(task => task.task.includes(props.searchValue)).map(thisTask => {
                return <ToDo taskName={thisTask.task} task={thisTask} key={thisTask.id} toggleItem={props.toggleItem} />
            })}
        </div>
    );
}



export default ToDoList;