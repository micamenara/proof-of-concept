import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './index';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';

describe('Button component', () => {
  test('renders primary Button', () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Button variant='primary' onClick={() => console.log('Testing')}>
          Test
        </Button>
      </ThemeProvider>,
    );

    expect(getByText(/Test/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Test'));
  });
});
