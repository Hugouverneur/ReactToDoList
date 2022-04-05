import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem'
import React, { useState } from 'react';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";

const TaskList = ({ createItem, taskList, deleteItem, editItem, setEditItem, inProp}) => {
    return(
        <div className="tasklist_block">
            <h2>My tasks list</h2>
            <TransitionGroup className="todo-list">
                {taskList.map(function(element){
                    return(
                    <div>
                        <CSSTransition key={'cssel'+element.id} in={inProp} timeout={500} classNames="additem">
                            <TaskItem key={'item'+element.id} element={element} deleteItem={deleteItem} editItem={editItem} setEditItem={setEditItem}></TaskItem>
                        </CSSTransition>
                    </div>
                    )
                })}
            </TransitionGroup>
            <div className='task_form'>
                <input id="taskinput" placeholder='New task'></input>
                <button 
                onClick={()=>{
                    createItem(document.getElementById('taskinput').value);
                }} className="material-icons-round">add_circle_outline</button>
            </div>
        </div>
    );
}

export default TaskList