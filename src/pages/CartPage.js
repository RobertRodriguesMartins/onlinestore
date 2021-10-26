import React from 'react';
import { getCart } from '../services/CartItems';

class CartPage extends React.Component {
  render() {
    const LOCAL_ITEMS = getCart();

    return (
      <div>
        {
          LOCAL_ITEMS.length > 0 ? (
            LOCAL_ITEMS.map((el, index) => {
              const product = el[Object.keys(el)[0]];
              return (
                <div key={ index }>
                  <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
                  <img
                    src={ product.thumbnail }
                    alt={ product.title }
                  />
                  <p data-testid="shopping-cart-product-quantity">{ el.qnt }</p>
                </div>
              );
            })) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
      </div>
    );
  }
}

export default CartPage;
