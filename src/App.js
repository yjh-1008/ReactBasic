import { render } from '@testing-library/react';
import React, {useState,useEffect}from'react';
import Counter from './componets/Counter.js';
import Movie from './componets/Movie.js';
import MovieForm from './componets/MovieForm';
function App() {
  const [movies,setMovies]= useState([]);
  const removeMovie=(id)=>{
    setMovies(movies.filter(movie=>{
      return movie.id!==id;
    }))
  };
  const renderMovies = movies.length?movies.map(movie =>{
    return(
      <Movie
      movie={movie}
      key={movie.id}
      removeMovie={removeMovie}
      />
    );
  }):'추가된 영화가 없습니다.';
  const addMovie=(movie)=>{
    setMovies([
      ...movies,
      movie
    ]);
  };
   return(
   <div className="App">
   <h1>movie List</h1>
   <MovieForm addMovie={addMovie}/>
   {renderMovies}
  </div>
 );
}

export default App;
