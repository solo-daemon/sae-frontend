import React from 'react';
import logo from './assets/sae-logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Project from './pages/Project';
import Resource from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/resources' element={<Resource />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
