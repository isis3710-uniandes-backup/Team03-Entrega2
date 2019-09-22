import React, { Component } from 'react';

class RegistrarUsuario extends Component {
    constructor(){
        super();
        state ={
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
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField_Label">Nombre Completo</label>
                        <input type="text" id="name" className="FormField_Input" placeholder="Nombre Completo" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField_Label">Contraseña</label>
                        <input type="password" id="password" className="FormField_Input" placeholder="Ingresa tu contraseña" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField_Label">Email</label>
                        <input type="text" id="email" className="FormField_Input" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <button className="FormField_Button">Registrarse</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default RegistrarUsuario;