import './App.scss';
import Home from './components/Routing/Home/Home.js';
import About from './components/Routing/About/About.js';
import Projects from './components/Routing/Projects/Projects.js';
import Layout from './components/Routing/Layout/Layout.js';
import Contact from './components/Routing/Contact/Contact.js';
import Library from './components/Routing/Library/Library.js';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react'

function App() {

  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout logoText="BRENNAN WU"/>}>
            <Route index element={<Home />}/>
            <Route path="about" index element={<About />} />
            <Route path="projects" index element={<Projects />} />
            <Route path="library" index element={<Library />} />
            <Route path="contact" index element={<Contact />} />
          </Route> 
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
