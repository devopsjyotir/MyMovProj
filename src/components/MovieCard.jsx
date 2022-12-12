import React from 'react'

function MovieCard({movie}) {
  return (
    <div>
        <div><h3>{movie.title}</h3></div>
        <div><p>{movie.year}</p></div>
        <div><p>{movie.description}</p></div>
    </div>
  )
}

export default MovieCard