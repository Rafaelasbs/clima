import React, { useState } from "react"
import axios from "axios"
import "./index.css"

export default function Body() {
    const [city, setCity] = useState("")
    const [temp, setTemp] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    const [nuvens, setNuvens] = useState("")
    const [humidity, setHumidity] = useState("")
    const api = axios.create({
        baseURL: "https://api.openweathermap.org/data/2.5/"
    })

    function handleClick() {
        api.get("weather?q=" + city + "&appid=8d11b3b428e718c73a0d3ae0c00cc1b1&units=metric")
            .then(res => {
                setTemp(res.data.main.temp)
                setMax(res.data.main.temp_max)
                setMin(res.data.main.temp_min)
                setNuvens(res.data.clouds.all)
                setHumidity(res.data.main.humidity)
            })
    }



    return (
        <div>
            <input type="text" value={city} onChange={e => setCity(e.target.value)} />
            <button onClick={handleClick} >Buscar</button>

            <div className="box">
                <p className="temp">Temperatura: {temp}°C</p>
                <p className="min">Temperatura Mínima: {min}°C</p>
                <p className="max">Temperatura Máxima: {max}°C</p>
                <p className="nuvens">Nuvens: {nuvens}%</p>
                <p className="humidade">Humidade: {humidity}%</p>
            </div>

        </div>
    );
}

