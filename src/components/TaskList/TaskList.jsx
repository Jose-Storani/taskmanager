
import TaskCard from "../TaskCard/TaskCard"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContent"

const TaskList = () => {
  const {tasks} = useContext(TaskContext)
  if(!tasks){
    return <h5>No hay tareas</h5>
  }
  return (
    <div className="grid grid-cols-1 gap-5 mt-8 mx-2 sm:grid-cols-3 " >
      {tasks.map((task)=>(
        <TaskCard key={task.id} taskInfo ={task}/>
      ))}
        
    </div>
  )
}

export default TaskList