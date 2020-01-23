import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import AddMovies from './Movies/AddMovies'
import UpdateMovies from "./Movies/UpdateMovies";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
        <Route 
        path='/update-movie/:id' 
        render={props=>{ 
        return <UpdateMovies {...props}/>;
        }}/>
        <Route path ='/addmovie' render={props =>

        {
          return  <AddMovies {...props}/>;
        }}/>
        <Link to="/addmovie">Add New Movie</Link>
    </>
  );
};

export default App;
