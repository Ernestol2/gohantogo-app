import { useState, useEffect } from 'react'
import tareas from '../tasks'
import TaskForm from './TaskForm'


export default function Task() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(tareas)
  }, [])

  if(tasks.length === 0) {
    return <h1>No hay tareas aun</h1>
  }

  return (
    <div className='bg-dark text-light'>
      <div>
        <TaskForm />
      </div>
      <div>
      <div>
        {tasks.map((task) => (
            <div className='tareas' key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
        ))}
    </div>
      </div>
    </div>
  )
}
