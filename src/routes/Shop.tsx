import {
  LoaderFunctionArgs,
  useLoaderData,
  useOutletContext,
  redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import ShopNav from '../components/ShopNav';
import ItemList from '../components/ItemList';
import { Container } from '../components/Container';

const ShopContainer = styled(Container)`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
`;

export async function loader({ params, request }: LoaderFunctionArgs) {
  if (request.url.slice(-5).includes('shop')) return redirect('/shop/all');
  let url: string;
  if (params.category === 'all') {
    url = 'https://fakestoreapi.com/products';
  } else {
    url = `https://fakestoreapi.com/products/category/${params.category}`;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  const items = await response.json();
  return items as Item[];
}

export default function Shop() {
  const items = useLoaderData() as Item[];
  const { categories } = useOutletContext() as RootContext;
  return (
    <ShopContainer>
      <ShopNav categories={categories} />
      <ItemList items={items} />
    </ShopContainer>
  );
}
