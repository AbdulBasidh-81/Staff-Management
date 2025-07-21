import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/Dashboard.css';

function Dashboard() {
  const users = useSelector((state) => state.users.userList);
  const totalEmployees = users.length;
  const departments = [...new Set(users.map(user => user.company?.department))];
  const totalDepartments = departments.length;

  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="main-panel">
        <Header />
        <div className="dashboard-content">
          <h2>Dashboard Overview</h2>
          <div className="card-grid">
            <div className="card total-employees">
              <p>Total Employees</p>
              <h3>{totalEmployees}</h3>
            </div>
            <div className="card total-departments">
              <p>Total Departments</p>
              <h3>{totalDepartments}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;