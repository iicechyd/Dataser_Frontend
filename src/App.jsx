import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './pages/Login';  
import StudentList from './pages/Student';
import TeacherList from './pages/Teacher';

function App() {
  const token = localStorage.getItem('token'); 
  const isLoggedIn = !!token; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/students" element={isLoggedIn ? <StudentList /> : <Navigate to="/" />} />
        <Route path="/teachers" element={isLoggedIn ? <TeacherList /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
