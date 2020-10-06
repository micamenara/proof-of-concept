import React from 'react';
import { render } from '@testing-library/react';
import Loader from './index';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';

describe('Loader component', () => {
  test('renders Loader', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Loader size='50px' />
      </ThemeProvider>,
    );
  });
});
