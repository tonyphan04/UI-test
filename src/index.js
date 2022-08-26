import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Carousel from './components/Carousel'
import LogIn from './containers/LogIn'
import AboutUs from './containers/AboutUs/AboutUs'
import FAQ from './containers/FAQ'
import MenuBar from './components/MenuBar'
import reportWebVitals from './reportWebVitals';
import { Avatar } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
