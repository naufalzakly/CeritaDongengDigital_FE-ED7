import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormUlasan from '../index';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { UserAuthContextProvider } from '../../../context/index';

describe('AddInput', () => {
  it('input render correctly', async () => {
    render(
      <UserAuthContextProvider>
        <BrowserRouter>
          <Provider store={store}>
            <FormUlasan ulasan={[]} />
          </Provider>
        </BrowserRouter>
      </UserAuthContextProvider>
    );

    const inputEl = screen.getByRole('textbox', {
      name: /email nama kritik dan saran/i
    });

    expect(inputEl).toBeInTheDocument();
  });

  it('should type to input', async () => {
    render(
      <UserAuthContextProvider>
        <BrowserRouter>
          <Provider store={store}>
            <FormUlasan ulasan={[]} />
          </Provider>
        </BrowserRouter>
      </UserAuthContextProvider>
    );

    const inputEl = screen.getByRole('textbox', {
      name: /email nama kritik dan saran/i
    });

    fireEvent.change(inputEl, { target: { value: 'Sella' } });
    expect(inputEl.value).toBe('Sella');
  });
});
