import React from 'react'
import pdummy from './pdummy.json'
import Course from './Course.jsx'


    

    function PostList({setselected}) {
        return (
            
            <div className='Postlist' >
            {pdummy.map((element,index)=>{
        return  <Course element={element}  key={index} setselected={setselected}/>
        
    })}
            </div>
           
        )}
    
    export default PostList


