import React from "react";
import "../styles/coordinates.css";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Coordinates() {
  return (
    <div className="contact-div">
      <h1>Contact Me</h1>
      <h4>
        <EmailIcon id="icon" /> oussemamili02@gmail.com
      </h4>
      <h4>
        <PhoneIcon id="icon" /> +216 95 719 421
      </h4>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/oussema.mili.02/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon id="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/oussema.mili/?hl=fr"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon id="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/oussema-mili-848a53251/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon id="social-icon" />
        </a>
      </div>
      <a
        href={require("../assets/MyCV.pdf")}
        download
        target="_blank"
        rel="noreferrer"
        className="download-btn"
      >
        Download My CV
        <FileDownloadIcon />
      </a>
    </div>
  );
}

export default Coordinates;
