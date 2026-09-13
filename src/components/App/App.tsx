import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';
import { fetchMovies } from '../../services/movieService';
import type { Movie } from '../../types/movie';
import MovieGrid from '../MovieGrid/MovieGrid';

export default function App() {
  const [films, setFilms] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    setFilms([]);
    try {
      const response = await fetchMovies(query);
      if (response.length === 0) {
        toast.error('No movies found for your request.');
        return;
      }
      setFilms(response);
    } catch {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  const handleSelectMovie = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      <MovieGrid onSelect={handleSelectMovie} movies={films} />
    </>
  );
}
