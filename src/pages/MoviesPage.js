import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = 'bd897bd5a46102bf0e6f256e2daad399';
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(API_URL + searchQuery);
      setMovies(response.data.results);
    }

    fetchMovies();
  }, [searchQuery]);

  const handleAddMovie = async (movie) => {
    // Make a request to your database to add the movie here.
    // You can use axios to make the request, for example:
    await axios.post('http://localhost:3001/api/movies', movie);
  }

  return (
    <div className="movies-page">
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <button onClick={() => handleAddMovie(movie)}>Add movie to database</button>
        </div>
      ))}
    </div>
  );
}

export default MoviesPage;