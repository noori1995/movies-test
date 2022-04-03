const BASE_URL = 'https://api.themoviedb.org/'
const API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57'

import axios from 'axios'

export const useMoviesList = async (page) => {

    const url = new URL('/3/discover/movie', BASE_URL)
    url.searchParams.set('api_key', API_KEY);
    page && url.searchParams.set('page', page);
    const result = await axios
        .get(url.href)
        .then(({ data }) => {
            return data.results
        })
        .catch((error) => {
            console.log('error', error.response)
        })
    
    return result             

}