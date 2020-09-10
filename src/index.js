import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import 'antd/dist/antd.less';

import Map from './components/common/Map';
import { Loading } from './components/common/Loading';
import signupContainer from './components/pages/Forms/signupContainer';
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
      <Route exact path="/signup" component={signupContainer} />
      <Route exact path="/" component={Loading} />
      <Route path="/map" component={Map} />
    </Router>
  );
}

// <Security {...config} onAuthRequired={authHandler}>
//   <Switch>
//     <Route path="/login" component={LoginPage} />
//     <Route path="/implicit/callback" component={LoginCallback} />
//     {/* any of the routes you need secured should be registered as SecureRoutes */}
//     <SecureRoute
//       path="/"
//       exact
//       component={() => <HomePage LoadingComponent={LoadingComponent} />}
//     />
//     <SecureRoute path="/example-list" component={ExampleListPage} />
//     <SecureRoute path="/profile-list" component={ProfileListPage} />
//     <SecureRoute path="/datavis" component={ExampleDataViz} />
//     <SecureRoute path="/loading" component={Loading}>
//       <Loading />
//     </SecureRoute>
//     <Route component={NotFoundPage} />
//   </Switch>
// </Security>
