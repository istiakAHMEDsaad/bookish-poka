import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import BookDetails from './components/BookDetails';
import ListedBooks from './components/ListedBooks';

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
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
