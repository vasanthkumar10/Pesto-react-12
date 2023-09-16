import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="profile/1/vasanth">vasanth</Link>
    </div>
  );
}
