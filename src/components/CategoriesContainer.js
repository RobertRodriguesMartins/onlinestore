import React from 'react';
import PropTypes from 'prop-types';
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
    this.setState(({
      categories: [...response],
    }));
    return response;
  }

  render() {
    const { categories } = this.state;
    const { actualizeCategoryState } = this.props;
    return (
      <div>
        Category:
        {
          categories.map(({ id, name }) => (
            <ListCategory
              key={ id }
              name={ name }
              id={ id }
              actualizeCategoryState={ actualizeCategoryState }
            />
          ))
        }
      </div>
    );
  }
}

CategoriesContainer.defaultProps = {
  actualizeCategoryState: () => {},
};

CategoriesContainer.propTypes = {
  actualizeCategoryState: PropTypes.func,
};

export default CategoriesContainer;
