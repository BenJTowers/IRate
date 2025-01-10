import React, { useState } from 'react';
import { searchMovies } from '../Api'; // Import the API function

function SearchPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent page refresh
    if (!query) return;

    try {
      const response = await searchMovies(query);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.release_date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;