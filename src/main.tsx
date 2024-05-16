import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/rubik';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/Root';
import Shop, { loader as shopLoader } from './routes/Shop';
import Item, { loader as itemLoader } from './routes/Item';
import Bag from './routes/Bag';
import Hero from './components/Hero';

const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    element: <Root />,
    errorElement: <h1>Something went wrong...</h1>,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: 'shop',
        loader: shopLoader,
        element: <Shop />,
      },
      {
        path: 'shop/:category',
        loader: shopLoader,
        element: <Shop />,
      },
      {
        path: 'shop/item/:id',
        loader: itemLoader,
        element: <Item />,
      },
      {
        path: 'bag',
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
