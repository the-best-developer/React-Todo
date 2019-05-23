import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm.js';
import ToDoList from './components/TodoComponents/TodoList.js';
import './components/TodoComponents/Todo.css';

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

  checkOffTodo = (id) => {
    const toggledList = this.state.sampleArray.map(task => {
      if( task.id === id ) {
        task.completed = !task.completed;
      }
      return task;
    });

    this.setState({sampleArray: toggledList});
  };


  clearCompleted = (event) => {
    const unfinishedList = this.state.sampleArray.filter(task => {
    return !task.completed;
    });
    
    this.setState({sampleArray: unfinishedList});
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm eventHandler={this.updateTask} />
        <ToDoList eventHandler={this.checkOffTodo} list={this.state.sampleArray} />
        <button onClick={this.addToList}>Add!</button>
        <button onClick={this.clearCompleted}>Clear completed!</button>
      </div>
    );
  }
}

export default App;
