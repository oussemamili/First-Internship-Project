import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/nav_bar.css";
import logo from "../assets/MyLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function NavBar() {
  let location = useLocation();
  const [isOpened, setIsOpened] = useState(false);

  function openMenu() {
    setIsOpened(true);
  }

  function closeMenu() {
    setIsOpened(false);
  }

  return (
    <nav id="nav-bar">
      <MenuIcon className="open-menu" onClick={openMenu} />
      <ul className={isOpened ? "menu" : "menu closed"} >
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "link active-link" : "link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/movies"
            className={
              location.pathname === "/movies" ? "link active-link" : "link"
            }
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "link active-link" : "link"
            }
          >
            Contact
          </Link>
        </li>
        <CloseIcon className="close-menu" onClick={closeMenu} />
      </ul>
      <img src={logo} alt="Logo" />
    </nav>
  );
}

export default NavBar;
