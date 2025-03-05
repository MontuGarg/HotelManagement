import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    proof: "",
    service: "",
    salary: "",
    password: "",
  });

  // Handle input change
  const onValChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/users/${id}`, user);
    navigate("/employee");
  };

  // Load user data on mount & when ID changes
  useEffect(() => {
    const loadUser = async () => {
      try {
        let result = await axios.get(`http://localhost:4000/users/${id}`);
        setUser(result.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    loadUser();
  }, [id]); // ✅ Adds `id` as a dependency

  return (
    <div
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/02/96/69/22/360_F_296692203_k4lOpOt8mAcYpKzicNmJTpnsE9ZdwyHX.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/employee" style={{ height: "auto", position: "absolute", top: "20px", left: "20px" }}>
        <i className="fas fa-arrow-left" style={{ color: "black", fontSize: "25px" }}></i>
      </Link>

      <div id="addCust" style={{ background: "rgba(255,255,255,0.9)", padding: "20px", borderRadius: "10px" }}>
        <h1 style={{ color: "black", textAlign: "center" }}>Edit Details</h1>

        <form onSubmit={onSubmit}>
          <table style={{ color: "black", width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  Name:
                  <input type="text" name="name" value={user.name} onChange={onValChange} required className="form-control" />
                </td>
                <td>
                  Mobile:
                  <input type="number" name="phone" value={user.phone} onChange={onValChange} required className="form-control" />
                </td>
              </tr>
              <tr>
                <td>
                  Id Proof:
                  <select name="proof" value={user.proof} onChange={onValChange} className="form-control">
                    <option value="">Select</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option value="PanCard">Pan Card</option>
                    <option value="Driving License">Driving License</option>
                  </select>
                </td>
                <td>
                  Salary:
                  <input type="number" name="salary" value={user.salary} onChange={onValChange} required className="form-control" />
                </td>
              </tr>
              <tr>
                <td>
                  Email:
                  <input type="email" name="email" value={user.email} onChange={onValChange} required className="form-control" />
                </td>
                <td>
                  Password:
                  <input type="password" name="password" value={user.password} onChange={onValChange} required className="form-control" />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  Service:
                  <select name="service" value={user.service} onChange={onValChange} className="form-control">
                    <option value="">Select Service</option>
                    <option value="Manager">Manager</option>
                    <option value="Chef">Chef</option>
                    <option value="Cleaner">Cleaner</option>
                    <option value="Security">Security</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className="btn btn-success form-control">Update</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
