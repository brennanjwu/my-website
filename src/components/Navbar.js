import React, { useState, useEffect } from 'react';
import './Navbar.scss'; // Import your CSS file for styling
import { Link, NavLink } from 'react-router-dom';
import {motion} from "framer-motion";

const Navbar = ({ items, logoText }) => {

  const [prevFlag, setPrevFlag] = useState(null);
  const [activeFlag, setActiveFlag] = useState(3);
  const [y, setY] = useState(0);
  const [windowRatio, setWindowRatio] = useState(1);

  const handleClick = (flagId) => {
    setPrevFlag(activeFlag);
    setActiveFlag(flagId);
  };

  useEffect(() => {
    if (prevFlag !== null) {
      const currentFlag = document.getElementById(activeFlag);
      const previousFlag = document.getElementById(prevFlag);
      const rect1 = currentFlag.getBoundingClientRect();
      const rect2 = previousFlag.getBoundingClientRect();
      const distance =  (rect2.top - rect1.top) * -1;
      setY(prevValue => {return prevValue + distance});
    }
  }, [prevFlag, activeFlag]);

  useEffect(() => {
    console.log(y);
  }, [y])

  // useEffect(() => {
  //   console.log(windowRatio);
  //   if (prevFlag !== null) {
  //     setY(prevValue => {return prevValue * windowRatio});
  //   }
  // }, [windowRatio]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const newWindowHeight = window.innerHeight;
  //     setWindowRatio(prevValue => {return newWindowHeight / prevValue});
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  
  return (
    <div className="nav-bar">
      <Link className="logo-link" to="/">
        <h1 className="logo">{logoText}</h1>
      </Link>
      <div className="links">
        <div className="primary-links">
          <NavLink exact="true" activeclassname="active" to="/about" onClick={() => handleClick(0)}>
            <h2 id="0">ABOUT ME</h2>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/projects" onClick={() => handleClick(1)}>
            <h2 id="1">PROJECTS</h2>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/library" onClick={() => handleClick(2)}>
            <h2 id="2">LIBRARY</h2>
          </NavLink>
        </div>
        <div className="primary-links">
          <NavLink exact="true" activeclassname="active" className="flex" to="/" onClick={() => handleClick(3)}>
            <motion.div initial="hidden" animate={{y}} transition={{ ease: "easeOut" }} className="flag"></motion.div>
            <h2 id="3">HOME</h2>
          </NavLink>
        </div>
        <div className="secondary-links">
          <a href="https://github.com/brennanjwu" target="_blank" rel="noopener noreferrer">
            <h2>GITHUB</h2>
          </a>
          <a href="https://www.linkedin.com/in/brennanwu" target="_blank" rel="noopener noreferrer">
            <h2>LINKEDIN</h2>
          </a>
          <a href="mailto:brennanjwu@gmail.com">
            <h2>EMAIL</h2>
          </a>
          {/* <NavLink exact="true" activeclassname="active" to="/contact">
            <h2>CONTACT</h2>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;