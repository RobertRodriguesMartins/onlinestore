import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const {
      product,
      index,
    } = this.props;
    return (
      <Link
        to={ `/product/${product.category_id}/${product.id}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h3>{ `Produto${index + 1}` }</h3>
          <img src={ product.thumbnail } alt={ product } />
        </div>
      </Link>
    );
  }
}

Card.defaultProps = {
  product: {
    thumbnail: '',
    id: '',
    category_id: '',
  },
  index: 0,
};

Card.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    category_id: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default Card;
