import React from "react";
import { useParams, Link } from "react-router-dom";

export function Profile() {
  const { id, user } = useParams();

  return (
    <div>
      <h1>Profile page from component</h1>
      <h2>ID - {id}</h2>
      <h3>User - {user}</h3>
      <Link to="/about">About page</Link>
    </div>
  );
}
