import React, { useEffect } from "react";
import "../Style/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 50, // Better for mobile
    });
  }, []);

  return (
    <div className="about-container">
      {/* ✨ About Card with AOS animations */}
      <div className="about-card" data-aos="fade-up" data-aos-duration="1200">
        <div
          className="about-image-container"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="/image/profile.jpg"
            alt="Prasanna - Java Full Stack Developer"
            className="profile-photo"
            loading="lazy"
          />
        </div>

        <div className="about-text" data-aos="fade-left" data-aos-delay="400">
          <h1>Hi, I'm Prasanna 👋</h1>
          <div className="a1">
            <p className="p1">
              Hi, I'm Prasanna, a passionate Java Full Stack Developer (Fresher)
              who loves turning ideas into real-world web applications. I have
              hands-on experience in front-end technologies like{" "}
              <b>React, HTML, CSS, and JavaScript,</b> and strong knowledge of
              back-end frameworks like Spring Boot with database management
              using <b>PostgreSQL and SQL.</b> I enjoy learning new tools,
              building clean user interfaces, and writing efficient code that
              makes a difference. Currently, I'm looking for opportunities to
              start my career in Full Stack Development, contribute to real-time
              projects, and grow with a dynamic team.
            </p>

            <div className="p2">
              <b>Key Skills:</b>
              <div className="skills-list">
                <p>🌐 Frontend: React, HTML5, CSS3, JavaScript</p>
                <p>⚙️ Backend: Java, Spring Boot</p>
                <p>🗄️ Database: PostgreSQL, SQL</p>
                <p>🧩 Tools: Git, GitHub, Jenkins, Docker</p>
              </div>
            </div>

            <p className="p3">
              <b>Career Goal:</b> To work as a Full Stack Developer where I can
              apply my knowledge of both frontend and backend technologies to
              create innovative web solutions and continuously grow in the tech
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
