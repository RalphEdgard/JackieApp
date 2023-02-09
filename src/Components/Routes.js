import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import RegisterPage from './RegisterPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
