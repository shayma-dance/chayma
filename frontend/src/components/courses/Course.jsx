import React from 'react';
import { NavLink } from 'react-router-dom';
const Course = ({element,setselected }) => {
  return (
    <NavLink to = "/onePost" >
    <div onClick={()=>{setselected(element)
     
    }} style={styles.courseCard}>
      <img src={element.imageUrl} alt={element.title} style={styles.image} />
      <h2>{element.title}</h2>
      {/* <h4>Coach: {element.coach.name}</h4> */}

    </div>
    </NavLink>
  );
};

const styles = {
  courseCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    marginBottom: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0'
  }
};

export default Course;