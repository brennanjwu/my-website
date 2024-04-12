import React, { useState, useEffect } from 'react';
import './Navbar.scss'; // Import your CSS file for styling
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ items, logoText }) => {

  const [prevFlag, setPrevFlag] = useState(null);
  const [activeFlag, setActiveFlag] = useState(3);
  const [translateY, setTranslateY] = useState(0);

  const handleClick = (flagId) => {
    setPrevFlag(activeFlag);
    setActiveFlag(flagId);
    if (prevFlag != null) {
      const currentFlag = document.getElementById(activeFlag);
      const previousFlag = document.getElementById(prevFlag);
      const rect1 = currentFlag.getBoundingClientRect();
      const rect2 = previousFlag.getBoundingClientRect();
      const distance = rect2.top - rect1.top;
      console.log(distance);
      setTranslateY(distance);
    }
  };
  
  return (
    <div className="nav-bar">
      <Link className="logo-link" to="/">
        <h1 className="logo">{logoText}</h1>
      </Link>
      <div className="links">
        <div className="primary-links">
          <NavLink exact="true" activeClassName="active" className="test" to="/about" onClick={() => handleClick(0)}>
            <div className="page-flag" id="0"></div>
            <h2>ABOUT ME</h2>
          </NavLink>
          <NavLink exact="true" activeClassName="active" className="test" to="/projects" onClick={() => handleClick(1)}>
            <div className="page-flag" id="1"></div>
            <h2>PROJECTS</h2>
          </NavLink>
          <NavLink exact="true" activeClassName="active" className="test" to="/library" onClick={() => handleClick(2)}>
            <div className="page-flag" id="2" layoutId="page-flag"></div>
            <h2>LIBRARY</h2>
          </NavLink>
        </div>
        <div className="primary-links">
          <NavLink exact="true" activeClassName="active" className="test" to="/" onClick={() => handleClick(3)}>
            <div className="page-flag" id="3" layoutId="page-flag"></div>
            <h2>HOME</h2>
          </NavLink>
        </div>
        <a>{translateY}</a>
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