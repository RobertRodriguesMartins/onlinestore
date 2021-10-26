import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/product/:category/:id"
            render={ (props) => <ProductPage { ...props } /> }
          />
          <Route exact path="/" component={ Home } />
          <Route path="/cart-page" component={ CartPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
