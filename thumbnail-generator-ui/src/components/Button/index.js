import React from 'react';
import styled, { css } from 'styled-components';

export default function Button({ children, variant = 'primary', ...props }) {
  return (
    <StyledButton {...props} variant={variant}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  padding: 10px 16px;
  border-radius: 20px;
  outline: 0px;

  &:hover {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  &:active {
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
  /* Primary */
  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      color: white;
      background-color: ${theme.colors.primary};
      &:active {
        background-color: ${theme.colors.primaryDark};
      }
    `}
`;
