import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
