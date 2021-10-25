import React from 'react';
import Carrinho from './Carrinho';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Carrinho />
      </div>
    );
  }
}

export default Home;
