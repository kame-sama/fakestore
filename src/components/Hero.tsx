import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.2rem;
  text-align: center;
`;

const HeroButton = styled(Button)`
  text-decoration: none;
  font-size: 1.75rem;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroTitle>Welcome to the FAKEstore</HeroTitle>
      <HeroButton as={Link} to="shop">
        Start shopping
      </HeroButton>
    </HeroContainer>
  );
}
