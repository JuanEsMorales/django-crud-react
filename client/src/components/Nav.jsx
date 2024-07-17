import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav className="flex justify-between items-center gap-3 py-3 px-5 bg-slate-900">
      <Link to="/tasks"><h1 className='text-3xl font-bold'>Tasks App</h1></Link>
      <ul className="flex justify-around items-center gap-3 text-xl">
        <li>
          <Link to="/tasks" className='text-white/80 hover:text-white hover:underline transition'>Tasks</Link>
        </li>
        <li>
          <Link to="/tasks/create" className='text-white/80 hover:text-white hover:underline transition'>Create Task</Link>
        </li>
      </ul>
    </nav>
  )
}