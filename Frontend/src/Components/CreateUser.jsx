import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

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

function CreateUser() {
  const [formData, setFormData] = useState({
    ID: '',
    Name: '',
    Password: '',
    ImageURL: '',
    VideoURL: '',
    DocumentURL:''
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)

    axios.post('http://localhost:3000/adduser',{ID :formData.ID,Name:formData.Name,Password:formData.Password,ImageURL:formData.ImageURL,VideoURL:formData.VideoURL,DocumentURL:formData.DocumentURL})
    .then(result=>{
        console.log(result)
        navigate('/')
    })
    console.log(formData);
  };

  return (
    <div style={addContainerStyle}>
      <h2 style={addTitleStyle}>Add Form</h2>
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

export default CreateUser;