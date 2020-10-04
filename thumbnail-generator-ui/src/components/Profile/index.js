import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Profile({ user }) {
  return (
    <User>
      <Link to='/profile'>
        <img src={user.picture} alt={user.name} />
        <label>{user.name}</label>
      </Link>
    </User>
  );
}

const User = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray1};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
  label {
    color: ${({ theme }) => theme.colors.gray1};
  }
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
