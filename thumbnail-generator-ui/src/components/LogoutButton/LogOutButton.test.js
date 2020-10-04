import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';
import LogOutButton from './index';

describe('LogOutButton component', () => {
  test('renders LogOutButton', () => {
    render(
      <ThemeProvider theme={Theme}>
        <LogOutButton />
      </ThemeProvider>,
    );
  });
});
