import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './App.css';
import Login from './pages/Login';  // Import Login from pages
import DefaultLayout from './layout/default';


function App() {
  return (
    <Router>
      <DefaultLayout>
      <Routes>
        {/* กำหนดเส้นทางให้ไปยังหน้า Login */}
        <Route path="/" element={<Login />} />
        
      </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
