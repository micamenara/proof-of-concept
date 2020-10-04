import React from 'react';
import styled, { css } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

export default function UserSection() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <Section>
      <h2>My account</h2>
      {user && (
        <UserData>
          <img src={user.picture} alt={user.name} />
          <Info>
            <p>
              <strong>Name: </strong>
              {user.name}
            </p>
            <p>
              <strong>Email: </strong>
              {user.email}
            </p>
            <p>
              <strong>Nickname: </strong>
              {user.nickname}
            </p>
          </Info>
        </UserData>
      )}
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray3};
  padding: ${({ theme }) => theme.spacing.md};
  h2 {
    padding: ${({ theme }) => theme.spacing.md};
    margin: 0px;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      background: transparent;
    }
  `};
`;

const UserData = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px ${({ theme }) => theme.spacing.md};
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;
const Info = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;
