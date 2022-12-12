import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {updateAllMovies} from '../actions'
import {AddMovie, GetMovieList} from '../services/MovieServices'
import MovieCard from '../components/MovieCard'

const Movies = () => {
const [needRefresh, setNeedRefresh] = useState([true])
const dispatch = useDispatch()
const allMovies = useSelector((state) => state.allMovies)
const [movieAddMode, setMovieAddMode] = useState(false)
const [formValues, setFormValues] = useState({
    title:'',
    year: null,
    image: '',
    rating: null,
    genre: '',
    description:''
})

const enableAddMovieMode = () => {
    setMovieAddMode(true)
}

const disableAddMovieMode = () => {
    setMovieAddMode(false)
}

const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
}

const handleSubmit = async (e) => {
    e.preventDefualt()
    let createdMovie = await AddMovie(formValues)
    disableAddMovieMode()
    setFormValues({
        title:'',
        year: null,
        image: '',
        rating: null,
        genre: '',
        description:''
    })
    setNeedRefresh(true)
}

useEffect(()=> {
    let getMoviesList = async () => {
        let data = await GetMovieList()
        dispatch(updateAllMovies(data))
        setNeedRefresh(false)
    }

    if (needRefresh) {
        getMoviesList()
    }
}, [needRefresh])

let addButtonRender = (
    <button disabled>
        Add Movie
    </button>
)


if(formValues.title & formValues.year & formValues.image & formValues.rating & formValues.genre & formValues.description){
    addButtonRender = (
        <button type='submit'>
            Add Movie
        </button>
    )
}

let movieAddRender = (
    <button onClick={enableAddMovieMode}>
        Add Movie
    </button>
)


if(movieAddMode) {
    movieAddRender = (
        <form onSubmit={handleSubmit}>
            <label>Movie Name</label>
            <input
            onChange={handleChange}
            value={formValues.title}
            type='text'
            placeholder='Thor' 
            /> 

            <label>Year</label>
            <input
            onChange={handleChange}
            value={formValues.year}
            type='number'
            placeholder='2001' 
            /> 

            <label>Movie Image</label>
            <input
            onChange={handleChange}
            value={formValues.image}
            type='text'
            /> 

            <label>Movie rating</label>
            <input
            onChange={handleChange}
            value={formValues.rating}
            type='number'
            /> 

            <label>Genre</label>
            <input
            onChange={handleChange}
            value={formValues.genre}
            type='text'
            /> 

            <label>Movie Description</label>
            <input
            onChange={handleChange}
            value={formValues.description}
            type='text'
            placeholder='Thor' 
            /> 

            {addButtonRender}
        </form>
    )
}


let movieListRender = (
    <div>
        {allMovies.map((mov) => (
            <MovieCard key={mov.id} movie={mov} />
        ))}
    </div>
)


let toRender = (
    <div>
        <div>
            <h1>Movies</h1>
            <div>{movieAddRender}</div>
            <div>{movieListRender}</div>
        </div>
    </div>
)


  return toRender
  

}

export default Movies