import React, { useContext } from "react";
import "./StartupProjects.scss";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!projects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{projects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {projects.subtitle}
          </p>

          <div className="projects-container">
            {projects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <div className="project-detail-up">
                      <div
                        className={isDark ? "dark-mode card-title" : "card-title"}
                      >
                        {project.projectName}
                      </div>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>
                      {project.bullets && project.bullets.length > 0 ? (
                        <ul
                          className={
                            isDark ? "dark-mode project-bullets" : "project-bullets"
                          }>
                          {project.bullets.map((bullet, i) => {
                            return <li key={i}>{bullet}</li>;
                          })}
                        </ul>) : null}
                    </div>
                    <div className="project-detail-down">
                      {project.techStack ? (
                        <div className="project-card-footer">
                          {project.techStack.map((tech, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark ? "dark-mode project-tech" : "project-tech"
                                }
                              >
                                {tech}
                              </span>
                            );
                          })}
                        </div>

                      ) : null}
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark ? "dark-mode project-tag" : "project-tag"
                                }
                                onClick={() => openUrlInNewTab(link.url)}
                              >
                                {link.name}
                              </span>
                            );
                          })}
                        </div>

                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
