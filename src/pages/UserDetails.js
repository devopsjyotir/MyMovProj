import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MovieSelectCard from '../components/MovieSelectCard'
import { AddRelation, GetUserRelation } from '../services/RelationServices'
import RelationCard from '../components/RelationCard'
import '../styles/MovieCard.css'


const UserDetails = () => {
    const { userId, userName } = useParams()
    const allMoviesList = useSelector((state) => state.allMoviesList) 

    const [needRefresh, setNeedRefresh] = useState([true])
    const [relationList, setRelationList] = useState([])
    const [formValues, setFormValues] = useState({
        userId: userId,
        movieId: allMoviesList.length > 0 ? allMoviesList[0].id.toString() : '',
        userRating: '',
    
    })


    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
      }
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Insert the relation into the database
        let addRelation = await AddRelation(formValues)
        // Reset the form values
        setFormValues({
          userId: userId,
          movieId: allMoviesList.length > 0 ? allMoviesList[0].id.toString() : '',
          userRating: '',
        });
      
        // Refresh the list of relations
        setNeedRefresh(true);
      }

    useEffect(()=> {
        const getAllRelations = async () => {
            let data = await GetUserRelation(userId)
            setRelationList(data)
            setNeedRefresh(false)
        }

        getAllRelations()
    }, [needRefresh])

    console.log('list', relationList)


    let relationListRender = (
        <div className='movies-grid'>
            {relationList.map((relation) => (
                
                <RelationCard key={relation.id} relation={relation} />
                
               
            ))}
            
        </div>
    )


    let addUserMovieRender = (
        <form onSubmit={handleSubmit} className="course-form">
            <label>Movie</label>
            <select id='movieId' onChange={handleChange}>
                {allMoviesList.map((movie) => (
                    <MovieSelectCard key={movie.id} movie={movie} />
                ))}
            </select>
            <label> Your Rating</label>
            <input
            onChange={handleChange}
            value={formValues.userRating}
            type='number'
            placeholder='10' 
            id='userRating'
            />
            <button type='submit'>Add</button>
        </form>
    )


    let toRender = (
        <div>
        
            <h1 className='playlist-name'>{userName}</h1>
            <div className='playlist-container'>
          
            {addUserMovieRender}
           
            {relationListRender}
            </div>
           
            
           
        </div>
    )

  return toRender
}

export default UserDetails