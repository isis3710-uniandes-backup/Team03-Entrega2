import React, { Component } from 'react';

class AgregarCurso extends Component {



    render() {
        return (
          <div className="container">
            <div className="row">
                <div className="col-3 "align="center"></div>
                <div id="divNewCourse" className="col-6" align="left">
                    <h2 align="center">Nuevo curso</h2>
                      <form>
                        <div class="form-group">
                        <label for="exampleInputEmail1"><h5>Idioma</h5></label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter language"></input>  
                        </div>
                        <div class="form-group">
                        <label for="exampleInputEmail1"><h5>Nombre</h5></label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
                          </div>
                         <div class="form-group">
                        <label for="exampleInputEmail1"><h5>Costo</h5></label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cost"></input>
                         
                        </div>
                          <div class="form-group">
                           <label for="exampleInputEmail1"><h5>Dificultad</h5></label>
                    
                     <div class="form-group">
                     <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                      <label class="form-check-label" for="inlineCheckbox1">Alta</label>
                        </div>
                        </div>
                      <div class="form-group">

                        <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                     <label class="form-check-label" for="inlineCheckbox2">Media</label>
                    </div>

                    </div>

              <div class="form-check form-check-inline" >
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"  ></input>
            <label class="form-check-label" for="inlineCheckbox3">Baja </label>
            </div>

            </div>
                      
                     
              <div class="form-group" align="center">

 
                <button type="submit" class="btn btn-primary">Submit</button>
                 </div>

      </form>
                </div>
                <div className="col-3"align="center"></div>
            </div>
          </div>
        );
      }

}

export default AgregarCurso;