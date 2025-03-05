import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Employee() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Load Users on Component Mount
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:4000/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/users/${id}`);
      loadUsers(); // Reload users after delete
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const onSubmit = () => {
    let name = document.getElementById("Search").value.trim();

    // ✅ Use `find()` to locate the user instead of `map()`
    const foundUser = users.find((user) => user.name === name || user.email === name);

    if (foundUser) {
      navigate(`/User/${foundUser.id}`);
    } else {
      alert(`Employee named "${name}" Not Found.`);
    }
  };

  return (
    <div id="HomeDiv" style={{ padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input type="text" id="Search" placeholder="Search" className="form-control d-inline-block w-25" />
        <button className="btn btn-success ml-2" onClick={onSubmit}>
          Search
        </button>
      </div>

      <h1 className="text-center text-white text-shadow">Employee Data</h1>

      <table className="table table-sm table-dark text-center mt-5">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Id Proof</th>
            <th>Service</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}> {/* ✅ Fixed missing `key` prop */}
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.proof}</td>
                <td>{user.service}</td>
                <td>{user.salary}</td>
                <td>
                  <Link to={`/User/${user.id}`} className="btn btn-primary mx-1">
                    View
                  </Link>
                  <Link to={`/EditUser/${user.id}`} className="btn btn-success mx-1">
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(user.id)} className="btn btn-danger mx-1">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No Employees Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Link to="/register" className="btn btn-success float-right">
        Add Employee
      </Link>
    </div>
  );
}
