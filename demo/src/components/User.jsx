import React, { useState } from "react";

export function User() {
  const [data, setUserData] = useState({
    name: "Guest",
    age: "-1",
    place: "Pakistan",
  });

  const handleUserName = (e) => {
    setUserData({
      ...data,
      name: e.target.value,
    });
  };
  return (
    <div>
      <h1>User name: {data.name}</h1>
      <h1>User age: {data.age}</h1>
      <h1>User place: {data.place}</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={data.name}
          onChange={handleUserName}
        />
      </div>
    </div>
  );
}
