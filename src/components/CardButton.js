import React, { Component } from 'react';
import { addItemToCart } from '../services/CartItems';

class CardButton extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addItemToCart(product)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default CardButton;
