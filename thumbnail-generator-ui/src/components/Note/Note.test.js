import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';
import Note from './index';

describe('Note component', () => {
  test('renders Note', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Note variant='success'>
          Success note
        </Note>
        <Note variant='error'>
          Error note
        </Note>
      </ThemeProvider>,
    );
  });
});
