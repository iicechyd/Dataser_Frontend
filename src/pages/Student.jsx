import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'



function Student() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/student`);
        setStudents(response.data);
      } catch (err) {
        setError('Failed to fetch students');
      }
    };
  
    

    fetchStudents();
  }, []);

  return (
    
    <div>
        <Navbar/>
     <h1>Student List</h1>
      {error && <p>{error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student.student_id}>
            {student.student_id} {student.first_name} {student.last_name} {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
