import React from 'react';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Auth } from './components/Auth/Auth';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/auth" exact component={Auth}></Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
