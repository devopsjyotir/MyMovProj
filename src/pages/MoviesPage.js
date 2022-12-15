import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/List.css'
import '../styles/MovieCard.css'
import { useNavigate } from 'react-router-dom';
const API_KEY = 'bd897bd5a46102bf0e6f256e2daad399';
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;

const MoviesPage =() =>{

  let navigate = useNavigate()
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(API_URL + searchQuery);
      setMovies(response.data.results);
      console.log('Movies', response.data)
    }

    fetchMovies();
  }, [searchQuery]);
  const handleAddMovie = async (movie) => {
 
    await axios.post('http://localhost:3001/api/movies/', {
      title: movie.title,
      image: movie.poster_path,
      description: movie.overview,
      genre: movie.genre,
      year: movie.year,
      rating: movie.rating
    });
    // navigate('/movies')
  }

  

  return (
    <div className='list-page'>
   <div className="searchbar">
	 <span>
		<input type="text" value={searchQuery} placeholder="Search..." onChange={event => setSearchQuery(event.target.value)} />
     <img src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt="search" width="32"v className='img'/>
	 </span>
  </div>

    <div className="movies-grid">
  

      {movies.map(movie => (
        <div key={movie.id} className='movies-card'>
       
         
 <div className='list'>
 <div className='item'>

          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
         
          <div className='info-wrapper flex-col'>
          <h4>{movie.title}</h4>
          <h4>Average Rating:  {movie.vote_average}</h4>
       
         
          <div className='button'>
        <button onClick={() => handleAddMovie(movie)}>Add Movie</button>
        </div>
        </div>
        </div>
 </div>
       
         </div>
          
         
      ))}
      
    </div>
    </div>
    
  );
}

export default MoviesPage