import React, { useState, useEffect } from "react";
import "./movie_details.css";
import MovieDetailsAPIs from "../services/MovieDetailsAPIs";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  // Fetching movies by their ids
  useEffect(() => {
    if (params.id) {
      MovieDetailsAPIs(params.id).then((data) => setMovie(data));
    }
  }, [params.id]);

  return (
    <div>
      <div className="arrow-back-icon">
        <a href="/movies">
          <ArrowBackIcon />
        </a>
      </div>
      <div className="movie-details">
        <div className="card">
          <div className="image-div">
            <img
              src={"http://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div className="movie-infos-div">
            <h2>{movie.title}</h2>
            <ul>
              <li>
                <span>Release date:</span> {movie.release_date}
              </li>
              <li>
                <span>Review:</span> {movie.overview}
              </li>
              <li>
                <span>Vote average:</span> <StarIcon /> {movie.vote_average}/10
              </li>
              <li>
                <span>Original language:</span> "{movie.original_language}"
              </li>
            </ul>
            <a
              href="https://www.youtube.com/watch?v=UaVTIH8mujA"
              target="_blank"
              rel="noreferrer"
              id="btn"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
