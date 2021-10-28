import React from 'react';
import Carrinho from '../components/Carrinho';
import './css/CartPage.css';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import CategoriesContainer from '../components/CategoriesContainer';
import CardButton from '../components/CardButton';
import ChoosePrice from '../components/ChoosePrice';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      productArray: [],
      showLoading: false,
      category: undefined,
      startPage: true,
      refresh: false,
      inferiorLimitPrice: undefined,
      superiorLimitPrice: undefined,
    };
  }

  updateLimitPrices = ({ target }) => {
    const { value } = target;
    const values = value.split('-');
    let min;
    let max;
    const maxLength = 3;
    if (values.length === maxLength) {
      min = parseFloat(values[0]);
      max = parseFloat(values[1]);
    } else if (values[1] === 'min') {
      min = parseFloat(values[0]);
    } else {
      max = parseFloat(values[0]);
    }
    this.setState({
      inferiorLimitPrice: min,
      superiorLimitPrice: max,
    });
  }

  updatePage = () => {
    this.setState((previousState) => ({
      refresh: !previousState.refresh,
    }));
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
    const { superiorLimitPrice, inferiorLimitPrice } = this.state;
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
        <ChoosePrice
          productArray={ productArray }
          updateLimitPrices={ this.updateLimitPrices }
        />
        <div>
          {
            productArray
              .filter((product) => {
                const confmin = inferiorLimitPrice ? product.price >= inferiorLimitPrice
                  : true;
                const confmax = superiorLimitPrice ? product.price <= superiorLimitPrice
                  : true;
                return confmin && confmax;
              })
              .map((product, index) => (
                <div key={ index }>
                  <Card
                    product={ product }
                    index={ index }
                  />
                  {
                    product.shipping.free_shipping && (
                      <span data-testid="free-shipping">
                        Frete Grátis disponível.
                      </span>
                    )
                  }
                  <CardButton
                    product={ product }
                    updatePage={ this.updatePage }
                  />
                </div>
              ))
          }
        </div>
      </div>
    );
  }

  actualizeQueryState = (event) => {
    const { value } = event.target;
    this.setState({
      query: value,
    });
  }

  actualizeCategoryState = (event) => {
    const { value } = event.target;
    this.setState({
      category: value,
    }, this.getProductArray);
  }

  render() {
    const {
      productArray,
      showLoading,
      startPage,
    } = this.state;
    return (
      <div>
        <div>
          <CategoriesContainer
            actualizeCategoryState={ this.actualizeCategoryState }
          />
        </div>
        <div className="cart-page">
          <div className="search-cart">
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
            <Carrinho />
          </div>
          {
            this.renderCardContainer(startPage, showLoading, productArray)
          }
        </div>
      </div>
    );
  }
}

export default Home;
