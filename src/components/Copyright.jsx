import React from "react";
import "../styles/copyright.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Copyright() {
  return (
    <div className="copyright">
      <p>
        © Copyright 2023 made with <FavoriteBorderIcon id="heart-icon" /> by
        Oussema MILI. All rights reserved.
      </p>
    </div>
  );
}

export default Copyright;
