import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginCard from './components/login';
import Dashboard from './components/dashboard';
import RegisterForm from './components/registerForm';
import NotFound from './components/notfoundpage';
import ResetPassword from './components/ResetPassword';

function App() {
  const user = null
  return (
   
     user ? <Dashboard/> :
     <Router>
        <Switch>
            <Route exact path='/' component={LoginCard}/>
            <Route exact path='/login' component={LoginCard}/>
            <Route exact path='/register' component={RegisterForm}/>
            <Route exact path='/dashboard' component={Dashboard}/> :
            <Route exact path='/resetpassword' component={ResetPassword}/>
            <Route component={NotFound} />
        </Switch>
    </Router>
  
  );
}

export default App;
