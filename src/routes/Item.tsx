import {
  LoaderFunctionArgs,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const ItemContainer = styled(Container)`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 2fr;
`;

const Img = styled.img`
  box-shadow: 2px 2px 5px ${({ theme }) => theme.colors.slate[500]};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ControlsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const QuantityInput = styled(Input)`
  width: 50px;
  text-align: center;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Text = styled.p`
  max-width: 600px;
  text-wrap: balance;
`;

export async function loader({ params }: LoaderFunctionArgs) {
  const url = `https://fakestoreapi.com/products/${params.id}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  const item = await response.json();
  return item as Item;
}

export default function Item() {
  const item = useLoaderData() as Item;
  const [quantity, setQuantity] = useState(1);
  const { setBagItems } = useOutletContext() as RootContext;
  return (
    <ItemContainer>
      <Img src={item.image} alt={item.title} />
      <ContentWrapper>
        <Text as="h1">{item.title}</Text>
        <Text as="h2">{`${item.price} USD`}</Text>
        <Text>{item.description}</Text>
        <ControlsWrapper>
          <div>
            <Button
              $icon
              onClick={() => setQuantity((prev) => prev - (prev > 1 ? 1 : 0))}
            >
              -
            </Button>
            <QuantityInput
              value={quantity}
              type="number"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <Button $icon onClick={() => setQuantity((prev) => prev + 1)}>
              +
            </Button>
          </div>
          <Button
            onClick={() => {
              setBagItems((prev) => {
                const updatedQuantity =
                  (prev[item.id]?.quantity || 0) + quantity;
                return {
                  ...prev,
                  [item.id]: { ...item, quantity: updatedQuantity },
                };
              });
              setQuantity(1);
            }}
          >
            Add to bag
          </Button>
        </ControlsWrapper>
      </ContentWrapper>
    </ItemContainer>
  );
}
