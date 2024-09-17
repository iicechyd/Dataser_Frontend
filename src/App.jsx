import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import './App.css';
import Login from './pages/Login';  
import StudentList from './pages/Student';
import TeacherList from './pages/Teacher';
import Coursedetail from './pages/Coursedetail';
import ShowstudentList from './pages/studentlist';

import DefaultLayout from './layout/default';

function App() {
  const token = localStorage.getItem('token'); 
  const isLoggedIn = !!token; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/students" element={isLoggedIn ? <StudentList /> : <Navigate to="/" />} />
        <Route path="/teachers" element={isLoggedIn ? <TeacherList /> : <Navigate to="/" />} />
        <Route path="/detailteachers" element={isLoggedIn ? <Coursedetail /> : <Navigate to="/" />} />
        <Route path="/Studentlist" element={isLoggedIn ? <ShowstudentList /> : <Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
