import React,{ useEffect, useState } from "react"

export default function Recipe() {
  const[recipe,setRecipe]=useState([])
  const[input,setInput]=useState("")
  const fetchData = () =>{

    fetch( `https://api.edamam.com/search?q=${input}&app_id=7d65ea5c&app_key=06a407a9cc5488a7edbfba8c07a08fbb &from=0&to=3&calories=591-722&health=alcohol-free`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setRecipe(data.hits)
        })
  }
  useEffect(()=>{
    fetchData()
  },[input])

  return(
    <div>
      <input  onChange={(e) => setInput(e.target.value)} placeholder="ENTER SOMTHING"/>
      {
      
       (recipe.length) ? recipe.map((val)=>{
          return(
            <div>
              <img src={val.recipe.image}/>
            </div>
            
          )
        }):<h1>Not found</h1>

        
      }
    </div>
  )
  
  

}
