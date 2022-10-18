import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Components/Register';
import ResponsiveAppBar from './Components/ResponsiveAppBar';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route element={<Register />} path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
