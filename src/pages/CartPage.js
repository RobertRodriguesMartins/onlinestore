import React from 'react';
import { Link } from 'react-router-dom';
import { getCart, addItemToCart, removeItemToCart } from '../services/CartItems';

class CartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      render: false,
    };
  }

  removeEveryItem = (product) => {
    const newCart = getCart().filter((element) => element[product.id] === undefined);
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.updatePage();
  }

  updatePage = () => {
    this.setState((previousState) => ({
      render: !previousState.render,
    }));
  }

  render() {
    const LOCAL_ITEMS = getCart();
    const totalValue = getCart().reduce((acc, curr) => {
      const { price } = curr[Object.keys(curr)[0]];
      const quantity = curr.qnt;
      return acc + price * quantity;
    }, 0);

    return (
      <div>
        {
          LOCAL_ITEMS.length > 0 ? (
            <div>
              {
                LOCAL_ITEMS.map((el, index) => {
                  const product = el[Object.keys(el)[0]];
                  return (
                    <div key={ index }>
                      <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
                      <img
                        src={ product.thumbnail }
                        alt={ product.title }
                      />
                      <p data-testid="shopping-cart-product-quantity">{el.qnt}</p>
                      <button
                        type="button"
                        data-testid="product-decrease-quantity"
                        onClick={ () => {
                          removeItemToCart(product);
                          this.updatePage();
                        } }
                      >
                        -
                      </button>
                      <button
                        type="button"
                        data-testid="product-increase-quantity"
                        onClick={ () => {
                          addItemToCart(product);
                          this.updatePage();
                        } }
                        disabled={ (product.available_quantity - el.qnt) <= 0 }
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={ () => this.removeEveryItem(product) }
                      >
                        x
                      </button>
                      <span>
                        { `Em estoque: ${product.available_quantity - el.qnt}` }
                      </span>
                    </div>
                  );
                })
              }
              <p>{ totalValue }</p>
            </div>
          ) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          Finalizar compra
        </Link>
      </div>
    );
  }
}

export default CartPage;
