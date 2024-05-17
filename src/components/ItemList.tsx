import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../styles/Breakpoints';

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;

  @media ${device.md} {
    justify-content: center;
  }
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 0.75rem;
  width: 300px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.colors.slate[500]};
`;

const Img = styled.img`
  object-fit: contain;
  object-position: center;
  aspect-ratio: 1;
`;

const Title = styled(Link)`
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.slate[950]};

  &:hover {
    text-decoration: underline;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 300;
  justify-self: end;
`;
export default function ItemList({ items }: { items: Item[] }) {
  return (
    <ItemsContainer>
      {items.map((item) => (
        <ItemWrapper key={item.id}>
          <Link to={`/shop/item/${item.id}`}>
            <Img src={item.image} />
          </Link>
          <Title to={`/shop/item/${item.id}`}>{item.title}</Title>
          <Price>{`${item.price} USD`}</Price>
        </ItemWrapper>
      ))}
    </ItemsContainer>
  );
}
