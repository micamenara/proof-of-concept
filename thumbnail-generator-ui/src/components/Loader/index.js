import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Loader({ size = '40px' }) {
  return <Spinner size={size} />;
}

/* Animation */
const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: transparent;
  animation: ${rotate} 1.2s infinite linear;
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-right: 3px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primaryLight};
  border-left: 3px solid ${({ theme }) => theme.colors.primaryLight};
`;
