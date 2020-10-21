import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders klk tag', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/klk/);
  expect(linkElement).toBeInTheDocument();
});

test('renders klk tag', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Bla/);
  expect(linkElement).toBeInTheDocument();
});
