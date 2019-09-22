import React, { Component } from 'react';
import Cursos from './cursos';
import Calificaciones from './calificaciones';

class userDetail extends Component {
    state ={
        usuario : this.props.value.usuario,
        password  : this.props.value.password,
        correo:"",
        cursos:[],
        rol:"",
        calificaciones:[]
    }
    componentWillReceiveProps(nextProps){

        fetch("/usuarios/"+nextProps.value.usuario+"/").then(res => res.json()).then(m=>{
            console.log(m);
            console.log("2");
            this.setState({
            usuario : m.usuario,
            password : m.password,
            correo:m.correo,
            cursos: m.cursos,
            rol:m.rol,
            calificaciones:m.calificaciones
            
        });
        fetch("/usuarios/"+nextProps.value.usuario+"/calificaciones").then(res => res.json()).then(n=>{console.log(n);console.log("2");this.setState({
            calificaciones:n
            
        })});
    });
        
    }
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
            
            <div class="row">
                
                    <div class="col-3">
                    <img src="https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png" className="img-fluid" alt="Institution" width="300" height="300"></img>

                    </div>
                    <div class="col-7">
                    <h1>{this.state.usuario} </h1> 
                    <br></br>
                    <h3>Correo:         {this.state.correo} </h3>
                    <h3>Rol:            {this.state.rol} </h3>
                    <h3>Password:       {this.state.password} </h3>
<br></br>
<br></br>
<div class="contenedor">
<h2>Cursos</h2>

                    <Cursos value={{e:this.state.cursos}}></Cursos>
                    <br></br>
                <br></br>
                    <Calificaciones value={{calificaciones:this.state.calificaciones}}></Calificaciones>
                    </div>

                  
            </div>
            </div>
            </div>
        );
    }
}

export default userDetail;