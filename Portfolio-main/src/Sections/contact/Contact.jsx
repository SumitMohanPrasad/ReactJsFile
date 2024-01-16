import React from "react";
import Heading from "../../components/Heading/Heading";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="Contact">
      <Heading index="04" heading="Contact Me" />
      <section className="contact_section">
        <div className="contact_heading_1"></div>
        <h1 className="contact_heading_2">Get in touch</h1>
        <p className="contact_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
        <a href="mailto:suryanalam3011@gmail.com">
          <button className="contact_btn">say Hello</button>
        </a>
      </section>
    </section>
  );
};

export default Contact;
