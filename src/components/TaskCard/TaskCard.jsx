import Button from "../Button/Button";

import { TaskContext } from "../../context/TaskContent";
import { useContext, useState } from "react";


const TaskCard = ({ taskInfo }) => {
  const [newTitle, setNewTitle] = useState("")
  const { isEditing, editTask, isChecked } = useContext(TaskContext);
  
  return (
    <div className="bg-gray-800 text-slate-100 p-3 rounded-md shadow-lg shadow-cyan-500/30 hover:shadow-indigo-500/30 flex flex-col justify-around">   
      {isEditing ? 
        <><input onChange={(e)=>{setNewTitle(e.target.value)}} placeholder="edite la tarea" type="text"></input> <button onClick={()=>editTask(taskInfo.id,newTitle)}>Cambiar</button></>
       : isChecked ? <del className="font-thin">{taskInfo.title}</del> :  
        <span className="font-bold ">{taskInfo.title}</span>
      }

      <div  className="flex p-2 justify-around mt-2 ">
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
