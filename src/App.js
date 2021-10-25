import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import CartPage from './pages/CartPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart-page" component={ CartPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
