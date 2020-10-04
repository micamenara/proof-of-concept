import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FileSection from './index';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';
import { Text, Testing } from '../../constants';

describe('FileSection component', () => {
  test('renders FileSection', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={Theme}>
        <FileSection />
      </ThemeProvider>,
    );
    expect(getByText(RegExp(Text.uploadFile.fromUrl, 'i'))).toBeInTheDocument();
    fireEvent.click(screen.getByText(Text.uploadFile.fromUrl));
    const input = getByPlaceholderText('http://');
    fireEvent.change(input, { target: { value: Testing.imageUrl } });
    fireEvent.click(screen.getByText(Text.uploadFile.getUrlImage));
  });
});
