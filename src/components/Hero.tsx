import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import hero from '../assets/hero.webm';
import heroFallback from '../assets/hero.mp4';

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
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

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  object-position: center;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <Video autoPlay loop muted playsInline>
        <source src={hero} type="video/webm" />
        <source src={heroFallback} type="video/mp4" />
      </Video>
      <HeroTitle>Welcome to the FAKEstore</HeroTitle>
      <HeroButton as={Link} to="shop">
        Start shopping
      </HeroButton>
    </HeroContainer>
  );
}
