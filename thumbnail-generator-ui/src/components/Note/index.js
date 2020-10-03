import React from 'react';
import styled, { css } from 'styled-components';

export default function Note({ children, variant = 'success' }) {
  return <StyledNote variant={variant}>{children}</StyledNote>;
}

const StyledNote = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.17rem;
  padding: ${({ theme }) => theme.spacing.md};

  /* Success */
  ${({ theme, variant }) =>
    variant === 'success' &&
    css`
      border-left: 0.2rem solid ${theme.colors.success};
      background: ${theme.colors.successLight};
    `}

  /* Error */
  ${({ theme, variant }) =>
    variant === 'error' &&
    css`
      border-left: 0.2rem solid ${theme.colors.error};
      background: ${theme.colors.errorLight};
    `}
`;
