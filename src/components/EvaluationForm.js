import React from 'react';
import PropTypes from 'prop-types';
import LastReviews from './LastReviews';
import { addReview } from '../services/saveEvaluation';

class EvaluationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      checkboxValue: 0,
      message: '',
      refresh: false,
      isDisabled: true,
    };
  }

  cumulativeCheckbox = ({ target }) => {
    target.parentNode.childNodes.forEach((element) => {
      if (element.value <= target.value) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
    this.setState({
      checkboxValue: target.value,
    }, this.validationForm);
  }

  validationForm = () => {
    const { email, checkboxValue } = this.state;
    const validEmail = email.includes('@');
    const validCheckbox = checkboxValue !== 0;
    this.setState({
      isDisabled: !(validEmail && validCheckbox),
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validationForm);
  }

  render() {
    const { product } = this.props;
    const { email, message, checkboxValue, isDisabled } = this.state;
    return (
      <div>

        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <div>
            <input
              type="checkbox"
              name="star1"
              value={ 1 }
              onChange={ this.cumulativeCheckbox }
            />
            <input
              type="checkbox"
              name="star2"
              value={ 2 }
              onChange={ this.cumulativeCheckbox }
            />
            <input
              type="checkbox"
              name="star3"
              value={ 3 }
              onChange={ this.cumulativeCheckbox }
            />
            <input
              type="checkbox"
              name="star4"
              value={ 4 }
              onChange={ this.cumulativeCheckbox }
            />
            <input
              type="checkbox"
              name="star5"
              value={ 5 }
              onChange={ this.cumulativeCheckbox }
            />
          </div>
          <label htmlFor="message">
            <textarea
              id="message"
              name="message"
              value={ message }
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ () => {
              this.setState((prevState) => ({
                refresh: !prevState.refresh,
              }));
              addReview({
                productId: product.id,
                email,
                message,
                checkboxValue: parseInt(checkboxValue, 10),
              });
            } }
          >
            Enviar avaliação
          </button>
        </form>
        <LastReviews product={ product } />
      </div>
    );
  }
}

EvaluationForm.defaultProps = {
  product: {
    id: '',
  },
};

EvaluationForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default EvaluationForm;
