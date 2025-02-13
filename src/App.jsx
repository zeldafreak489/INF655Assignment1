import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskComponent from './components/TaskComponent.jsx'
import Greeting from './components/Greeting.jsx'
import UserInfo from './components/UserInfo.jsx'

function App() {
  return ( 
    <div className="App">
      <Greeting />
      <UserInfo />
      <TaskComponent />
    </div>
  )
}

export default App;
