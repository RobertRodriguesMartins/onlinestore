import React from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../services/CartItems';

class Carrinho extends React.Component {
  qualquerNome = () => {
    const ITEMS_QT = getCart().reduce((acc, curr) => {
      const quantity = curr.qnt;
      return acc + quantity;
    }, 0);

    return ITEMS_QT;
  }

  render() {
    return (
      <div>
        <Link
          to="/cart-page"
          data-testid="shopping-cart-button"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/34/34562.png"
            alt="Carrinho de compras"
          />
        </Link>
        <span data-testid="shopping-cart-size">{ this.qualquerNome() }</span>
      </div>
    );
  }
}

export default Carrinho;
