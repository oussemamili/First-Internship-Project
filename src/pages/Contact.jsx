import React from "react";
import "./contact.css";
import Coordinates from "../components/Coordinates";
import Form from "../components/Form";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="contact">
          <Coordinates />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
