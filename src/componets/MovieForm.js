import React,{useState,useEffect} from 'react';

const MovieForm=({addMovie})=>{
    const [title, setTitle]= useState('');
  const [year, setYear]= useState('');

  const resetForm=()=>{
    setTitle('');
    setYear('');
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    addMovie({
        id:Date.now(),
        title:title,
        year:year,
    });
    resetForm();
  };

   return(
   <form onSubmit={onSubmit}>
    <input
      type="text"
      value={title}
      placeholder="영화제목"
      onChange={e=>setTitle(e.target.value)}
      ></input><br/>
    <input
      type="text"
      value={year}
      placeholder="개봉년도"
      onChange={e=>setYear(e.target.value)}
      ></input><br/>
      <button type="submit">영화추가</button>
   </form>
 );
};

export default MovieForm;