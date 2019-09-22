import React, { Component } from 'react';
import auth from "../auth.js"
class login extends Component {
    state={

    }
    autentication= (event) => {
        event.preventDefault();
        
     let user={usuario:document.getElementById("loginUser").value ,password: document.getElementById("passwordUser").value };
       let g="/usuarios/"+user.usuario;
     console.log(g);
     fetch(g).then(res => {res.json()}).then(m=>{
     console.log(m);
     if(m.password==user.password){
        console.log(true);
    }
    else{
        console.log(false);
    }
});
    }
    
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div  className="col-8">  
                <div id="divlogin" className="text-center">
                
     <form>

  <div className="form-group">
    <label >User</label>
    <input id="loginUser" type="email" className="form-control"   placeholder="Enter user"></input>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input id="passwordUser" type="email" className="form-control" placeholder="Enter password"></input>
  </div>
  
  <button onClick = { (event)=>{this.autentication(event)} } class="btn btn-primary">Submit</button>

</form>
</div> 
</div>

</div>


        );
    }
}

export default login;