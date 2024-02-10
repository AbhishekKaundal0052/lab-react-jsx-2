import './App.css';
import elephant from "./images/elephant.jpeg";


function App(props) {
  // code here

  const imgData = props.Data
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

export default App;
