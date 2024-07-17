import { useEffect, useState } from "react"
import { getTasks } from "../api/tasks.api"
import TaskCard from "./TaskCard"


export default function TaskList() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function getAllTasks() {
     const tasks = await getTasks()
     setTasks(tasks)
    }
    getAllTasks()
  }, [])
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard key={task.id} incomingTask={task} />
      ))}
    </div>
  )
}