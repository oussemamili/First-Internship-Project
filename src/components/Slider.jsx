import React, { useState, useEffect } from "react";
import "../styles/slider.css";
import Movies_APIs from "../services/MoviesAPIs";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Slider({ autoSlide }) {
  const [data, setData] = useState([]);

  // Fetch all movies when the component mounts for the first time
  useEffect(() => {
    Movies_APIs().then((res) => setData(res.data.results));
  }, []);

  const [slider, setSlider] = useState([]);
  const [index, setIndex] = useState(0);

  // function to handle the next slide event
  const nextSlide = () => {
    setIndex(index === data.length - 2 ? 0 : index + 1);
  };

  // function to handle the previous slide event
  const prevSlide = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };

  useEffect(() => {
    setSlider(data.slice(index, index + 3));
  }, [data, index]);

  autoSlide === true && setTimeout(nextSlide, 2000);

  return (
    <div className="slider-container">
      <div className="wrapper">
        <KeyboardArrowLeftIcon onClick={prevSlide} />
        <div className="carousel">
          {slider.map((randomMovie) => {
            return (
              <img
                key={randomMovie.id}
                name={index}
                src={"http://image.tmdb.org/t/p/w500" + randomMovie.poster_path}
                className="slide"
                alt={randomMovie.title}
              />
            );
          })}
        </div>
        <KeyboardArrowRightIcon onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Slider;
