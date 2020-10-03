import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icloud from '../Icons/Icloud';
import Isettings from '../Icons/Isettings';
import Iimage from './../Icons/Iimage';

export default function Nav() {
  const theme = useTheme();
  const navItems = [
    {
      icon: Iimage,
      label: 'Images',
      selected: true,
    },
    { icon: Isettings, label: 'Settings' },
  ];
  const getIcon = (icon) => {
    const Icon = icon;
    return <Icon height='24px' fill={theme.colors.gray1} />;
  };
  return (
    <StyledNav>
      <SiteName>
        <Icloud height='32px' fill={theme.colors.white} />
        <h2>Thumbnail</h2>
      </SiteName>
      <NavList>
        {navItems.map((item) => (
          <li key={item.label} className={item.selected ? 'current' : ''}>
            {getIcon(item.icon)}
            {item.label}
          </li>
        ))}
      </NavList>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  height: 100vh;
  pointer-events: auto;
  width: ${({ theme }) => theme.sizes.navWidth};
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  padding: 12px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    color: ${({ theme }) => theme.colors.gray1};
    padding: 12px;
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
    padding-right: 12px;
  }
`;

const SiteName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > h2 {
    color: ${({ theme }) => theme.colors.gray2};
  }
  > svg {
    background: ${({ theme }) => theme.colors.primary};
    padding: 5px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin-right: 7px;
  }
`;
