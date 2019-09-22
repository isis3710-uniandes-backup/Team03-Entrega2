import React, { Component } from 'react';
import Login from './login';
import UserDetail from './userDetail';

class User extends Component {
    state ={
        usuario : "",
        password  : "",
        autentication :false,
        usershow:true
    }
    
    change=(user, m)=> {
      
        this.setState({usuario:user.usuario, password  : user.password, autentication :true,usershow:false});
        console.log(this.state);

    }
    
    render(){
        return (
            <div>
                <div hidden ={this.state.autentication}>
                <Login  value={this.change}></Login>
                </div>
             
             <div hidden ={this.state.usershow}>
             <UserDetail  value={{usuario:this.state.usuario, password: this.state.password}}></UserDetail> 

             </div>
            </div>
        );
    }
}

export default User;