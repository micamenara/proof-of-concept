import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenerateThumbnail from './index';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';
import { Testing } from '../../constants';

describe('GenerateThumbnail component', () => {
  test('renders GenerateThumbnail', () => {
    fetch(Testing.imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const file = blob;
        const { getByText } = render(
          <ThemeProvider theme={Theme}>
            <GenerateThumbnail file={file} onReturn={() => console.log('New file')} />
          </ThemeProvider>,
        );

        expect(getByText(/Done/i)).toBeInTheDocument();
        fireEvent.click(screen.getByText('Done'));
      });
  });
});
