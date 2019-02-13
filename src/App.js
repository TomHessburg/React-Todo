import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const myTasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
];

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
      id: Math.floor(Math.random()*100000000),
      complete: false
    }
    

    this.setState({
      tasks: [...this.state.tasks, newTask],
      task: "",
      id: "",
      completed: false
    })
    console.log(this.state.tasks)
  }


  handelClear = event => {
      event.preventDefault();

      this.setState({
        tasks: [],
        task: "",
        id: "",
        complete: false
      })
  }
  handelChanges = event => {
      this.setState({
        task: event.target.value
      })
      console.log(this.task)
  }


  render() {
    return (
      <div>
        <h2>My Todo App!</h2>
        <ToDoList tasks={this.state.tasks}/>
        <TodoForm 
        handelChanges={this.handelChanges}
        handelAddToDo={this.handelAddToDo} 
        handelClear={this.handelClear} 
        />
      </div>
    );
  }
} 

export default App;
