import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text"></input>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default Home;
