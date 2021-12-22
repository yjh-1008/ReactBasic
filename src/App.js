import React, {useState,useEffect}from'react';

function App() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[kossie, setKossie] = useState(0);
  const[count, setCount] = useState(0);
  const onSubmit = (event)=>{
    event.preventDefault();
    console.log(username+" "+password);
  };

  const increment=()=>{
    setCount(count+1);
  };

  useEffect(()=>{
    console.log(count);
  },[count]);
  return (
    
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
        placeholder="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}/>
          <br/>
        <input
        placeholder="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <br/>
        <button type="submit">submit</button>
        <button onClick={increment}>increment</button>
        <button onClick={()=>setKossie(kossie+1)}>setKossie</button>
      </form>
    </div>
  );
}

export default App;
