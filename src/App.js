import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, Outlet, Link, Switch } from "react-router-dom";
import LogIn from './containers/LogIn'
import SignUp from './containers/SignUp'
import AboutUs from './containers/AboutUs/AboutUs'
import FAQ from './containers/FAQ'
import Home from './containers/Home'
import Profile from './containers/Contact/Profile'
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
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard/profile" element={<Profile />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  )
};