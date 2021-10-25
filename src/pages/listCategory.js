import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategory extends Component {
  render() {
    const { name } = this.props;
    return (
      <li data-testid="category">
        { name }
      </li>
    );
  }
}

export default ListCategory;

ListCategory.propTypes = ({
  name: PropTypes.string.isRequired,
});
