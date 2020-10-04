import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../Button';

export default function LoginButton({ children, ...props }) {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
      {...props}
    >
      {children}
    </Button>
  );
}
