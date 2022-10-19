import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import RegisterPage from './Components/RegisterPage';
import Home from './Components/Home';
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

function App() {
  root.render (
    <StrictMode>
      <ResponsiveAppBar />
      <div style={{ display: 'flex', marginTop: '80px' }}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route element={<RegisterPage />} path='/register'>
              <RegisterPage />
            </Route>
            <Route element={<Login />} path='/login'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </StrictMode>


  );
};
export default App;
