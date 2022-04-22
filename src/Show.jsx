import React from 'react'
import Task from './Task'
const Show = ({task,onDelete,onToggle}) => {
    return (
        <div>
        <div style={{minWidth:'90%',display:'flex',justifyContent: 'space-around',flexWrap: 'wrap'}}>
        {task.map((val,index) => (
           <Task key={index} data={val} onToggle={onToggle} onDelete={onDelete} />
        ))}
        </div>
        </div>
    )
}

export default Show
