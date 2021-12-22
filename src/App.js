import React, {useState,useEffect}from'react';
import Counter from './componets/Counter.js';
function App() {
  const[buttonName, setButtonName]= useState('클릭');
  const clickButton = ()=>{
    setButtonName('click');
  };
   return(
   <div class="App">
   <h1>Kossi coder</h1>
  <Counter click="click1"/>
  <Counter click={buttonName}/>
  <Counter/>
  <button onClick={clickButton}>Click</button>
  </div>
 );
}

export default App;
