import './App.css';
import ShowWeather from "./components/ShowWeather";
import {useState} from "react";


function App() {

  const [city,setCity]= useState()
  const [value,setValue]= useState()

  const handler = (event) => {
    setValue(event.currentTarget.value)
  }

  return (
    <div className="App">
      <div className='background'>
        <div className='main'>
          <input type="text" onChange={event => handler(event)} />
          <button onClick={() => {setCity(value)}}>Search</button>
        </div>
      </div>

      {city?<ShowWeather city={city}/> : null}
    </div>
  );
}

export default App;
