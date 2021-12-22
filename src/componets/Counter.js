import React, {useState,useEffect}from'react';

const Counter=(props)=>{
    const [count, setCount]= useState(0);
    const increment=()=>{
      setCount(count+1);
    };
    const clickString = props.click || 'Click';
    return (
         <p>
              <button onClick={increment}>{clickString} {count}</button>
              </p>
    );
};

export default Counter;