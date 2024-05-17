import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../styles/Breakpoints';

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.slate[700]};
  font-weight: 300;

  &.active {
    font-weight: 600;
  }

  &.pending {
    color: ${({ theme }) => theme.colors.slate[900]};
    font-weight: 400;
  }
`;

const NavBar = styled.nav`
  position: sticky;
  top: 1rem;
  align-self: self-start;

  @media ${device.md} {
    position: static;
    width: 100%;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
  }
`;

const LinkList = styled.ul`
  @media ${device.md} {
    display: flex;
    gap: 1rem;

    & > * {
      flex-shrink: 0;
    }
  }
`;

export default function ShopNav({ categories }: { categories: string[] }) {
  return (
    <NavBar>
      <LinkList>
        <li>
          <StyledLink to="/shop/all">all</StyledLink>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <StyledLink to={`/shop/${category}`}>{category}</StyledLink>
          </li>
        ))}
      </LinkList>
    </NavBar>
  );
}
