import axios from 'axios'

export const AddRelation = async (data) => {
    try{
        let response = await axios.post("http://localhost:3001/api/relations/", data)
        return response.data
    } catch (error) {
        throw error
    }
}


export const GetUserRelation = async (userId) => {
    try{
        let response = await axios.get(`http://localhost:3001/api/relations/${userId}`)
        console.log('response data', response.data)
        return response.data
    } catch (error) {
        throw error
    }
}



export const GetUserMovieRelation = async (userId, movieId) => {
    try{
        let response = await axios.get(`http://localhost:3001/api/relations/${userId}/${movieId}`)
        console.log('response data', response.data)
        return response.data
    } catch (error) {
        throw error
    }
}