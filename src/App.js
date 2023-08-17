import React,{useEffect, useState} from 'react';
import './App.css';
import MainNav from './Components/MainNav';
import Maintwo from './Components/Maintwo';
import Maincart from './Components/Maincart';




function App() {

  

  const [show, setshow] = useState(true);
  const [cart, setcart] = useState([]);

  const [warning, setwarning] = useState(false)

  const handleClick =(item)=>{
    let isPresent = false;
    cart.forEach((product)=>{
      if (item.id ===product.id)
      isPresent=true
    })

    if (isPresent){
    setwarning(true);
  setTimeout(()=>{
    setwarning(false);
  },2000);

  return;
  }
  setcart([...cart,item])
  }
  
  return (
    <div className="App">
      <MainNav size={cart.length}/>
      <Maintwo handleClick={handleClick} />
      <Maincart cart={cart} setcart={setcart}/>

      {
        warning && <div className='warning'>Item is already in your cart!</div>
      }
      
    </div>
  );
}

export default App;
