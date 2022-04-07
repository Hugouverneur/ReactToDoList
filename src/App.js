import React, { Component } from 'react';
import TaskList from './components/TaskList/TaskList'
import './App.css';
import Link from '@mui/material/Link';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasklist: [],
      inProp: false,
      taskToEdit: "",
      isEditing: 0,
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

    if(taskname === "") {
      taskname = "New task"
    }

    this.setState({
      tasklist: [...taskList, {taskName: taskname, id:taskList.length }],
      inProp: true
    })
    
    document.getElementById('taskinput').value = ""
  }

  setEditItem = (id) => {
    this.setState({
      isEditing: 1,
      taskToEdit: id
    })
  }

  editItem = (taskid, taskname) => {
    const taskList = this.state.tasklist

    if(taskList.find(element => element.id === taskid)){
      taskList[taskList.findIndex(element => element.id === taskid)].taskName = taskname
    }

    this.setState({
      taskList: taskList,
      isEditing: 0
    })
  }

  render() {              
    return(
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <h1>ToDoList</h1>
        <TaskList createItem={this.createItem} taskList={this.state.tasklist} deleteItem={this.deleteItem} editItem={this.editItem} isEditing={this.state.isEditing} setEditItem={this.setEditItem} taskToEdit={this.state.taskToEdit} />
        <Link href="/mentions" underline="always">
          {'Mentions légales'}
        </Link>
      </div>
    )
  }
}

export default App; 