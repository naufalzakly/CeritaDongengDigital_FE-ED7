import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Footer from '../index';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

describe('Footer', () => {
  test('render correctly', async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const { getByText } = within(screen.getByTestId('my-test-id'));
    expect(getByText('Supported By:')).toBeInTheDocument();
  });
});
