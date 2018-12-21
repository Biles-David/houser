import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom'
import routes from './routes'
import store from './ducks/store'
import Header from './components/Header';

import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store = { store }>
        <Router>
          <div className="main">
            <Header />
            { routes }
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
