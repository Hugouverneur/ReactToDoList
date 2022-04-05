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
      inProp: false
    }
  }

  deleteItem = (taskid) => {
    const tasklist = this.state.tasklist
    console.log("ID Suppr: "+ taskid)

    tasklist.splice(tasklist.findIndex(element => element.id === taskid), 1)
    
    this.setState({
      tasklist: tasklist,
      inProp: false
    })

    console.log(this.state.tasklist);
  }

  createItem = (taskname) => {
    const taskList = this.state.tasklist

    this.setState({
      tasklist: [...taskList, {taskName: taskname, id:taskList.length }],
      inProp: true
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
          <TaskList key="tasklistblock" inProp={this.state.inProp} taskList={this.state.tasklist} createItem={this.createItem} editItem={this.editItem} deleteItem={this.deleteItem} setEditItem={this.setEditItem}></TaskList>
      </div>
    )
  }
}

export default App; 
