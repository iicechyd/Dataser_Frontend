import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function StdList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/atten/");
        setStudents(response.data.Attendance); // Adjusted to match the structure of the response
      } catch (err) {
        setError("Failed to fetch students");
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex justify-center py-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-center mb-6">
            สถานะการเข้าเรียนล่าสุด
          </h1>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href="./AttenStat"
              style={{ color: "gray", textDecoration: "underline" }}
            >
              สถิติการเข้าเรียน
            </a>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                รายชื่อนักศึกษา
              </button>
            </div>

            <h2 className="text-xl font-semibold pb-8">
              ชื่อวิชา ดึงงงงงงงงงงงงงงงงงงงงงงชื่อ
            </h2>

            <div className="relative overflow-x-auto  sm:rounded-lg">
              <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      รหัสนักศึกษา
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ชื่อ-นามสกุล
                    </th>
                    <th scope="col" className="px-6 py-3">
                      เวลา
                    </th>
                    <th scope="col" className="px-6 py-3">
                      วันที่
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => {
                    const [date, time] = student.date.split(" ");
                    return (
                      <tr
                        key={index}
                        className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {student.student_id}
                        </th>
                        <td className="px-6 py-4">
                          {student.student_fname} {student.studnet_lname}
                        </td>
                        <td className="px-6 py-4">{time}</td>
                        <td className="px-6 py-4">{date}</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            {student.status}
                          </span>
                        </td>

                        <td className="px-6 py-4">{student.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StdList;
