import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CustDetail() {
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

  // Load user data
  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/users/${id}`);
        setUser(result.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    loadUser();
  }, [id]); // ✅ Fix: Adds `id` as a dependency

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-smile-happy-relax-around-swimming-pool-hotel-resort_74190-9164.jpg?w=1060&t=st=1666083496~exp=1666084096~hmac=876bafa4d56a7d5245505490f3b0d4e3415c2cef19e3368b6166b6d331c01a52')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Link to="/employee" style={{ position: "absolute", top: "20px", left: "20px" }}>
        <i className="fas fa-arrow-left" style={{ color: "black", fontSize: "25px" }}></i>
      </Link>

      <div id="custDiv" style={{ background: "rgba(255,255,255,0.9)", padding: "20px", borderRadius: "10px" }}>
        <img
          alt="Details Icon"
          src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Data-View-Details-icon.png"
          style={{ width: "20%", marginBottom: "15px" }}
        />
        <h1>Employee Details</h1>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td><strong>E-mail</strong></td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td><strong>Mobile</strong></td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td><strong>Id Proof</strong></td>
              <td>{user.proof}</td>
            </tr>
            <tr>
              <td><strong>Service</strong></td>
              <td>{user.service}</td>
            </tr>
            <tr>
              <td><strong>Salary</strong></td>
              <td>{user.salary}</td>
            </tr>
            <tr>
              <td><strong>Password</strong></td>
              <td>{user.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
