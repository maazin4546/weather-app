import React, { useEffect, useState } from 'react'
import './Temp.css'

//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=a972c51c501694b37ba4438af79f3ca2

const Temp = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Malegaon")

    useEffect(() => {
        const fetchApi = async () => {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a972c51c501694b37ba4438af79f3ca2`
            let response = await fetch(url)
            // console.log(response)
            let parseData = await response.json()
            setCity(parseData.main)

        }
        fetchApi()
    }, [search])


    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <div className='main__box'>
                <div className='box'>
                    <div className='inputData'>
                        <input
                            type='search'
                            className='inputField'
                            value={capitalize(search)}
                            onChange={(event) => {
                                setSearch(event.target.value)
                            }}
                        />
                    </div>

                    {
                        !city ? (
                            <p className='nodata'>No data Found</p>
                        ) : (
                            <div>
                                <div className='info'>
                                    <h2 className='location'><i className="fa-solid fa-street-view"></i>{capitalize(search)}</h2>
                                    <h1 className='temp'>{city.temp} °cel</h1>
                                    <h3 className='tempin__max'>Min: {city.temp_min} °cel | Max: {city.temp_max} °cel</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Temp
