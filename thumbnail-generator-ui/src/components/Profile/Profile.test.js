import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';
import Profile from './index';
import { Testing } from '../../constants';

describe('Profile component', () => {
  test('renders Profile', () => {
    const user = {
      name: 'Cat',
      picture: Testing.imageUrl,
    };
    render(
      <ThemeProvider theme={Theme}>
        <Profile user={user} />
      </ThemeProvider>,
    );
  });
});
