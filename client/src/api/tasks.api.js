import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

export const getTasks = async () => {
  const res = await instance.get('/')
  return res.data
}

export const getTask = async (id) => {
  const res = await instance.get(`/${id}/`)
  return res.data
}

export const createTask = async (data) => {
  const res = await instance.post('/', data)
  return res.status === 201 ? { message: 'Task created' } : { error: 'Error creating task' }
}

export const updateTask = async (id, data) => {
  const res = await instance.put(`/${id}/`, data)
  return res.status === 200 ? { message: 'Task updated' } : { error: 'Error updating task' }
}

export const deleteTask = async (id) => {
  const res = await instance.delete(`/${id}/`)
  return res.status === 204 ? { message: 'Task deleted' } : { error: 'Error deleting task' }
}

export const setStateOfTask = async (id, isCompleted) => {
  const res = await instance.patch(`/${id}/`, {completed: isCompleted})
  return res.status === 200 ? { message: 'Task updated' } : { error: 'Error updating task' }
}