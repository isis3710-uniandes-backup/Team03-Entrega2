import React, { Component } from 'react';
import Login from './login';
import InstitucionList from './institucionList';
import Institucion from './institucion';
import Cursos from './cursos';
import User from './user';
import userDetail from './userDetail';

class App extends Component {
    render() {
        return (
            <div>
             <nav className="navbar navbar-expand-lg navbar-white bg-white">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#info">LANGUAGES</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#info">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      
    </ul>
    
  </div>
</nav> 
<User></User>
            </div>
        );
    }
}

export default App;