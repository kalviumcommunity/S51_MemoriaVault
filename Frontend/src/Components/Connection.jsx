import React, { useState, useEffect } from "react";

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

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const header = new Headers({ "Access-Control-Allow-Origin": "*" });

      const response = await fetch("http://localhost:3000/getallusers",  { 
        header: header, 
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

  return (
  <div style={{ marginTop: '20px' }}>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={tableHeaderStyle}>ID</th>
          <th style={tableHeaderStyle}>Name</th>
          <th style={tableHeaderStyle}>Password</th>
          <th style={tableHeaderStyle}>ImageURL</th>
          <th style={tableHeaderStyle}>VideoURL</th>
          <th style={tableHeaderStyle}>DocumentURL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.ID} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={tableCellStyle}>{item.ID}</td>
            <td style={tableCellStyle}>{item.Name}</td>
            <td style={tableCellStyle}>{item.Password}</td>
            <td style={URLColumnStyle}><a target="_blank" href={item.ImageURL}>{item.ImageURL}</a></td>
            <td style={URLColumnStyle}><a target="_blank" href={item.VideoURL}>{item.VideoURL}</a></td>
            <td style={URLColumnStyle}><a target="_blank" href={item.DocumentURL}>{item.DocumentURL}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Connection;