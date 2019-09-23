import React, { Component } from 'react';

class Curso extends Component {
    state={
        idioma: this.props.value.idioma,
        dificultad: this.props.value.dificultad,
        precio: this.props.value.precio
    }
    isLogin(){
      console.log(localStorage.getItem("user"));
      if(localStorage.getItem("user")===null){
        return true;
      }
      return false;
      
    }
    addCalificacion= () =>{
     
      let m=JSON.parse(localStorage.getItem("user"));

      var url = '/usuarios/'+m.usuario+"/cursos";
      var data = {};
      fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>{console.log('Success:', response)
    });
  }
    render() {
        return (
            
              
  <div className="card">
    <div className="card-header" id={this.state.idioma}>
      <h1 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse show" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        {this.state.idioma}
        </button>
        <div hidden={this.isLogin()}>
        <button  onClick={this.addCalificacion} type="submit" className="btn btn-primary">Agregar Curso</button>

        </div>
        
      </h1>
    </div>


    <div id="collapseOne" className="collapse show" aria-labelledby={this.state.nombre} data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
      <div className="col-3">
            <img src="https://image.flaticon.com/icons/png/512/435/435954.png" className="img-fluid" alt="Institution" width="50" height="50"></img>

            </div>
            <div className="col-7">
            <h2 >{this.state.idioma} </h2> 
            
            <h5>Dificultad: {this.state.dificultad}</h5>
            <h5>Costo: {this.state.precio}</h5>
            </div>
            </div>
      </div>
    </div>
  </div>
  

        );
    }
}

export default Curso;