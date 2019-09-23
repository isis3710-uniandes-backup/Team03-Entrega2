import React, { Component } from 'react';

class cardInstitucion extends Component {
    state={
      nombre:this.props.value.nombre
    }
    render() {
        return (
            <div class="col-5">
            <div class="card" >
            <img src="https://images.vexels.com/media/users/3/152803/isolated/preview/7a26300dc9960e11f6a46966e696539d-escuela-cl--sica-ilustraci--n-de-edificio-by-vexels.png" class="card-img-top" alt="hola" width="50" height="400"></img>
            <div class="card-body">
            <a href={"/instituciones/"+this.state.nombre}>  <button  className="btn btn-primary">{this.state.nombre}</button>
</a>
           
            </div>
            </div>
            </div>
        );
    }
}

export default cardInstitucion;