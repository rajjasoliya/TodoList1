import React,{ useState }  from 'react'
import './index.css'
const Task = ({data,onDelete,onToggle}) => {
    const [hour,setHour] = useState();
    const [minute,setMinute] = useState();
    const [second,setSecond] = useState();
    const timeZone = () => {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
    }
    setInterval(timeZone,1000);
    const m = () => {

        if(data.time <= 12 ){
            return data.time+" AM";
        }else{
            return (data.time - 12)+" PM";
        }
    }
   
    const match = () => {
        if(data.time == hour){
            return (<><div style={{cursor:'pointer',color:'green',border: '1px solid green',borderRadius: '5px',width:'fit-content',padding: '5px 10px',margin:'auto'}}>{data.name} Activity is Running</div></>);
        }else{
            return;
        }
        
    }
    return (
    
        <div style={{display: 'flex',flexDirection: 'column'}}>
        <div className={` task ${data.imp && 'imp'}`} onClick={() => onToggle(data.id)} style={{minWidth:'200px',padding:'20px',margin:'20px',display: 'flex',flexDirection:'column'}}>
        <h1 style={{margin:'auto'}} >{m()}</h1>
        <div style={{display: 'flex'}}>
        <h4>{data.id})</h4>
        <h3 style={{marginLeft:'10px'}}>{data.name}</h3>
        </div>
        <div>{match()}</div>
        <div style={{margin:'auto',fontWeight:'500'}} >" {data.select} "</div>

        </div>
       <div style={{cursor:'pointer',color:'red',border: '1px solid red',borderRadius: '5px',width:'fit-content',padding: '5px 10px',margin:'auto'}} onClick={() => onDelete(data.id)} >DELETE</div>

        </div>
    )
}

export default Task
