import './TaskItem.css';
import '../EditItem/EditItem'
import EditItem from '../EditItem/EditItem';
import React, {useState} from 'react';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';

const TaskItem = (props) => {
        let element = props.element
        let isEditing = props.isEditing
        let taskToEdit = props.taskToEdit

        const [isActive, setIsActive] = useState(false);

        function SetTaskMode() {
            if(isEditing === 1 && element.id === taskToEdit) {
                return (
                    <motion.div
                        onClick={() => setIsActive(!isActive)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <EditItem element={element} editItem={props.editItem}/>
                    </motion.div>
                )
            } else {
                return(
                    <div className="default_view" id={"defaultview"+element.id} name={"defaultview"+element.id}>
                        <motion.div
                            onClick={() => setIsActive(!isActive)}
                            animate={{ rotate: 360 }}
                        >
                            <p>{element.taskName}</p>
                        </motion.div>
                        <div>
                            <Button onClick={()=>props.setEditItem(element.id)}  variant="text">
                                RENAME
                            </Button>
                            <Button onClick={()=>props.deleteItem(element.id)}>
                                DELETE
                            </Button>
                        </div>
                    </div>
                )
            }
        }

        return(
            <div key={props.key}>
                <div key={'child'+element.id} className="tasklist_item" id={"tasklistitem"+element.id}>
                    {SetTaskMode(element.id)}
                </div>
            </div>
        )
}

export default TaskItem