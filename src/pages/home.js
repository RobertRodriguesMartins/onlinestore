import React from 'react';
import Carrinho from './Carrinho';
import './css/CartPage.css'

class Home extends React.Component {
  render() {
    return (
      <div className="cart-page">
        <div className="search-cart">
          <input type='text' />
          <Carrinho />
        </div>
        <div className="message-cart">
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
