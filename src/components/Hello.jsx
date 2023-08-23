import React from "react";
import "../styles/hello.css";

function Hello() {
  return (
    <div className="hello">
      <div className="hello-div">
        <marquee direction="left">
          <h1>Hello Movie Addict ☻ Please go to 'Movies' page and watch one of the top rated movies</h1>
        </marquee>
      </div>
    </div>
  );
}

export default Hello;
