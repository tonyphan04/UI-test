import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, Outlet, Link, Switch } from "react-router-dom";
import Carousel from './components/Carousel'
import LogIn from './containers/LogIn'
import AboutUs from './containers/AboutUs'
import FAQ from './containers/FAQ'
import MenuBar from './components/MenuBar'
import Home from './containers/Home'
import { Menu } from '@mui/material';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
};