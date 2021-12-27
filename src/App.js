import { render } from '@testing-library/react';
import React, {useState,useEffect}from'react';
import Counter from './componets/Counter.js';
import Movie from './componets/Movie.js';
import MovieForm from './componets/MovieForm';
import Navbar from './componets/Navbar';
import Users from './pages/Users';
import Home from './pages/Home';
import Movies from './pages/Movies';
import routes from './Routes';
import { BrowserRouter,Route, Link,Switch,Routes } from "react-router-dom"
function App() {
  

   return(
     <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Switch>
            {routes.map(route=>{
              return(
                <Route 
                key={route.path}
                 path={route.path}
                  exact>
                <route.component/>
              </Route>
              );
            })}
          </Switch>
        </div>
    </div>
  </BrowserRouter>
 );
}

export default App;
