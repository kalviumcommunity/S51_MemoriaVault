import React, { useState } from 'react';

export function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =  name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

export function removeCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
}

function Login() {
  const [username, setUsername] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCookie("username",username,365);
    alert(`Welcome ${username}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid red', borderRadius: '5px', backgroundColor: 'lightBlue', animation: 'fadeIn 0.5s ease' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Username:
            <input type="text" value={username} onChange={handleUsername} style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>
          <button type="submit" style={{ marginLeft: '10px', padding: '5px 10px', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;