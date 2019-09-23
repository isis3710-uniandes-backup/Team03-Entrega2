import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import InstitucionList from './institucionList';
import Institucion from './institucion';
import User from './user';
import Home from './home';

class App extends Component {
  render() {
    const App = () => (
      <div>

            
<Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/instituciones/:institucion' component={Institucion}/>
          <Route path='/login' component={User}/>
          <Route path='/instituciones' component={InstitucionList}/>
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