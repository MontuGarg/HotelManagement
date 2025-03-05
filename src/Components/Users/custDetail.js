import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CustDetail() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    proof: "",
    member: "",
    address: "",
    room: "",
    check: "",
    checkOut: "", // ✅ Fixed potential missing key
  });

  const { id } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/customer/${id}`);
        setUser(result.data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    loadUser();
  }, [id]); // ✅ Added `id` as a dependency

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/3d-rendering-modern-living-room-with-white-sofa-wooden-floor-nature-background_224530-2566.jpg?w=1380')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          height: "17cm",
        }}
      >
        <Link to="/customer" style={{ height: "auto", margin: "5px" }}>
          <i
            className="fas fa-arrow-left"
            style={{ color: "black", fontSize: "25px", marginLeft: "5%" }}
          ></i>
        </Link>
        <div id="custD">
          <img
            alt="Customer Details Icon"
            src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Data-View-Details-icon.png"
            style={{ width: "20%", margin: "-10% 0% 5% 16%" }}
          />
          <h1>Customer Details</h1>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <td>Id Proof</td>
                <td>{user.proof}</td>
              </tr>
              <tr>
                <td>Members</td>
                <td>{user.member}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{user.address}</td>
              </tr>
              <tr>
                <td>Check In</td>
                <td>{user.check}</td>
              </tr>
              <tr>
                <td>Check Out</td>
                <td>{user.checkOut}</td> {/* ✅ Fixed key reference */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
