import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem'
import {CSSTransition} from 'react-transition-group';

const TaskList = ({ createItem, taskList, deleteItem, editItem, setEditItem, display}) => {
    return(
        <div className="tasklist_block">
            <CSSTransition
                in={display}
                timeout={350}
                classNames="display"
                unmountOnExit>
            </CSSTransition>
            <h2>My tasks list</h2>
            <TaskItem taskList={taskList} deleteItem={deleteItem} editItem={editItem} setEditItem={setEditItem}/>
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