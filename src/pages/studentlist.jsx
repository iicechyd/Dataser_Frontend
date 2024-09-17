import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const ShowstudentList = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch course data from the API
    const fetchCourseData = async () => {
      try {
        const response = await fetch('http://localhost:3000/courses/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming you want the first course in the array
        setCourse(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  const handleCheckAttendance = () => {
    alert('ตรวจสอบสถานะการเข้าเรียน');
    // Connect with function or route for checking attendance status
  };

  const handleViewStudents = () => {
    alert('รายชื่อนักศึกษา');
    // Connect with function or route for showing student list
  };

  const handleOpenAttendanceSystem = () => {
    alert('เปิดระบบเช็คชื่อ');
    // Connect with function or route for opening attendance system
  };

  // Inline styles
  const containerStyle = {
    width: '1000px',
    height: '420px',
    padding: '20px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#000',
    marginBottom: '20px'
  };

  const infoStyle = {
    marginBottom: '20px',
    fontSize: '14px',
    lineHeight: '1.4',
    color: '#333',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left'
  };

  const highlightStyle = {
    fontWeight: 'bold',
    fontSize: '20px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0057b3'
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={containerStyle}>
      <Navbar />
      <h1 style={titleStyle}>รายละเอียดรายวิชา</h1>
      {course ? (
        <div style={infoStyle}>
          <p><strong style={highlightStyle}>ชื่อวิชา:</strong> {course.course_name}</p>
          <p><strong style={highlightStyle}>รหัสวิชา:</strong> {course.course_code}</p>
          <p><strong>เรียน:</strong> {course.course_time_slots.map(slot => `${slot.day} (${slot.start_time} - ${slot.end_time})`).join(', ')}</p>
          <p><strong>สถานะการเข้าเรียน:</strong> {course.attendance_status}</p>
        </div>
      ) : (
        <div>No course data available</div>
      )}
      
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onClick={handleCheckAttendance}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          ตรวจสอบสถานะการเข้าเรียน
        </button>
        <button
          style={buttonStyle}
          onClick={handleViewStudents}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          รายชื่อนักศึกษา
        </button>
        <button
          style={buttonStyle}
          onClick={handleOpenAttendanceSystem}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          เปิดระบบเช็คชื่อ
        </button>
      </div>
    </div>
  );
};

const CourseDetail = () => {
  return (
    <div>
      <CourseDetails />
    </div>
  );
};

export default ShowstudentListn;
