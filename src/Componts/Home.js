import React, { useEffect } from "react";
import "../Style/Home.css";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100, // Better for mobile
    });
  }, []);

  // ✅ Function to handle click with smooth navigation
  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <section className="home" id="home">
      <div className="home__container" data-aos="fade-up">
        {/* Left Content */}
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I&apos;m <span className="home__title-color">PRASANNA K.A</span>
            <br />
            <span className="home__subtitle">JAVA Full Stack Developer</span>
          </h1>

          <p className="home__description">
            Passionate about creating innovative web solutions with modern
            technologies
          </p>

          {/* ✅ Updated button */}
          <button
            onClick={goToContact}
            className="button"
            aria-label="Contact Me"
          >
            Contact Me
          </button>

          {/* Social Links */}
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/prasanna-ka-203a02395"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="home__social-icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="home__img" data-aos="zoom-in" data-aos-delay="300">
          <div className="rotate-3d">
            <div className="rotate-3d-inner">
              <img
                src="/image/java.png"
                alt="Prasanna - Java Developer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
