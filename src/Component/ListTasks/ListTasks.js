import React from 'react'
import { useSelector } from 'react-redux';
import  Task  from '../Task/Task'
import AddTask from '../AddTask/AddTask';

const ListTasks = () => {
    const listtasks = useSelector((state) => state.task.listTasks);
    
    return (
        <div>
            <AddTask/>
           {listtasks.map(el=> <Task task={el} key={el.id}/>)} 
        </div>
    )
}

export default ListTasks
