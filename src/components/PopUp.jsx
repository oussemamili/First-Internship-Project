import React from "react";
import "../styles/pop_up.css";
import DoneIcon from "@mui/icons-material/Done";

function PopUp({ isSubmitted }) {
  return (
    <div className={isSubmitted ? "pop-up" : "pop-up hidden"}>
      <p>Message sent successfully</p>
      <DoneIcon />
    </div>
  );
}

export default PopUp;
