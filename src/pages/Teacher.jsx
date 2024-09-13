import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/teacher`);
            setTeachers(response.data);
          } catch (err) {
            setError('Failed to fetch students');
          }
        };
    
        fetchStudents();
      }, []);

    return (
        <div>
          <Navbar/>
          <h1>Teacher List</h1>
          {error && <p>{error}</p>}
          <ul>
            {teachers.map((teacher) => (
              <li key={teacher.student_id}>
                {teacher.first_name} {teacher.last_name}  {teacher.email}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default TeacherList;