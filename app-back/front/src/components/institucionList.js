import React, { Component } from 'react';
import Institucion from './institucion';

class InstitucionList extends Component {
    state={
        list: []
    }
    componentDidMount(){

        fetch("/instituciones/").then(res => res.json()).then(m=>{console.log(m);console.log("2");this.setState({
            list:m
            
        })});
    }
    render() {
        
        return (
            <div>
                <p>Hola</p>
            </div>
        );
    }
}

export default InstitucionList;