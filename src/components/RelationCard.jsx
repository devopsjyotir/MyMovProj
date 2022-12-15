import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateAllMovies } from '../actions';
import '../styles/MovieCard.css'
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
  const movieDescription = allMoviesList.find(movie => movie.id === relation.movieId).description;

  const handleDelete = (id) => {
    DeleteMovie(id)
      .then(() => {
  
        dispatch(updateAllMovies(allMoviesList.filter(movie => movie.id !== id)));
      });
  };

  return (
    <div className='movies-card'>
     <div className='list'>
  <div className='item'>
     <img src={`https://image.tmdb.org/t/p/w200${movie.image}`} alt={movie.title} />
     <div className='info-wrapper flex-col'>
     <h4>{movieName}</h4>
     <p>{movieDescription}</p>
     </div>
    
    </div>
    <div className='button'>
          <button onClick={() => handleDelete(relation.movieId)}>Remove</button>
          </div>
    </div>
    </div>
  );
};



export default RelationCard




