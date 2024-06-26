import { useOutletContext, Form, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { device } from '../styles/Breakpoints';

const BagContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media ${device.md} {
    grid-template-columns: 1fr;
  }
`;

const ItemWrapper = styled.li`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.colors.slate[500]};
  background-color: ${({ theme }) => theme.colors.cardBackground};

  & + & {
    margin-top: 1rem;
  }

  @media ${device.sm} {
    grid-template-columns: 100px 1fr;
    grid-template-rows: repeat(2, auto);
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media ${device.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 0.875rem;
  }
`;

const Img = styled.img`
  object-fit: contain;
  object-position: center;
  aspect-ratio: 1;

  @media ${device.sm} {
    grid-row: 1 / -1;
  }
`;

const Title = styled.div`
  text-wrap: pretty;
  align-self: self-start;
`;

const Price = styled.div`
  text-align: right;
  font-size: 1.15rem;

  @media ${device.sm} {
    font-size: 1rem;
  }
`;

const StyledForm = styled(Form)`
  align-self: start;
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  position: sticky;
  top: 1rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.colors.slate[500]};
`;

const Label = styled.label`
  font-size: 1.1rem;
`;

const Total = styled(Price)`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Placeholder = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const PlaceholderTitle = styled(Total)`
  color: ${({ theme }) => theme.colors.slate[600]};
`;

const PlaceholderButton = styled(Button)`
  text-decoration: none;
`;

export default function Bag() {
  const { bagItems, setBagItems } = useOutletContext() as RootContext;
  const total = Object.values(bagItems).reduce(
    (acc: number, item: BagItem) => acc + item.price * item.quantity,
    0,
  );
  const itemList = Object.values(bagItems).map((item: BagItem) => (
    <ItemWrapper key={item.id}>
      <Img src={item.image} alt={item.title} />

      <Title>{item.title}</Title>
      <ControlsWrapper>
        <div>
          <Button
            $icon
            onClick={() => {
              setBagItems((prev) => {
                const quantity =
                  prev[item.id].quantity - (prev[item.id].quantity > 1 ? 1 : 0);
                return {
                  ...prev,
                  [item.id]: { ...item, quantity },
                };
              });
            }}
          >
            -
          </Button>
          <Input
            $quantity
            value={item.quantity}
            onChange={(e) => {
              setBagItems((prev) => {
                const val = parseInt(e.target.value);
                const quantity = !Number.isNaN(val) && val > 0 ? val : 1;
                return { ...prev, [item.id]: { ...item, quantity } };
              });
            }}
          />
          <Button
            $icon
            onClick={() => {
              setBagItems((prev) => {
                const quantity = (prev[item.id]?.quantity || 0) + 1;
                return {
                  ...prev,
                  [item.id]: { ...item, quantity },
                };
              });
            }}
          >
            +
          </Button>
        </div>
        <Button
          onClick={() => {
            setBagItems((prev) => {
              const next = Object.assign({}, prev);
              delete next[item.id];
              return next;
            });
          }}
        >
          Remove
        </Button>
        <Price>{`${item.price} USD`}</Price>
      </ControlsWrapper>
    </ItemWrapper>
  ));
  return (
    <>
      {itemList.length ? (
        <BagContainer>
          <ul>{itemList}</ul>
          <StyledForm method="GET" action="/">
            <Label htmlFor="phone">Phone:</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              type="tel"
              required
            />
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
              required
            />
            <Total>{`${total.toFixed(2)} USD`}</Total>
            <Button type="submit">Checkout</Button>
          </StyledForm>
        </BagContainer>
      ) : (
        <Placeholder>
          <PlaceholderTitle>There is nothing here yet...</PlaceholderTitle>
          <PlaceholderButton as={Link} to="/shop">
            Start shopping
          </PlaceholderButton>
        </Placeholder>
      )}
    </>
  );
}
