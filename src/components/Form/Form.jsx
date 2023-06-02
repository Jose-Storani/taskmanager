import "./form.css";
import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContent";

const Form = () => {
  const {addTask} = useContext(TaskContext)
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
        type="text"
        placeholder="Ingrese tarea"
      ></input>
      <button>Agregar</button>
    </form>
  );
};
export default Form;
