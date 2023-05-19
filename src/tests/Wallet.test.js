import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa a wallet', () => {
  it('Testa se a plicação é renderizada com sucesso', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const sumValue = screen.getByText(/0\.00/i);
    expect(sumValue).toBeInTheDocument();
    const brl = screen.getByText(/brl/i);
    expect(brl).toBeInTheDocument();
    const textValue = screen.getByRole('textbox', { name: /valor da despesa:/i });
    expect(textValue).toBeInTheDocument();
    const textDesc = screen.getByRole('textbox', { name: /descrição da despesa:/i });
    expect(textDesc).toBeInTheDocument();
    const moeda = screen.getByRole('combobox', { name: /moeda:/i });
    expect(moeda).toBeInTheDocument();
    const metdPag = screen.getByRole('combobox', { name: /método de pagamento:/i });
    expect(metdPag).toBeInTheDocument();
    const categ = screen.getByRole('combobox', { name: /categoria \(tag\):/i });
    expect(categ).toBeInTheDocument();
    const buttonDespesa = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(buttonDespesa).toBeInTheDocument();
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    userEvent.type(textValue, '10');
    userEvent.type(textDesc, 'Compras');
    act(() => {
      userEvent.click(buttonDespesa);
    });
    const description = await screen.findByRole('cell', { name: /compras/i });
    expect(description).toBeInTheDocument();
    const tag = await screen.findByRole('cell', { name: /alimentação/i });
    expect(tag).toBeInTheDocument();
    const metodPag = await screen.findByRole('cell', { name: /dinheiro/i });
    expect(metodPag).toBeInTheDocument();
    const value = await screen.findByRole('cell', { name: /10\.00/i });
    expect(value).toBeInTheDocument();
    const coin = await screen.findByRole('cell', { name: /4\.97/i });
    expect(coin).toBeInTheDocument();
    const cambio = await screen.findByRole('cell', { name: /dólar americano\/real brasileiro/i });
    expect(cambio).toBeInTheDocument();
    const convertValue = await screen.findByRole('cell', { name: /49\.67/i });
    expect(convertValue).toBeInTheDocument();
    const btnDell = await screen.findByRole('button', { name: /excluir/i });
    expect(btnDell).toBeInTheDocument();
  });
});
