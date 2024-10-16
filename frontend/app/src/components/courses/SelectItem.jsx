import React from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

function SelectItem({element}) {
  const enroll=async ()=>{
    try {
      let res=await axios.post("http://127.0.0.1:3000/api/enrollement/enroll",{ "courseId":element._id, 
        "userId":"670eaa935c43e236addb5fe6",//lin tkamil chayma trakah authentication
        "status":"pending"})
        console.log(res);
        
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    <div >
   <img src={element.imageUrl} alt={element.title}  />
    <h2>{element.title}</h2>
    <p>{element.description}</p>
    <h4>Coach: {element.coach.name}</h4>
    <NavLink to = "/" > <button>cancel</button></NavLink >
    <button onClick={enroll}>enroll</button> 
    
  </div>
  )
}

export default SelectItem