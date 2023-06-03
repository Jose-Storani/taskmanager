import { AiFillDelete, AiFillCheckSquare, AiFillEdit } from "react-icons/ai";
import "./button.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContent";
const Button = ({ condition,taskId}) => {
  const conditions = {
  check: "check",
  delete: "delete",
  edit: "edit",
};
 
  const {deleteTask,setIsEditing,checkTask} = useContext(TaskContext)
  return (
    <>
      {condition === conditions.check ? (
        <button onClick={()=>checkTask()} className="customButton">
          <AiFillCheckSquare className="icon" />
        </button>
      ) : condition === conditions.edit ? (
        <button onClick={()=>{setIsEditing(true)}} className="customButton">
          {" "}
          <AiFillEdit className="icon" />
        </button>
      ) : (
        <button
          className="customButton"
          onClick={() => {
            deleteTask(taskId);
          }}
        >
          <AiFillDelete className="icon" />
        </button>
      )}
    </>
  );
};

export default Button;
