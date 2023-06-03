
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
    <div className="p-6 max-w-md mx-auto bg-slate-800 rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-indigo-500/30">
      <form className="flex justify-between" onSubmit={handleSubmit}>
      <input className="bg-slate-400 w-3/4 p-2 rounded-md outline-none text-stone-900"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
        type="text"
        placeholder="Ingrese tarea"
      ></input>
      <button className=" text-stone-200 font-bold bg-indigo-500 p-1 rounded-md hover:bg-indigo-400">Agregar</button>
    </form>
    </div>
    
  );
};
export default Form;
