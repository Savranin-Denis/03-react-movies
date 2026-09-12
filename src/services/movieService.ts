import axios from 'axios';
// import type { Movie } from '../types/movie';
const myKey = import.meta.env.VITE_TMDB_TOKENY;
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
  console.log(response.data.results);
  return response.data.results;
}
