import React from "react";
import { Routes, Route } from 'react-router-dom';

function AnimatedRoutes() {
    return (
        <Routes>
          <Route path="/" element={<Layout logoText="BRENNAN WU"/>}>
            <Route index element={<Home />}/>
            <Route path="about" index element={<About />} />
            <Route path="projects" index element={<Projects />} />
            <Route path="library" index element={<Library />} />
            <Route path="contact" index element={<Contact />} />
          </Route> 
        </Routes>
    );
}