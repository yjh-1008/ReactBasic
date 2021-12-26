import React,{useState,useEffect} from 'react';
import InputField from './InputField';
const MovieForm=({addMovie})=>{
    const [title, setTitle]= useState('');
  const [year, setYear]= useState('');
  const [titleError, setTitleError]= useState('');
  const [yearError, setYearError]= useState('');
  const resetForm=()=>{
    setTitle('');
    setYear('');
  }
  
  const validateForm=()=>{
    let validate =true;
    resetErrors();
    if(!title){
      setTitleError('영화 제목을 넣어주세요');
      validate=false;
    }
    if(!year){
      setYearError('개봉 연도를 넣어주세요');
      validate=false;
    }
    return validate;
  }

  const resetErrors=()=>{
    setTitleError('');
    setYearError('');
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    if(validateForm()){
      addMovie({
          id:Date.now(),
          title:title,
          year:year,
      });
      resetErrors();
      resetForm();
    }
    
  };

   return(
   <form onSubmit={onSubmit}>
    <InputField
      type="text"
      value={title}
      placeholder="영화제목"
      onChange={e=>setTitle(e.target.value)}
      errorMessage={titleError}
    />
    
    <InputField
      type="number"
      value={year}
      placeholder="개봉년도"
      onChange={e=>setYear(e.target.value)}
      errorMessage={yearError}
    />
      <button type="submit">영화추가</button>
   </form>
 );
};

export default MovieForm;