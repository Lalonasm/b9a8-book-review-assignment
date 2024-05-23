import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBook from './components/ListedBook/ListedBook';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/footer',
        element: <Footer></Footer>
      },
      {
        path: '/header',
        element: <Header></Header>
      },
      {
        path: '/listedbook',
        element: <ListedBook></ListedBook>,
        loader:()=>fetch('/books.json')
      },
      {
        path: '/pagestoread',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      }
    ]
  },
  // {
  //   path: '/banner',
  //   element: <Banner></Banner>
  // },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
