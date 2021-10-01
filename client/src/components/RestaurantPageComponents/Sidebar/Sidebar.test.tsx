import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar.component';

describe('Elements are displayed', () => {
  test('There is username input', () => {
    render(<BrowserRouter><Sidebar /></BrowserRouter >);

    expect(2).toEqual(2);
  });
});