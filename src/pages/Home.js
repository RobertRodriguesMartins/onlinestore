import React from 'react';
import CategoriesContainer from '../components/CategoriesContainer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div>
          <CategoriesContainer />
        </div>
      </div>
    );
  }
}

export default Home;
