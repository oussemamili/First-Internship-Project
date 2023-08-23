import React from "react";
import "./home.css";
import Hello from "../components/Hello";
import Slider from "../components/Slider"

function Home() {
  return (
    <div className="home">
      <Hello />
      <Slider autoSlide={false}/>
    </div>
  );
}
export default Home;
