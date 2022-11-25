import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import Home from '../src/pages/Home';
import Skill from '../src/pages/Skill';
import Experience from '../src/pages/Experience';
import Project from '../src/pages/Project';
import Contact from '../src/pages/Contact';

import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
);
