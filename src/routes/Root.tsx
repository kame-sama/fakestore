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
  let bagItemsCount = 0;
  for (const item of Object.values(bagItems) as BagItem[]) {
    bagItemsCount += item.quantity;
  }
  return (
    <>
      <Header bagItemsCount={bagItemsCount} />
      <main>
        <Outlet context={{ categories, bagItems, setBagItems }} />
      </main>
    </>
  );
}
