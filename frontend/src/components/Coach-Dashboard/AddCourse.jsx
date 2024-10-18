import React, { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [refresh, setRefresh] = useState(true);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCourse = async (e) => {
    e.preventDefault();

    const course = {
      title,
      imageUrl,
      description,
      coachId: "670fd6bd168ab5c49de842f6",
    };
    console.log(course);

    try {
      await axios.post("http://127.0.0.1:3000/api/courses/addcourse", course);
      console.log("Course added");
      setRefresh(!refresh);

      setTitle("");
      setImageUrl("");
      setDescription("");
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setImageUrl("");
    setDescription("");
    window.location.href = "/coach-dashboard"; 
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1395337483/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=lev6DFIvb5CVjdxSxuURswdZYLNHZPT4Y44iUkgm2q4=')`
      }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full z-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Course</h2>
          <form onSubmit={handleAddCourse}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Title:</label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Add title"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Description:</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Add description"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                rows="4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Image:</label>
              <input
                type="file"
                onChange={(e) => setImageUrl(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#F9627D] text-white py-2 rounded-md mb-2"
            >
              Add Course
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-gray-300 text-black py-2 rounded-md"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
