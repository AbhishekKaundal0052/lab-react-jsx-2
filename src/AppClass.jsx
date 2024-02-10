import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  


  // code here
  render(){
    const imgData = this.props.Data;
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
}
