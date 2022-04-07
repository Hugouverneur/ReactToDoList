import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement)
  .render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="mentions" element={<div>mentions légales</div>}></Route>
          <Route path="*" element={<div>Error 404 Page didn't exist</div>}></Route>
      </Routes>
    </BrowserRouter>
)

reportWebVitals();