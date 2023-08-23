import React from "react";
import "../styles/movie_card.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function MovieCard({ id, poster_path, title }) {
  return (
    <div>
      <div className="movie">
        <img src={"http://image.tmdb.org/t/p/w500" + poster_path} alt={title} />
        <div className="layer">
          <h2>{title}</h2>
          <a href={"/movies/details/" + id}>
            <OpenInNewIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
