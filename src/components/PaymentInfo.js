import React from 'react';
import { Redirect } from 'react-router-dom';
import PaymentForm from './PaymentForm';

class PaymentInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      method: '',
      redirect: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(({
      [name]: value,
    }));
  }

  redirectToHome = () => {
    this.setState({ redirect: true });
  }

  render() {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      method,
      redirect,
    } = this.state;

    const isButtonDisabled = !(fullname
      && email
      && cpf
      && phone
      && cep
      && address
      && method);

    const styleError = {
      border: '2px solid red',
    };
    const styleErrorMethod = {
      color: 'red',
    };

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <PaymentForm
        fullname={ fullname }
        email={ email }
        cpf={ cpf }
        phone={ phone }
        cep={ cep }
        address={ address }
        method={ method }
        handleChange={ this.handleChange }
        styleError={ styleError }
        styleErrorMethod={ styleErrorMethod }
        isButtonDisabled={ isButtonDisabled }
        redirectToHome={ this.redirectToHome }
      />
    );
  }
}

export default PaymentInfo;
