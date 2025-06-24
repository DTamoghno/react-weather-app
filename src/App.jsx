import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import WeatherCards from './components/WeatherCards';
import CommonCitiesTable from './components/CommonCitiesTable';

const apiKey = "d15da83510700e48bff51b962ca6f60b"; //Keeping it outside the function avoids re-rendering

function App() {
  const [city,setCity] = useState('kolkata');
  const [weatherData,setWeatherData] = useState(null);

  const fetchUser = async(cityName)=>{
    try{
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      )
      if(!res.ok) throw new Error("City Not Found!");
      const data = await res.json();
      setWeatherData(data)
      setCity(cityName);
    }catch(err){
      alert(err.message);
    }
  };

  useEffect(()=>{
    fetchUser(city)
  },[])

  return (
   <>
      <div>
        <nav className='navbar bg-secondary px-4'>
          <span className='navbar-brand text-white fs-3 fw-bold'>Weather App</span>
          <SearchBar onSearch={fetchUser}/>
        </nav>
        <div className='container my-4'>
          <h1 className='text-center fw-bold'>Weather of {city}</h1>
          {weatherData && <WeatherCards data={weatherData}/>}
          <h2 className='display-6 text-center mt-5'>Weather of Common Places</h2>
          <CommonCitiesTable apiKey={apiKey}/>
        </div>
      </div>
   </>
  )
}

export default App
