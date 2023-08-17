import React,{useState} from 'react';
import './App.css';
import MainNav from './Components/MainNav';
import Maintwo from './Components/Maintwo';

function App() {

  const [show, setshow] = useState(true);
  const [cart, setcart] = useState([]);

  const handleClick =(item)=>{
    console.log(item);
  }
  
  return (
    <div className="App">
      <MainNav size={cart.length}/>
      <Maintwo handleClick={handleClick}/>
      
    </div>
  );
}

export default App;
