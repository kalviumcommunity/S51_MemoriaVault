import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import WelcomeUser from "./SubComponent/WelcomeUser";

function Connection() {
  const tableHeaderStyle = {
  backgroundColor: "pink",
  borderBottom: '2px dashed black',
  padding: '8px',
  textAlign: 'center',
  color:"black"
};

  const tableCellStyle = {
    borderBottom: '2px dashed black',
    padding: '8px',
    textAlign: 'center',
    color:"white"
  };

  const URLColumnStyle = {
    ...tableCellStyle,
    color: 'lightBlue',
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
    marginLeft:'20px'
};
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
  const token = getCookie('token')

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const header = new Headers({ "Access-Control-Allow-Origin": "*" });

      const response = await fetch("http://localhost:3000/getallusers",  { 
        headers:{
          "authorization":`Bearer ${token}`
        },
        // mode: 'no-cors',
       });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("res", result);
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const handleDelete=(ID)=>{
    axios.delete(`http://localhost:3000/deleteuser/${ID}`,{headers:{authorization:`Bearer ${token}`}})
    .then(res=>console.log(res))
    .catch((err)=>console.log(err))

    window.location.reload()
  }

  const remove = () => {
    alert('Logout successful');
  };

  return (
  <div style={{ marginTop: '20px' }}>
    <nav>
        <WelcomeUser/>
    </nav>
    <Link to={'/create'} style={buttonStyle}>Add</Link>
    {(data.length > 1) ?
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={tableHeaderStyle}>Action</th>
          <th style={tableHeaderStyle}>ID</th>
          <th style={tableHeaderStyle}>Name</th>
          <th style={tableHeaderStyle}>Password</th>
          <th style={tableHeaderStyle}>ImageURL</th>
          <th style={tableHeaderStyle}>VideoURL</th>
          <th style={tableHeaderStyle}>DocumentURL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item,index) => (
          <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={tableCellStyle}><Link to={'/update/${item._id}'}>Update</Link><button onClick={(e)=>handleDelete(item.ID) }>Delete</button></td>
            <td style={tableCellStyle}>{item.ID}</td>
            <td style={tableCellStyle}>{item.Name}</td>
            <td style={tableCellStyle}>{item.Password}</td>
            <td style={URLColumnStyle}><a target="_blank" href={item.ImageURL}>{item.ImageURL}</a></td>
            <td style={URLColumnStyle}><a target="_blank" href={item.VideoURL}>{item.VideoURL}</a></td>
            <td style={URLColumnStyle}><a target="_blank" href={item.DocumentURL}>{item.DocumentURL}</a></td>
          </tr>
        ))}
      </tbody>
    </table>:<div id='Body-content'>
          <div id="login">
          <h1>Please Login To Continue</h1>
          </div>
        </div>
        }
  </div>
  )
}

export default Connection;