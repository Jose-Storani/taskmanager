import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();
export const TaskContentProvider = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setTasks(data);
  }, []);
  const addTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      finished: false,
      editing: false,
    };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => id !== task.id));
  };

  const updateTask = (id, updateFn) => {
    const index = tasks.findIndex((task) => id === task.id);
    if (index !== -1) {
      setTasks((prevState) => {
        const newArray = [...prevState];
        newArray[index] = updateFn(newArray[index]);
        return newArray;
      });
    }
  };
  
  const setEdit = (id) => {
    updateTask(id, (task) => ({ ...task, editing: true }));
  };
  
  const editTask = (id, update) => {
    updateTask(id, (task) => ({ ...task, title: update, editing: false }));
  };
  
  const checkTask = (id) => {
    updateTask(id, (task) => ({ ...task, finished: true }));
  };


  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        addTask,
        editTask,
        isEditing,
        setIsEditing,
        isChecked,
        checkTask,
        setEdit
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
