import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();
export const TaskContentProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  const addTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
    };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => id !== task.id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        addTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
