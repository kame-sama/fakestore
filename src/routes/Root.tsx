import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';
import { GlobalStyles } from '../styles/Global';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';

export async function loader() {
  const url = 'https://fakestoreapi.com/products/categories';
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  const categories = await response.json();
  return categories as string[];
}

export default function Root() {
  const categories = useLoaderData() as string[];
  const [bagItems, setBagItems] = useState<BagItems>({});
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Outlet context={{ categories, bagItems, setBagItems }} />
    </ThemeProvider>
  );
}
