import React, { Component } from 'react';
import Curso from './curso';

class cursos extends Component {
    state={
        name:decodeURIComponent(this.props.value.name),
        list:[]
    }
    componentDidMount(){

        fetch("/instituciones/"+this.state.name+"/cursos").then(res => res.json()).then(m=>{console.log(m);console.log("2");this.setState({
            list:m
            
        })});
    }
    render() {
        return (
            <div class="accordion" id="accordionExample">
              {this.state.list.map((e,i)=><Curso key={i} value={e} />)}
            
            </div>
   
            
        );
    }
}

export default cursos;