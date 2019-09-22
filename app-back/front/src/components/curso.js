import React, { Component } from 'react';

class Curso extends Component {
    state={
        nombre: this.props.value.nombre,
        idioma: this.props.value.idioma,
        dificultad: this.props.value.dificultad,
        costo: this.props.value.costo
    }
    render() {
        return (
            
              
  <div class="card">
    <div class="card-header" id={this.state.nombre}>
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse show" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        {this.state.nombre}
        </button>
      </h2>
    </div>


    <div id="collapseOne" class="collapse show" aria-labelledby={this.state.nombre} data-parent="#accordionExample">
      <div class="card-body">
      <div className="row">
      <div class="col-3">
            <img src="https://image.flaticon.com/icons/png/512/435/435954.png" className="img-fluid" alt="Institution" width="50" height="50"></img>

            </div>
            <div class="col-7">
            <h2 >{this.state.idioma} </h2> 
            <h3>Curso: {this.state.nombre}</h3>

            <h5>Dificultad: {this.state.dificultad}</h5>
            <h5>Costo: {this.state.costo}</h5>
            </div>
            </div>
      </div>
    </div>
  </div>
  

        );
    }
}

export default Curso;