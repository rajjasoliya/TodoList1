import React,{ useState , useEffect} from 'react'

const Timezone = ({data,time}) => {
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

  
    return (
        <form>
        <select>
        <option>{data.name}</option>
        {tasks.map((val,index) => (
        val.select === data.name ? <option value={val.name} key={index} style={{border:'1px solid black',padding:'5px',margin:'5px'}}> {val.name}  </option> : null
        ))}
        </select>
        </form>
    )
}

export default Timezone
