import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import InstitucionList from './institucionList';
import Institucion from './institucion';
import User from './user';

import Home from './home';
import Registrar  from './registrarUsuario';
import RegistrarInstitucion from './registrarInstitucion';


class App extends Component {
  componentDidMount(){
    document.title = 'PINE';
  }
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
              <Nav className="mr-auto">
                  <NavItem eventkey={1} href="/instituciones">
                      <Nav.Link href="/instituciones">Instituciones</Nav.Link>
                  </NavItem>
              </Nav>
              <Nav className="mr-auto">
                  <NavItem eventkey={1} href="/registrarInstitucion">
                      <Nav.Link href="/registrarInstitucion">Registrar Institucion</Nav.Link>
                  </NavItem>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  </div>
      <div>
        

            
<Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/instituciones/:institucion' component={Institucion}/>
          <Route path='/login' component={User}/>
          <Route path='/instituciones' component={InstitucionList}/>
          <Route path='/user' component={User}/>
          <Route path='/registrar' component={Registrar}/>
          <Route path='/registrarInstitucion' component={RegistrarInstitucion}/>
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