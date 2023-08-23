import React from "react";
import "../styles/arrow_upward.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ArrowUpward() {
  return (
    <div>
      <div className="arrow-div">
        <a href="#nav-bar">
          <ArrowUpwardIcon />
        </a>
      </div>
    </div>
  );
}

export default ArrowUpward;
