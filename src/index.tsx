import './index.css';
import './fonts/fonts.css';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import App from "./App";
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Map from './components/map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Map />,
    children: [{ path: 'day/:id', element: <Map /> }],
  },
  { path: '/:id', element: <Map /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(import.meta.env && import.meta.env.DEV ? console.log : undefined);
