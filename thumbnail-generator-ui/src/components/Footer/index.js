import React from 'react';
import styled from 'styled-components';
export default function Footer() {
  return (
    <StyledFooter>
      <p>Made with ♥ by Micaela</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  height: ${({ theme }) => theme.sizes.footerHeight};
  background: ${({ theme }) => theme.colors.gray2};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md}; ;
  color: ${({ theme }) => theme.colors.gray4};
  display: flex;
  justify-content: center;
  align-items: center;
  
  > p {
    margin: 0;
  }
`;
