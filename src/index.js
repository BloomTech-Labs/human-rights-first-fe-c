import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import 'antd/dist/antd.less';

import { Container } from './components/common/Container';
import NavBar from './components/common/NavBar';

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
    <Router>
      <NavBar />
      <Route exact path="/" component={Container} />
    </Router>
  );
}
