import React from "react";
import "./not_found.css";
import { useLocation } from "react-router-dom";

function NotFound() {
  let location = useLocation();
  return (
    <div>
      <h1>SORRY, the page "{location.pathname}" doesn't exist! </h1>
      
    </div>
  );
}

export default NotFound;
