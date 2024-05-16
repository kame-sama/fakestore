import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default function ErrorPage() {
  return (
    <ErrorContainer>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has ocurred.</p>
      <Button as={Link} to="/">
        Back to home
      </Button>
    </ErrorContainer>
  );
}
