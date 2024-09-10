import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './App.css';
import Login from './pages/Login';  // Import Login from pages
import DefaultLayout from './layout/default';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

function App() {
  return (
    <Router>
      <DefaultLayout>
      <Routes>
        {/* กำหนดเส้นทางให้ไปยังหน้า Login */}
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/students" element={isLoggedIn ? <Student/> : <Navigate to="/login" />} />
        <Route path="/teachers" element={isLoggedIn ? <Teacher /> : <Navigate to="/login" />} />
      </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
