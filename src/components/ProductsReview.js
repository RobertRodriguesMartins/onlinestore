import React from 'react';
import { getCart } from '../services/CartItems';

class ProductReview extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
    }
  }

  componentDidMount() {
    this.getTotalPrice();
  }

  getTotalPrice = () => {
    const LOCAL_ITEMS = getCart();
    const product = LOCAL_ITEMS.map((item) => {
      return item[Object.keys(item)[0]].price;
    })
    const total = product.reduce((acc, curVal) => acc + curVal);

    this.setState(({
      totalPrice: total,
    }))
  }

  render() {
    const LOCAL_ITEMS = getCart();
    const { totalPrice } = this.state;

    return (
      LOCAL_ITEMS.map((el, index) => {
        const product = el[Object.keys(el)[0]];
        return (
          <div key={ index }>
            <div>
              <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
              <img
                src={ product.thumbnail }
                alt={ product.title }
              />
              <p data-testid="shopping-cart-product-quantity">{ el.qnt }</p>
              <p>{ product.price }</p>
            </div>
            <p>Total: R${ totalPrice }</p>
          </div>
        );
      })
    );
  }
}

export default ProductReview;
