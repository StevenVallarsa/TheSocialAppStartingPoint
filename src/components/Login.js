import React, { useState, useRef } from 'react';

function Login({setUser}) {
  const [username, setUsername] = useState("");
  const [display, setDisplay] = useState("");
  const resetInputField = useRef(null);
  
  const users = ["Steve", "Steven", "Julie"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.includes(username)) {
      setUser(username);
      setDisplay("");
    } else {
      setDisplay("Sorry, that's not a valid username.");
      resetInputField.current.value = '';
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <p style={{color: "red", fontWeight: "bold"}}>{display}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input Username"
          onChange={(e) => setUsername(e.target.value)}
          ref={resetInputField}
        />
        <button type="submit">Submit</button>
        
      </form>
    </div>)
}

export default Login;
