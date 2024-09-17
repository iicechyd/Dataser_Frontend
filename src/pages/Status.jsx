import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AttenStatus() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/atten/");
        setStudents(response.data.Attendance); 
      } catch (err) {
        setError("Failed to fetch students");
      }
    };

    fetchStudents();
  }, []);

  const toggleStatus = (index, dateIndex) => {
    setStudents((prevStudents) => {
      const newStudents = [...prevStudents];
      const currentStatus = newStudents[index].statuses[dateIndex].status; 

      if (currentStatus === "present") {
        newStudents[index].statuses[dateIndex].status = "late";
      } else if (currentStatus === "late") {
        newStudents[index].statuses[dateIndex].status = "absent";
      } else if (currentStatus === "absent") {
        newStudents[index].statuses[dateIndex].status = "leave";
      } else {
        newStudents[index].statuses[dateIndex].status = "present";
      }

      return newStudents;
    });
  };

  const renderStatusButton = (status, index, dateIndex) => {
    let buttonClasses = "rounded-full text-white px-4 py-1 focus:outline-none focus:ring ";
    switch (status) {
      case "present":
        buttonClasses += "bg-green-500";
        break;
      case "late":
        buttonClasses += "bg-orange-500";
        break;
      case "absent":
        buttonClasses += "bg-red-500";
        break;
      case "leave":
        buttonClasses += "bg-blue-500";
        break;
      default:
        buttonClasses += "bg-gray-300";
    }

    return (
      <button
        className={buttonClasses}
        onClick={() => toggleStatus(index, dateIndex)}
      >
        {status}
      </button>
    );
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center py-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-center mb-6">
            ตรวจสอบสถานะการเรียน
          </h1>
          
          <h2 className="text-2xl font-bold text-center mb-6">
            Data Serialization Languages and Applications
          </h2>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      วันที่
                    </th>
                    <th scope="col" className="px-6 py-3">
                      เวลา
                    </th>
                    <th scope="col" className="px-6 py-3">
                      สถานะ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    student.statuses.map((statusObj, dateIndex) => (
                      <tr
                        key={`${index}-${dateIndex}`}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4">
                          {new Date(statusObj.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(statusObj.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="px-6 py-4">
                          {renderStatusButton(statusObj.status, index, dateIndex)}
                        </td>
                      </tr>
                    ))
                  ))}
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

export default AttenStatus;
