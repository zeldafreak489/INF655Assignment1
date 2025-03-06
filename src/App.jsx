import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskComponent from './components/TaskComponent.jsx'
import Greeting from './components/Greeting.jsx'
import UserInfo from './components/UserInfo.jsx'
import Counter from './components/Counter.jsx'
import TaskForm from './components/TaskForm.jsx'

function App() {
  // Array of tasks
  const tasks = [
    { id: 1, task: "Wash the dishes" }, 
    { id: 2, task: "Fold the laundry" },
    { id: 3, task: "Take out the trash" },
    { id: 4, task: "Cook dinner" },
    { id: 5, task: "Clean the kitchen" },
  ];

  // handleAlert function
  const handleAlert = () => {
    alert("Button clicked!");
  };

  return ( 
    <div className="App">
      <Greeting username="Alice"/>
      <Greeting username="Bob"/>
      <UserInfo handleClick={handleAlert}/>
      <TaskComponent />
      <Counter />

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>

      <TaskForm />

    </div>
  )
}

export default App;
