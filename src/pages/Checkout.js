import React from 'react';
import ProductsReview from '../components/ProductsReview';
import PaymentInfo from '../components/PaymentInfo';

class Checkout extends React.Component {
  render() {
    return (
      <div className="payment">
        <ProductsReview />
        <PaymentInfo />
      </div>
    );
  }
}

export default Checkout;
