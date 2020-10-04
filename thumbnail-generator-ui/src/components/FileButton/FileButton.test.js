import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FileButton from './index';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';

describe('FileButton component', () => {
  test('renders FileButton', () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <FileButton variant='primary' accept='image/png, image/jpeg'>
          Upload files
        </FileButton>
      </ThemeProvider>,
    );

    expect(getByText(/Upload/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Upload files'));
  });
});
