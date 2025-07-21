import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EmployeeManagement from './pages/EmployeeManagement';

function App() {
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const isLoggedIn = Boolean(loggedInUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/employees" element={isLoggedIn ? <EmployeeManagement /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;