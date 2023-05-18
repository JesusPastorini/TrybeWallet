import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, val) => {
      const exchangeRate = val.exchangeRates[val.currency].ask;
      return acc + val.value * exchangeRate;
    }, 0);
    return (
      <div>
        <h2 data-testid="email-field">{email}</h2>
        <p data-testid="total-field">{totalExpenses.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      exchangeRates: PropTypes.objectOf(
        PropTypes.shape({
          ask: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  ...state.wallet,
});

export default connect(mapStateToProps)(Header);
