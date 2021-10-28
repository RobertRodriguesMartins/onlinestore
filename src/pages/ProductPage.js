import React from 'react';
import PropTypes from 'prop-types';
import Carrinho from '../components/Carrinho';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CardButtonDetail from '../components/CardButtonDetail';
import { addItemToCart, getCart, removeItemToCart } from '../services/CartItems';

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      showLoading: false,
      refresh: false,
    };
  }

  componentDidMount() {
    this.getProductById();
  }

  updatePage = () => {
    this.setState((previousState) => ({
      refresh: !previousState.refresh,
    }));
  }

  getProductById = async () => {
    const { match } = this.props;
    const { params } = match;
    this.setState({
      showLoading: true,
    });
    const products = await getProductsFromCategoryAndQuery(params.category, undefined);
    const product = products.results.find((element) => element.id === params.id);
    this.setState({
      product,
      showLoading: false,
    });
  }

  getCartItem = (productId) => {
    const cartItems = getCart();
    const result = cartItems.find((el) => el[productId] !== undefined);

    if (result) return result.qnt;
  }

  renderProduct = (showLoading, product) => {
    let productShipping;
    let cartItemQt;
    if (product.shipping) {
      cartItemQt = this.getCartItem(product.id);
      productShipping = product.shipping.free_shipping;
    }
    if (showLoading) {
      return (
        <h2>
          Loading...
        </h2>
      );
    }
    if (!product) {
      return (
        <h2>
          Produto não encontrado :(
        </h2>
      );
    }
    return (
      <div>
        <img src={ product.thumbnail } alt={ product.title } />
        <h3 data-testid="product-detail-name">{ product.title }</h3>
        <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => {
              removeItemToCart(product);
              this.updatePage();
            } }
            disabled={ !cartItemQt }
          >
            -
          </button>
          <span>
            {
              cartItemQt || 0
            }
          </span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => {
              addItemToCart(product);
              this.updatePage();
            } }
            disabled={ (product.available_quantity - getCart().qnt) <= 0 }
          >
            +
          </button>
          <CardButtonDetail
            product={ product }
            updatePage={ this.updatePage }
          />
        </div>
        {
          productShipping && (
            <span data-testid="free-shipping"> Frete grátis disponível </span>
          )
        }
      </div>
    );
  }

  render() {
    const { product, showLoading } = this.state;
    return (
      <div>
        <Carrinho />
        {
          this.renderProduct(showLoading, product)
        }
      </div>
    );
  }
}

ProductPage.defaultProps = {
  match: {
    params: {
      id: '',
      category: '',
    },
  },
};

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
    }),
  }),
};

export default ProductPage;
