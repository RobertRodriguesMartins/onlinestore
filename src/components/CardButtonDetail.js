import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addItemToCart } from '../services/CartItems';

class CardButtonDetail extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addItemToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

CardButtonDetail.default = {
  product: {},
};

CardButtonDetail.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default CardButtonDetail;
