import React from 'react';
import Carrinho from './Carrinho';
import './css/CartPage.css'
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      productArray: [],
      showLoading: false,
      category: undefined,
      startPage: true,
    };
  }

  getProductArray = async () => {
    const { query, category } = this.state;
    this.setState({
      startPage: false,
      showLoading: true,
    });
    const products = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      productArray: products.results,
      showLoading: false,
    });
  }

  renderCardContainer = (startPage, showLoading, productArray) => {
    if (startPage) {
      return (
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      );
    }
    if (showLoading) {
      return (
        <h2>
          Loading...
        </h2>
      );
    }
    if (productArray.length === 0) {
      return (
        <h2>
          Nenhum produto foi encontrado
        </h2>
      );
    }
    return (
      <div>
        {
          productArray.map((product, index) => (
            <Card
              key={ index }
              product={ product }
              index={ index }
            />
          ))
        }
      </div>
    );
  }

  actualizeQueryState = (event) => {
    const { value } = event.target;
    this.setState({
      query: value,
    });
  }

  render() {
    const {
      productArray,
      showLoading,
      startPage,
    } = this.state;
    return (
      <div>
        <input
          type="text"
          id="query-input"
          data-testid="query-input"
          placeholder="Busque seu produto"
          onChange={ this.actualizeQueryState }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.getProductArray }
        >
          Pesquisar
        </button>
        {
          this.renderCardContainer(startPage, showLoading, productArray)
        }
        <div className="cart-page">
          <div className="search-cart">
            <input type='text' />
            <Carrinho />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
