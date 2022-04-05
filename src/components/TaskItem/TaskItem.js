import './TaskItem.css';

const TaskItem = ({element, deleteItem, editItem, setEditItem }) => {
    return(
        <div>
            <div key={'child'+element.id} className="tasklist_item" id={"tasklistitem"+element.id}>
                <div className="edit_view" id={"editview"+element.id} name={"editview"+element.id}>
                    <input id={'editinput'+element.id} defaultValue={element.taskName}></input>
                    <button className="material-icons-round" onClick={()=>editItem(element.id, (document.getElementById('editinput'+element.id).value))}>check</button>
                </div>
                <div className="default_view" id={"defaultview"+element.id} name={"defaultview"+element.id}>
                    <p>{element.taskName}</p>
                    <button onClick={()=>setEditItem(element.id)} className="material-icons-round">edit</button>
                    <button onClick={()=>deleteItem(element.id)} className="material-icons-round">delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskItem