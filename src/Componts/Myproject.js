import React, { useEffect } from "react";
import "../Style/Myproject.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MyPortfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);

  // Functions to open GitHub links
  const openFrontend = () => {
    window.open(
      "https://github.com/kaprasanna007/intenshipproject.git",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openBackend = () => {
    window.open(
      "https://github.com/kaprasanna007/college-project.git",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openTools = () => {
    window.open(
      "https://github.com/kaprasanna007/react-front-end.git",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const projects = [
    {
      id: 1,
      title: "CRIME REPORT",
      type: "INTERNSHIP PROJECT",
      description: "A comprehensive crime reporting system",
      tools: ["HTML", "CSS", "JavaScript", "PHP"],
      githubLink: "https://github.com/kaprasanna007/intenshipproject.git",
      animation: "fade-up",
      onClick: openFrontend,
    },
    {
      id: 2,
      title: "FITNESS CLUB",
      type: "COLLEGE PROJECT",
      description: "Android fitness application",
      tools: ["Android Studio", "XML", "SQLite"],
      githubLink: "https://github.com/kaprasanna007/college-project.git",
      animation: "fade-up",
      delay: 200,
      onClick: openBackend,
    },
    {
      id: 3,
      title: "MOVIE DUX",
      type: "REACT PROJECT",
      description: "Movie discovery and information app",
      tools: ["React.js"],
      githubLink: "https://github.com/kaprasanna007/react-front-end.git",
      animation: "fade-up",
      delay: 400,
      onClick: openTools,
    },
  ];

  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="card"
          data-aos={project.animation}
          data-aos-delay={project.delay || 0}
          data-aos-duration="1500"
        >
          <div className="card-header">
            <span className="project-type">{project.type}</span>
            <h2>{project.title}</h2>
          </div>

          <p className="project-description">{project.description}</p>

          <div className="tools-section">
            <b className="col1">⚙️ TOOLS:</b>
            <div className="tools-list">
              {project.tools.map((tool, toolIndex) => (
                <span key={toolIndex} className="tool-item">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={project.onClick}
            className="github-button"
            aria-label={`View ${project.title} on GitHub`}
          >
            <i className="bx bxl-github"></i>
            View GitHub Repo
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyPortfolio;
