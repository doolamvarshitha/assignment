import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/employees" component={EmployeeList} />
        <Route path="/add-employee" component={EmployeeForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
