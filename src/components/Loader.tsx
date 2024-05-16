import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(0.8)
  }
  50% {
    transform: rotate(360deg) scale(1.2)
  }
  100% {
    transform: rotate(720deg) scale(0.8)
  }
`;

const ballone = keyframes`
  0% {
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.slate[600]};
  }
  50% {
    box-shadow: 0 0 0 ${({ theme }) => theme.colors.slate[600]};
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.slate[600]};
    margin-bottom: 10px;
  }
`;

const balltwo = keyframes`
  0% {
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.slate[300]};
  }
  50% {
    box-shadow: 0 0 0 ${({ theme }) => theme.colors.slate[300]};
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.slate[300]};
    margin-top: 0;
  }
`;

export const Loader = styled.span`
  animation: ${rotate} 1s infinite;
  height: 50px;
  width: 50px;
  justify-self: center;
  align-self: center;

  &::before,
  &::after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    width: 20px;
  }

  &::before {
    animation: ${ballone} 1s infinite;
    background-color: ${({ theme }) => theme.colors.slate[300]};
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.slate[600]};
    margin-bottom: 10px;
  }

  &::after {
    animation: ${balltwo} 1s infinite;
    background-color: ${({ theme }) => theme.colors.slate[600]};
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.slate[300]};
  }
`;
