import React from 'react';
import PropTypes from 'prop-types';
import { getReviews } from '../services/saveEvaluation';

class LastReviews extends React.Component {
  render() {
    const { product } = this.props;
    const checkboxNumber = 5;
    return (
      <div>
        {
          getReviews()
            .filter((element) => element.productId === product.id)
            .map((element, i) => (
              <div key={ i }>
                <p>{ element.email }</p>
                {
                  [...Array(checkboxNumber).keys()].map((index) => {
                    const isChecked = index < element.checkboxValue;

                    return (
                      <input
                        key={ `${i}: ${index}` }
                        type="checkbox"
                        checked={ isChecked }
                        readOnly
                      />
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

LastReviews.defaultProps = {
  product: {
    id: '',
  },
};

LastReviews.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default LastReviews;
