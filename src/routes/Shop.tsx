import {
  LoaderFunctionArgs,
  useLoaderData,
  useOutletContext,
  redirect,
  useNavigation,
} from 'react-router-dom';
import styled from 'styled-components';
import ShopNav from '../components/ShopNav';
import ItemList from '../components/ItemList';
import { Container } from '../components/Container';
import { Loader } from '../components/Loader';

const ShopContainer = styled(Container)`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  height: 100%;
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
  const navigation = useNavigation();
  const items = useLoaderData() as Item[];
  const { categories } = useOutletContext() as RootContext;

  return (
    <ShopContainer>
      <ShopNav categories={categories} />
      {navigation.state === 'loading' ? (
        <Loader />
      ) : (
        <>
          <ItemList items={items} />
        </>
      )}
    </ShopContainer>
  );
}
