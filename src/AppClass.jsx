import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  


  // code here
  render(){
<<<<<<< HEAD
    const imgData = this.props.Data;
=======
    const imgData = this.imageData();
>>>>>>> 70e56a365ca2279af8bedd0b804724813dff73d9
  return(
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="row">
        {
          imgData.map((img) => {
            return(
              <div className= "column" key={img.id}>
                <img src={img.img} alt=""/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 70e56a365ca2279af8bedd0b804724813dff73d9
