import allMoviesReducer from "./allMoviesReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    allMovies: allMoviesReducer
})

export default allReducers

