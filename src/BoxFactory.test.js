import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import BoxFactory from './BoxFactory';

// Smoke test:
it('renders without crashing', () => {
  render(<BoxFactory />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxFactory />);
  expect(asFragment()).toMatchSnapshot();
});

it('generates a new box with an operational delete button', () => {
  render(<BoxFactory />);

  expect(screen.queryByText('X')).not.toBeInTheDocument();

  const addBoxBtn = screen.queryByText('Add Box');

  fireEvent.click(addBoxBtn);
  expect(screen.getByText('X')).toBeInTheDocument();

  const removeBoxBtn = screen.getByText('X');

  fireEvent.click(removeBoxBtn);
  expect(screen.queryByText('X')).not.toBeInTheDocument();
});
