import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';

describe('Footer component', () => {
  test('renders Footer', () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Footer />
      </ThemeProvider>,
    );

    expect(getByText(/Micaela/i)).toBeInTheDocument();
  });
});
