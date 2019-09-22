import React, { Component } from 'react';
import Calificacion from './calificacion';

class calificaciones extends Component {
    state={
        list:this.props.value.calificaciones
    }
    render() {
        return (

            <div id="container">
                            {this.state.list.map((e,i)=><Calificacion key={i} value={e} />)}
  
            </div>
        );
    }
}

export default calificaciones;