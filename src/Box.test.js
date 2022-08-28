import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

// Smoke test:
it('renders without crashing', () => {
  render(<Box />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
