import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const myTasks = [{
      task: "example task",
      id: Date.now(),
      completed: false
}];
 
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
      completed: false,
      searchValue: ""
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

  handelClearCompleted = e => {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };
  toggleItem = itemId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(itemId === task.id){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }
  handelChanges = e => {
    this.setState({
      task: e.target.value
    })
  }
  


  handelSearch = e => {
    this.setState({
      searchValue: e.target.value,
      tasks: this.state.tasks.filter( task => {
         task.task === e.target.value
      })
    })
    console.log(e.target.value)
  }
  

  render() {
    return (

      
      <div className="app">
      <h2>Your Todo List</h2>
      <TodoForm 
        value={this.state.task}
        searchValue={this.state.searchValue}
        handelSearch={this.handelSearch}
        handelChanges={this.handelChanges}
        handelAddToDo={this.handelAddToDo} 
        handelClear={this.handelClear} 
        holderText={this.state.holder}
        handelClearCompleted={this.handelClearCompleted}
        />
        <ToDoList 
        tasks={this.state.tasks}
        toggleItem={this.toggleItem}
        />
      </div>
    );
  }
} 

export default App;
