import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTask  } from "../../JS/Actions/ListTasks";

const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()



    const handleClick=()=>{
        if(text)
        { dispatch(addTask({id:Math.random(),name:text,isDone:false}))
        setText("")}
        else{
            setText(" Oops! Please, enter Task name")
        }
    }
    return (

           <div className="container">
      <div className="today" />
      <div className="row">
        <div className="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
          <div className="add-control">
         
        
            <div className="form-group has-feedback">
  
              <input type="text" className="form-control" placeholder="✍️ Add item..."
               onChange={(e)=>setText(e.target.value)} value={text}/>
              <i className="fa fa-plus form-control-feedback add-btn" title="Add item"
               onClick={handleClick}/>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    )
}

export default AddTask
