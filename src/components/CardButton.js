import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addItemToCart } from '../services/CartItems';

class CardButton extends Component {
  render() {
    const { product, updatePage } = this.props;

    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
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

CardButton.default = {
  product: {},
};

CardButton.propTypes = {
  product: PropTypes.shape({}).isRequired,
  updatePage: PropTypes.func.isRequired,
};

export default CardButton;
