import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import RegisterPage from './Components/RegisterPage';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{display: 'flex', marginTop: '80px'}}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route element={<RegisterPage />} path='/register'>
              <RegisterPage />
            </Route>
          </Switch>
        </Router>
      </div>

    </>
  );
};
export default App;
