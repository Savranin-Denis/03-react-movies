import axios from 'axios';

const myKey = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export async function fetchMovies(query: string) {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data.results;
}
