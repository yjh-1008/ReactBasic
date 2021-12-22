import { render } from '@testing-library/react';
import React, {useState,useEffect}from'react';
import Counter from './componets/Counter.js';
function App() {
  const[buttonName, setButtonName]= useState('클릭');
  const [condition, setCondition]= useState(false);
  const toggle=()=>{
    setCondition(!condition);
  };
  useEffect(()=>{
    console.log(condition);
  },[condition]);
  const renderCondition=(condition
  ?'TRUE'
  :'FALSE');
   return(
   <div class="App">
   <h1>Kossi coder</h1>
  <Counter click="click1"/>
  <Counter click={buttonName}/>
  <Counter/>
  <div>  {renderCondition}</div>
  <button onClick={toggle}>toggle</button>
  </div>
 );
}

export default App;
