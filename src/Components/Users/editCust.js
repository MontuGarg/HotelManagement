import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCust() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    proof: "",
    member: "",
    address: "",
    room: "",
    check: "",
    image: "",
    checkO: "",
  });

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

  const onValChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/customer/${id}`, user);
      navigate("/customer"); // ✅ Corrected `history` to `navigate`
    } catch (error) {
      console.error("Error updating customer data:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/02/96/69/22/360_F_296692203_k4lOpOt8mAcYpKzicNmJTpnsE9ZdwyHX.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "17cm",
      }}
    >
      <Link to="/customer" style={{ height: "auto", marginLeft: "-10px" }}>
        <i
          className="fas fa-arrow-left"
          style={{ color: "black", fontSize: "25px", marginLeft: "5%" }}
        ></i>
      </Link>

      <div id="addCust">
        <h1 style={{ color: "white", marginLeft: "20px" }}>
          Edit Customer Details
        </h1>
        <form onSubmit={onSubmit}>
          <table style={{ color: "white" }}>
            <tbody>
              <tr>
                <td>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Name"
                    required
                    onChange={onValChange}
                    className="form-control"
                  />
                </td>
                <td>
                  Mobile:
                  <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    placeholder="Mobile no."
                    required
                    onChange={onValChange}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Id Proof:
                  <select
                    name="proof"
                    value={user.proof} // ✅ Ensure proof is controlled
                    onChange={onValChange}
                    className="form-control dropdown"
                  >
                    <option value="">Select</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option value="PanCard">Pan Card</option>
                    <option value="Driving">Driving License</option>
                  </select>
                </td>
                <td>
                  Members:
                  <input
                    type="number"
                    name="member"
                    value={user.member}
                    placeholder="Members"
                    required
                    onChange={onValChange}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    placeholder="Address"
                    required
                    onChange={onValChange}
                    className="form-control"
                  />
                </td>
                <td>
                  Room No.:
                  <input
                    type="number"
                    name="room"
                    value={user.room}
                    placeholder="Room No."
                    required
                    onChange={onValChange}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Check In:
                  <input
                    type="date"
                    name="check"
                    value={user.check}
                    required
                    onChange={onValChange}
                    className="form-control"
                  />
                </td>
                <td>
                  Check Out:
                  <input
                    type="date"
                    name="checkO"
                    value={user.checkO}
                    required
                    onChange={onValChange}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  Add URL:
                  <input
                    type="text"
                    name="image"
                    value={user.image}
                    onChange={onValChange}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className="btn btn-success form-control">
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
