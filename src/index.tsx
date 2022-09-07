import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './App';

import 'styles/index.css'; 
import 'styles/Navbar.css'

const ROOT = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(
  ROOT
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </BrowserRouter>
);

