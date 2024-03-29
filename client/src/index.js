import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dotenv from 'dotenv'
import axios from 'axios';
// const {REACT_URL_API}= process.env
axios.defaults.baseURL = 'https://proyecto-individual-dogs-production-97a7.up.railway.app'
// axios.defaults.baseURL = process.env.REACT_URL_API
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
