import React from 'react';

const ToDo = props => {
    
    let completed = ""
    if (props.todo.completed) {
        completed = "completed";
    }

    return (
        <div>
            <span onClick={() => props.eventHandler(props.todo.id)} className={completed}>task: {props.todo.task}</span>
        </div>
    );
  };
  
  export default ToDo;