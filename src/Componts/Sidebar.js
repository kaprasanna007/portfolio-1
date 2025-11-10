import React, { useEffect, useContext } from "react";
import "../Style/Sidebar.css";
import { initSidebar } from "./SidebarLogic";
import { Link, useLocation } from "react-router-dom";
import { MobileContext } from "../App";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(MobileContext);
  const location = useLocation();

  useEffect(() => {
    const cleanup = initSidebar();
    return cleanup;
  }, []);

  // ✅ Close sidebar when clicking on a link on mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  // ✅ Check if current route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* ✅ Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <nav className={`sidebar locked ${isSidebarOpen ? "mobile-open" : ""}`}>
        <div className="logo_items flex">
          <span className="nav_image">
            <img src="/image/java.png" alt="logo" />
          </span>
          <span className="logo_name">JAVA FULL STACK DEVELOPER</span>
          <i
            className="bx bx-lock-alt"
            id="lock-icon"
            title="Unlock Sidebar"
          ></i>
          <i
            className="bx bx-x"
            id="sidebar-close"
            onClick={() => setIsSidebarOpen(false)}
            title="Close Menu"
          ></i>
        </div>

        <div className="menu_container">
          <div className="menu_items">
            {/* HOME section */}
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">HOME</span>
                <span className="line"></span>
              </div>
              <li className="item">
                <Link
                  to="/"
                  className={`link flex ${isActiveRoute("/") ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  <i className="bx bx-home-alt"></i>
                  <span>HOME</span>
                </Link>
              </li>
            </ul>

            {/* ABOUT Section */}
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">ABOUT ME</span>
                <span className="line"></span>
              </div>
              <li className="item">
                <Link
                  to="/about"
                  className={`link flex ${
                    isActiveRoute("/about") ? "active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  <i className="bx bx-crown"></i>
                  <span>ABOUT ME</span>
                </Link>
              </li>
            </ul>

            {/* SKILL Section */}
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">SKILL</span>
                <span className="line"></span>
              </div>
              <li className="item">
                <Link
                  to="/skill"
                  className={`link flex ${
                    isActiveRoute("/skill") ? "active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  <i className="bx bx-code-alt"></i>
                  <span>Skill</span>
                </Link>
              </li>
            </ul>

            {/* PROJECT Section */}
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">MY PROJECT</span>
                <span className="line"></span>
              </div>
              <li className="item">
                <Link
                  to="/myproject"
                  className={`link flex ${
                    isActiveRoute("/myproject") ? "active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  <i className="bx bx-folder"></i>
                  <span>My Projects</span>
                </Link>
              </li>
            </ul>

            {/* CONTACT Section */}
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">Contact</span>
                <span className="line"></span>
              </div>
              <li className="item">
                <Link
                  to="/contact"
                  className={`link flex ${
                    isActiveRoute("/contact") ? "active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  <i className="bx bx-phone-outgoing"></i>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Profile Section */}
          <div className="sidebar_profile flex">
            <span className="nav_image">
              <img src="/image/profile.jpg" alt="profile" />
            </span>
            <div className="data_text">
              <span className="name">PRASANNA.KA</span>
              <span className="email">
                <br />
                <b>ka.prasanna2005@gmail.com</b>
              </span>
            </div>
          </div>
        </div>

        {/* 🌐 Social Icons Section */}
        <div className="l_iocion">
          <a
            href="https://www.linkedin.com/in/prasanna-ka-203a02395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/kaprasanna007"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
