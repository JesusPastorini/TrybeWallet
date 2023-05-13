import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createEmail } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  handleEmailChange = (event) => {
    const { password } = this.state;
    const { value } = event.target;
    const maxPassword = 6;
    this.setState({
      email: value,
      isButtonDisabled: !this.validateEmail(value) || password.length < maxPassword,
    });
  };

  handlePasswordChange = (event) => {
    const { value } = event.target;
    const { email } = this.state;
    const maxName = 6;
    this.setState({
      password: value,
      isButtonDisabled: !this.validateEmail(email) || value.length < maxName,
    });
  };

  validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  handleLogin = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(createEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, isButtonDisabled } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email-input">E-mail:</label>
          <input
            type="email"
            id="email-input"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleEmailChange }
          />
          <br />
          <label htmlFor="password-input">Senha:</label>
          <input
            type="password"
            id="password-input"
            data-testid="password-input"
            value={ password }
            onChange={ this.handlePasswordChange }
          />
          <br />
          <button
            type="button"
            onClick={ this.handleLogin }
            disabled={ isButtonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
