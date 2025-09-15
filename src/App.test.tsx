import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const headings = screen.getAllByRole('heading', { name: /portfolio/i });
  expect(headings.length).toBeGreaterThan(0);
});