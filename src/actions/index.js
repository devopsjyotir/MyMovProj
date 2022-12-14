
import axios from 'axios';

export const updateAllMovies = (allMovies) => {
    return {
        type: "UPDATE_ALL_MOVIES",
        payload: allMovies
    }
}


export const updateAllUsersList = (allUsers) => {
  return {
    type: "UPDATE_ALL_USERS_LIST",
    payload: allUsers
  };
};

// actions/movies.js



export const fetchMoviesAction = () => async dispatch => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: 'YOUR_API_KEY_HERE',
        language: 'en-US',
        page: 1,
        include_adult: false,
        include_video: false,
        sort_by: 'popularity.desc',
        limit: 20
      }
    });
    dispatch({ type: 'FETCH_MOVIES', payload: response.data });
  } catch (error) {
    throw error;
  }
};



