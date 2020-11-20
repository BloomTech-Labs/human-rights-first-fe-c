import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

import './index.css';
import 'antd/dist/antd.less';

import NavBar from '../src/components/NavBar';
import About from './components/about';
import RegisterForm from './components/sign-up';
import LoginForm from './components/sign-in';
import PieChartView from './components/pie_chart/PieChartView';
import BarChartView from './components/bar_chart/BarChartView';
import Footer from './components/Footer';
import MapView from './components/map/MapView.js';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  return (
    <>
      <div>
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/charts-by-force">
            <PieChartView />
          </Route>
          <Route path="/charts-by-state">
            <BarChartView />
          </Route>
          <Route path="/">
            <MapView />
          </Route>
        </Switch>
        <Footer />
      </div>
      <ReactQueryDevtools />
    </>
  );
}
