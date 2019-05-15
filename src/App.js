import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm.js';
import ToDoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {

    super();

    this.state = {
      sampleArray: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],

      newTask: ""
    };
  }

  updateTask = (event) => {
    this.setState({newTask: event.target.value});
  };

  addToList = (event) => {
    
    this.setState(prevState => ({
      sampleArray: [...prevState.sampleArray,
        { task: this.state.newTask,
          id: Date.now(),
          completed: false
        }
      ]
    }));
  };

  infoOnItem = (event) => {
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm eventHandler={this.updateTask} />
        <ToDoList list={this.state.sampleArray} />
        <button onClick={this.addToList}>Add!</button>
        <button onClick={this.infoOnItem}>Info!</button>
      </div>
    );
  }
}

export default App;
