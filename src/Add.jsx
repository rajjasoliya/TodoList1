import React,{ useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Parts from './Parts.jsx';
import Ghadi from './Ghadi';
const Add = ({onAdd}) => {
    const [name,setName] = useState('');
    const [time,setTime] = useState('');
    const [select,setSelect] = useState('');
    const [imp,setImp] = useState(false);
    
        const onSubmit = (e) => {
        e.preventDefault();
        if(!name){
            alert('Please enter a name');
            return;
        }
        onAdd({name,time,select,imp});
        setName('');
        setTime('');
        setSelect('');
        setImp(false);
    }
    return (
        <div style={{display:'flex',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',padding: '10px',justifyContent: 'center',alignItems: 'center'}}>
        <div style={{display:'block',fontSize: '30px',fontWeight: 'bold'}}><div>TODO</div><Ghadi /></div>

        <div style={{margin:'auto'}} >
            <form onSubmit={onSubmit}>
            <div style={{margin:'auto',padding: '10px'}}>
            Add Task <input type="text" placeholder="Enter your Task" name="task" value={name} onChange={(e) => setName(e.target.value) } />
            <input type="number" min="1" max="24" placeholder="Time" name="time" value={time} onChange={(e) => setTime(e.target.value) } />
            <select name="select" value={select} onChange={(e) => setSelect(e.target.value) }>
                <option value="null" >Select timezone</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
            </select>
           <label>imp:</label> <input type="checkbox" name="imp" value={imp} onChange={(e) => setImp(e.target.checked)} />
            <button type="submit" style={{cursor:'pointer',color:'green',border: '1px solid green',borderRadius: '5px',width:'fit-content',padding: '5px 10px',margin:'auto',backgroundColor:'white'}} name="submit"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            </form>
            </div>
            <div style={{margin:'auto'}}>
            {<Parts />}
      </div>
        </div>
    )
}

export default Add
