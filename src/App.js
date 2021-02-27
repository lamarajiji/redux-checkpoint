import './App.css';
import {React  } from 'react';
import Logo from './Component/Logo';
import Footer from './Component/Footer';
// import Task from './Component/Task/Task';
import ListTasks from './Component/ListTasks/ListTasks';
import AddTask from './Component/AddTask/AddTask';
function App() {
  return (
    <div>
    <Logo/>
    
    <ListTasks/>
    <Footer/>
    </div>  );
  }
  



export default App;
