import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

test('renders BookingForm with content (should pass)', () => {
  render(<BookingForm />);

  const firstNameInput = screen.getByLabelText('First Name'); // Assuming label for first name input
  expect(firstNameInput).toBeInTheDocument();
});