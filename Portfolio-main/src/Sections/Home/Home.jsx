import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <section id="Home" className="home_section">
      <p className="home_greet">Hi, my name is</p>

      <h1 className="home_heading_1">Surya Nalam</h1>

      <h1 className="home_heading_2">A Frontend Developer</h1>

      <p className="home_desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <a href="#Work">
        <button className="home_btn">Check out my work</button>
      </a>
    </section>
  );
};

export default Home;
