import React from 'react'
import '../styles/MovieCard.css'
function ApiCard({movie}) {
    return (
  
   
        <div className='movies-card'>
    
     <div className='list'>
      <div className='item'>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h4>{movie.title}</h4>
      <p>{movie.vote_average}</p>
      </div>
     </div>
        </div>
      )
    }

export default ApiCard