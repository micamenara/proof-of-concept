import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders App', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  expect(getByText(/Thumbnail/i)).toBeInTheDocument();
});
