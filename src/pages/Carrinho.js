import React from 'react';
import { Link } from 'react-router-dom';

class Carrinho extends React.Component {
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
      </div>
    )
  }
}

export default Carrinho;
