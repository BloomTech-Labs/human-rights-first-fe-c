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
      <header>
        <NavBar />
      </header>

      <Switch>
        <Route path="/dashboard">{/* dashboard components go here */}</Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Container />
        </Route>
      </Switch>
    </div>
  );
}
