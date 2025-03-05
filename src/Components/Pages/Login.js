import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Load users from API on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        let res = await axios.get("http://localhost:4000/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    loadUsers();
  }, []);

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form refresh

    const userFound = users.some((user) => {
      if (user.email === email) {
        if (user.password === password) {
          // Simulate UI state changes
          document.getElementById("homeBtn").style.display = "block";
          document.getElementById("Cust").style.display = "block";
          document.getElementById("Empl").style.display = "block";
          document.getElementById("loginBtn").style.display = "none";
          document.getElementById("logo2").style.display = "none";
          document.getElementById("logo").style.display = "inline";
          
          navigate("/Home");
          return true; // Stop iteration
        } else {
          alert("Incorrect Password. Please try again.");
          navigate("/");
          return true;
        }
      }
      return false;
    });

    if (!userFound) {
      alert("Invalid Email or not registered. Please register first.");
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://cdn-japantimes.com/wp-content/uploads/2022/01/np_file_133609.jpeg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="LoginDiv" style={{ padding: "20px", background: "rgba(255,255,255,0.9)", borderRadius: "10px" }}>
          <form id="form" onSubmit={handleLogin}>
            <h1>
              <img
                alt="logo"
                src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                style={{ width: "30%", borderRadius: "50%" }}
              />
            </h1>

            <table id="table">
              <tbody>
                <tr>
                  <td colSpan="2">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your Email"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your Password"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button className="btn btn-primary" type="submit">
                      Login
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center" }}>
                    Don't have an account? <Link to="/register" className='btn btn-outline-light m-2' id="loginBtn">Login</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
