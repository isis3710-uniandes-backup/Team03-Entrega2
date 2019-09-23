import React, { Component } from 'react';

class RegistrarUsuario extends Component {
    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            name:'',
            hasAgreed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let target = e.target;

        let value = target.type === 'checkbox' ? target.checked:target.value;

        let name = target.name;

        this.setState({
            [name]:value 
        });
    }

    handleSubmit(e){
        e.preventDefalt();
        var data = {usuario:this.state.name,password:this.state.password,email:this.state.email}
        fetch('/usuarios/', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <div>
            <br></br>
            <br></br>
            <div  className="col-8">  
            <div id="divlogin" className="text-center">
            <div >
                
                <form onSubmit={this.handleSubmit} >
                    <div >
                        <label >Nombre Completo</label>
                        <input type="text" id="name" className="form-control" placeholder="Nombre Completo" value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div >
                        <label >Contraseña</label>
                        <input type="password" id="password" className="form-control" placeholder="Ingresa tu contraseña" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <div >
                        <label >Email</label>
                        <input type="text" id="email" className="form-control" placeholder="email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>
                    <div >
                        <button class="btn btn-success">Registrarse</button>
                    </div>
                </form>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default RegistrarUsuario;