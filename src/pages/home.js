import React from 'react';
import { getCategories } from '../services/api';
import ListCategory from './listCategory';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.getItemsList = this.getItemsList.bind(this);
  }

  componentDidMount() {
    this.getItemsList();
  }

  async getItemsList() {
    const response = await getCategories();
    this.setState(({
      categories: [...response],
    }));
    return response;
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div>
          <ul>
            Category:
            { categories.map(({ id, name }) => (
              <ListCategory key={ id } name={ name } />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
