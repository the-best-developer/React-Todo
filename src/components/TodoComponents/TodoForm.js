import React from 'react';

const ToDoForm = props => {
    
    return (
      <form>
        <input placeholder="task" onChange={props.eventHandler} />
      </form>
    );
  };
  
  export default ToDoForm;