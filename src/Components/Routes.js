import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;