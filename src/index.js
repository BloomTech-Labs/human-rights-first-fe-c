import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './state/reducers/index.js';
import './index.css';
import 'antd/dist/antd.less';

import { Container } from './components/Container';
import About from './components/about';
import Dashboard from './components/Dashboard';
import NavBar from '../src/components/NavBar';
import Footer from './components/Footer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

function App() {
  return (
    <div>
      {/* Add the Route in to App */}
      <header>
        <NavBar />
      </header>

      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Container />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
