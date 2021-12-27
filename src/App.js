import { render } from '@testing-library/react';
import React, {useState,useEffect}from'react';
import Counter from './componets/Counter.js';
import Movie from './componets/Movie.js';
import MovieForm from './componets/MovieForm';
import Navbar from './componets/Navbar';
import { BrowserRouter,Route, Link,Switch,Routes } from "react-router-dom"
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
     <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/movies">
              <h1>Movie list</h1>
              <MovieForm addMovie={addMovie} />
              {renderMovies}
          </Route>

          <Route path="/users">
              <h1>Users</h1>
          </Route>

          <Route path="/">
              <h1>Home</h1>
          </Route>
        </Switch>
    </div>
  </BrowserRouter>
 );
}

export default App;
