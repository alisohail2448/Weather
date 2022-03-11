import React, { useState, useEffect } from "react";
import "./css/weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=021b23275bc91c5a0990b20a3534d644`;
      const response = await fetch(url);
      // console.log(response)
      const data = await response.json();
      // console.log(data);
      setCity(data.main);
    };
    fetchApi();
  }, [search]);

  // https://cors-anywhere.herokuapp.com/

  // 3aa4d14585f612d4d9985f635651b21d
  // http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=021b23275bc91c5a0990b20a3534d644

  return (
    <>
      <div className="mainContainer">
        <div className="box">
          <div className="inputData">
            <input
              placeholder="Enter City Name"
              type="search"
              value={search}
              className="inputField"
              onChange={(e) => { setSearch(e.target.value)}}
            />
          </div>

        {
          !city ? (
            <p className="data">No Data Found</p>
          )
          : (
            <>
              <div className="info">
            <h1 className="location">
              <i className="fa-solid fa-street-view"></i>
              {search}
            </h1>
            <h2 className="temp">{city.temp} °Cel</h2>
            <h3 className="tempmm">Min: {city.temp_min} °Cel | Max : {city.temp_max} °Cel</h3>
          </div>

          <div className="wave1"></div>
          <div className="wave2"></div>
          <div className="wave3"></div>
            </>
          )
        }

          
        </div>
      </div>
    </>
  );
};

export default Weather;
