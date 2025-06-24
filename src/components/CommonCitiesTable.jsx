import React, { useEffect, useState } from 'react'

const cities = ["Boston","Shanghai","Lucknow","Kolkata"];
const CommonCitiesTable = ({apiKey}) => {
  const [cityData,setCityData] = useState({});
  useEffect(()=>{
    cities.forEach(async(city)=>{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      const data = await res.json();
      setCityData((prev)=>({
        ...prev,
        [city]:data,
      }));
    });
  },[]);
  return (
    <div className="table-responsive my-3">
      <table className="table text-center">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Min Temperature</th>
            <th>Max Temperature</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city}>
              <td>{city}</td>
              <td>{cityData[city]?.main?.temp ?? "--"}°C</td>
              <td>{cityData[city]?.main?.temp_min ?? "--"}°C</td>
              <td>{cityData[city]?.main?.temp_max ?? "--"}°C</td>
              <td>{cityData[city]?.main?.humidity ?? "--"}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommonCitiesTable