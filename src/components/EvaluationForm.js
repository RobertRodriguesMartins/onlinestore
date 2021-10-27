import React from 'react';

class EvaluationForm extends React.Component {
  cumulativeCheckbox = ({ target }) => {
    target.parentNode.childNodes.forEach((element) => {
      if (element.value <= target.value) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    })
  }
  render() {
    return (
      <form>
        <input type="email" placeholder="Email" />
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
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
          />
        </label>
        <button type="submit">Enviar avaliação</button>
      </form>
    );
  }
}

export default EvaluationForm;
