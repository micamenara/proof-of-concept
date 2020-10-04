import React, { useState, useRef, useEffect } from 'react';
import styled, { useTheme, css } from 'styled-components';
import { Text } from '../../constants';
import Icloud from '../Icons/Icloud';
import Imenu from '../Icons/Imenu';
import Isettings from '../Icons/Isettings';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import Iimage from './../Icons/Iimage';
import { useAuth0 } from '@auth0/auth0-react';

export default function Nav() {
  const theme = useTheme();
  const [opened, setOpened] = useState(false);
  const ref = useRef(null);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpened(false);
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const navItems = [
    {
      icon: Iimage,
      label: Text.nav.images,
      selected: true,
    },
    { icon: Isettings, label: Text.nav.settings },
  ];
  const getIcon = (icon) => {
    const Icon = icon;
    return <Icon height='24px' fill={theme.colors.gray1} />;
  };
  return (
    <StyledNav>
      <SiteName>
        <Menu onClick={() => setOpened(!opened)}>
          <Imenu height='24px' width='24px' fill={theme.colors.black} />
        </Menu>
        <SiteLogo>
          <h2>{Text.general.siteTitle}</h2>
          <Icloud height='32px' fill={theme.colors.white} />
        </SiteLogo>
      </SiteName>

      <NavContent opened={opened} ref={ref}>
        <NavList>
          {navItems.map((item) => (
            <li key={item.label} className={item.selected ? 'current' : ''}>
              {getIcon(item.icon)}
              {item.label}
            </li>
          ))}
        </NavList>

        <Account>
          {isAuthenticated ? (
            <UserData>
              <Profile user={user} />
              <LogoutButton />
            </UserData>
          ) : (
            <NoUser>
              <LoginButton>Log in</LoginButton>
              <LoginButton variant='outline'>Sing Up</LoginButton>
            </NoUser>
          )}
        </Account>
      </NavContent>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  height: 100%;
  pointer-events: auto;
  width: ${({ theme }) => theme.sizes.navWidth};
  background: white;
  height: calc(100vh - ${({ theme }) => theme.sizes.footerHeight});
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      height: auto;
      position: sticky;
      width: 100%;
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14);
    }
  `};
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    color: ${({ theme }) => theme.colors.gray1};
    padding: ${({ theme }) => theme.spacing.md};
    display: flex;
    align-items: center;
    margin: 12px 0px;
  }
  > li.current {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  > li.current > svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
  > li > svg {
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`;

const SiteName = styled.div`
  display: flex;
  align-items: center;
`;

const SiteLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  flex: 1;
  > h2 {
    color: ${({ theme }) => theme.colors.gray2};
    margin: 0;
  }
  > svg {
    background: ${({ theme }) => theme.colors.primary};
    padding: 5px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin-left: 7px;
  }
`;

const Menu = styled.a`
  padding: ${({ theme }) => theme.spacing.md};
  display: none;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      display: flex;
    }
  `};
`;

const NavContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${({ theme, opened }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      display: ${opened ? 'block' : 'none'};
    }
  `};
`;

const Account = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const UserData = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  > button {
    margin: ${({ theme }) => theme.spacing.lg} 0px;
  }
`;

const NoUser = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
`;
