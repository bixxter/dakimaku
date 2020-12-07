import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/layouts/Nav';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectCreate from './components/projects/ProjectCreate';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/create" component={ProjectCreate}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
