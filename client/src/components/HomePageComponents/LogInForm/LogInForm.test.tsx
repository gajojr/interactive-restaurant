import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LogInForm from './LogInForm.component';

describe('Elements are displayed', () => {
  test('There is username input', () => {
    render(<BrowserRouter><LogInForm /></BrowserRouter>);

    const usernameInput = screen.getByLabelText('Username:')
    expect(usernameInput).toBeTruthy();
  });

  test('There is password input', () => {
    render(<BrowserRouter><LogInForm /></BrowserRouter>);

    const passwordInput = screen.getByLabelText('Password:');
    expect(passwordInput).toBeTruthy();
  });

  test('There is LogIn button', () => {
    render(<BrowserRouter><LogInForm /></BrowserRouter>);

    const LogInButton = screen.getByRole('button', { name: 'Log In' });
    expect(LogInButton).toBeTruthy();
  });

  test('There is Visitor button', () => {
    render(<BrowserRouter><LogInForm /></BrowserRouter>);

    const VisitorButton = screen.getByRole('button', { name: 'Explore as the visitor' });
    expect(VisitorButton).toBeTruthy();
  });
});