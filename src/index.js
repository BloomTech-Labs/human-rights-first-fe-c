import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './state/reducers/index.js';
import './index.css';
import 'antd/dist/antd.less';

import { Container } from './components/Container';
import NavBar from './components/NavBar';
import About from './components/about';
import Dashboard from './components/Dashboard';
import NavMap from '../src/components/NavMap';
import Chart from './components/Chart';
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
      <NavMap />
      <Footer />

      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/chart">
          <Chart />
        </Route>
        <Route path="/">
          <Container />
        </Route>
      </Switch>
    </div>
  );
}
