import React from 'react'
import { NavLink } from 'react-router-dom';

function SelectItem({element}) {
  const enroll=async ()=>{
    let res=await axios.post()
  }
  return (
    <div >
    <img src={element.pic} alt={element.title} />
    <h2>{element.title}</h2>
    <p>{element.description}</p>
    <h4>Coach: {element.coach}</h4>
    <NavLink to = "/" > <button>cancel</button></NavLink >
    <button onClick={enroll}>enroll</button> 
    
  </div>
  )
}

export default SelectItem