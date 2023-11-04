import './index.css';
import './fonts/fonts.css';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import App from "./App";
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PitMap from './components/pitMap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PitMap />,
    children: [{ path: 'day/:id', element: <PitMap /> }],
  },
  { path: '/:id', element: <PitMap /> },
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
