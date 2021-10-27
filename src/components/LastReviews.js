import React from 'react';
import { getReviews } from '../services/saveEvaluation';

class LastReviews extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        { 
          getReviews()
          .filter((element) => element.productId === product.id)
          .map((element, i) => (
            <div key={ i }>
              <p>{ element.email }</p>
              { 
                [...Array(5).keys()].map((index) => {
                  const isChecked = index < element.checkboxValue;

                  return (
                    <input key={ `${i}: ${index}` } type="checkbox" checked={ isChecked } readOnly />
                  );
                })
              }
              <p>{ element.message }</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default LastReviews;
