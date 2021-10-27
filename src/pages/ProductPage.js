import React from 'react';
import PropTypes from 'prop-types';
import Carrinho from '../components/Carrinho';
import EvaluationForm from '../components/EvaluationForm';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      showLoading: false,
    };
  }

  componentDidMount() {
    this.getProductById();
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

  renderProduct = (showLoading, product) => {
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
        <EvaluationForm product={ product } />
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
