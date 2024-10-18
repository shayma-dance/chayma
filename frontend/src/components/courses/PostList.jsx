import React, { useEffect ,useState} from 'react'
import Course from './Course.jsx'
import axios from "axios"

    

    function PostList({setselected}) {
        const [data,setdata]=useState([])
        const getcourses=async()=>{
            try {
                const res= await axios.get("http://127.0.0.1:3000/api/courses/courses")
          console.log(res);
          
         setdata (res.data)
            } catch (error) {
              console.log(error);
                
            }
           
        }
        useEffect(()=>{
            getcourses()},[])

        return (
            
            <div className='flex justify-center items-center flex-wrap' >
            {data.map((element)=>{
        return  <Course   key={element._id} element={element}  setselected={setselected}/>
        
    })}
            </div>
           
        )}
    
    export default PostList


