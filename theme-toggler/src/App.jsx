import React, { useState, createContext, useEffect } from "react";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import "./App.css";

export const ThemeContext = createContext();

const currentTheme = localStorage.getItem("theme");
const initialTheme = currentTheme ? currentTheme : "light";

function App() {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={`app-${theme}`}>
        <h1>App</h1>
        <Input label="Username: " placeholder={"name"} type="text" />
        <Button action={toggleTheme} text={"toggle"} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
