import Button from "../Button/Button"
import "./taskcard.css"

export const conditions = {
  check: "check",
  delete: "delete",
  edit: "edit"
}
const TaskCard = ({taskInfo}) => {
  return (
    <div className="taskCard">
      <span className="taskTitle">{taskInfo.title}</span>
        
      <div className="taskButtons">
      <Button  condition={conditions.check}/>
      <Button condition={conditions.edit}/>
      <Button taskId = {taskInfo.id} 
      condition={conditions.delete}/>
      </div>
      
    </div>
  )
}

export default TaskCard