import React, { Component } from 'react';
import Login from './login';
import { Route, Switch } from 'react-router-dom';

import InstitucionList from './institucionList';
import Institucion from './institucion';
import Cursos from './cursos';
import User from './user';
import userDetail from './userDetail';

class App extends Component {
  render() {
    const App = () => (
      <div>
        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/instituciones' component={User}/>
          <Route path='/user' component={User}/>
          
        </Switch>
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