import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import { GlobalStyles } from './styles/Global';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/Root';
import Shop, { loader as shopLoader } from './routes/Shop';
import Item, { loader as itemLoader } from './routes/Item';
import Bag from './routes/Bag';
import Hero from './components/Hero';
import ErrorPage from './routes/ErrorPage';

const router = createHashRouter([
  {
    path: '/',
    loader: rootLoader,
    element: <Root />,
    errorElement: <ErrorPage />,
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
