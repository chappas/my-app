import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './Components/BookingForm';

describe('App Component', () => {
  test('renders App component without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('renders header', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const headerElement = screen.getByRole('navigation');
    expect(headerElement).toBeInTheDocument();
  });
});

describe('BookingForm', () => {
  test('renders booking form', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const onDateChange = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={onDateChange}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test('submits form with valid input', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const onDateChange = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={onDateChange}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    // Get form elements by their exact IDs
    const nameInput = screen.getByTestId('name');
    const dateInput = screen.getByTestId('res-date');
    const guestsInput = screen.getByTestId('guests');
    const submitButton = screen.getByDisplayValue('Make Your reservation');

    // Fill in form with valid data
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const today = new Date().toISOString().split('T')[0];
    fireEvent.change(dateInput, { target: { value: today } });

    fireEvent.change(guestsInput, { target: { value: '2' } });

    // Submit form
    fireEvent.click(submitButton);

    // Verify submitForm was called
    expect(submitForm).toHaveBeenCalled();
  });
});