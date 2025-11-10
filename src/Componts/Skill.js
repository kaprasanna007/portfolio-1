import React, { useEffect } from "react";
import "devicon/devicon.min.css";
import "../Style/Skill.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 30,
    });
  }, []);

  const skillCategories = [
    {
      title: "Frontend & Styling",
      skills: [
        {
          name: "HTML5",
          icon: "devicon-html5-plain colored",
          level: "Advanced",
        },
        { name: "CSS3", icon: "devicon-css3-plain colored", level: "Advanced" },
        {
          name: "JavaScript",
          icon: "devicon-javascript-plain colored",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Frameworks & Backend",
      skills: [
        {
          name: "React",
          icon: "devicon-react-original colored",
          level: "Intermediate",
        },
        { name: "Java", icon: "devicon-java-plain colored", level: "Advanced" },
        {
          name: "Spring Boot",
          icon: "devicon-spring-plain colored",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        {
          name: "Git",
          icon: "devicon-git-plain colored",
          level: "Intermediate",
        },
        {
          name: "GitHub",
          icon: "devicon-github-original colored",
          level: "Intermediate",
        },
        {
          name: "Jenkins",
          icon: "devicon-jenkins-plain colored",
          level: "Basic",
        },
        {
          name: "Docker",
          icon: "devicon-docker-plain colored",
          level: "Basic",
        },
      ],
    },
  ];

  return (
    <div className="skill-page">
      <div className="tech-stack-container">
        <div className="tech-stack">
          <div className="col" data-aos="fade-down" data-aos-duration="1000">
            <h1>
              <i className="bx bx-code-alt"></i> SKILLS & TECHNOLOGIES
            </h1>
            <p className="skills-subtitle">Technologies I work with</p>
          </div>

          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="tech-row">
                {category.skills.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-item"
                    title={`${tech.name} - ${tech.level}`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="rotate-3d">
                      <div className="rotate-3d-inner">
                        <i className={tech.icon}></i>
                      </div>
                    </div>
                    <p className="tech-name">{tech.name}</p>
                    <span className="skill-level">{tech.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
