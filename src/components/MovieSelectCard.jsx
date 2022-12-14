import React from 'react'

const MovieSelectCard = ({movie}) => {
  return <option id='movieId' value={movie.id}>{movie.title}</option>
  
}

export default MovieSelectCard