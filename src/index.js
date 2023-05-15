import React from 'react';
import ReactDOM from 'react-dom/client';
import './animations.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SnackBarContextProvider } from './contexts/SnackBarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackBarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </SnackBarContextProvider>
  </React.StrictMode>
);
