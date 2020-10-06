import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import 'antd/dist/antd.less';

import { Loading } from './components/common/Loading';
import NavBar from './components/common/NavBar';

import LogIn from './components/pages/Forms/login';
import SignUp from './components/pages/Forms/signup';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/" component={SignUp} />
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Loading} />
    </Router>
  );
}
