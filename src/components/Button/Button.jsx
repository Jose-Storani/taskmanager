import { AiFillDelete, AiFillCheckSquare, AiFillEdit } from "react-icons/ai";
import "./button.css";
import { conditions } from "../TaskCard/TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContent";
const Button = ({ condition,taskId }) => {
  const {deleteTask} = useContext(TaskContext)
  return (
    <>
      {condition === conditions.check ? (
        <button className="customButton">
          <AiFillCheckSquare className="icon" />
        </button>
      ) : condition === conditions.edit ? (
        <button className="customButton">
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
