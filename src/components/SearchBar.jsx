import React from "react";
import "../styles/search_bar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ searchedMovie, setSearchedMovie }) {
  //clearInput_function
  function clearInput() {
    setSearchedMovie("");
  }

  return (
    <div className="search-div">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a movie title"
          value={searchedMovie}
          onChange={(event) => {
            setSearchedMovie(event.target.value);
          }}
        />
        <div className="search-icon">
          {searchedMovie.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clear-btn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
