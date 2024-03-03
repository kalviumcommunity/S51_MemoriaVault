import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const addContainerStyle = {
  maxWidth: '400px',
  margin: '50px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};

const addTitleStyle = {
  textAlign: 'center',
  color: '#333',
  fontSize: '1.5rem',
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const submitButtonStyle = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

function UpdateUser() {

  const [formData, setFormData] = useState({
    ID: '',
    Name: '',
    Password: '',
    ImageURL: '',
    VideoURL: '',
    DocumentURL: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`https://s51-memoriavault.onrender.com/updateuser/${formData.ID}`,{ID :formData.ID,Name:formData.Name,Password:formData.Password,ImageURL:formData.ImageURL,VideoURL:formData.VideoURL,DocumentURL:formData.DocumentURL})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))

    console.log('Updated Data:', formData);
  };

  return (
    <div style={addContainerStyle}>
      <h2 style={addTitleStyle}>Update User</h2>
      <form>
        <label style={labelStyle}>
          ID
          <input type="text" name="ID" value={formData.ID} onChange={handleChange} style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Name
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Password
          <input type="text" name="Password" value={formData.Password} onChange={handleChange} style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Image URL
          <input type="text" name="ImageURL" value={formData.ImageURL} onChange={handleChange} style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Video URL
          <input type="text" name="VideoURL" value={formData.VideoURL} onChange={handleChange} style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Document URL
          <input type="text" name="DocumentURL" value={formData.DocumentURL} onChange={handleChange} style={inputStyle} />
        </label>
        <Link to={"/"} onClick={handleSubmit} style={submitButtonStyle}>Submit</Link>
      </form>
    </div>
  );
}

export default UpdateUser;
