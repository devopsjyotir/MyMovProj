import axios from 'axios'
import Client from './api'


export const AddMovie = async (data) => {
    try{
        let response = await axios.post("http://localhost:3001/api/movies/", data)
        return response.data
    } catch (error) {
        throw error
    }
}



export const GetMovieList = async () => {
    try{
        let response = await axios.get("http://localhost:3001/api/movies/")
        return response.data
    } catch (error) {
        throw error
    }
}