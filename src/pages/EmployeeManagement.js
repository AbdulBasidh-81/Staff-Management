import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/EmployeeManagement.css';
import { deleteUser, updateUser } from '../redux/usersSlice';

function EmployeeManagement() {
  const users = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (user) => {
    setEditId(user.id);
    setEditData(user);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'department') {
      setEditData({
        ...editData,
        company: { ...editData.company, department: value },
      });
    } else {
      setEditData({ ...editData, [name]: value });
    }
  };
  const handleSave = () => {
    dispatch(updateUser(editData));
    setEditId(null);
  };
  const handleCancel = () => {
    setEditId(null);
    setEditData({});
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <div className="employee-page">
      <Sidebar />
      <div className="main-panel">
        <Header />
        <div className="employee-content">
          <h2>Staff Management</h2>
          <table className="employee-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  {editId === user.id ? (
                    <>
                      <td>
                        <input type="text" name="firstName" value={editData.firstName} onChange={handleChange}/>
                      </td>
                      <td>
                        <input type="email" name="email" value={editData.email} onChange={handleChange}/>
                      </td>
                      <td>
                        <input type="text" name="role" value={editData.role} onChange={handleChange}/>
                      </td>
                      <td>
                        <input type="text" name="department" value={editData.company?.department || ''}
                          onChange={(e) => setEditData({
                              ...editData, company: { ...editData.company, department: e.target.value, },})
                          } />
                      </td>
                      <td>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel} className="cancel"> Cancel </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{user.firstName}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.company?.department}</td>
                      <td>
                        <button onClick={() => handleEditClick(user)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(user.id)} className="delete-btn"> Delete </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default EmployeeManagement;