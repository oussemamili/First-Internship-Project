import React, { useState, useEffect } from "react";
import "./movies.css";
import Movies_APIs from "../services/MoviesAPIs";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

function Movies() {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [page, setPage] = useState(1);
  /* const  rest = filteredList.length % 8 !== 0 ? 1 : 0; */
  const paginator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Fetch all movies when the component mounts for the first time
  useEffect(() => {
    Movies_APIs(page).then((res) => {
      setMoviesList(res.data.results);
      setFilteredList(res.data.results);
    });
  }, [page]);

  // Fetch the filtered movies based on the searched movie
  useEffect(() => {
    setFilteredList(
      moviesList.filter((movie) => {
        return searchedMovie.toLowerCase() === movie
          ? movie
          : movie.title.toLowerCase().includes(searchedMovie);
      })
    );
  }, [moviesList, searchedMovie]);

  function handlePageChange(selectedPage) {
    setPage(selectedPage);
  }

  return (
    <div className="movies-container">
      <div className="movies-list">
        <SearchBar
          searchedMovie={searchedMovie}
          setSearchedMovie={setSearchedMovie}
        />
        <div className="grid">
          {filteredList.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
      {filteredList.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination-disabled"}
            onClick={() => handlePageChange(page - 1)}
          >
            ◀
          </span>
          {paginator.map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination-selected" : ""}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page < paginator.length ? "" : "pagination-disabled"}
            onClick={() => handlePageChange(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
}

export default Movies;
