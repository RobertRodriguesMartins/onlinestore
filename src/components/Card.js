import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      product,
      index,
    } = this.props;
    return (
      <div data-testid="product">
        <h3>{ `Produto${index + 1}` }</h3>
        <img src={ product.thumbnail } alt={ product } />
      </div>
    );
  }
}

Card.defaultProps = {
  product: {
    thumbnail: '',
  },
  index: 0,
};

Card.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default Card;
