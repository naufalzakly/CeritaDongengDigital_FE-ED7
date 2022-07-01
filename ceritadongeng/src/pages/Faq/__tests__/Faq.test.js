import React from 'react';
import { render, screen } from '@testing-library/react';
import Faq from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('Faq', () => {
  test('render correctly', async () => {
    render(<Faq />);

    const setting = screen.getByText('Bagaimana cara saya mendaftar akun baru');
    expect(setting).toBeInTheDocument();
  });
});
