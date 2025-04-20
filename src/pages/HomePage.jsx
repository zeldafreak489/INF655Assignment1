import '../App.css';
import TaskComponent from '../components/TaskComponent.jsx';
import Greeting from '../components/Greeting.jsx';
import UserInfo from '../components/UserInfo.jsx';
import Counter from '../components/Counter.jsx';

export default function HomePage() {
    // handleAlert function
  const handleAlert = () => {
    alert("Button clicked!");
  };

  return ( 
    <div className="App">
      <Greeting username="Alice"/>
      <UserInfo handleClick={handleAlert}/>
      <TaskComponent/>
      <Counter />
    </div>
  )
}