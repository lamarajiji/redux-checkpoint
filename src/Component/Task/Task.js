import React,{useState} from 'react'
import { useDispatch} from 'react-redux';
import { deleteTask, doneTask,editTask } from '../../JS/Actions/ListTasks';
import {Button  } from 'react-bootstrap';
import './task.css'




const Task = ({task}) => {
    const [newTask, setNewTask] = useState(task.name)
    const [state, setState] = useState(true);
 const dispatch = useDispatch();
const handlClick =()=>
{dispatch(editTask(task.id,newTask))
    setState(!state)}
    return (    
         
        <div>
            {state?
            
                <div className="container">
                <div className="today" />
                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
                    <div className="add-control">
                      <div className="form-group has-feedback"></div>
                      <span className={task.isDone?"danger":null}>
                      <input type="text" className="form-control" value={task.name}/>
                      </span>
                      </div>
                      <Button variant="danger" onClick={()=>dispatch(deleteTask(task.id))}>Effacer</Button>
                  <Button variant="info" onClick={()=>setState(!state)}>Edit</Button>{' '}
                  <Button variant="info" onClick={()=>dispatch(doneTask(task.id)) }>{task.isDone?"UDONE":"DONE"}</Button>{' '}
               </div>
              
               </div>
               
                  
               </div>  
                  
            :
            <div className="container">
            <div className="today" />
            <div className="row">
              <div className="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
                <div className="add-control">
                  <div className="form-group has-feedback"></div>
                  <input type="text" className="form-control" placeholder="✍️ ..."
                     value={newTask}
                     onChange={(e)=>setNewTask(e.target.value)} />
                  </div>
                  <Button variant="danger" onClick={handlClick}>Save changes</Button>
             
           </div>
          
           </div>
           
              
           </div>  
        
           
       
            }</div>
     
    )
}
export default Task
// 
  {/* onChange={(e)=>setText(e.target.value)} onClick={handleClick} */} 
                      
