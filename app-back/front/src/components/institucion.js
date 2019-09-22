import React, { Component } from 'react';
import Cursos from './cursos';

class Institucion extends Component {
//this.props.value.
    state={
        name : "Cambridge University",
        ubicaciones :[{name:"Calle 1  bis No.19", ciudad:"hola", horario:"8:00-6:00"}],
        calificacion  : 4.5,
        comentarios :[{nameUser: "Juan Campos", date : "2017-13-24", message: "La mejor organización de idiomas."}],
        phone :"3022513712",
        emails:["hola@fuente.com", "pendiente@op.com"],
        horario : "8:00 a 9:00",
        niveles:["A1", "A2", "B1"],
        descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        idiomas:["Español", "Ingles"],
        image: "https://www.touchstoneedu.com/wp-content/uploads/2018/10/cambridge-universtiy-press-touchstone-educationals.jpg",
        images: ["https://www.touchstoneedu.com/wp-content/uploads/2018/10/cambridge-universtiy-press-touchstone-educationals.jpg", "https://www.mbacrystalball.com/blog/wp-content/uploads/2018/04/cambridge-university.jpg", "https://s3media.freemalaysiatoday.com/wp-content/uploads/2019/02/student-graduate-University-of-Cambridge-pic-070219-1.jpg"]
        
    }
    render() {
        return (
            <div>
               

<br></br>
<br></br>
<div id="contenedor" className="text-center">

<div >

<img src={this.state.image} className="img-fluid" alt="Institution" width="900" height="500"></img>

<br></br>

<br></br>

</div>

</div>
<div className="row">
<div id="columna-descripcion" className="col-8">
<h1 className="text-center">{this.state.name}</h1>
<br></br>

<br></br>

<h1>Descripción</h1>
<br></br>
<p align="justify">{this.state.descripcion}</p>
<br></br>
<br></br>
<h2>Cursos</h2>

<Cursos key={1} value={{name:this.state.name}}></Cursos>
<br></br>
<br></br>
<h2>Comentarios</h2>

<form>
<div className="form-group">
    <label >Name</label>
    <input type="name" className="form-control" id="exampleInputName"  placeholder="Enter name"></input>
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <label >Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
</form>
<button type="submit" className="btn btn-primary">Submit</button>

</div>

<div   className="col-3">
<br></br>

<div id="info-horario">
Horario: {this.state.horario}
</div>



<div id="info">
<ul>
									<li className="d-flex flex-row align-items-start justify-content-start">
										<div className="sidebar_info_icon"><img src="https://cdn.icon-icons.com/icons2/1244/PNG/512/1492790962-53location_84191.png" alt="" width="30" height="30"></img></div>
										<div className="sidebar_info_content"><span>Address: </span>{this.state.ubicaciones[0].name}</div>
									</li>
                                    <br></br>
									<li className="d-flex flex-row align-items-start justify-content-start">
										<div className="sidebar_info_icon"><img src="https://www.stickpng.com/assets/images/5a4525cd546ddca7e1fcbc84.png" alt=""  width="30" height="30"></img></div>
										<div className="sidebar_info_content"><span>Phone: </span>{this.state.phone}</div>
									</li>
                                    <br></br>
									<li className="d-flex flex-row align-items-start justify-content-start">
										<div className="sidebar_info_icon"><img src="https://www.stickpng.com/assets/thumbs/584856a0e0bb315b0f7675a9.png" alt=""  width="30" height="30"></img></div>
										<div className="sidebar_info_content"><span>E-mail: </span>{this.state.emails[0]}</div>
									</li>
								</ul>
                                
                                </div>


</div>

</div>


</div>
        );
    }
}

export default Institucion;