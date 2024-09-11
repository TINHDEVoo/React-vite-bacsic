import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import LoginPage from './page/login.jsx';
import RegisterPage from './page/register.jsx';
import BookPage from './page/book.jsx';
import UserPage from './page/user.jsx';
import './style/layout.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/users",
    element: <UserPage />
  },
  {
    path: "/books",
    element: <BookPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
