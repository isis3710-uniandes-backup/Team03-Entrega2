import React, { Component } from 'react';
import Login from './login';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';

import InstitucionList from './institucionList';
import Institucion from './institucion';
import Cursos from './cursos';
import User from './user';
import userDetail from './userDetail';
import Home from './home';
import Registrar  from './registrarUsuario';


class App extends Component {
  render() {
    const App = () => (
      <div>
      <div>
      <Navbar>
          <Navbar.Brand href="/">PINE</Navbar.Brand>
          <Navbar.Collapse>
              <Nav className="mr-auto">
                  <NavItem eventkey={1} href="/">
                      <Nav.Link href="/">Home</Nav.Link>
                  </NavItem>
              </Nav>
              <Nav className="mr-auto">
                  <NavItem eventkey={1} href="/user">
                      <Nav.Link href="/user">Login</Nav.Link>
                  </NavItem>
              </Nav>
              <Nav className="mr-auto">
                  <NavItem eventkey={1} href="/registrar">
                      <Nav.Link href="/registrar">Registrar</Nav.Link>
                  </NavItem>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  </div>
      <div>
        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/instituciones' component={InstitucionList}/>
          <Route path='/user' component={User}/>
          <Route path='/registrar' component={Registrar}/>
        </Switch>
      </div>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;