import React from 'react';

function CoursesList({ courses }) {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map(course => (
        <div key={course.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-200">
          <img 
            src={course.imageUrl} 
            alt={course.title} 
            className="w-full h-32 object-cover rounded-md mb-3" 
          />
          <h3 className="font-semibold text-lg">{course.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CoursesList;
