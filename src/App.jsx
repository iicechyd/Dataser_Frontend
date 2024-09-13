import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './pages/Login';  
import StudentList from './pages/Student';
import TeacherList from './pages/Teacher';
import StdList from './pages/StdList'

<<<<<<< HEAD
import DefaultLayout from './layout/default';


=======
>>>>>>> 3156aaba53a6cb9eb04a2bad044088da5ac58677
function App() {
  const token = localStorage.getItem('token'); 
  const isLoggedIn = !!token; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/students" element={isLoggedIn ? <StudentList /> : <Navigate to="/" />} />
        <Route path="/teachers" element={isLoggedIn ? <TeacherList /> : <Navigate to="/" />} />
        <Route path="/StdList" element={isLoggedIn ? <StdList/> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
