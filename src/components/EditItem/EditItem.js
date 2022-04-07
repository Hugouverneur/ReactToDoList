import './EditItem.css'

const EditItem = ({element , editItem}) => {
    return(
        <div>
            <div className="edit_view" name={"editview"+element.id}>
                <input id={'editinput'+element.id} defaultValue={element.taskName}></input>
                <button className="material-icons-round valid_edit_btn" onClick={()=>editItem(element.id, (document.getElementById('editinput'+element.id).value))}>check</button>
            </div>
        </div>
    )
}

export default EditItem

