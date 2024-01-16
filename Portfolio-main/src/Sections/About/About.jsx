import React from "react";
import Heading from "../../components/Heading/Heading";
import "./About.css";

const About = () => {
  return (
    <section id="About">
      <Heading index="01" heading="About Me" />
      <div className="about_container">
        <div className="about_left">
          <p className="about_desc">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
          <p className="about_desc">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>

        <div className="about_right">
          <img src="" alt="image" className="about_profile_img" />

          <div className="about_img_border" />
        </div>
      </div>
    </section>
  );
};

export default About;
