
import '../styles/Home.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'bd897bd5a46102bf0e6f256e2daad399';
const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const CHRISTMAS_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751&primary_release_year=2019&sort_by=popularity.desc&language=en-US&page=1`;

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [christmasMovies, setChristmasMovies] = useState([]);

  useEffect(() => {
    axios.get(POPULAR_MOVIES_URL)
      .then(res => setPopularMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    axios.get(CHRISTMAS_MOVIES_URL)
      .then(res => setChristmasMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='home-container-library'>
      <div className='h1-div'>
      <h1>Popular Movies</h1>
      </div>
      <div className="movies-home-grid" >
        {popularMovies.map(movie => (
          <div  key={movie.id} className='movies-home'>
            <div className='list'>
            <div className='item'>
       
           <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
           <div className='info-wrapper flex-col'>
          <h4>{movie.title}</h4>
          <h4>Average Rating:  {movie.vote_average}</h4>
          {/* <p>{movie.overview}</p> */}
          </div>
        </div>
        </div>
       
       </div>
        ))}
      </div>

<div className='h1-div'>
<h1>Christmas Movies</h1>
</div>
     
      <div className="movies-home-grid" >
        {christmasMovies.map(movie => (
          <div  key={movie.id} className='movies-home'>
          <div className='list'>
          <div className='item'>
     
         <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
         <div className='info-wrapper flex-col'>
        <h4>{movie.title}</h4>
        <h4>Average Rating:  {movie.vote_average}</h4>
        {/* <p>{movie.overview}</p> */}
        </div>
      </div>
      </div>
     
     </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
