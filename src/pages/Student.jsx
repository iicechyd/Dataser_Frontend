import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import Navbar from '../components/Navbar'


=======
import Navbar from '../components/Navbar';
>>>>>>> parent of 6481cbd (Merge branch 'main' of https://github.com/iicechyd/Dataser_Frontend)

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
<<<<<<< HEAD
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
=======
      <Navbar />
      <div className="flex justify-center py-8">
        <div className="w-full max-w-4xl">
          {/* หัวข้อ */}
          <h1 className="text-2xl font-bold text-left mb-6">รายชื่อนักศึกษา</h1>

          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">ลำดับ</th>
                  <th scope="col" className="px-6 py-3">รหัสนักศึกษา</th>
                  <th scope="col" className="px-6 py-3">ชื่อ-นามสกุล</th>
                  <th scope="col" className="px-6 py-3">หลักสูตร</th>
                  <th scope="col" className="px-6 py-3">e-mail</th>
                  <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={student.student_id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">{student.student_id}</td>
                    <td className="px-6 py-4">
                      {student.first_name} {student.last_name}
                    </td>
                    <td className="px-6 py-4">{student.course}</td>
                    <td className="px-6 py-4">{student.email}</td>
                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
>>>>>>> parent of 6481cbd (Merge branch 'main' of https://github.com/iicechyd/Dataser_Frontend)
    </div>
  );
}

export default Student;
