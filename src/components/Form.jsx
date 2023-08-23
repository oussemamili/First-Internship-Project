import React, { useEffect, useRef, useState } from "react";
import "../styles/form.css";
import emailjs from "@emailjs/browser";
import PopUp from "./PopUp";

function Form() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs
        .sendForm(
          "service_73oxd28",
          "template_epcoqkj",
          form.current,
          "Ywqo30qKZPo7vhVWW"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

useEffect(() => {
    const timer = setTimeout(()=> setIsSubmitted(false), 2000);
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  return (
    <div className="form-div">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your name" required />
        <input
          type="Email"
          name="user_email"
          placeholder="Your email"
          required
        />
        <textarea name="message" rows={6} placeholder="Your message" />
        <button type="submit" value="Send" id="btn">
          Submit
        </button>
      </form>
      <PopUp isSubmitted={isSubmitted} />
    </div>
  );
}

export default Form;
