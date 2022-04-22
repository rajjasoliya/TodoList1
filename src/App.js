import React,{ useState , useEffect } from 'react';
import Show from './Show.jsx';
import Add from './Add.jsx';
import './index.css';
const App = () => {
const [tasks,setTasks] = useState([]);
useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[] )
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
  return data
   }
  
const deleteTask = async (getId) => {
  await fetch(`http://localhost:5000/tasks/${getId}`,{
    method:'DELETE',
  }
  )
    setTasks(tasks.filter((val) => val.id !== getId))
  }

  const AddTask = async (task) => {
    const result = await fetch(`http://localhost:5000/tasks`,{
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(task)
    }
    );
    const data = await result.json();
    setTasks([...tasks,data]);
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
  return data
   }
  const toggle = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, imp: !taskToToggle.imp }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, imp: data.imp } : task
      )
    )
  }
  return (
    <>
      <Add onAdd={AddTask} /> 
      
      {tasks.length > 0 ? <Show task={tasks} onToggle={toggle} onDelete={deleteTask}   /> : <h1 style={{textAlign:'center',color:'green'}}>No Tasks Available</h1>}

  </>
  );
}

export default App;
