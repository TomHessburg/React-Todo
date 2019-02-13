import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const myTasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();

    this.state = {
      tasks: myTasks,
      task: "",
      id: "",
      completed: false
    }

  }




  handelAddToDo = event => {
    event.preventDefault();

    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask],
      task: "",
      id: "",
      completed: false
    })
    //console.log(this.state.tasks);
  }
  handelClear = event => {
      event.preventDefault();

      this.setState({
        tasks: [],
        task: "",
        id: "",
        complete: false,
        holder: "add event"
      })
  }
  handelChanges = e => {
    this.setState({
      task: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h2>My Todo App!</h2>
        <ToDoList tasks={this.state.tasks}/>
        <TodoForm 
        value={this.state.task}
        handelChanges={this.handelChanges}
        handelAddToDo={this.handelAddToDo} 
        handelClear={this.handelClear} 
        holderText={this.state.holder}
        />
      </div>
    );
  }
} 

export default App;
