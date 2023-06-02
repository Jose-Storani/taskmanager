import "./taskList.css"
import TaskCard from "../TaskCard/TaskCard"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContent"

const TaskList = () => {
  const {tasks} = useContext(TaskContext)
  if(!tasks){
    return <h5>No hay tareas</h5>
  }
  return (
    <div className="taskList">
      {tasks.map((task)=>{
        return <TaskCard key={task.id} taskInfo ={task}/>
      })}
        
    </div>
  )
}

export default TaskList