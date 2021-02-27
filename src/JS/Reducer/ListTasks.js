import { ADD_TASK, DELETE_TASK ,DONE_TASK, EDIT_TASK} from "../ActionTypes/ActionTypes";

const initialState={
listTasks:[
{id:Math.random(),name:"task1",isDone:false},
{id:Math.random(),name:"task2",isDone:false},
{id:Math.random(),name:"task3",isDone:false},
{id:Math.random(),name:"task4",isDone:false}
]
};


 const TaskReducer= (state=initialState,{type,payload})=>
{
switch (type) {
    case ADD_TASK:
        return {...state,listTasks:[...state.listTasks,payload]}
      case DELETE_TASK:
          return{...state,listTasks:state.listTasks.filter(el=>el.id!=payload)
          }
          case DONE_TASK:return{...state,listTasks:state.listTasks.map(el=>el.id==payload?{...el,isDone: !el.isDone}:el)}
       case EDIT_TASK:return{...state,listTasks:state.listTasks.map(el=>el.id==payload.id?{...el,name:payload.newTask}:el)}
          default:
       return state;
}

};

export default TaskReducer