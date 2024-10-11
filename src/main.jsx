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
import TodoApp from './components/todo/todoapp.jsx';
import ErrorPage from './page/error.jsx';
import { AuthWapper } from './components/content/auth.content.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/books",
        element: <BookPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthWapper>
    <RouterProvider router={router} />
  </AuthWapper>
  // </React.StrictMode>,
)
