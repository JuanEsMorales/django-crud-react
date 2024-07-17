import { useNavigate } from "react-router-dom"
import { setStateOfTask } from "../api/tasks.api"
import { useState } from "react"
import toast from "react-hot-toast"


export default function TaskCard({incomingTask}) {
  const [task, setTask] = useState(incomingTask)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/tasks/${task.id}`)
  }
  return (
    <div className="bg-white p-4 m-2 rounded-lg shadow-md text-gray-950 flex flex-col gap-2 justify-between" key={task.id} >
      <h3 className="text-center font-bold uppercase">{task.title}</h3>
      <p>{task.description}</p>
      <div className="flex flex-row justify-between items-center mt-3">
        <button className="text-white border-none py-2 px-4 rounded-md" style={{ backgroundColor: task.completed ? '#292' : '#922' }} onClick={async () => {
          const res = await setStateOfTask(task.id, !task.completed)
          if (res.error) {
            toast.error(res.error)
          } else {
            setTask({...task, completed: !task.completed})
          }
        }}>{task.completed ? 'Completed' : 'Incomplete'}</button>
        <button className="text-white border-none py-2 px-4 rounded-md bg-slate-900" onClick={handleClick}>Edit</button>
      </div>
    </div>
  )
}