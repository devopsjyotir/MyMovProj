import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateAllMovies } from '../actions';

import { DeleteMovie } from '../services/MovieServices';

const RelationCard = ({ relation }) => {
  const allMoviesList = useSelector((state) => state.allMoviesList);
  const dispatch = useDispatch();

    // Check whether allMoviesList is defined and has a length greater than 0
  if (!allMoviesList || allMoviesList.length === 0) {
    return null;
  }

  // Use the find method to find a movie by id
  const movie = allMoviesList.find(movie => movie.id === relation.movieId);

  // Check whether the find method returned a movie
  if (!movie) {
    return null;
  }

  const movieName = allMoviesList.find(movie => movie.id === relation.movieId).title;

  const handleDelete = (id) => {
    DeleteMovie(id)
      .then(() => {
        // Dispatch an action to update the list of movies in the Redux store
        dispatch(updateAllMovies(allMoviesList.filter(movie => movie.id !== id)));
      });
  };

  return (
    <div>
      <ul>
        <li>
          <span>{movieName}</span>
          <button onClick={() => handleDelete(relation.movieId)}>delete</button>
        </li>
      </ul>
    </div>
  );
};



export default RelationCard




