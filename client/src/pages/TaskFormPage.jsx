import { useForm } from "react-hook-form"
import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { toast } from 'react-hot-toast'

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()
  const navigate = useNavigate()
  const { id } = useParams()

  const onSubmit = handleSubmit(async (data) => {
    if (id) {
      const res = await updateTask(id, data)
      if (res.error) {
        toast.error(res.error, {
          position: "bottom-right",
          style: {
            background: '#333',
            color: '#fff'
          }
        })
      } else {
        toast.success(res.message, {
          position: "bottom-right",
          style: {
            background: '#333',
            color: '#fff'
          }
        })
        navigate("/tasks")
      }
    } else {
      const res = await createTask(data)
      if (res.error) {
        toast.error(res.error, {
          position: "bottom-right",
          style: {
            background: '#333',
            color: '#fff'
          }
        })
      } else {
        toast.success(res.message, {
          position: "bottom-right",
          style: {
            background: '#333',
            color: '#fff'
          }
        })
        navigate("/tasks")
      }
    }
  })

  const handleDelete = async () => {
    const accepted = window.confirm(
      "Are you sure you want to delete this task?"
    )
    if (!accepted) return
    const res = await deleteTask(id)
    if (res.error) {
      toast.error(res.error, {
        position: "bottom-right",
        style: {
          background: '#333',
          color: '#fff'
        }
      })
    } else {
      toast.success(res.message, {
        position: "bottom-right",
        style: {
          background: '#333',
          color: '#fff'
        }
      })
      navigate("/tasks")
    }
  }

  useEffect(() => {
    const getTaskData = async () => {
      const task = await getTask(id)
      setValue("title", task.title)
      setValue("description", task.description)
    }
    if (id) {
      getTaskData()
    }
  }, [id, setValue])

  return (
    <div className="flex flex-col justify-center items-center mt-3 mx-auto">
      <form
        className="flex flex-col justify-center items-center w-96 p-4 rounded-lg shadow-md gap-5 bg-gray-900 text-gray-950"
        onSubmit={onSubmit}
      >
        <h1 className="text-2xl font-bold text-white">{id ? "Update Task" : "Create Task"}</h1>
        <input
          type='text'
          name='title'
          placeholder='Title'
          {...register("title", { required: true })}
          className="w-full rounded-lg border-2 border-gray-500 p-2"
        />
        {errors.title && <p>Title is required</p>}
        <textarea
          name='description'
          rows={3}
          placeholder='Description'
          {...register("description", { required: true })}
          className="w-full rounded-lg border-2 border-gray-500 p-2"
        />
        <div className="flex justify-center gap-2">
          {errors.description && <p>Description is required</p>}
          <button className="bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded" type='submit'>{id ? 'Update' : 'Create'}</button>
          {id && <button type="button" className="bg-red-500 hover:bg-red-700 transition text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Delete</button>}
        </div>
      </form>
    </div>
  )
}
