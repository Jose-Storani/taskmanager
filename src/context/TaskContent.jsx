import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();
export const TaskContentProvider = (props) => {
  const [isEditing, setIsEditing] = useState(false);
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

  const editTask = (id, update) => {
    const taskToUpdateIndex = tasks.findIndex((task) => id == task.id);
    const newArray = [...tasks];
    newArray[taskToUpdateIndex].title = update;
    setTasks(newArray);
    setIsEditing(false)
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        addTask,
        editTask,
        isEditing,
        setIsEditing
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
