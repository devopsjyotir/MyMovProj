const allMoviesReducer = (state = [], action) => {
    switch (action.type){
        case "UPDATE_ALL_MOVIES":
            return (state = action.payload)
        default:
            return state
    }
}

export default allMoviesReducer