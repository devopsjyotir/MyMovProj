import React from 'react'

function MovieCard({movie}) {
  return (
    <div>
        <div><h3>{movie.userId}</h3></div>
        <div><p>{movie.title}</p></div>
        <div><p>{movie.movieId}</p></div>
    </div>
  )
}

export default MovieCard