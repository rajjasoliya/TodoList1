import React,{ useState , useEffect } from 'react';
import Timezone from './Timezone.jsx';
const Parts = () => {
    const [parts,setParts] = useState([]);

    useEffect(() => {
        const getTaskss = async () => {
          const tasksFromServe = await fetchTaskss()
          setParts(tasksFromServe)
        }
        getTaskss()
      },[] )
      const fetchTaskss = async () => {
        const res = await fetch('http://localhost:5000/parts')
        const data = await res.json()
      return data
       }
      
    return (
        <div>
        <div style={{display: 'flex',justifyContent: 'space-around'}}>
            {parts.map((val,index) => (
            parts.length > 0 ? <Timezone key={index} data={val} time={val.name} /> : ''
        ))}
        </div>
        </div>
    )
}

export default Parts
