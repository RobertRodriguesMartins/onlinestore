import React from 'react';
import PropTypes from 'prop-types';

class PaymentForm extends React.Component {
  render() {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      method,
      handleChange,
      styleError,
      styleErrorMethod,
      isButtonDisabled,
      redirectToHome,
    } = this.props;
    return (
      <form>
        <label htmlFor="fullname">
          Name:
          <input
            style={ !fullname ? styleError : {} }
            id="fullname"
            type="text"
            data-testid="checkout-fullname"
            name="fullname"
            value={ fullname }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            style={ !email ? styleError : {} }
            id="email"
            type="email"
            data-testid="checkout-email"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="cpf">
          CPF:
          <input
            style={ !cpf ? styleError : {} }
            id="cpf"
            type="text"
            data-testid="checkout-cpf"
            name="cpf"
            value={ cpf }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="phone">
          Phone number:
          <input
            style={ !phone ? styleError : {} }
            id="phone"
            type="text"
            data-testid="checkout-phone"
            name="phone"
            value={ phone }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="cep">
          CEP:
          <input
            style={ !cep ? styleError : {} }
            id="cep"
            type="text"
            data-testid="checkout-cep"
            name="cep"
            value={ cep }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="address">
          Address:
          <input
            style={ !address ? styleError : {} }
            id="address"
            type="text"
            data-testid="checkout-address"
            name="address"
            value={ address }
            onChange={ handleChange }
          />
        </label>

        <div>
          <label htmlFor="boleto" style={ !method ? styleErrorMethod : {} }>
            Boleto
            <input
              style={ !method ? styleError : {} }
              id="boleto"
              type="radio"
              name="method"
              value="boleto"
              onChange={ handleChange }
            />
          </label>

          <span style={ !method ? styleErrorMethod : {} }>Cartão de crédito</span>
          <div
            id="credit-cards"
          >
            <label htmlFor="visa">
              Visa
              <input
                id="visa"
                type="radio"
                name="method"
                value="visa"
                onChange={ handleChange }
              />
            </label>

            <label htmlFor="mastercard">
              MasterCard
              <input
                id="mastercard"
                type="radio"
                name="method"
                value="mastercard"
                onChange={ handleChange }
              />
            </label>

            <label htmlFor="elo">
              Elo
              <input
                id="elo"
                type="radio"
                name="method"
                value="elo"
                onChange={ handleChange }
              />
            </label>
          </div>
        </div>

        <button
          type="button"
          disabled={ isButtonDisabled }
          onClick={ redirectToHome }
        >
          Checkout
        </button>
      </form>
    );
  }
}

PaymentForm.default = {
  fullname: '',
  email: '',
  cpf: '',
  phone: '',
  cep: '',
  address: '',
  method: '',
  handleChange: () => {},
  styleError: PropTypes.shape({
    border: '',
  }),
  styleErrorMethod: PropTypes.shape({
    color: '',
  }),
  isButtonDisabled: true,
  redirectToHome: () => {},
};

PaymentForm.propTypes = {
  fullname: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  phone: PropTypes.string,
  cep: PropTypes.string,
  address: PropTypes.string,
  method: PropTypes.string,
  handleChange: PropTypes.func,
  styleError: PropTypes.shape({
    border: PropTypes.string,
  }),
  styleErrorMethod: PropTypes.shape({
    color: PropTypes.string,
  }),
  isButtonDisabled: PropTypes.bool,
  redirectToHome: PropTypes.func,
}.isRequired;

export default PaymentForm;
