import allMoviesReducer from "./allMoviesReducer"
import allUsersListReducer from "./allUsersListReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    allMoviesList: allMoviesReducer,
    allUsersList: allUsersListReducer
})

export default allReducers

