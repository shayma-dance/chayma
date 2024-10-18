import React, { useEffect,useState } from 'react';
import axios from 'axios'
function Sidebar() {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [accpted, setaccpted] = useState(true);
    const fetchreq=async()=>{
        try {
            const res = await axios.get("http://127.0.0.1:3000/api/enrollement/pending/6523456a9d8f1b002388abc1");
      
            if (res.data) {
              console.log(res.data);
              
              setPendingRequests(res.data);
            } 
          } catch (error) {
            console.error("Error fetching enrollment status:", error);
          }
    }
    const handleApproval = async (id) => {
      try {await axios.put(`http://127.0.0.1:3000/api/enrollement/enrollment/${id}`, { action: 'approved' });
      setPendingRequests(pendingRequests.filter(enrollment => enrollment._id !== id))
          
      } catch (error) {
          console.error(error);
      }
     
    };
  
    const handleCancellation = async (id) => {
  
      try {
          await axios.put(`http://127.0.0.1:3000/api/enrollement/enrollment/${id}`, { action: 'canceled' });
          setPendingRequests(pendingRequests.filter(enrollment => enrollment._id !== id))
      } catch (error) {
          console.error(error);
      }
     
    };
    const handleaccepted = async () => {
  
      try {
        const res = await axios.get("http://127.0.0.1:3000/api/enrollement/approved/6523456a9d8f1b002388abc1");
  
        if (res.data) {
          console.log(res.data);
          
          setPendingRequests(res.data);
        } 
      } catch (error) {
        console.error("Error fetching enrollment status:", error);
      }
    };
    useEffect(()=>{
      fetchreq();
    },[])
  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-lg font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded" onClick={()=>{fetchreq();setaccpted(true)}}>
            Pending
          </li>
          <li className="hover:bg-gray-700 p-2 rounded" onClick={()=>{handleaccepted();setaccpted(false)}}>
            Requests Accepted
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
              Add Course
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4"></h2>
        
         <div className="bg-white shadow rounded-lg p-4 mb-4">
          <h3 className="font-semibold mb-2">Pending Requests:</h3>
          <ul>
            {pendingRequests.map((request, index) => (
              <li key={request._id} className="border-b py-2">
                Request {index + 1}: Course {request?.user?.name}   
               {accpted&& <><button onClick={() => handleApproval(request._id)}>✅</button>
                <button onClick={() => handleCancellation(request._id)}>❌</button></>
              }</li>
            ))}
          </ul>
        </div>

       
      </main>
    </div>
  );
}

export default Sidebar;
