import React from "react";

export function BorderWrapper({ color, children }) {
  //   console.log(props);
  return (
    <div
      style={{
        border: `2px solid ${color}`,
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
}
