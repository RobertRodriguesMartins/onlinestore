import React from 'react';
import LastReviews from './LastReviews';
import { addReview } from '../services/saveEvaluation';

class EvaluationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      checkboxValue: 0,
      message: '',
    }
  }
  cumulativeCheckbox = ({ target }) => {
    target.parentNode.childNodes.forEach((element) => {
      if (element.value <= target.value) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    })
    this.setState({
      checkboxValue: target.value,
    })
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { product } = this.props;
    const { email, message, checkboxValue } = this.state;
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
            <input type="checkbox" name="star1" value={ 1 } onChange={this.cumulativeCheckbox} />
            <input type="checkbox" name="star2" value={ 2 } onChange={this.cumulativeCheckbox} />
            <input type="checkbox" name="star3" value={ 3 } onChange={this.cumulativeCheckbox} />
            <input type="checkbox" name="star4" value={ 4 } onChange={this.cumulativeCheckbox} />
            <input type="checkbox" name="star5" value={ 5 } onChange={this.cumulativeCheckbox} />
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
            type="submit"
            onClick={ (event) => {

              this.setState({
                refresh: true,
              })

              event.preventDefault();
              if (checkboxValue === 0) {
                window.alert("Adicione uma nota!")
              }
              addReview({ 
                productId: product.id,
                email,
                message,
                checkboxValue: parseInt(checkboxValue, 10),
              })
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

export default EvaluationForm;
