import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';
import Profile from './index';
import { Testing } from '../../constants';
import { BrowserRouter } from 'react-router-dom';

describe('Profile component', () => {
  test('renders Profile', () => {
    const user = {
      name: 'Cat',
      picture: Testing.imageUrl,
    };
    render(
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Profile user={user} />
        </ThemeProvider>
      </BrowserRouter>,
    );
  });
});
