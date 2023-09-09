import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { route } from './router/PublicRoute';
import { UserContextProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </UserContextProvider>
  </React.StrictMode>
);
