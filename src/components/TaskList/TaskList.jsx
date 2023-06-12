
import TaskCard from "../TaskCard/TaskCard"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContent"

const TaskList = () => {
  const {tasks} = useContext(TaskContext)
  if(!tasks.length){
    return <h5 className="mt-8 text-lg text-center text-violet-500 font-semibold">No hay tareas</h5>
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