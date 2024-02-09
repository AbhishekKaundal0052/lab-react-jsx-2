import './App.css';
import elephant from "./images/elephant.jpeg";


function App(props) {
  // code here
<<<<<<< HEAD
  const imgData = props.Data
=======
  const imgData = imageData();
>>>>>>> 70e56a365ca2279af8bedd0b804724813dff73d9
  return(
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="row">
        {
<<<<<<< HEAD
          imgData.map((img) => {
=======
          imageData().map((img) => {
>>>>>>> 70e56a365ca2279af8bedd0b804724813dff73d9
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

export default App;
