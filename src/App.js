import toDoImg from './images/you_can.jpg'

import './App.css';
import { ToDo } from './ToDo';

function App() {
  return (
    <div className='mainContainer'>
      <div>
      <img src={toDoImg} alt='yes you can' width="300px" />
      </div>
      <div className='listStyle'>
        <ToDo />
      </div>
    </div>
  );
}

export default App;
