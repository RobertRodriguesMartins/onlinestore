import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategory extends Component {
  render() {
    const {
      name,
      id,
      actualizeCategoryState,
    } = this.props;
    return (
      <label htmlFor={ id }>
        { name }
        <input
          type="radio"
          id={ id }
          name="category_name"
          value={ id }
          data-testid="category"
          onClick={ actualizeCategoryState }
        />
      </label>
    );
  }
}

ListCategory.defaultProps = {
  name: '',
  id: '',
  actualizeCategoryState: () => {},
};

ListCategory.propTypes = ({
  name: PropTypes.string,
  id: PropTypes.string,
  actualizeCategoryState: PropTypes.func,
});

export default ListCategory;
