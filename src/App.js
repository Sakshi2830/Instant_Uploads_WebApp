import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './comps/PrivateRoute';
import Dashboard from './comps/Dashboard';
import Login from './comps/LogIn';
import Signup from './comps/Signup';
import ForgotPassword from './comps/ForgotPassword';



function App() {
  

  return (
    
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
