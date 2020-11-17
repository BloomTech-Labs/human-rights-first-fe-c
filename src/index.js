import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './state/reducers/index.js';

import { ReactQueryDevtools } from 'react-query-devtools';
import './index.css';
import 'antd/dist/antd.less';

import { Container } from './components/Container';
import About from './components/about';
import RegisterForm from './components/sign-up';
import LoginForm from './components/sign-in';
import Dashboard from './components/Dashboard';
import NavBar from '../src/components/NavBar';
import Footer from './components/Footer';
import DashboardChart from './components/DashboardChart';

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
    <>
      <div>
        {/* Add the Route in to App */}
        <header>
          <NavBar />
        </header>

        <Switch>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard-chart">
            <DashboardChart />
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
      <ReactQueryDevtools />
    </>
  );
}
