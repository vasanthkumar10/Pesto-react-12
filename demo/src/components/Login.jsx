import React, { useState } from "react";
import { USERNAME, PASSWORD } from "../utils/constant";

export function Login() {
  const [username, setUserName] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  return (
    <div>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          console.log(username, password);
          setIsLoggedIn(true);
        }}
      >
        login
      </button>
      {isLoggedIn !== undefined && isLoggedIn ? (
        <h2>Home page</h2>
      ) : (
        <p>invalid username or password</p>
      )}
    </div>
  );
}
