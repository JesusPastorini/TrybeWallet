import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import userEvent from '@testing-library/user-event';

describe('Testa a rota Login', () => {
  it('Aplicação é renderizada com sucesso e o botão abilita após email e senha validos', () => {
    renderWithRouterAndRedux(<App />, ['/Login']);
    const headingEl = screen.getByRole('heading', { name: /login/i });
    expect(headingEl).toBeInTheDocument();

    const imputEmail = screen.getByTestId('email-input');
    expect(imputEmail).toBeInTheDocument();

    const password = screen.getByLabelText(/senha:/i);
    expect(password).toBeInTheDocument();

    const btnDisable = screen.getByRole('button', { name: /entrar/i });
    expect(btnDisable).toBeInTheDocument();
    expect(btnDisable).toBeDisabled();

    userEvent.type(imputEmail, 'alguem@alguem.com')
    userEvent.type(password, '1234567')
    const btnEnabled = screen.getByRole('button', { name: /entrar/i });
    expect(btnEnabled).toBeInTheDocument();
    expect(btnEnabled).toBeEnabled();
  });
});
