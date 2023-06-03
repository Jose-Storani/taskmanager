import Button from "../Button/Button";
import "./taskcard.css";
import { TaskContext } from "../../context/TaskContent";
import { useContext, useState } from "react";


const TaskCard = ({ taskInfo }) => {
  const [newTitle, setNewTitle] = useState("")
  const { isEditing, editTask, isChecked } = useContext(TaskContext);
  
  return (
    <div className="taskCard">
      
      {isEditing ? 
        <><input onChange={(e)=>{setNewTitle(e.target.value)}} placeholder="edite la tarea" type="text"></input> <button onClick={()=>editTask(taskInfo.id,newTitle)}>Cambiar</button></>
       : isChecked ? <del className="taskTitle">{taskInfo.title}</del> :  
        <span className="taskTitle">{taskInfo.title}</span>
      }

      <div className="taskButtons">
        <Button condition="check"/>
        <Button condition="edit" />
        <Button condition="delete" taskId={taskInfo.id}/>
      </div>
    </div>
  );
};

export default TaskCard;

//PRIMERO: Funcion sobre el boton edit que reciba un ID.
//SEGUNDO: Al ejecutarse, rendereizar span con title o input para modificar, dependiendo un estado.
//TERCERO:
