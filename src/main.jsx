import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import BookDetails from './components/BookDetails';
import ListedBooks from './components/ListedBooks';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json'), //Don't use all fetch for just one book
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: 'dashboard',
        loader: () => fetch('/booksData.json'),
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </HelmetProvider>
  </StrictMode>
);
