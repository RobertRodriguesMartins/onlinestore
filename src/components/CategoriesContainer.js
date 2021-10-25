import React from 'react';
import { getCategories } from '../services/api';
import ListCategory from './ListCategory';

class CategoriesContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getItemsList();
  }

  getItemsList = async () => {
    const response = await getCategories();
    console.log(response);
    this.setState(({
      categories: [...response],
    }));
    return response;
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        Category:
        { categories.map(({ id, name }) => (
          <ListCategory key={ id } name={ name } id={ id } />))}
      </div>
    );
  }
}

export default CategoriesContainer;
