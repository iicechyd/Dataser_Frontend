import React, { useEffect, useState } from 'react';
import axios from 'axios';




function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/student`);
        setStudents(response.data);
      } catch (err) {
        setError('Failed to fetch students');
      }
    };
  
    

    fetchStudents();
  }, []);

  return (
    
    <div>
        <Navnar/>
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

export default StudentList;
