// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo'

const ToDoList = props => {
    return(
        <div>
            {props.tasks.map(thisTask => {
                return <ToDo task={thisTask.task} key={thisTask.id}/>
            })}
        </div>
    );
}

export default ToDoList;