import React from 'react'
import '../styles/MovieCard.css'
function MovieCard({movie}) {
  return (
  
   
    <div className='movies-card'>

 <div className='list'>
  <div className='item'>
  <img src={`https://image.tmdb.org/t/p/w200${movie.image}`} alt={movie.title} />
  <h4>{movie.title}</h4>
  <p>{movie.description}</p>
  </div>
 </div>
    </div>
  )
}


export default MovieCard