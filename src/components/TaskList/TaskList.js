import './TaskList.css';
import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import TaskItem from '../TaskItem/TaskItem'

const TaskList = (props) => { 
    return(
        <div className="tasklist_block">
            <h2>My tasks list</h2>
            <TransitionGroup>
                    {(props.taskList).map((element, index) => {
                        return(
                            <CSSTransition key={index} in={props.inProp} timeout={500} classNames="additem">
                                <TaskItem inProp={props.inProp} element={element} deleteItem={props.deleteItem} editItem={props.editItem} isEditing={props.isEditing} setEditItem={props.setEditItem} taskToEdit={props.taskToEdit}></TaskItem>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            <div className='task_form'>
                <input id="taskinput" placeholder='New task'></input>
                <button 
                onClick={()=>{
                    props.createItem(document.getElementById('taskinput').value);
                }} className="material-icons-round valid_btn">add_circle_outline</button>
            </div>
        </div>
    );
}

export default TaskList