import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategory extends Component {
  render() {
    const { name, id } = this.props;
    return (
      <label htmlFor={ id }>
        { name }
        <input
          type="radio"
          id={ id }
          name="category_name"
          value={ id }
          data-testid="category"
        />
      </label>
    );
  }
}

export default ListCategory;

ListCategory.propTypes = ({
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});
