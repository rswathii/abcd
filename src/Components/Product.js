import React, { useEffect, useState } from 'react'

export default function Product() {
  const[product,setProduct]=useState([])
  const fetchData = () =>{

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setProduct(data)
        })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return(
    <div>
    {
      product.map((val)=>{
        return(
          <div>
             <h1>{val.title}</h1>
          </div>
        )
      }

      )
    }
  </div>
  )
  

}



