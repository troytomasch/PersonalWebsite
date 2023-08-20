import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Dog from "../pages/Dog";
import Pokemon from "../pages/Pokemon";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dog" element={<Dog />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
