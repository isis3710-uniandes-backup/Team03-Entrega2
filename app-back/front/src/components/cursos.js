import React, { Component } from 'react';
import Curso from './curso';

class cursos extends Component {
    state={
        list: this.props.value.e
    }
    UNSAFE_componentWillReceiveProps(nextProps){

        this.setState({
            list: nextProps.value.e,
            
        });
    }
    render() {
        return (
            
            <div className="accordion" id="accordionExample">
              {
                this.state.list.map((e,i)=><Curso key={i} value={e} />)}
            
            </div>
   
            
        );
    }
}

export default cursos;