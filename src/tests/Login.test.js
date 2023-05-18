import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa as rotas da aplicação', () => {
  it('Aplicação é renderizada com sucesso', () => {
    renderWithRouterAndRedux(<App />, ['/Login']);
    const headingEl = screen.getByRole('heading', { name: /login/i });
    expect(headingEl).toBeInTheDocument();
  });
});
