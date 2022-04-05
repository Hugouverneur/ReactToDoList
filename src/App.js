import logo from './logo.svg';
import React, { Component } from 'react';
import TaskList from './components/TaskList/TaskList'
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tasklist: [],
      error: "",
      display: false  
    }
  }

  deleteItem = (taskid) => {
    console.log('task deleted')
    const tasklist = this.state.tasklist

    tasklist.splice(tasklist.findIndex(element => element.id === taskid), 1)

    this.setState({
      tasklist: tasklist
    })
  }

  createItem = (taskname) => {
    const taskList = this.state.tasklist
    
    console.log(taskList.length, taskname)

    this.setState({
      display: true,
      tasklist: [...taskList, {taskName: taskname, id:taskList.length }]
    })
    
    document.getElementById('taskinput').value = ""
  }

  setEditItem = (elementId) => {

    document.getElementsByName('editview'+elementId)[0].style.display = "flex"
    document.getElementsByName('defaultview'+elementId)[0].style.display = "none"
  }

  editItem = (taskid, taskname) => {
    const taskList = this.state.tasklist

    if(taskList.find(element => element.id === taskid)){
      taskList[taskList.findIndex(element => element.id === taskid)].taskName = taskname
    }

    this.setState({
      taskList: taskList
    })

    document.getElementsByName('editview'+taskid)[0].style.display = "none"
    document.getElementsByName('defaultview'+taskid)[0].style.display = "flex"
  }

  render() {
    return(
      <div className="App">
        <h1>ToDoList</h1>
          <TaskList display={this.state.display} taskList={this.state.tasklist} createItem={this.createItem} editItem={this.editItem} deleteItem={this.deleteItem} setEditItem={this.setEditItem}></TaskList>
      </div>
    )
  }
}

export default App; 
