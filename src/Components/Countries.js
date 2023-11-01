import React, { useEffect, useState } from 'react'

export default function Countries() {

  const[countries,setCountries]=useState([])
  const fetchData = () =>{

    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setCountries(data)
      
          })

  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      {
        countries.map((val)=>{
          return(
            <div>
              <h1>{val.capital}</h1>
              <h1>{val.continents}</h1>
              <h3>{val.altSpellings[0]}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
