import React from "react";
import "./Footer.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useState } from "react";
import { Images } from "../../constants";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFromSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take A Coffee & Chat With Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Images.email} alt="email" />
          <p>
            <a href="mailto:adikrishna1972@gmail.com" className="p-text">
              adikrishna1972@gmail.com
            </a>
          </p>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="email" />
          <p>
            <a href="tel:+91 9740-605350" className="p-text">
              +91 9740-605360
            </a>
          </p>
        </div>
      </div>
      {!isFromSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text "
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            disabled={isLoading}
            type="button"
            className="p-text"
            onClick={handleSubmit}
          >
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h2 className="submitText">Thank you for getting in touch!!</h2>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Footer",
  "container-bg"
);
