// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo.js';

const ToDoList = props => {
    
    return (
        <div>
            {props.list.map(todoList => {
                return <ToDo task={todoList.task}/>
            })}
        </div>
    );
  };
  
  export default ToDoList;