import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  margin: ${({ theme }) => `${theme.spacing.sm} 0px`};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
`;
