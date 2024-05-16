import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
`;

export default function ShopNav({ categories }: { categories: string[] }) {
  return (
    <NavBar>
      <ul>
        <li>
          <StyledLink to="/shop/all">all</StyledLink>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <StyledLink to={`/shop/${category}`}>{category}</StyledLink>
          </li>
        ))}
      </ul>
    </NavBar>
  );
}
