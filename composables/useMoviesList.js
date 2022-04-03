const BASE_URL = 'https://api.themoviedb.org/'
const API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57'

import axios from 'axios'

export const useMoviesList = async (params) => {
    const url = new URL('/3/discover/movie', BASE_URL)
    url.searchParams.set('api_key', API_KEY);
    params.page && url.searchParams.set('page', params.page);
    params.release_start_date && url.searchParams.set('primary_release_date.gte', params.release_start_date);
    params.release_end_date && url.searchParams.set('primary_release_date.lte', params.release_end_date);
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