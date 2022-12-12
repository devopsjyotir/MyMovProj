import axios from 'axios'


export const AddMovie = async (data) => {
    try{
        let response = await axios.post("http://localhost:3001/api/movies/", data)
        return response.data
    } catch (error) {
        throw error
    }
}



export const GetMovieList = async (data) => {
    try{
        let response = await axios.get("http://localhost:3001/api/movies/")
        return response.data
    } catch (error) {
        throw error
    }
}