import { AiFillDelete, AiFillCheckSquare, AiFillEdit } from "react-icons/ai";

import { useContext } from "react";
import { TaskContext } from "../../context/TaskContent";
const Button = ({ condition,taskId}) => {
  const conditions = {
  check: "check",
  delete: "delete",
  edit: "edit",
};
 
  const {deleteTask,setIsEditing,checkTask,setEdit} = useContext(TaskContext)
  return (
    <>
      {condition === conditions.check ? (
        <button onClick={() => checkTask(taskId)} className="customButton">
          <AiFillCheckSquare
            style={{ color: "green" }}
            className="icon text-xl"
          />
        </button>
      ) : condition === conditions.edit ? (
        <button
          onClick={() => {
            setEdit(taskId);
          }}
          className="customButton"
        >
          {" "}
          <AiFillEdit style={{ color: "yellow" }} className="icon text-xl" />
        </button>
      ) : (
        <button
          onClick={() => {
            deleteTask(taskId);
          }}
        >
          <AiFillDelete style={{ color: "red" }} className="icon text-xl" />
        </button>
      )}
    </>
  );
};

export default Button;
