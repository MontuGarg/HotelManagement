import React, { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMSG = (e) => {
    e.preventDefault(); // Prevent form submission

    const { name, email, message } = formData;
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('PLEASE ENTER ALL THE DETAILS.');
    } else {
      alert('Your message is sent.');
    }
  };

  return (
    <div style={{
      display: "flex",
      backgroundImage: "url('https://img.freepik.com/free-photo/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18744.jpg?w=1060&t=st=1666071255~exp=1666071855~hmac=3b0b919249e8f78f660299202aed19bf67cd917fb78fdb8f89feb715ce67c448')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    }}>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe title='map'
            className="gmap_iframe"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pallavi grand&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ border: 0, width: '100%', height: '400px' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div id="contactDiv">
        <h1>Contact Us</h1>
        <form id="form" onSubmit={sendMSG}>
          <table id="table">
            <tbody>
              <tr>
                <td colSpan="2">
                  <input
                    id="cname"
                    type="text"
                    name="name"
                    className='form-control'
                    required
                    placeholder='Enter the Name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    id="cemail"
                    type="email"
                    name="email"
                    className='form-control'
                    required
                    placeholder='Enter the Email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <textarea
                    id="cmsg"
                    name="message"
                    required
                    className='form-control'
                    placeholder='Enter the message'
                    value={formData.message}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit" className="btn btn-success form-control">
                    Send Message
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
