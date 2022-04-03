const BASE_URL = 'https://api.themoviedb.org'
const API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57'

import axios from 'axios'

export const useMovieDetails = async (id) => {
    const url = new URL(`/3/movie/${id}`, BASE_URL)
    url.searchParams.set('api_key', API_KEY);
    const result = await axios
        .get(url.href)
        .then(({ data }) => {
            return data
        })
        .catch((error) => {
            console.log('error', error.response)
        })
    return result             

}