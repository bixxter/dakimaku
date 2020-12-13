import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/layouts/Nav';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectCreate from './components/projects/ProjectCreate';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import AboutUs from './components/about/AboutUs';
import Wishes from './components/baskets/Wishes';
import UserProfile from './components/auth/UserProfile';
import MainPage from './components/main/MainPage';
import M from 'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/create" component={ProjectCreate} />
            <Route path="/about" component={AboutUs} />
            <Route path="/wishes" component={Wishes} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={UserProfile} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
