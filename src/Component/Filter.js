import React ,{useState} from 'react'
import { Button } from 'react-bootstrap';
import {  useSelector} from 'react-redux';
import Task from './Task/Task';

const Filter = () => {

const [status, setStatus] = useState("ALL")
const listtasks = useSelector(state => state.task.listTasks)
    return (
        <div>
              <Button variant="outline-primary" onClick={()=>setStatus("ALL")}>ALL</Button>{' '}
              <Button variant="outline-primary" onClick={()=>setStatus("DONE")}>DONE</Button>{' '}
              <Button variant="outline-primary" onClick={()=>setStatus("UNDONE")}>UNDONE</Button>{' '}
            

              {(() => {
        switch (status) {
          case 'ALL':
            return listtasks.map(el=> <Task task={el} key={el.id}/>);
          case 'DONE':
            return listtasks.filter(el=> el.isDone==true).map((el)=> (<Task task={el} key={el.id}/>) );
          case 'UNDONE':
            return listtasks.filter(el=> el.isDone==false).map((el)=> (<Task task={el} key={el.id}/>) );
          default:
            return null;
        }
      })()}
        </div>
    )
}

export default Filter
