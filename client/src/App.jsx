import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import { Nav } from './components/Nav'
import { Toaster } from 'react-hot-toast'
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" replace />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App
