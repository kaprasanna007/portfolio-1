import React, { useState } from "react";
import Sidebar from "./Componts/Sidebar";
import Myproject from "./Componts/Myproject";
import About from "./Componts/About";
import Allback from "./Componts/Allback";
import Home from "./Componts/Home";
import Contact from "./Componts/Contact";
import "./Style/Mobile.css";
import Skill from "./Componts/Skill";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// ✅ Mobile context
export const MobileContext = React.createContext();

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showAllback = [
    "/",
    "/about",
    "/contact",
    "/myproject",
    "/skill",
  ].includes(location.pathname);

  // ✅ Close sidebar when route changes on mobile
  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <MobileContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {/* ✅ Mobile menu button */}
      <div
        className="mobile-menu-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        title="Toggle Menu"
      >
        <i className="bx bx-menu"></i>
      </div>

      {/* ✅ Show Allback for most pages */}
      {showAllback && (
        <div className="background-wrapper">
          <Allback
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />
        </div>
      )}

      {children}
    </MobileContext.Provider>
  );
};

// ✅ Separate AnimatedRoutes to add smooth transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/myproject"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Myproject />
            </motion.div>
          }
        />
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/skill"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Skill />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <Sidebar />
        <div className="page">
          <AnimatedRoutes />
        </div>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
