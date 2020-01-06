import React, { useState } from "react";

import "./App.css";

/**
 * Use github api
 * Have form to type username
 * use username value to fetch to github api to fetch user data
 * display data
 */

function App() {
  const [username, setUsername] = useState("Username");

  const onSubmitHandle = e => {
    e.preventDefault();
    // send data dispatch fetch action
    return;
  };
  const onChangeHandle = e => {
    e.preventDefault();
    setUsername(e.target.value);
    return;
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetching Data</h1>

        <form className="App-form" onSubmit={onSubmitHandle}>
          <label>Search GitHub Users</label>
          <input
            className="App-input-text"
            type="text"
            placeholder="User Name"
            onChange={onChangeHandle}
          />
          <input className="App-button" type="submit" placeholder="Search" />
        </form>

        <div className="App-user-info-box">
          <h2>{username}</h2>
          <h3>User data goes here</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
