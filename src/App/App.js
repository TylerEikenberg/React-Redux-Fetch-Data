import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../Redux/Actions/userActions";

import "./App.css";

function App() {
  const [username, setUsername] = useState("Username");
  const dispatch = useDispatch();
  const fetchedData = useSelector(state => ({
    data: state.userData
  }));
  const fetchedDataError = useSelector(state => ({
    error: state.error
  }));

  const onSubmitHandle = e => {
    e.preventDefault();
    dispatch(userActions.fetchUserDataAsync(username));
    return;
  };
  const onChangeHandle = e => {
    e.preventDefault();
    setUsername(e.target.value);
    return;
  };

  useEffect(() => {}, [fetchedData]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Search</h2>

        <form className="App-form" onSubmit={onSubmitHandle}>
          <label className="App-form-label">Search GitHub Users</label>
          <input
            className="App-input-text"
            type="text"
            placeholder="User Name"
            onChange={onChangeHandle}
          />
          <input className="App-button" type="submit" placeholder="Search" />
        </form>

        <div className="App-user-info-box">
          <h2>
            {fetchedData.data.login ? fetchedData.data.login : "Search a user!"}
          </h2>
          <h3>{fetchedDataError.error ? "User does not exist" : null}</h3>
          <img
            className="App-user-pic"
            src={fetchedData.data.avatar_url}
            alt=""
          />
        </div>
      </header>
    </div>
  );
}

export default App;
