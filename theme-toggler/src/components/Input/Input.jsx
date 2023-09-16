import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Input.css";

export function Input({ label, type, placeholder }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <label className={`label-${theme}`} htmlFor={`id-${label}`}>
        {label}
      </label>
      <input
        type={type}
        id={`id-${label}`}
        placeholder={placeholder}
        className={`input-${theme}`}
      />
    </div>
  );
}
