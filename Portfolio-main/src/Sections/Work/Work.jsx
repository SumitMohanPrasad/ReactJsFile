import React from "react";
import "./Work.css";
import constant from "../../constant.json";
import Heading from "../../components/Heading/Heading";
const Work = () => {
  return (
    <section id="Work">
      <Heading index="03" heading="Projects" />
      <div className="work_container">
        {constant.projects.map((project, idx) => (
          <div className="work_project">
            <div className="work_left">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.image} alt="" className="work_img" />
              </a>
            </div>
            <div className="work_right">
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title}
              </a>
              <p className="work_desc">{project.desc}</p>
              <div className="work_skill_container">
                {project.skills.map((skill) => (
                  <p>{skill}</p>
                ))}
              </div>
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  className="work_link"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  className="work_link"
                  rel="noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
