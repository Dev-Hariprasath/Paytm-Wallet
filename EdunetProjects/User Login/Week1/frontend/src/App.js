import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import DashBoard from './Components/Dashboard';
import Profile from './Components/Profile';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
