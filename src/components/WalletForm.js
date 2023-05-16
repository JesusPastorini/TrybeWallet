import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions/index';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
  };

  componentDidMount() {
    // this.props.fetchCurrencies();
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
    console.log(this.props);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    // Lógica para salvar a despesa

  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, isLoading } = this.props;
    if (isLoading) <div>Carregando...</div>;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Valor da Despesa:
          <input
            type="text"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>
        <br />
        <label>
          Descrição da Despesa:
          <input
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        <br />

        <label>
          Moeda:
          <select
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {currencies.map((curr) => (
              <option key={ curr } value={ curr }>
                {curr}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Método de Pagamento:
          <select
            name="method"
            value={ method }
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <br />

        <label>
          Categoria (Tag):
          <select
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <br />

        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}
WalletForm.propTypes = {
  currencies: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
});

export default connect(mapStateToProps)(WalletForm);
