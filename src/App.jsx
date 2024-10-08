import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import './App.css';
import Login from './pages/Login';  
import StudentList from './pages/Student';
import TeacherList from './pages/Teacher';
<<<<<<< HEAD

import DefaultLayout from './layout/default';
=======
>>>>>>> parent of 6481cbd (Merge branch 'main' of https://github.com/iicechyd/Dataser_Frontend)

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
