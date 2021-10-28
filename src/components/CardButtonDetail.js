import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addItemToCart } from '../services/CartItems';

class CardButtonDetail extends Component {
  render() {
    const { product, updatePage } = this.props;

    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => {
            updatePage();
            addItemToCart(product);
          } }
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
  updatePage: PropTypes.func.isRequired,
};

export default CardButtonDetail;
